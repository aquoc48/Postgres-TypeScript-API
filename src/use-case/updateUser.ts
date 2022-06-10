const updateUser = (putUsers: Function, userDB: any) => {
    return async function put(info: object) {
        let data = putUsers(info);

        data = {
            id: data.getId(),
            name: data.getName(),
            email: data.getEmail(),
            password: data.getPassword()
        };

        //check if id exist
        const checkId = await userDB.selectOne(data.id);
        if (checkId.rowCount == 0) throw new Error(`User does not exist`);

        //check if email exist
        const checkEmail = await userDB.checkEmailExistUpdate(data);
        if (checkEmail.rowCount > 0) throw new Error('Email already existed');

        //update
        const res = await userDB.putUser(data);

        let msg = `User update failed`;
        if (res[0] == 1) {
            msg = `User updated successfully`;
            return msg;
        } else {
            throw new Error(msg);
        }
    };
};

export default updateUser;
