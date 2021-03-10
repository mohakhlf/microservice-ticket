import express from 'express';

const router = express.Router();
/*
* Description: route to get the current user
*/
router.post('/api/users/signin', (req, res) => {
    res.send('Hi there!');
});

export { router as signinRouter };