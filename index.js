const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('





ESERCIZIO 2 : file modificato con filezilla


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h1>Welcome to My Website</h1>
      <p>This is the main content area of the page.</p>
    </section>

    <section>
      <h2>About Us</h2>
      <p>Here you can provide information about your company or organization.</p>
    </section>

    <section>
      <h2>Our Services</h2>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </section>

    <section>
      <h2>Contact Us</h2>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email">

        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 My Website. All rights reserved.</p>
  </footer>
</body>
</html>


');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at <http://localhost>:${port}/`);
});
