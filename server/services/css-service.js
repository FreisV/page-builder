const fs = require("fs");
const ApiError = require("../exceptions/api-error");

class CssService {
  createCssStart(cssFile) {
    fs.appendFileSync(
      cssFile,
      `* {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
      }
      
      .block {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .wrapper {
        width: 90%;
        max-width: 960px;
        display: flex;
        // align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }

      .button {
        padding: 20px 60px;
        font-size: 19px;
        font-weight: 600;
        cursor: pointer;
      }

      .paragraph-wrapper {
        width:100%;
      }

      .two-columns-wrapper {
        width: 49%;
      }

      .two-columns-wrapper:first-child {
        margin-right: 2%;
      }

      .paragraph {
        font-size: 18px;
        padding-top: 8px;
        padding-bottom: 5px;
        white-space: pre-line;
      }

      .image-wrapper {
        display: flex;
      }

      .image{
        max-width: 100%;
      }

      .title {
        font-size: 55px;
        margin: 20px 0;
        font-weight: 600;
      }
      
      .subtitle {
        font-size: 24px;
        margin: 20px 0 30px 0;
        font-weight: 500;
      }

      @media (max-width: 768px) {
        .two-columns-wrapper {
          width: 100%;
        }
      
        .two-columns-wrapper:first-child {
          margin-right: 0;
        }

        .paragraph {
          font-size: 14px;
        }
      
        .title {
          font-size: 35px;
        }
        
        .subtitle {
          font-size: 18px;
        }
      }
      `
    );
  }

  writeStylesToCss(cssFile, styles) {
    switch (styles.type) {
      case "ButtonStyles":
        this.writeBlockStylesToCss(cssFile, styles);
        this.writeButtonStylesToCss(cssFile, styles);
        break;
      case "ParagraphStyles":
        this.writeBlockStylesToCss(cssFile, styles);
        this.writeParagraphStylesToCss(cssFile, styles);
        break;
      case "TwoParagraphsStyles":
        this.writeBlockStylesToCss(cssFile, styles);
        this.writeTwoParagraphsStylesToCss(cssFile, styles);
        break;
      case "TwoParagraphsStyles":
        this.writeBlockStylesToCss(cssFile, styles);
        this.writeTwoParagraphsStylesToCss(cssFile, styles);
        break;
      case "ImageStyles":
        this.writeBlockStylesToCss(cssFile, styles);
        this.writeImageStylesToCss(cssFile, styles);
        break;
      case "ParagraphImageStyles":
        this.writeBlockStylesToCss(cssFile, styles);
        this.writeParagraphImageStylesToCss(cssFile, styles);
        break;
      case "CoverStyles":
        this.writeBlockStylesToCss(cssFile, styles);
        this.writeCoverStylesToCss(cssFile, styles);
        break;
      default:
        throw ApiError.BadRequest("Неизвестный тип блока");
    }
  }

  writeBlockStylesToCss(cssFile, styles) {
    const {
      blockId,
      backgroundImage,
      backgroundColor,
      paddingTop,
      paddingBottom,
      minHeight,
    } = styles;
    const backgroundStyles = backgroundImage
      ? `
    background-image: url(./images/${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: ${minHeight};
  `
      : "";

    const cssContent = `.block-${blockId} {
    ${backgroundStyles}
    background-color: ${backgroundColor};
    padding-top: ${paddingTop};
    padding-bottom: ${paddingBottom};
  }\n\n`;

    fs.appendFileSync(cssFile, cssContent);
  }

  writeButtonStylesToCss(cssFile, styles) {
    fs.appendFileSync(
      cssFile,
      `.block-${styles.blockId}__button {
        color: ${styles.color};
        background-color: ${styles.buttonBackgroundColor};
        border: ${
          styles.buttonBorderWidth + " solid " + styles.buttonBorderColor
        };
      }

      `
    );
  }

  writeParagraphStylesToCss(cssFile, styles) {
    fs.appendFileSync(
      cssFile,
      `.block-${styles.blockId}__paragraph {
        color: ${styles.color};
        text-align: ${styles.textAlign};
      }

      `
    );
  }

  writeTwoParagraphsStylesToCss(cssFile, styles) {
    fs.appendFileSync(
      cssFile,
      `.block-${styles.blockId}__paragraph1 {
        color: ${styles.color};
        text-align: ${styles.textAlign};
      }

      .block-${styles.blockId}__paragraph2 {
        color: ${styles.color2};
        text-align: ${styles.textAlign2};
      }

      `
    );
  }

  writeImageStylesToCss(cssFile, styles) {
    fs.appendFileSync(
      cssFile,
      `.block-${styles.blockId}__image{
        max-height: ${styles.maxHeight}
      }

      `
    );
  }

  writeParagraphImageStylesToCss(cssFile, styles) {
    fs.appendFileSync(
      cssFile,
      `
      .block-${styles.blockId}__paragraph {
        color: ${styles.color};
        text-align: ${styles.textAlign};
      }

      .block-${styles.blockId}__image{
        max-height: ${styles.maxHeight}
      }

      `
    );
  }

  writeCoverStylesToCss(cssFile, styles) {
    fs.appendFileSync(
      cssFile,
      `
      .block-${styles.blockId}__title {
        color: ${styles.titleColor};
        text-align: ${styles.titleAlign};
      }

      .block-${styles.blockId}__subtitle {
        color: ${styles.subtitleColor};
        text-align: ${styles.subtitleAlign};
      }

      .block-${styles.blockId}__paragraph {
        color: ${styles.descriptionColor};
        text-align: ${styles.descriptionAlign};
      }

      `
    );
  }
}

module.exports = new CssService();
