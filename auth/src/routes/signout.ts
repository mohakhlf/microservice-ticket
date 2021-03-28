import express from 'express';

const router = express.Router();
/*
* Description: route to get the current user
*/
router.post('/api/users/signout', (req, res) => {
  req.session = null;

  res.send({});
});

export { router as signoutRouter };