const router = require('express').Router();
const { Payer, Points } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all payers
  // be sure to include thier associated points
  Payer.findAll({
    include: [Points]
  })
  .then((results) => { res.json(results)})
});

router.get('/:id', (req, res) => {
  // find one payer by its `id` value
  // be sure to include its associated points
  Payer.findOne({
    where: {
      id: req.params.id
    },
    include: [Points]
  })
  .then((results) => { res.json(results)})
});

router.post('/', (req, res) => {
  // create a new Payer
  Payer.create(req.body)
  .then((results) => { res.json(results)})
});

router.put('/:id', (req, res) => {
  // update a Payer by its `id` value
  Payer.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((results) => { res.json(results)})
});

router.delete('/:id', (req, res) => {
  // delete a Payer by its `id` value
  Payer.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((results) => {
    res.json(results)
  })
});

module.exports = router;