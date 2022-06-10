import randomstring from 'randomstring';
import route from './users';

describe(`user crud tests`, () => {
    test(`get user`, async () => {
        const res: any = await route.selectUser();
        const data = res.status;
        expect(data).toBe(200);
    });

    // test(`create user - all fields have value`, async () => {
    //     const info = {
    //         name: randomstring.generate({ length: 10, charset: 'alphabetic' }),
    //         email: `${randomstring.generate({ length: 5, charset: 'alphabetic' })}@gmail.com`,
    //         password: randomstring.generate({ length: 10, charset: 'alphabetic' })
    //     };
    //     const res: any = await route.addUser(info);
    //     const data = res.status;
    //     expect(data).toBe(201);
    // });
});
