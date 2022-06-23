const checkUser = (encrypt: Function) => {
    return function check(info: any) {
        const { email, password } = info;
        if (!email) {
            throw new Error('Please enter email.');
        }
        if (!password) {
            throw new Error('Please enter password.');
        }
        return Object.freeze({
            getEmail: () => {
                return email;
            },
            getPassword: () => encrypt([password])
        });
    };
};

export default checkUser;
