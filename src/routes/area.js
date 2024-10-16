const express = require("express");
const router = express.Router();
const animalSchema = require("../models/animal");
const areaSchema = require("../models/area");

router.post("/areas", (req, res) => {
    const area = areaSchema(req, body);
    area
        .save().then((data) => {
                res.json(data)
        }).catch((error) => res.send(error));
});

router.put("/areas/:id", async(req, res) => {
    const { id } = req.params;
    const animal = animalSchema(req.body);
    var idAnimal = null;

    const animalConsulta = await animalSchema.findOne({codigo: req.body.codigo});
    if (!animalConsulta) {
        await animal.save().then((dataAnimal) => {
            idAnimal = dataAnimal._id;
        });
    } else {
        idAnimal = animalConsulta._id;
    }

    areaSchema
        .updateOne({_id: id}, {
            $addToSet: { animals: idAnimal }
        })
        .then((then) => res.json(data))
        .catch((error) => res.json({manage: error}));
});

module.exports = router;


