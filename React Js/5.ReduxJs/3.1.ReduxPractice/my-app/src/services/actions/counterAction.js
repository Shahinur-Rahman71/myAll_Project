import { incrementValue, decrementValue} from '../type';

export const increment = (a) => {
    return {
        type: incrementValue,
        payload: a
    }
}
export const decrement = (a) => {
    return {
        type: decrementValue,
        payload: a
    }
}