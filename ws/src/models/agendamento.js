const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({

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

 servicoId: { 
    type: mongoose.Types.ObjectId,
    ref: 'Servico',
    required: true,
},

 colaboradorId: { 
    type: mongoose.Types.ObjectId,
    ref: 'Colaborador',
    required: true,
},

data: {
    type: Date,
    required: true,
},

comissao: {
    type: Number,
    required: true,

},

valor: {
    type: Number,
    required: true,
},

transactionId: {
    type: String,
    required: true,
},

  dataCadastro:{
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model('Agendamento', agendamento);