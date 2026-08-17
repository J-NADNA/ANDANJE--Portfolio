# Connect the portfolio form to Google Sheets + email

The portfolio is already prepared for this Google Sheet:

- Spreadsheet ID: `1YUFWIqYA596rCeLNDF3QxJHmx4_n9xbwqINv2FH8ROo`
- Notification email: `okelloandanje@gmail.com`
- Destination tab created automatically by the script: `Portfolio Contacts`

You only need to deploy the included Google Apps Script once and paste its Web App URL into `contact-config.js`.

## Step 1 — Open the Google Sheet

Open your Google Sheet, then choose **Extensions → Apps Script**.

## Step 2 — Paste the server code

Delete the starter code in `Code.gs` and paste the full contents of the included file:

`google-apps-script.gs`

Click **Save**.

## Step 3 — Deploy as a Web App

In Apps Script:

1. Click **Deploy → New deployment**.
2. Click the deployment type selector and choose **Web app**.
3. Description: `James portfolio contact form`.
4. **Execute as:** Me.
5. **Who has access:** Anyone.
6. Click **Deploy**.
7. Approve the requested Google permissions. The script needs access to the Sheet and permission to send the notification email.
8. Copy the **Web app URL**. Use the production URL ending in `/exec`, not the `/dev` testing URL.

## Step 4 — Connect the website

Open `contact-config.js` and replace:

```js
googleAppsScriptUrl: 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_EXEC_URL_HERE'
```

with your Web App URL, for example:

```js
googleAppsScriptUrl: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'
```

Save the file, commit it to GitHub and let Netlify redeploy.

## Step 5 — Test it

1. Open the `/exec` Web App URL directly in a browser. You should see a small JSON response identifying the James Andanje Portfolio Contact Receiver.
2. Open the live portfolio.
3. Submit a test message.
4. Open the Google Sheet. A tab named **Portfolio Contacts** should appear automatically with these columns:
   - Timestamp
   - Name
   - Email
   - Company / Organization
   - Message
   - Source
5. Check `okelloandanje@gmail.com` for the notification email.

## What the system does

Visitor → portfolio form → Google Apps Script → Google Sheet + email notification.

The visitor stays on the portfolio and sees an on-page success message.

## Important security notes

- Do not put Google passwords, API keys or OAuth tokens in the website files.
- The Apps Script `/exec` URL is an endpoint used by the public contact form; it is not a Google password.
- The server code validates required fields, limits input lengths, uses a honeypot field, and protects spreadsheet cells against formula injection.
