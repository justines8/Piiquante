const mongoose = require('mongoose');

const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true, },
        validate: {
            validator: function(value) {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailRegex.test(value);
            },
            message: 'Format de l\'adresse e-mail non valide'
          },
    password: { 
      type: String, 
      required: true,
      minlength: 4,
      validate: {
        validator: function(value) {
          const passwordRegex = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
          return passwordRegex.test(value);
        },
        message: 'Le mot de passe doit comporter au moins 4 caractères, 1 chiffre et 1 caractère spécial'
      } }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);