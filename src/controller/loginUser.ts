const userLogin = (loginUsers: Function) => {
    return async function post(httpRequest: any) {
        try {
            const { source = {}, ...info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers['User-Agent'];
            if (httpRequest.headers['Referer']) {
                source.referer = httpRequest.headers['Referer'];
            }
            const loginCredential = {
                ...info,
                source
            };
            const login = await loginUsers(loginCredential);
            // console.log(login);
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: { login }
            };
        } catch (e: any) {
            console.log(e);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    error: e.message
                }
            };
        }
    };
};

export default userLogin;
