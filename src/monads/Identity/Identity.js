
export const Identity = (v) => ({
                map: fn => Identity.of(fn(v)),
                valueOf: () => v,
                chain: fn => fn(v),
                inspect: () => `Identity(${v})`,
            })
  
            
  Identity.of = Identity;
  