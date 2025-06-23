const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// ✅ Middlewares
app.use(cors()); // 👈 Must come AFTER app is defined
app.use(express.json());
app.use(express.static('public'));
app.use('/users', userRoutes);

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('Hello, Thrinesh! Your backend is working 🎉');
});

// ✅ MongoDB Connection and Server Start
mongoose.connect('mongodb://127.0.0.1:27017/usercrud')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));