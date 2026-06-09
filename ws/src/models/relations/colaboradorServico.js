const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({

 colaboradorId: { 
    type: Schema.Types.ObjectId,
    ref: 'Colaborador',
    required: true,
},

servicoId: { 
    type: Schema.Types.ObjectId,
    ref: 'Servico',
    required: true,
},

status: {
    type: String,
    required: true,
    enum: ['A', 'I'],
    default: 'A',
    },

  dataCadastro:{
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model('ColaboradorServico', colaboradorServico);