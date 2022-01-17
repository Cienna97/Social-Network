const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  addReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought);

router.route('/:thoughtId/reactions').post(addReaction);

module.exports = router;

