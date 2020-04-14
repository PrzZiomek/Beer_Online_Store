
export const Left = (v) => ({
                map: () => Left(v),
                matchWith: (pattern) => pattern.Left(v),
                chain: (_) => Left(),
                valueOf: () => v,
            });