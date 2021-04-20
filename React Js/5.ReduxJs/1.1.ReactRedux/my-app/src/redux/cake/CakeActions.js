const { BYE_CAKE } = require("./CakeTypes")

export const byeCake = (number) => {
    return {
        type: BYE_CAKE,
        payload: number
    }
}