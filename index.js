const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  // HTML e CSS per migliorare la parte grafica
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="it">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Server Node.js</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333;
          margin: 0;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
        }
        h1 {
          color: #007BFF;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>ESERCIZIO 2</h1>
        <p>File modificato con FileZilla</p>
      </div>
    </body>
    </html>
  `;

  res.end(htmlContent);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
