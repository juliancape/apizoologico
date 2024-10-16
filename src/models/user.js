const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    }
});

userSchema.methods.encryptClave =  async(clve) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hast(clave, salt);
}

module.exports = mongoose.model('User', userSchema);