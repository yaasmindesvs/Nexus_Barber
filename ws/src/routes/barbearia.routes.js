const express = require('express');
const router = express.Router();
const Barbearia = require('../models/barbearia');
const Servico = require('../models/servico');

router.post('/', async (req, res) => {
    try {
        const barbearia = await new Barbearia(req.body).save();
        res.json({ barbearia });
    } catch (error) {
        res.json({ error: true, message: error.message });
    }

});


router.get('/servicos/:barbeariaId', async (req, res) => {
    try {
        const { barbeariaId } = req.params;
        const servicos = await Servico.find({
               barbeariaId,
               status: 'A',

         }).select('_id titulo)');
        
        
         res.json({ 
            servicos: servicos.map(s ({ label: s.titulo, value: s._id}))
        });
        
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
});

module.exports = router;
