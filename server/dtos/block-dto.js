module.exports = class BlockDto {
  constructor(block) {
    this.id = block._id;
    this.blockNumber = block.blockNumber;
    this.type = block.type;
    if (block.type === "ButtonBlock") {
      this.text = block.text;
      this.link = block.link;
      this.download = block.download;
    } else if (block.type === "ParagraphBlock") {
      this.text = block.text;
    } else if (block.type === "TwoParagraphsBlock") {
      this.text = block.text;
      this.text2 = block.text2;
    } else if (block.type === "ImageBlock") {
      this.filename = block.filename;
    } else if (block.type === "ParagraphImageBlock") {
      this.text = block.text;
      this.filename = block.filename;
    } else if (block.type === "CoverBlock") {
      this.title = block.title;
      this.subtitle = block.subtitle;
      this.description = block.description;
    } else if (block.type === "TitleBlock") {
      this.title = block.title;
      this.subtitle = block.subtitle;
      this.description = block.description;
    }
  }
};
