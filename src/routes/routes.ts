import userController from '../controller/app';

const route = (router: any, makeExpressCallback: Function, validateAuth: Function) => {
    router.post('/', validateAuth, makeExpressCallback(userController.userCreates));

    // router.get('/');

    return router;
};

export default route;
