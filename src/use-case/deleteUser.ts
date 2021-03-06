const deleteUser = (userDB: any) => {
    return async function select(info: any) {
        const { id } = info;

        //delete query

        const res = await userDB.deleteUser(id);
        let msg = `User was not deleted, please try again.`;
        if (res == 1) {
            msg = `User deleted successfully.`;
            return msg;
        } else {
            throw new Error(msg);
        }
    };
};

export default deleteUser;
