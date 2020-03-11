
export const groupObjectsBy = (key) => (arr) => {
          return arr.reduce((acc, obj) =>{
                        acc[obj[key]] = (acc[obj[key]] || []).concat(obj);
                        return acc; 
                    }, {})
 } 


export const placeObjectValuesInArray = (obj) => Object.values(obj);
