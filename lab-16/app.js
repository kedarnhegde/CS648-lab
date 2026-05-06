import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = process.env.MONGODB_URL;

let db;

MongoClient.connect(url)
  .then(client => {
    db = client.db();
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error(err));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/employees', async (req, res) => {
  const employees = await db.collection('employees').find().toArray();
  res.json(employees);
});

app.post('/api/employees', async (req, res) => {
  const newEmployee = req.body;
  const result = await db.collection('employees').insertOne(newEmployee);
  res.json(result);
});

app.delete('/api/employees/:id', async (req, res) => {
  const { ObjectId } = await import('mongodb');
  const result = await db.collection('employees').deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});