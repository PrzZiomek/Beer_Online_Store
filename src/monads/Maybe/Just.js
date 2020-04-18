import { MaybeOf } from "./MaybeOf";


export const Just = (x) => ({

        chain: (f) => f(x),
        valueOf: () => x,
        map: (f) => MaybeOf(f(x)),
        isJust: true,
        isNothing: false,
        inspect: () => `Just(${x})`,
    })