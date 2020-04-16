
export const Right = (v) => ({
    
                map: (f) => Right(f(v)),
                match: (pattern) => pattern.Right(v),
                chain: (f) => f(v),
                valueOf: () => v,
            });