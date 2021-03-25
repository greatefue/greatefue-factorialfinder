"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorialfinder = void 0;
function factorialfinder(n) {
    var ans = 1;
    for (var i = 2; i <= n; i++) {
        ans = ans * i;
    }
    return ans;
}
exports.factorialfinder = factorialfinder;
