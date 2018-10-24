const app = require("./src/app");
const port = process.env.PORT || 5000;

app.set("port", port);
app.listen(port);

console.log(`Magic happening on port nr_${port}`);

