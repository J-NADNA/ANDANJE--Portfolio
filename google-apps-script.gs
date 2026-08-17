/**
 * James Andanje Portfolio Contact Receiver
 * Google Sheet: 1YUFWIqYA596rCeLNDF3QxJHmx4_n9xbwqINv2FH8ROo
 * Notification email: okelloandanje@gmail.com
 *
 * Deploy this script as a Web App:
 *   Execute as: Me
 *   Who has access: Anyone
 * Then copy the /exec URL into contact-config.js.
 */

const CONFIG = Object.freeze({
  spreadsheetId: '1YUFWIqYA596rCeLNDF3QxJHmx4_n9xbwqINv2FH8ROo',
  sheetName: 'Portfolio Contacts',
  notificationEmail: 'okelloandanje@gmail.com',
  portfolioUrl: 'https://andanje.netlify.app/'
});

function doGet() {
  return jsonResponse_({
    ok: true,
    service: 'James Andanje Portfolio Contact Receiver'
  });
}

function doPost(e) {
  const params = (e && e.parameter) ? e.parameter : {};

  // Honeypot: silently accept bots without saving or emailing.
  if (clean_(params['bot-field'], 200) || clean_(params.website, 200)) {
    return jsonResponse_({ ok: true });
  }

  try {
    const name = safeCell_(clean_(params.name, 120));
    const email = clean_(params.email, 180).toLowerCase();
    const company = safeCell_(clean_(params.company, 180));
    const message = safeCell_(clean_(params.message, 5000));
    const source = safeCell_(clean_(params.source, 180) || CONFIG.portfolioUrl);

    if (!name || !email || !message) {
      throw new Error('Name, email and message are required.');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Invalid email address.');
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const spreadsheet = SpreadsheetApp.openById(CONFIG.spreadsheetId);
      let sheet = spreadsheet.getSheetByName(CONFIG.sheetName);

      if (!sheet) {
        sheet = spreadsheet.insertSheet(CONFIG.sheetName);
      }

      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          'Timestamp',
          'Name',
          'Email',
          'Company / Organization',
          'Message',
          'Source'
        ]);
        sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
        sheet.setFrozenRows(1);
      }

      sheet.appendRow([
        new Date(),
        name,
        safeCell_(email),
        company,
        message,
        source
      ]);
      SpreadsheetApp.flush();
    } finally {
      lock.releaseLock();
    }

    sendNotification_({ name, email, company, message, source });

    return jsonResponse_({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ ok: false, error: String(error && error.message ? error.message : error) });
  }
}

function sendNotification_(entry) {
  const companyLabel = entry.company ? ` | ${entry.company}` : '';
  const subject = `New portfolio enquiry — ${entry.name}${companyLabel}`;
  const plainBody = [
    'You received a new message from your portfolio website.',
    '',
    `Name: ${entry.name}`,
    `Email: ${entry.email}`,
    `Company / Organization: ${entry.company || 'Not provided'}`,
    `Source: ${entry.source}`,
    '',
    'Message:',
    entry.message,
    '',
    `Portfolio: ${CONFIG.portfolioUrl}`
  ].join('\n');

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#102331;line-height:1.6">
      <div style="padding:22px 24px;background:#071827;color:white;border-radius:14px 14px 0 0">
        <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#c3a28e">Portfolio enquiry</div>
        <h2 style="margin:6px 0 0;font-size:24px">${escapeHtml_(entry.name)}</h2>
      </div>
      <div style="padding:24px;border:1px solid #dfe5e8;border-top:0;border-radius:0 0 14px 14px">
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml_(entry.email)}">${escapeHtml_(entry.email)}</a></p>
        <p><strong>Company / Organization:</strong> ${escapeHtml_(entry.company || 'Not provided')}</p>
        <p><strong>Source:</strong> ${escapeHtml_(entry.source)}</p>
        <hr style="border:0;border-top:1px solid #e5eaed;margin:22px 0">
        <p style="white-space:pre-wrap">${escapeHtml_(entry.message)}</p>
      </div>
    </div>`;

  MailApp.sendEmail({
    to: CONFIG.notificationEmail,
    replyTo: entry.email,
    name: 'James Andanje Portfolio',
    subject,
    body: plainBody,
    htmlBody
  });
}

function clean_(value, maxLength) {
  return String(value || '').trim().replace(/\u0000/g, '').slice(0, maxLength);
}

// Prevent spreadsheet formula injection from public form input.
function safeCell_(value) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

function escapeHtml_(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
