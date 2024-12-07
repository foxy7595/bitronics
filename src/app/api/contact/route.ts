import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const transporter = nodemailer.createTransport({
    host: "mail.frilcart.com", // Replace with your actual mail server
    port: 465, // Secure port (SSL)
    secure: true, // Use SSL
    auth: {
      user: "no-reply@frilcart.com", // Your email address
      pass: "5%xw([SkgB0g", // Your email password
    },
  });

  console.log(body);

  const requireMapping = {
    system: "システム開発について",
    advanced: "先端技術開発について",
    quality: "ソフトウェア品質保証について",
    general: "業務全般・その他",
    recruit: "採用について",
  };

  const template = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせ内容</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            color: #0078d7;
            font-size: 24px;
            margin: 0;
        }
        .content {
            margin-bottom: 20px;
        }
        .content p {
            margin: 5px 0;
        }
        .content strong {
            display: inline-block;
            width: 150px;
            color: #555;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #888;
        }
        .footer a {
            color: #0078d7;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>お問い合わせフォーム</h1>
        </div>
        <div class="content">
            <p><strong>お問い合わせ内容:</strong> ${
              requireMapping[body.require as keyof typeof requireMapping]
            }</p>
            <p><strong>お問い合わせ詳細:</strong> ${body.contact}</p>
            <p><strong>会社名:</strong> ${body.company}</p>
            ${
              (body.firstName || body.lastName) &&
              `<p><strong>お名前:</strong> ${body.firstName} ${body.lastName}</p>`
            }
            <p><strong>メールアドレス:</strong> ${body.email}</p>
            <p><strong>電話番号:</strong> ${body.phone}</p>
        </div>
        <div class="footer">
            <p>このメールは株式会社 Bitronics から自動送信されています。</p>
            <p>個人情報保護方針については <a href="https://bitronics.vercel.app/privacy" target="_blank">こちら</a> をご覧ください。</p>
        </div>
    </div>
</body>
</html>
`;

  // Define the email options
  const mailOptions = {
    from: "no-reply@frilcart.com", // Sender address
    to: "admin@frilcart.com", // Recipient address
    subject: "お問い合わせフォーム", // Subject line
    text: "email body", // Plain text body
    html: template, // HTML body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
  return Response.json({ success: true });
}
