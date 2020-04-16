
export const Left = (v) => ({
                map: () => Left(v),
                match: (pattern) => pattern.Left(v),
                chain: (_) => Left(),
                valueOf: () => v,
            });