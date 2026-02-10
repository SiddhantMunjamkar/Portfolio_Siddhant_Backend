import { EmailParams } from "../../config/email.type";

export function generateEmailHTML({ name, email, body }: EmailParams): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>New Contact Message</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background-color: #f5f5f4;
      color: #292524;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .email-wrapper {
      width: 100%;
      background-color: #f5f5f4;
      padding: 40px 20px;
    }
    
    .email-container {
      max-width: 650px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    }
    
    .header {
      background: linear-gradient(135deg, #292524 0%, #44403c 50%, #57534e 100%);
      padding: 50px 40px;
      text-align: center;
    }
    
    .header-title {
      margin: 0;
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 36px;
      font-weight: 400;
      color: #fafaf9;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }
    
    .header-divider {
      width: 80px;
      height: 2px;
      background-color: #a8a29e;
      margin: 24px auto 0;
      border-radius: 2px;
    }
    
    .content {
      padding: 50px 40px;
    }
    
    .greeting {
      margin: 0 0 32px;
      font-size: 17px;
      line-height: 1.6;
      color: #44403c;
    }
    
    .info-card {
      background-color: #fafaf9;
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 32px;
      border: 1px solid #e7e5e4;
    }
    
    .info-field {
      margin-bottom: 24px;
    }
    
    .info-field:last-child {
      margin-bottom: 0;
    }
    
    .info-label {
      margin: 0 0 8px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #78716c;
    }
    
    .info-value {
      margin: 0;
      font-size: 19px;
      font-weight: 600;
      color: #292524;
      font-family: 'Playfair Display', Georgia, serif;
      line-height: 1.4;
    }
    
    .info-email {
      margin: 0;
      font-size: 16px;
      color: #44403c;
      line-height: 1.5;
    }
    
    .info-email a {
      color: #57534e;
      text-decoration: none;
    }
    
    .message-section {
      margin-bottom: 36px;
    }
    
    .message-label {
      margin: 0 0 16px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #78716c;
    }
    
    .message-content {
      background-color: #fafaf9;
      border-left: 4px solid #a8a29e;
      border-radius: 8px;
      padding: 28px;
      margin: 0;
      border: 1px solid #e7e5e4;
      border-left: 4px solid #a8a29e;
    }
    
    .message-text {
      margin: 0;
      font-size: 16px;
      line-height: 1.8;
      color: #292524;
      white-space: pre-wrap;
      word-wrap: break-word;
      max-width: 100%;
    }
    
    .reply-button {
      display: inline-block;
      padding: 18px 48px;
      background-color: #292524;
      color: #fafaf9 !important;
      text-decoration: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(41, 37, 36, 0.2);
      transition: all 0.3s ease;
    }
    
    .footer {
      background-color: #fafaf9;
      padding: 32px 40px;
      border-top: 1px solid #e7e5e4;
      text-align: center;
    }
    
    .footer-text {
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
      color: #78716c;
    }
    
    .footer-date {
      margin: 12px 0 0;
      font-size: 12px;
      color: #a8a29e;
    }
    
    .copyright {
      max-width: 650px;
      margin: 24px auto 0;
      padding: 0 20px;
      text-align: center;
    }
    
    .copyright-text {
      margin: 0;
      font-size: 13px;
      line-height: 1.5;
      color: #a8a29e;
    }
    
    /* Mobile Responsive Styles */
    @media only screen and (max-width: 600px) {
      .email-wrapper {
        padding: 20px 10px !important;
      }
      
      .email-container {
        border-radius: 12px !important;
      }
      
      .header {
        padding: 36px 24px !important;
      }
      
      .header-title {
        font-size: 28px !important;
      }
      
      .header-divider {
        width: 60px !important;
        margin: 20px auto 0 !important;
      }
      
      .content {
        padding: 32px 24px !important;
      }
      
      .greeting {
        font-size: 15px !important;
        margin-bottom: 24px !important;
      }
      
      .info-card {
        padding: 24px !important;
        margin-bottom: 24px !important;
      }
      
      .info-value {
        font-size: 17px !important;
      }
      
      .info-email {
        font-size: 14px !important;
        word-break: break-all;
      }
      
      .message-content {
        padding: 20px !important;
      }
      
      .message-text {
        font-size: 15px !important;
        line-height: 1.7 !important;
      }
      
      .reply-button {
        padding: 16px 36px !important;
        font-size: 15px !important;
        width: 100%;
        box-sizing: border-box;
      }
      
      .footer {
        padding: 24px 20px !important;
      }
      
      .footer-text {
        font-size: 13px !important;
      }
      
      .copyright {
        padding: 0 15px !important;
        margin-top: 16px !important;
      }
    }
    
    @media only screen and (max-width: 400px) {
      .header-title {
        font-size: 24px !important;
      }
      
      .info-value {
        font-size: 16px !important;
      }
      
      .message-text {
        font-size: 14px !important;
      }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      
      <!-- Header -->
      <div class="header">
        <h1 class="header-title">New Contact Message</h1>
        <div class="header-divider"></div>
      </div>

      <!-- Content -->
      <div class="content">
        
        <!-- Greeting -->
        <p class="greeting">
          You have received a new message from your portfolio contact form.
        </p>

        <!-- Sender Info Card -->
        <div class="info-card">
          <!-- Name Field -->
          <div class="info-field">
            <p class="info-label">From</p>
            <p class="info-value">${name}</p>
          </div>

          <!-- Email Field -->
          <div class="info-field">
            <p class="info-label">Email Address</p>
            <p class="info-email">
              <a href="mailto:${email}">${email}</a>
            </p>
          </div>
        </div>

        <!-- Message Content -->
        <div class="message-section">
          <p class="message-label">Message</p>
          <div class="message-content">
            <p class="message-text">${body}</p>
          </div>
        </div>

        <!-- Reply Button -->
        <table role="presentation" style="width: 100%; margin-top: 40px;">
          <tr>
            <td style="text-align: center;">
              <a href="mailto:${email}" class="reply-button">
                Reply to ${name.split(" ")[0]}
              </a>
            </td>
          </tr>
        </table>

      </div>

      <!-- Footer -->
      <div class="footer">
        <p class="footer-text">
          This message was sent from the contact form on your portfolio website.
        </p>
        <p class="footer-date">
          ${new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

    </div>

    <!-- Copyright -->
    <div class="copyright">
      <p class="copyright-text">
        © ${new Date().getFullYear()} Your Portfolio. All rights reserved.
      </p>
    </div>

  </div>
</body>
</html>
  `.trim();
}

// Example usage:
// const emailHTML = generateEmailHTML({
//   name: "John Doe",
//   email: "john.doe@example.com",
//   body: "Hello! I'd love to discuss a potential project with you."
// });
