const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barbeariaColaborador = new Schema({

   barbeariaId: { 
    type: Schema.Types.ObjectId,
    ref: 'Barbearia',
    required: true,
},

 colaboradorId: { 
    type: Schema.Types.ObjectId,
    ref: 'Colaborador',
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



module.exports = mongoose.model('BarbeariaColaborador', barbeariaColaborador);