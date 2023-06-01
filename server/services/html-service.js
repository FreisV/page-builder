const fs = require("fs");
const { encode } = require("html-entities");
const ApiError = require("../exceptions/api-error");

class HtmlService {
  createHtmlStart(htmlFile, title) {
    fs.appendFileSync(
      htmlFile,
      `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <title>${title}</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>`
    );
  }

  createHtmlEnd(htmlFile) {
    fs.appendFileSync(
      htmlFile,
      `
      </body>
      </html>`
    );
  }

  writeBlockToHtml(htmlFile, block) {
    switch (block.type) {
      case "ButtonBlock":
        this.writeButtonBlockToHtml(htmlFile, block);
        break;
      case "ParagraphBlock":
        this.writeParagraphBlockToHtml(htmlFile, block);
        break;
      case "TwoParagraphsBlock":
        this.writeTwoParagraphsBlockToHtml(htmlFile, block);
        break;
      case "ImageBlock":
        this.writeImageBlockToHtml(htmlFile, block);
        break;
      case "ParagraphImageBlock":
        this.writeParagraphImageBlockToHtml(htmlFile, block);
        break;
      default:
        throw ApiError.BadRequest("Неизвестный тип блока");
    }
  }

  writeButtonBlockToHtml(htmlFile, block) {
    fs.appendFileSync(
      htmlFile,
      `
    <div class="block block-${block.id}">
      <div class="wrapper">
        <a class="link" href="${block.link}">
          <button class="button block-${block.id}__button">
            ${encode(block.text)}
          </button>
        </a>
       </div>
    </div>`
    );
  }

  writeParagraphBlockToHtml(htmlFile, block) {
    fs.appendFileSync(
      htmlFile,
      `
    <div class="block block-${block.id}">
      <div class="wrapper">
        <div class="paragraph-wrapper">
          <p class="paragraph block-${block.id}__paragraph">
            ${encode(block.text)}
          </p>
        </div>
      </div>
    </div>`
    );
  }

  writeTwoParagraphsBlockToHtml(htmlFile, block) {
    fs.appendFileSync(
      htmlFile,
      `
      <div class="block block-${block.id}">
        <div class="wrapper">
          <div class="two-columns-wrapper">
            <p class="paragraph block-${block.id}__paragraph1">
              ${encode(block.text)}
            </p>
          </div>
          <div class="two-columns-wrapper">
            <p class="paragraph block-${block.id}__paragraph2">
              ${encode(block.text2)}
            </p>
          </div>
        </div>
      </div>`
    );
  }

  writeImageBlockToHtml(htmlFile, block) {
    fs.appendFileSync(
      htmlFile,
      `
      <div class="block block-${block.id}">
        <div class="wrapper">
          <img
            class="image block-${block.id}__image"
            src="images\\${block.filename}"
            alt=""
          />
        </div>
      </div>`
    );
  }

  writeParagraphImageBlockToHtml(htmlFile, block) {
    fs.appendFileSync(
      htmlFile,
      `
      <div class="block block-${block.id}">
        <div class="wrapper">
          <div class="two-columns-wrapper">
            <p class="paragraph block-${block.id}__paragraph">
              ${encode(block.text)}
            </p>
          </div>
          <div class="two-columns-wrapper image-wrapper">
            <img
              class="image block-${block.id}__image"
              src="images\\${block.filename}"
              alt=""
            />
          </div>
        </div>
      </div>`
    );
  }
}

module.exports = new HtmlService();
