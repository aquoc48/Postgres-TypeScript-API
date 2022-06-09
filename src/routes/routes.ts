import userController from '../controller/app';

const route = (router: any, makeExpressCallback: Function, validateAuth: Function) => {
    router.post('/', validateAuth, makeExpressCallback(userController.userCreates));

    router.get('/', validateAuth, makeExpressCallback(userController.userReads));
    router.get('/:id', validateAuth, makeExpressCallback(userController.userReads));

    return router;
};

export default route;
