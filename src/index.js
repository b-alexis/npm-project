const $ = require ("jquery");

const hello = () => console.log("hello world from webpack!");

hello();

$("body")
    .html("<h1> Hello from jquery</h1>")
    .css("background-color", "lightPink");
