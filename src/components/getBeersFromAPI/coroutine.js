export const coroutine = (gen) => {

    const iter = gen();

    const contin = ({ done, value }) => done ? value : Promise.resolve(value)
                                                            .then(
                                                                res => contin(iter.next(res)),
                                                                err => contin(iter.throw(err))
                                                            );
    return contin(iter.next())
}