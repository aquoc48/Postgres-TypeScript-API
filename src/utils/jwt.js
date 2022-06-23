import jwt from 'jsonwebtoken';

const expire = "1h"; 

const jwtest = jwt.sign({name:'quoc',email:'quoc@mail', password:'123456'}, 'secretkey', {expiresIn: expire})

const jwtverify = jwt.verify(jwtest, 'secretkey');

console.log(jwtest);

console.log(jwtverify);