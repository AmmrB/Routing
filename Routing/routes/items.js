import express from 'express';
import Item from '../item';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll();
    return res.json({ items });
  } catch(err){
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newItem = new Item(req.body.name, req.body.price);
    return res.json({item: newItem});
  } catch (err) {
    return next(err);
  }
});

router.get('/:name', async (req, res, next) => {
  try {
    const foundItem = await Item.find(req.params.name);
    return res.json({item:foundItem});
  } catch(err){
    return next(err);
  }
});

export default router;