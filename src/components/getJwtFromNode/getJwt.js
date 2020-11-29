
export function* getJwt(){
    
    const res = yield fetch("http://localhost:8080/api/jwt");   
    const jwt = yield res.json();

    return jwt;
}
