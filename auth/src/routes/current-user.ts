import express, { Request, Response } from 'express';

import { currentUser } from '@mohakhlf/common';

const router = express.Router();
/*
* Description: route to get the current user
*/
router.get('/api/users/currentuser', currentUser, (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentuserRouter };