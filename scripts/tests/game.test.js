beforeAll(() => {
    let fs = require((fs));
    let fileContents = fs.readFileSync("simon-game.html", 'utf-8');
    document.open();
    document.write(fileContents);
    document.close;
});