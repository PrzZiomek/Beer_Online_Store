
export const Right = (v) => ({
    
                map: (f) => Right(f(v)),
                matchWith: (pattern) => pattern.Right(v),
                chain: (f) => f(v),
                valueOf: () => v,
            });