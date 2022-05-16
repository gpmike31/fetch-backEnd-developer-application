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
  // find one payers by its `id` value
  // be sure to include its associated points
  Payer.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
  .then((results) => { res.json(results)})
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((results) => { res.json(results)})
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((results) => { res.json(results)})
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((results) => {
    res.json(results)
  })
});

module.exports = router;