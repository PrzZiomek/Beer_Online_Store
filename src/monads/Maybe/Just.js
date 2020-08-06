import { MaybeOf } from "./MaybeOf";


export const Just = (v) => ({

        chain: (fn) => fn(v),
        valueOf: () => v,
        map: (fn) => MaybeOf(fn(v)),
        isJust: true,
        isNothing: false,
        inspect: () => `Just(${v})`,
    })