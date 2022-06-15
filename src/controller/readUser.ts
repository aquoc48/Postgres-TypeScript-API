const userRead = (readUsers: Function) => {
    return async function get(httpRequest: any) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            //get httpRequest's body
            const { source = {}, ...info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers['User-Agent'];
            if (httpRequest.headers['Referer']) {
                source.referer = httpRequest.headers['Referer'];
            }

            const toView = {
                ...info,
                source,
                id: httpRequest.params.id, // if id is passed in param
                page: httpRequest.query.page! || 1
            };

            if (toView.page < 1) {
                return {
                    headers,
                    statusCode: 400,
                    body: {
                        error: 'page cannot be lower than 1'
                    }
                };
            } else if (toView.page >= 1) {
                const view = await readUsers(toView);
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 200,
                    body: { view }
                };
            }
        } catch (e: any) {
            console.log(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            };
        }
    };
};

export default userRead;
