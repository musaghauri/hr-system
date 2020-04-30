import express from 'express';
// import next from 'next';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import HR_SYSTEM_API from '@server/routes';
import { MONGO_URL } from '@config';

const port = parseInt(process.env.PORT, 10) || 8000;
const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// // Set native promises as mongoose promise
mongoose.Promise = global.Promise;
// MongoDB Connection
mongoose.connect(
  MONGO_URL,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  error => {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
      throw error;
    }
  }
);

// app.prepare().then(() => {
const app = express(); // Express Server
// Bodyparser to receive body from API calls
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use('/api', HR_SYSTEM_API);

// app.get('*', (req, res) => handle(req, res));
// server
app.listen(port, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
// });

export default app;
