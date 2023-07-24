"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EntityNotFoundError_1 = require("../../../Error/EntityNotFoundError");
class CartNotFoundError extends EntityNotFoundError_1.default {
    constructor(id) {
        super(id, __filename);
    }
}
exports.default = CartNotFoundError;
