
export const Nothing = () => ({

        chain: (_) => Nothing(),
        valueOf: () => Nothing(),
        map: (_) => Nothing(),
        isJust: false,
        isNothing: true,
        inspect: () => `Nothing monad`,

    })