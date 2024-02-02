const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const MONGO_URI = 'YOUR_DATABASE_URI/DATABASE_NAME';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

const todoSchema = new mongoose.Schema({
  text: String,
  date: String,
});

const Todo = mongoose.model('Todo', todoSchema, 'TodoTasks');

app.get('/getTodos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json({ success: true, todos });
  } catch (error) {
    console.error('Error fetching todos:', error.message);
    res.json({ success: false, error: 'Error fetching todos' });
  }
});

app.post('/addTodo', async (req, res) => {
  const { text, date } = req.body;

  try {
    const newTodo = new Todo({ text, date });
    await newTodo.save();
    res.json({ success: true });
  } catch (error) {
    console.error('Error adding todo:', error.message);
    res.json({ success: false, error: 'Error adding todo' });
  }
});

app.put('/editTodo/:id', async (req, res) => {
  const { text, date } = req.body;
  const todoId = req.params.id;

  try {
    await Todo.findByIdAndUpdate(todoId, { text, date });
    res.json({ success: true });
  } catch (error) {
    console.error('Error editing todo:', error.message);
    res.json({ success: false, error: 'Error editing todo' });
  }
});

app.delete('/removeTodo/:id', async (req, res) => {
    const todoId = req.params.id;
  
    try {
      const deletedTodo = await Todo.findOneAndDelete({ _id: todoId });
      
      if (deletedTodo) {
        res.json({ success: true });
      } else {
        res.json({ success: false, error: 'Todo not found' });
      }
    } catch (error) {
      console.error('Error removing todo:', error.message);
      res.json({ success: false, error: 'Error removing todo' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
