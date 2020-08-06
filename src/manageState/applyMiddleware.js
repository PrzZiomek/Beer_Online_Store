
export const applyMiddleware = (...middlewares) => (store) => {
  
  const boundMiddlewares = middlewares.map((middleware) => middleware(store));

    return boundMiddlewares.reduce((a, b) => (next) => a(b(next)));
  };
