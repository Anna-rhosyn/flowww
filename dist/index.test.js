"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
test("testing sum of 2 and 3 ", () => {
    expect((0, index_1.sum)(2, 3)).toBe(5);
});
