const mongose = requiere("mongose");

const areaSchema = mongose.Schema({
    nombre: {
        type: String,
        requiered: true
    },
    description: {
        type: String,
        requiered: true
    },
    animals: [{type: mongose.Schema.Types.ObjectId, ref: 'Animal'}]
});
module.exports = mongose.model('Area', areaSchema);