export const coroutine = (gen) => {

    const genObj = gen();

    const contin = ({ done, value }) => done ? value : Promise.resolve(value)
                                                            .then(
                                                                res => contin(genObj.next(res)),
                                                                err => contin(genObj.throw(err))
                                                            );
    return contin(genObj.next())
}