const router = require('express').Router();

//call get, create, update, and delete
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;

