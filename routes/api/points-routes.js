//insert points api routes
const router = require("express").Router()
const Points = require("../../models/Points")
const Payer = require("../../models/Payer")

//spend points: return integer, reference: payer, reference timestamp for each transaction
//timestampp should return integer

//get all point values
router.get('/', (req, res) => {
    // find all points
    // be sure to include its associated Payer data
    Points.findAll(
      {
        include: [
          {
            model: Payer,
            attributes: ['payers_id']
          }
        ]
      }
    )
      .then(productData => res.json(pointsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // get one product
  router.get('/:id', (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    Points.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: Payer,
        attributes: ['payers_id']
      },
      ]
    })
      .then(productData => res.json(pointsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // create new point value to associate with a new payer
  router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        product_name: "Basketball",
        price: 200.00,
        stock: 3,
        tagIds: [1, 2, 3, 4]
      }
    */
    Points.create(req.body)
      .then((points) => {
        // if there's point tags, we need to create pairings to bulk create in the Payer model
        if (req.body.payerIds.length) {
          const points_idArr = req.body.points_id.map((points_id) => {
            return {
              points_id: points_id,
            };
          });
          return Points.bulkCreate(points_idArr);
        }
        // if no points tags, just respond
        res.status(200).json(points);
      })
      .then((points_id) => res.status(200).json(points_id))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  // update points id
  router.put('/:id', (req, res) => {
    // update points data
    Points.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((product) => {
        // find all associated tags from Points id
        return Points.findAll({ where: { points_id: req.params.id } });
      })
      .then((points_id) => {
        // get list of current points id's
        const points_id = points_id.map(({ points_id }) => points_id);
        // create filtered list of new points_id
        const newPointsIDs = req.body.payersIds
          .filter((points_id) => !points_id.includes(payers_id))
          .map((points_id) => {
            return {
              points_id: req.params.id,
            };
          });
        // figure out which ones to remove
        const points_idToRemove = points_id
          .filter(({ points_id }) => !req.body.payerIds.includes(points_id))
          .map(({ id }) => id);
  
        // run both actions
        return Promise.all([
          Points.destroy({ where: { id: points_idToRemove } }),
          Points.bulkCreate(newPointsIDs),
        ]);
      })
      .then((updatedPointsIds) => res.json(updatedPointsIds))
      .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
      });
  });
  
  router.delete('/:id', (req, res) => {
    // delete points value by its `id` value
    Points.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(pointsData => {
        if (!pointsData) {
          res.status(404).json({ message: 'No Point value found with that ID.' });
          return;
        }
        res.json(pointsData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;