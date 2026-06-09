const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barbeariaCliente = new Schema({

  barbeariaId: { 
    type: Schema.Types.ObjectId,
    ref: 'Barbearia',
    required: true,
}, 

clienteId: { 
    type: mongoose.Types.ObjectId,
    ref: 'Cliente',
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



module.exports = mongoose.model('BarbeariaCliente', barbeariaCliente);