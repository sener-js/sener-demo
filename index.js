/*
 * @Author: chenzhongsheng
 * @Date: 2024-10-08 19:50:06
 * @Description: Coding something
 */
import { Sener, Router } from 'sener';

const router = new Router({
    '/': ({ responseHtml }) => {
        return responseHtml('<div>Hello Sener! <a href="/data">(data)</a></div>');
    },
    '/data': () => {
        return { data: { msg: 'Hello Sener!' } };
    },
});

new Sener({
    port: 9000,
    middlewares: [router],
});