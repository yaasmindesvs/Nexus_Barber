const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({

   barbeariaId: { 
    type: Schema.Types.ObjectId,
    ref: 'Barbearia',
    required: true,
},

 titulo:{
    type: String,
    required: true,
 },

  preco:{
    type: Number,
    required: true,
 },

 comissao :{
    type: Number, // Porcentagem de comissão sobre o preco
    required: true,
 },

  duracao:{
    type: Number,  // Duração em minutos
    required: true,
 },

  recorrencia:{
    type: Number,
    required: true,
 },

  descricao:{
    type: String,
    required: true,
 },

 status :{
    type: String,
    required: true,
    enum: ['A', 'I', 'E'],
    default: 'A',
 },
    
   
  dataCadastro:{
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('Servico', servico);