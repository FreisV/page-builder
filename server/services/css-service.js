const fs = require("fs");

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
        align-items: center;
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

      .two-paragraphs-wrapper {
        width: 49%;
      }

      .two-paragraphs-wrapper:first-child {
        margin-right: 2%;
      }

      .paragraph {
        font-size: 18px;
        padding-top: 8px;
        padding-bottom: 5px;
      }

      @media (max-width: 768px) {
        .two-paragraphs-wrapper {
          width: 100%;
        }
      
        .two-paragraphs-wrapper:first-child {
          margin-right: 0;
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
      default:
        throw ApiError.BadRequest("Неизвестный тип блока");
    }
  }

  writeBlockStylesToCss(cssFile, styles) {
    fs.appendFileSync(
      cssFile,
      `.block-${styles.blockId} {
        background-color: ${styles.backgroundColor};
        padding-top: ${styles.paddingTop};
        padding-bottom: ${styles.paddingBottom};
      }

      `
    );
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
}

module.exports = new CssService();
