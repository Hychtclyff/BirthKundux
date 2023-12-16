const contacts = require("./contacts");
const express = require("express");
const morgan = require("morgan");
const exprssLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.set("view", "ejs");
app.use(exprssLayouts);
app.use(express.static("public"));


app.get('')