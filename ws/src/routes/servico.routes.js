const express = require('express');
const router = express.Router();
const Busboy = require('busboy');
const aws = require('.../services/aws');
const Barbearia = require('../models/barbearia');
const Servico = require('../models/servico');

router.post('/', async (req, res) => {
    let busboy = new Busboy({ headers: req.headers });
    busboy.on('finish', async () => {
    try {
        const { barbeariaId } = req.body;
        let errors = [];
        let arquivos = [];

        if (req.files &&  Object.keys(req.files).length > 0) { 
            for (let key of Object.keys(req.files)) {
                const file = req.files[key];

                if

                const nameParts = file.name.slit('.');
                const fileName = `${new Date().getTime()}.${
                    nameParts[nameParts.length - 1]
                }`;

                const path = 'servicos/${barbeariaId}/${fileName}';

                const response = await aws.uploadFile(file.path);

                if (response.error) {
                    errors.push({ error: true, message: response.message });
                } else {
                    arquivos.push(path);
                }
            }
        


        }
    }
      
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
    req.pipe(busboy);
});

});

