import express from 'express'
import cors from 'cors'

const app = express();
const postRoutes = require('./routes/post.route');
const collectionRoutes = require('./routes/collection.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use('/api/posts',postRoutes);
app.use('/api/collections',collectionRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

export {app};

