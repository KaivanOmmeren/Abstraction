"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityNotFoundError extends Error {
    constructor(id, entityType) {
        super(`Could not find entity for ID: ${id}`);
        this.id = id;
        this.entityType = entityType;
    }
}
exports.default = EntityNotFoundError;
