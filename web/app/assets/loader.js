require("./stylesheets/app.scss");
require("file?name=index.html!./index.html");
require("file?name=favicon.ico!./favicon.ico");

var fonts = ["Roboto-Bold", "Roboto-Light", "Roboto-Regular", "RobotoCondensed-Regular"];
var fonts_ext = ["eot", "svg", "ttf", "woff"];
for (let font of fonts) {
    for (let ext of fonts_ext) {
        require(`./fonts/${font}.${ext}`);
    }
}
