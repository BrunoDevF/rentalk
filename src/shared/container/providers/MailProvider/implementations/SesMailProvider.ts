import { injectable } from "tsyringe";
import { IMailProvider } from "../interface/MailProvider";
import nodemailer, { Transporter } from "nodemailer";
import aws from "aws-sdk";

@injectable()
export class SesMailProvider implements IMailProvider {
  private client: Transporter;
  constructor() {
    this.client = nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: "2010-12-01",
        region: "us-east-1",
      }),
    });
  }

  async sendMail(to: string, subject: string, body: string): Promise<void> {
    await this.client.sendMail({
      to,
      from: "rentx <noreplay@rentx.com.br>",
      // adicionar entre "< >" um email validado na aws,
      subject,
      text: body,
      html: body,
    });
  }
}
