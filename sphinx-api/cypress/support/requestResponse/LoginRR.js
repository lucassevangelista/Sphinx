export const requestLogin = (login,password) => {
    let obj = {}
    obj.login = login,
    obj.password = password

    return obj;
};

export const responseLogin = (retornoLogin) => {
    let obj = {}
    obj.token = retornoLogin.body.token
    obj.status = retornoLogin.status
    return obj
};