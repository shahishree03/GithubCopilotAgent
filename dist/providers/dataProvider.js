"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProvider = void 0;
// src/providers/dataProvider.ts
class DataProvider {
    async fetchData(query) {
        // Implementation to fetch data
        return { result: `Data for ${query}` };
    }
}
exports.DataProvider = DataProvider;
