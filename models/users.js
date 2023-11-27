const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: true
    },

    absen : {
        type: String,
        required: [true, 'Silahkan isikan nama'],
    },
    
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
    },

    nis : {
        type: String,
        required: [true, 'Silahkan isikan nama'],
    },

    ekstrakulikuler : {
        type: String,
        required: [true, 'Silahkan isikan nama'],
    }

    

})

module.exports = mongoose.model('User', UserSchema)