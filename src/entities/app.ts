import _ from '../functions/app';

import makeUser from './make-user';
import putUser from './put-user';

const makeUsers = makeUser(_.enc);
const putUsers = putUser(_.enc);

const entity = {
    makeUsers,
    putUsers
};

export default entity;
