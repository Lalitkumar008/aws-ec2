const http = require("http");

const users = [
  {
    id: 1,
    name: "lalit kumar",
    email: "lalitbhagwasia006@Gmail.com",
  },
  { id: 2, name: "abhi kumar", email: "abhibhagwasia007@Gmail.com" },
  { id: 3, name: "rohan kumar", email: "rohanbhagwasia007@Gmail.com" },
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
});

server.listen(4500, () => {
  console.log("server running on port 4500");
});
