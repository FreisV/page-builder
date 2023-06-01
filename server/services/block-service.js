const ApiError = require("../exceptions/api-error");
const ButtonBlockModel = require("../models/blocks/button-block-model");
const ParagraphBlockModel = require("../models/blocks/paragraph-block-model");
const BlockModel = require("../models/blocks/block-model");
const BlockDto = require("../dtos/block-dto");
const ButtonStylesModel = require("../models/styles/button-styles-model");
const ParagraphStylesModel = require("../models/styles/paragraph-styles-model");
const StylesModel = require("../models/styles/styles-model");
const TwoParagraphsBlockModel = require("../models/blocks/two-paragraphs-model");
const TwoParagraphsStylesModel = require("../models/styles/two-paragraphs-styles-model");
const ImageBlockModel = require("../models/blocks/image-block-model");
const ImageStylesModel = require("../models/styles/image-styles-model");
const ParagraphImageBlockModel = require("../models/blocks/paragraph-image-block-model");
const ParagraphImageStylesModel = require("../models/styles/paragraph-image-styles-model");

class BlockService {
  async create(data) {
    let block;

    switch (data.type) {
      case "ButtonBlock":
        block = await ButtonBlockModel.create(data);
        await ButtonStylesModel.create({
          blockId: block._id,
          projectId: block.projectId,
        });
        break;
      case "ParagraphBlock":
        block = await ParagraphBlockModel.create(data);
        await ParagraphStylesModel.create({
          blockId: block._id,
          projectId: block.projectId,
        });
        break;
      case "TwoParagraphsBlock":
        block = await TwoParagraphsBlockModel.create(data);
        await TwoParagraphsStylesModel.create({
          blockId: block._id,
          projectId: block.projectId,
        });
        break;
      case "ImageBlock":
        block = await ImageBlockModel.create(data);
        await ImageStylesModel.create({
          blockId: block._id,
          projectId: block.projectId,
        });
        break;
      case "ParagraphImageBlock":
        block = await ParagraphImageBlockModel.create(data);
        await ParagraphImageStylesModel.create({
          blockId: block._id,
          projectId: block.projectId,
        });
        break;
      default:
        throw ApiError.BadRequest("Неизвестный тип блока");
    }

    await BlockModel.updateMany(
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

    await StylesModel.deleteOne({ blockId });

    await BlockModel.updateMany(
      {
        projectId: projectId,
        blockNumber: { $gt: blockNumber },
      },
      { $inc: { blockNumber: -1 } }
    );

    const blockDto = new BlockDto(deletedBlock);

    return blockDto;
  }
}

module.exports = new BlockService();
