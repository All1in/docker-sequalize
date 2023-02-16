const express = require('express');
// dotenv
const { config } = require('dotenv')
config()
// Port
const PORT = process.env.PORT || 7000

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/v1/health', (req, res) => {
  res.json({    
    hey: 'Node js',
  });
});

app.listen(process.env.PORT , () => {
  console.log(`Started on ${PORT}`);
});
