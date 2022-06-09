import express from 'express';
import makeExpressCallback from '../express-callback/app';
import validateAuth from '../middlewares/app';
import route from './routes';

const router = express.Router();
const routes = route(router, makeExpressCallback, validateAuth);

export = routes;
