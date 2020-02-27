import App from './app';

const port: number = +process.env.PORT || 2210;
App.listen(port, () => console.log('> Servidor on-line na porta:', port));
