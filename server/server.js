const express = require('express');
const expressFileUpload = require('express-fileupload');

class Server {

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.listen();
        this.port = 3000;
    }

    middlewares() {
        this.app.use(expressFileUpload({
            limits: { fileSize: 5000000 },
            abortOnLimit: true,
            responseOnLimit: "El tamaño del archivo que intentas subir supera el límite permitido",
        }));
    }

    routes() {
        this.app.use('/', require('../routes/form'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port: ${this.port}`);
        });
    }
}

module.exports = Server;