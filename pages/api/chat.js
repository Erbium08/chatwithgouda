export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { message, model_name = 'gouda0.0.1', max_tokens = 100 } = req.body;
    
    // Call the Python backend with the updated endpoint and parameters
    const backendResponse = await fetch('https://gouda-api.onrender.com/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message, 
        model_name,
        max_tokens
      }),
    });
    
    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      console.error('Backend error:', errorText);
      throw new Error(`Backend service error: ${backendResponse.status}`);
    }
    
    const data = await backendResponse.json();
    
    return res.status(200).json({ response: data.response });
  } catch (error) {
    console.error('Error processing chat request:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}