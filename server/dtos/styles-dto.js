module.exports = class StylesDto {
  constructor(styles) {
    this.id = styles._id;
    this.projectId = styles.projectId;
    this.blockId = styles.blockId;
    this.backgroundColor = styles.backgroundColor;
    this.paddingTop = styles.paddingTop;
    this.paddingBottom = styles.paddingBottom;
    this.type = styles.type;
    if (styles.type === "ButtonStyles") {
      this.color = styles.color;
      this.buttonBackgroundColor = styles.buttonBackgroundColor;
      this.buttonBorderColor = styles.buttonBorderColor;
      this.buttonBorderWidth = styles.buttonBorderWidth;
    } else if (styles.type === "ParagraphStyles") {
      this.color = styles.color;
      this.textAlign = styles.textAlign;
    } else if (styles.type === "TwoParagraphsStyles") {
      this.color = styles.color;
      this.textAlign = styles.textAlign;
      this.color2 = styles.color2;
      this.textAlign2 = styles.textAlign2;
    } else if (styles.type === "ImageStyles") {
      this.maxHeight = styles.maxHeight;
    } else if (styles.type === "ParagraphImageStyles") {
      this.subtitleColor = styles.subtitleColor;
      this.subtitleAlign = styles.subtitleAlign;
      this.color = styles.color;
      this.textAlign = styles.textAlign;
      this.maxHeight = styles.maxHeight;
    } else if (styles.type === "CoverStyles") {
      this.minHeight = styles.minHeight;
      this.backgroundImage = styles.backgroundImage;
      this.titleColor = styles.titleColor;
      this.titleAlign = styles.titleAlign;
      this.subtitleColor = styles.subtitleColor;
      this.subtitleAlign = styles.subtitleAlign;
      this.descriptionColor = styles.descriptionColor;
      this.descriptionAlign = styles.descriptionAlign;
    } else if (styles.type === "TitleStyles") {
      this.titleColor = styles.titleColor;
      this.titleAlign = styles.titleAlign;
      this.subtitleColor = styles.subtitleColor;
      this.subtitleAlign = styles.subtitleAlign;
      this.descriptionColor = styles.descriptionColor;
      this.descriptionAlign = styles.descriptionAlign;
    }
  }
};
