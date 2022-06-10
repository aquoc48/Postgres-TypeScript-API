const addUser = (makeUsers: Function, userDB: any) => {
    return async function post(info: Object) {
        let data = await makeUsers(info);

        data = {
            name: data.getName(),
            email: data.getEmail(),
            password: data.getPassword()
        };

        const check = await userDB.checkEmailExist(data);
        // rowCount from node-postgres package
        // check to see all rows affected by the select query
        if (check.rowCount > 0) throw new Error(`User already existed.`);

        const res = await userDB.createUser(data);

        let msg = `Error inserting user`;

        if (res) {
            msg = `User added successfully`;
            return msg;
        } else {
            throw new Error(msg);
        }
    };
};

export default addUser;
