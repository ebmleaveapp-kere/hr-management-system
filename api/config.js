export default async function handler(req, res) {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const API_KEY = process.env.GOOGLE_API_KEY;
  const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
  
  if (!CLIENT_ID || !API_KEY || !SPREADSHEET_ID) {
    return res.status(500).json({ error: 'Server configuration missing' });
  }
  
  return res.status(200).json({
    CLIENT_ID: CLIENT_ID,
    API_KEY: API_KEY,
    SPREADSHEET_ID: SPREADSHEET_ID,
    SCOPES: 'https://www.googleapis.com/auth/spreadsheets'
  });
}
