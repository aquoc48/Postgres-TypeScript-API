const putUser = (encrypt: Function) => {
    return function make(info: any) {
        const { id, name, email, password } = info;
        if (!id) {
            throw new Error('Please enter id');
        }
        if (!name) {
            throw new Error('Please enter name');
        }
        if (!email) {
            throw new Error('Please enter email');
        }
        if (!password) {
            throw new Error('Please enter password');
        }
        return Object.freeze({
            getId: () => {
                return id;
            },
            getName: () => {
                return name;
            },
            getEmail: () => {
                return email;
            },
            getPassword: () => encrypt([password])
        });
    };
};

export default putUser;
