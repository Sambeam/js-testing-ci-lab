const search = require("../src/search");

test("search finds matching URLs", () => {
    expect(search("example")).toEqual(["http://example.com"]);
});

test("search returns an empty array for a term not found", () => {
    expect(search("xyz")).toEqual([]);
});

