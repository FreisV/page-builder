const ApiError = require("../exceptions/api-error");
const ButtonBlockModel = require("../models/blocks/button-block-model");
const ParagraphBlockModel = require("../models/blocks/paragraph-block-model");
const BlockModel = require("../models/blocks/block-model");
const BlockDto = require("../dtos/block-dto");

class BlockService {
  async create(data) {
    let block;

    switch (data.type) {
      case "ButtonBlock":
        block = await ButtonBlockModel.create(data);
        break;
      case "ParagraphBlock":
        block = await ParagraphBlockModel.create(data);
        break;
      default:
        throw ApiError.BadRequest("Неизвестный тип блока");
    }

    await await BlockModel.updateMany(
      {
        projectId: data.projectId,
        _id: { $ne: block.id },
        blockNumber: { $gte: data.blockNumber },
      },
      { $inc: { blockNumber: 1 } }
    );

    const blockDto = new BlockDto(block);

    return blockDto;
  }

  async update(data) {
    const block = await BlockModel.findById(data.id);

    if (!block) {
      throw ApiError.BadRequest("Такого блока не существует");
    }

    await block.updateOne({ $set: data });

    const updatedBlock = await BlockModel.findById(data.id);

    const blockDto = new BlockDto(updatedBlock);

    return blockDto;
  }

  async getBlocks(projectId) {
    const blocks = await BlockModel.find({ projectId }).sort({
      blockNumber: "asc",
    });

    const blocksDtos = blocks.map((block) => new BlockDto(block));

    return blocksDtos;
  }

  async getBlock(blockId) {
    const block = await BlockModel.findById(blockId);

    if (!block) {
      throw ApiError.BadRequest("Такого блока не существует");
    }

    const blockDto = new BlockDto(block);

    return blockDto;
  }

  async delete(projectId, blockId) {
    const block = await BlockModel.findById(blockId);

    if (!block) {
      throw ApiError.BadRequest("Такого блока не существует");
    }
    const blockNumber = block.blockNumber;

    const deletedBlock = await block.deleteOne();

    await BlockModel.updateMany(
      {
        projectId: projectId,
        blockNumber: { $gt: blockNumber },
      },
      { $inc: { blockNumber: -1 } }
    );

    return deletedBlock;
  }
}

module.exports = new BlockService();
