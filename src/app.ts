import server from './shared/infra/http/server';

server.listen(3333, () => {
    console.log('Listening on port 3333 🐱‍👤');
});