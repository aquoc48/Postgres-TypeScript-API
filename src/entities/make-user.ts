const makeUser = (encrypt: Function) => {
    return function make(info: any) {
        const { name, email, password, role } = info;
        if (!name) {
            throw new Error('Please enter name.');
        }
        if (!email) {
            throw new Error('Please enter email.');
        }
        if (!password) {
            throw new Error('Please enter password.');
        }
        return Object.freeze({
            getName: () => {
                return name;
            },
            getEmail: () => {
                return email;
            },
            getPassword: () => encrypt([password]),
            getRole: () => {
                return role;
            }
        });
    };
};

export default makeUser;
