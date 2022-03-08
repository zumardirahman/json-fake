import { create, router as _router, defaults } from 'json-server';
const server = create();
const router = _router('db.json'); // <== Will be created later
const middlewares = defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port);