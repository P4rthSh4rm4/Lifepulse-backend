const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const sosRoutes = require('./routes/Sos');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/sos', sosRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://parth507:parthA123@@lifeplus.e5afvg3.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


app.use(cors());
app.use(express.json());

const ADMIN_PASSWORD = 'parthA123@'; // 🔥 change to your secret bro
const SECRET_KEY = 'lifeplusSecretKey'; // used to sign JWT

// ADMIN LOGIN API
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    const token = jwt.sign({ admin: true }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ success: true, token });
  } else {
    res.json({ success: false });
  }
});
app.use(cors({
  origin: 'https://lifepulse-backend-3.onrender.com'
}));

// PROTECTED SOS FETCH API
app.get('/api/sos', (req, res) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);

    SOS.find().sort({ createdAt: -1 }).then(data => {
      res.json(data);
    }).catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
  });
});
