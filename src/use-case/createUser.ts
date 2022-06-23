const addUser = (makeUsers: Function, userDB: any) => {
    return async function post(info: Object) {
        let data = await makeUsers(info);

        data = {
            name: data.getName(),
            email: data.getEmail(),
            password: data.getPassword()
            // role: data.getRole()
        };
        // console.log(data.email);

        const check = await userDB.checkEmailExist(data);
        // rowCount from node-postgres package
        // console.log(check.email);
        // check to see if email existed on user with different id or not
        if (check.rowCount > 0) throw new Error(`User already existed.`);

        // const checkRole = await userDB.checkRootExist(data);
        // //check if root role already existed or not
        // if (checkRole.rowCount > 0) throw new Error(`User cannot be root`);

        //create user
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
