const userUpdate = (updateUsers: Function) => {
    return async function puts(httpRequest: any) {
        try {
            const { source = {}, ...info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers['User-Agent'];
            if (httpRequest.headers['Referer']) {
                source.referer = httpRequest.headers['Referer'];
            }
            const toEdit = {
                ...info,
                source,
                id: httpRequest.params.id
            };
            const put = await updateUsers(toEdit);
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 200,
                body: { put }
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

export default userUpdate;
