
const express = require('express');
const router = express.Router();
const Busboy = require('busboy');

const aws = require('../services/aws');
const Barbearia = require('../models/barbearia');
const Servico = require('../models/servico');
const Arquivo = require('../models/arquivo');

router.post('/', async (req, res) => {
    const busboy = Busboy({ headers: req.headers });

    busboy.on('finish', async () => {
        try {
            const { barbeariaId, servico } = req.body;

            let errors = [];
            let arquivos = [];

            
            const barbearia = await Barbearia.findById(barbeariaId);

            if (!barbearia) {
                return res.json({
                    error: true,
                    message: 'Barbearia não encontrada.'
                });
            }

            
            if (req.files && Object.keys(req.files).length > 0) {
                for (const key of Object.keys(req.files)) {
                    const file = req.files[key];

                    const nameParts = file.name.split('.');

                    const fileName = `${Date.now()}.${
                        nameParts[nameParts.length - 1]
                    }`;

                    const path = `servicos/${barbeariaId}/${fileName}`;

                    const response = await aws.uploadToS3(
                        file.path,
                        path
                    );

                    if (response.error) {
                        errors.push({
                            error: true,
                            message: response.message
                        });
                    } else {
                        arquivos.push(path);
                    }
                }
            }

            if (errors.length > 0) {
                return res.json(errors[0]);
            }

            
            const jsonServico = JSON.parse(servico);

            jsonServico.barbeariaId = barbeariaId;

            const servicoCadastro = await new Servico(
                jsonServico
            ).save();

            // Salva os arquivos relacionados ao serviço
            const arquivosCadastro = arquivos.map((arquivo) => ({
                referenciaId: servicoCadastro._id,
                model: 'Servico',
                caminho: arquivo
            }));

            if (arquivosCadastro.length > 0) {
                await Arquivo.insertMany(arquivosCadastro);
            }

            return res.json({
                error: false,
                servico: servicoCadastro,
                arquivos: arquivosCadastro
            });

        } catch (error) {
            return res.status(500).json({
                error: true,
                message: error.message
            });
        }
    });

    req.pipe(busboy);
});

module.exports = router;
    

      
    
    


