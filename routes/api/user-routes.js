const router = require('express').Router();

//call get, create, update, and delete
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(createUser);