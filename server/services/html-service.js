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
      case "CoverBlock":
        this.writeCoverBlockToHtml(htmlFile, block);
        break;
      case "TitleBlock":
        this.writeTitleBlockToHtml(htmlFile, block);
        break;
      case "SocialNetworksBlock":
        this.writeSocialNetworksBlockToHtml(htmlFile, block);
        break;
      case "TeamBlock":
        this.writeTeamBlockToHtml(htmlFile, block);
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
        <a class="link" href="${block.link}" target="_blank">
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
        <div class="one-column-wrapper">
          <p class="paragraph block-${block.id}__paragraph">${encode(
        block.text
      )}</p>
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
            <p class="paragraph block-${block.id}__paragraph1">${encode(
        block.text
      )}</p>
          </div>
          <div class="two-columns-wrapper">
            <p class="paragraph block-${block.id}__paragraph2">${encode(
        block.text2
      )}</p>
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
            <h3 class="subtitle block-${block.id}__subtitle">
              ${encode(block.subtitle)}
            </h3>
            <p class="paragraph block-${block.id}__paragraph">${encode(
        block.text
      )}</p>
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

  writeCoverBlockToHtml(htmlFile, block) {
    fs.appendFileSync(
      htmlFile,
      `
      <div class="block block-${block.id}">
        <div class="wrapper">
          <div class="one-column-wrapper">
            <h1 class="cover_title block-${block.id}__cover_title">
              ${encode(block.title)}
            </h1>
            <h3 class="cover_subtitle block-${block.id}__cover_subtitle">
              ${encode(block.subtitle)}
            </h3>
            <p class="paragraph block-${block.id}__paragraph">${encode(
        block.description
      )}</p>
        </div>
       </div>
      </div>`
    );
  }

  writeTitleBlockToHtml(htmlFile, block) {
    fs.appendFileSync(
      htmlFile,
      `
      <div class="block block-${block.id}">
        <div class="wrapper">
          <div class="one-column-wrapper">
            <h1 class="title block-${block.id}__title">
              ${encode(block.title)}
            </h1>
            <h3 class="subtitle block-${block.id}__subtitle">
              ${encode(block.subtitle)}
            </h3>
            <p class="paragraph block-${block.id}__paragraph">${encode(
        block.description
      )}</p>
        </div>
       </div>
      </div>`
    );
  }

  writeSocialNetworksBlockToHtml(htmlFile, block) {
    const { id, facebookLink, vkLink, instagramLink, telegramLink } = block;

    const facebookBlock = facebookLink
      ? `
      <a class="social-network facebook" href=${facebookLink} target="_blank">
        <svg
          class="social-network_icon"
          width="28px"
          height="28px"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.3077 14.1204C46.4333 11.1506 50.8581 10.1412 55.0516 10.0244C59.4777 9.98539 63.9037 10.0049 68.3285 10.0049C68.348 14.683 68.348 19.3416 68.3285 24.0197C65.4757 24.0197 62.6021 24.0197 59.7492 24.0197C57.9435 23.9028 56.0805 25.2811 55.7505 27.0868C55.7116 30.2125 55.7311 33.3369 55.7311 36.4625C59.9233 36.482 64.1168 36.4625 68.3091 36.482C67.9986 41.0042 67.436 45.5082 66.7761 49.9732C63.0684 50.0122 59.3608 49.9732 55.6531 49.9927C55.6142 63.3281 55.6726 76.6439 55.6336 89.9805C50.1203 90 44.6276 89.961 39.1142 90C39.0168 76.6646 39.1142 63.3293 39.0558 49.9927C36.377 49.9732 33.6788 50.0122 31 49.9732C31.0195 45.4887 31 41.0054 31 36.5404C33.6788 36.5015 36.377 36.5404 39.0558 36.521C39.1337 32.1728 38.9778 27.8052 39.1337 23.4571C39.4259 19.9833 40.7263 16.5082 43.3077 14.1204Z"
            fill="#fff"
          ></path>
        </svg>
      </a>
      `
      : "";
    const instagramBlock = instagramLink
      ? `
      <a class="social-network instagram" href=${instagramLink} target="_blank">
        <svg
          class="social-network_icon"
          width="28px"
          height="28px"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66.9644 10H33.04C20.3227 10 10 20.3227 10 32.9573V67.1167C10 79.6816 20.3227 90 33.04 90H66.96C79.6816 90 90 79.6816 90 67.0384V32.9616C90.0044 20.3227 79.6816 10 66.9644 10ZM29.2 50.0022C29.2 38.5083 38.5257 29.2 50.0022 29.2C61.4786 29.2 70.8 38.5083 70.8 50.0022C70.8 61.4961 61.4743 70.8 50.0022 70.8C38.5257 70.8 29.2 61.4961 29.2 50.0022ZM72.8854 31.2027C70.2079 31.2027 68.0789 29.0824 68.0789 26.4049C68.0789 23.7273 70.2035 21.6027 72.8854 21.6027C75.5586 21.6027 77.6833 23.7273 77.6833 26.4049C77.6833 29.0824 75.5586 31.2027 72.8854 31.2027Z"
            fill="#fff"
          ></path>
          <path
            d="M50.0022 36.4011C42.4659 36.4011 36.4011 42.4876 36.4011 50.0022C36.4011 57.5124 42.4659 63.6033 50.0022 63.6033C57.5429 63.6033 63.6033 57.5124 63.6033 50.0022C63.6033 42.492 57.4514 36.4011 50.0022 36.4011Z"
            fill="#fff"
          ></path>
        </svg>
      </a>
    `
      : "";
    const vkBlock = block.vkLink
      ? `
      <a class="social-network vk" href=${vkLink} target="_blank">
        <svg
          class="social-network_icon"
          width="28px"
          height="28px"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53.7512 76.4147C25.0516 76.4147 8.68207 56.7395 8 24H22.376C22.8482 48.03 33.4463 58.2086 41.8411 60.3073V24H55.3782V44.7245C63.668 43.8326 72.3765 34.3885 75.3146 24H88.8514C86.5954 36.802 77.1513 46.2461 70.4355 50.1287C77.1513 53.2767 87.9076 61.5141 92 76.4147H77.0988C73.8983 66.446 65.9241 58.7333 55.3782 57.684V76.4147H53.7512Z"
            fill="#fff"
          ></path>
        </svg>
      </a>
    `
      : "";

    const telegramBlock = block.telegramLink
      ? `
      <a class="social-network telegram" href=${telegramLink} target="_blank">
        <svg
          class="social-network_icon"
          width="28px"
          height="28px"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M83.1797 17.5886C83.1797 17.5886 90.5802 14.7028 89.9635 21.711C89.758 24.5968 87.9079 34.6968 86.4688 45.6214L81.5351 77.9827C81.5351 77.9827 81.124 82.7235 77.4237 83.548C73.7233 84.3724 68.173 80.6623 67.145 79.8378C66.3227 79.2195 51.7273 69.9438 46.5878 65.4092C45.1488 64.1724 43.5042 61.6989 46.7934 58.8132L68.3785 38.201C70.8454 35.7274 73.3122 29.956 63.0336 36.9642L34.2535 56.5459C34.2535 56.5459 30.9644 58.6071 24.7973 56.752L11.4351 52.6295C11.4351 52.6295 6.50135 49.5377 14.9298 46.4457C35.4871 36.7579 60.7724 26.864 83.1797 17.5886Z"
            fill="#fff"
          ></path>
        </svg>
      </a>
    `
      : "";

    const htmlContent = `
      <div class="block block-${block.id}">
        <div class="wrapper">
        <div class="social-networks">
        ${facebookBlock}
        ${instagramBlock}
        ${vkBlock}
        ${telegramBlock}
      </div>
       </div>
      </div>`;

    fs.appendFileSync(htmlFile, htmlContent);
  }

  writeTeamBlockToHtml(htmlFile, block) {
    const {
      filename,
      name,
      info,
      filename2,
      name2,
      info2,
      filename3,
      name3,
      info3,
    } = block;

    const firstCard =
      name || info
        ? `
        <div class="team-card">
          <img
            src="images\\${filename}"
            alt=""
            class="team-card__image block-${block.id}__team-card__image"
          />
          <h3 class="subtitle block-${block.id}__subtitle">${name}</h3>
          <p class="paragraph block-${block.id}__paragraph">${info}</p>
        </div>
      `
        : "";
    const secondCard =
      name2 || info2
        ? `
        <div class="team-card">
          <img
            src="images\\${filename2}"
            alt=""
            class="team-card__image block-${block.id}__team-card__image"
          />
          <h3 class="subtitle block-${block.id}__subtitle">${name2}</h3>
          <p class="paragraph block-${block.id}__paragraph">${info2}</p>
        </div>
      `
        : "";
    const thirdCard =
      name3 || info3
        ? `
        <div class="team-card">
          <img
            src="images\\${filename3}"
            alt=""
            class="team-card__image block-${block.id}__team-card__image"
          />
          <h3 class="subtitle block-${block.id}__subtitle">${name3}</h3>
          <p class="paragraph block-${block.id}__paragraph">${info3}</p>
        </div>
      `
        : "";

    const htmlContent = `
      <div class="block block-${block.id}">
        <div class="wrapper">
          <div class="cards">
            ${firstCard}
            ${secondCard}
            ${thirdCard}
          </div>
        </div>
      </div>`;

    fs.appendFileSync(htmlFile, htmlContent);
  }
}

module.exports = new HtmlService();
