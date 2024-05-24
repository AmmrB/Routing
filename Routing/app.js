import express from 'express';
import itemsRoutes from './routes/items';
import ExpressError from './expressError';

const app = express();

app.use(express.json());
app.use('/items', itemsRoutes);

app.use((req, res, next) => {
  throw new ExpressError('Not Found', 404);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.json({
    error: err.message,
  });
});

export default app;