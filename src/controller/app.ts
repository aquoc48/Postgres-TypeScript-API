import userUC from '../use-case/app';

import userAdd from './createUser';
import userRead from './readUser';
import userDelete from './deleteUser';
import userUpdate from './updateUser';
import userLogin from './loginUser';

const userCreates = userAdd(userUC.addUsers);
const userReads = userRead(userUC.readUsers);
const userDeletes = userDelete(userUC.deleteUsers);
const userUpdates = userUpdate(userUC.updateUsers);
const userLogins = userLogin(userUC.loginUsers);

const userController = {
    userCreates,
    userReads,
    userDeletes,
    userUpdates,
    userLogins
};

export default userController;
