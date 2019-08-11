// Com as {}, você consegue instanciar diversas coisas de uma só vez
const { Schema, model } = require('mongoose');

// Schema para definir os dados necessários para o cadastro de um novo Dev
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    // Ele cria uma coluna createdAt e updatedAt
    timestamps: true,
});

module.exports = model('Dev', DevSchema);