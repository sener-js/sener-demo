/*
 * @Author: chenzhongsheng
 * @Date: 2024-10-08 19:50:06
 * @Description: Coding something
 */
import { Sener, Router } from 'sener';

const router = new Router({
    '/': ({ responseHtml }) => {
        return responseHtml('<div>Hello Sener! <a href="/data?a=1&b=2">(/data)</a></div>');
    },
    '/data': ({ query }) => {
        return { data: { msg: 'Hello Sener!', query } };
    },
});

new Sener({
    middlewares: [router],
});
