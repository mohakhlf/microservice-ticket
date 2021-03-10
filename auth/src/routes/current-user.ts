import express from 'express';

const router = express.Router();
/*
* Description: route to get the current user
*/
router.get('/api/users/currentuser', (req, res) => {
    res.send('Hi there!');
});

export { router as currentuserRouter };