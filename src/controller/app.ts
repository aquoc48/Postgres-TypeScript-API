import userUC from '../use-case/app';

import userAdd from './createUser';
import userRead from './readUser';
import userDelete from './deleteUser';
import userUpdate from './updateUser';

const userCreates = userAdd(userUC.addUsers);
const userReads = userRead(userUC.readUsers);
const userDeletes = userDelete(userUC.deleteUsers);
const userUpdates = userUpdate(userUC.updateUsers);

const userController = {
    userCreates,
    userReads,
    userDeletes,
    userUpdates
};

export default userController;
