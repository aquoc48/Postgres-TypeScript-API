const userAdd = (addUsers: Function) => {
    return async function post(httpRequest: any) {
        try {
            const { source = {}, ...info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers['User-Agent'];
            if (httpRequest.headers['Referer']) {
                source.referer = httpRequest.headers['Referer'];
            }
            const posted = await addUsers({
                ...info,
                source
            });
            return {
                headers: {
                    'Constent-Type': 'application/json'
                },
                statusCode: 201,
                body: { posted }
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

export default userAdd;
