import _ from '../functions/app';

import makeUser from './make-user';
import putUser from './put-user';
import checkUser from './check-user';

const makeUsers = makeUser(_.enc);
const putUsers = putUser(_.enc);
const checkUsers = checkUser(_.enc);

const entity = {
    makeUsers,
    putUsers,
    checkUsers
};

export default entity;
