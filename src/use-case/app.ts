import entity from '../entities/app';
import userDB from '../data-access/user/app';
import _ from '../functions/app';

import addUser from './createUser';
import updateUser from './updateUser';
import readUser from './readUser';
import deleteUser from './deleteUser';

const addUsers = addUser(entity.makeUsers, userDB);
const updateUsers = updateUser(entity.putUsers, userDB);
const readUsers = readUser(userDB, _.dec);
const deleteUsers = deleteUser(userDB);

const userUC = {
    addUsers,
    readUsers,
    deleteUsers,
    updateUsers
};

export default userUC;
