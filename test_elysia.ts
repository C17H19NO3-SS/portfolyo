import { Elysia } from 'elysia'; import index from './src/index.html'; new Elysia({ serve: { routes: { '/*': index } } }).get('/api', () => 'API').listen(3000);
