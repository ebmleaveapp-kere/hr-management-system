// api/config.js
export default async function handler(request) {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const API_KEY = process.env.GOOGLE_API_KEY;
  const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
  
  // Validate that all required variables are present
  if (!CLIENT_ID || !API_KEY || !SPREADSHEET_ID) {
    return new Response(
      JSON.stringify({ error: 'Server configuration missing' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
  
  // Return the config to the frontend
  return new Response(
    JSON.stringify({
      CLIENT_ID: CLIENT_ID,
      API_KEY: API_KEY,
      SPREADSHEET_ID: SPREADSHEET_ID,
      SCOPES: 'https://www.googleapis.com/auth/spreadsheets'
    }),
    {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0'
      },
    }
  );
}
