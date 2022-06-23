const loginUser = (checkUsers: Function, userDB: any) => {
    return async function postAndRead(info: any) {
        let data = await checkUsers(info);

        data = {
            email: data.getEmail(),
            password: data.getPassword()
        };
        // console.log(data.email);

        // console.log(dataArray[0]);

        // console.log(dataArray);

        let msg = ``;
        const check = await userDB.checkEmailExistLogin(data);
        // rowCount from node-postgres package
        // check to see if email existed on user with different id or not
        // console.log(check);
        // console.log(`DB-PASSWORD-----------------${dbpassword}`);
        if (check.rowCount > 0) {
            const items = check.rows;
            for (let i = 0; i < items.length; i++) {
                const e = items[i];

                const dbpassword = e.password ? e.password : null;
                // console.log(`------------- input password:  ${dataArray[1]} ------------------------`);
                // console.log(`-------------db password:  ${dbpassword} ------------------------`);

                if (data.password == dbpassword) {
                    msg = `user login success`;
                    // console.log(msg);
                    return msg;
                } else if (data.password !== dbpassword) {
                    msg = `wrong password`;
                    // console.log(msg);
                    return msg;
                }
            }
            return msg;
        } else {
            msg = `user does not  exist`;
            // console.log(msg);
        }
        return msg;
    };
};

export default loginUser;
