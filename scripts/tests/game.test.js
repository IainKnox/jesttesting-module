const expectExport = require("expect");
const { test } = require("picomatch");
const { describe } = require("yargs");

beforeAll(() => {
    let fs = require(('fs'));
    let fileContents = fs.readFileSync("simon-game.html", 'utf-8');
    document.open();
    document.write(fileContents);
    document.close;
});

describe("game object contains correct keys", () => {
    test('score key exists', () => {
        expect('score' in game).toBe(true);
    });
})