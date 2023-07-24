import EntityNotFoundError from "../../../Error/EntityNotFoundError";
export default class CartNotFoundError extends EntityNotFoundError {
    constructor(id: string);
}
