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
    }
    if (styles.type === "ParagraphStyles") {
      this.color = styles.color;
      this.textAlign = styles.textAlign;
    }
    if (styles.type === "TwoParagraphsStyles") {
      this.color = styles.color;
      this.textAlign = styles.textAlign;
      this.color2 = styles.color2;
      this.textAlign2 = styles.textAlign2;
    }
  }
};
