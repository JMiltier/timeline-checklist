const express = require('express')
const app = express();
const PORT = 3000;

app.use(express.static('client/dist'));

app.listen(PORT, () => console.log(`Express server listening at port ${PORT}`));