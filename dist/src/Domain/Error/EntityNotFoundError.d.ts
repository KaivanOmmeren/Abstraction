export default class EntityNotFoundError extends Error {
    readonly id: string;
    readonly entityType: string;
    constructor(id: string, entityType: string);
}
