export default class EntityNotFoundError extends Error{
    public readonly id: string;
    public readonly entityType: string;

    constructor(id: string, entityType: string) {
        super(`Could not find entity for ID: ${id}`);
        this.id = id;
        this.entityType = entityType;
    }
}
