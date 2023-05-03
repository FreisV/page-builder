const ApiError = require("../exceptions/api-error");
const StylesModel = require("../models/styles/styles-model");
const StylesDto = require("../dtos/styles-dto");

class StylesService {
  async get(projectId) {
    const styles = await StylesModel.find({ projectId });

    const stylesDtos = styles.map((style) => new StylesDto(style));

    return stylesDtos;
  }

  async update(data) {
    const styles = await StylesModel.findById(data.id);

    if (!styles) {
      throw ApiError.BadRequest("Такого стиля не существует");
    }

    await styles.updateOne({ $set: data });

    const updatedStyles = await StylesModel.findById(data.id);

    const stylesDto = new StylesDto(updatedStyles);

    return stylesDto;
  }
}

module.exports = new StylesService();
