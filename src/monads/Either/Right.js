
export const Right = (v) => ({
    
                map: (fn) => Right(fn(v)),
                match: (pattern) => pattern.Right(v),
                chain: (fn) => fn(v),
                valueOfn: () => v,
            });