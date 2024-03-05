// server.js

const { createServer } = require("http");
const { default: render } = require("@astro/renderer");

createServer((req, res) => {
  const { pathname, hostname } = new URL(req.url, `http://${req.headers.host}`);

  // Redirect examplexyz.com to exampleabc.com/xyz/
  if (hostname === "niktheuntamed.com") {
    const redirectUrl = `https://nickbravo.dev/work${pathname}`;
    res.writeHead(301, { Location: redirectUrl });
    res.end();
    return;
  }

  // Render Astro app for other routes
  render({
    // Astro configuration options...
    // ...
  })(req, res);
}).listen(3000, () => {
  console.log("Server running on port 3000");
});
