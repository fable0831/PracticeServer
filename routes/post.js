import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  res.json({ id: 1, content: 'hello' });
});

router.delete('/', (req, res) => {
  res.json({ id: 1 });
});