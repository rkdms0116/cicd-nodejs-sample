const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    res.send('Hello gaeun's Jenkins!, Good Job!')
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
