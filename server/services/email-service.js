const nodemailer = require("nodemailer");
class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Активация аккаунта на ${process.env.API_URL}`,
      text: "",
      html: `
        <div>
          <h1>Для активации аккаунта перейдите по ссылке:</h1>
          <a href="${link}">${link}</a>
          <p>Если вы не регистрировались на ${process.env.API_URL} проигнорируйте это сообщение</p>
        </div>
      `,
    });
  }
}

module.exports = new EmailService();
