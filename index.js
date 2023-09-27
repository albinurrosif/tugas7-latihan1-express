const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import router-routes yang telah Anda buat
const ktpRouter = require('./routes/ktp');
const kartuKeluargaRouter = require('./routes/kartukeluarga');
const detailKkRouter = require('./routes/detailkk');

// Gunakan router-routes tersebut sebagai middleware
app.use('/api/ktp', ktpRouter);
app.use('/api/kartukeluarga', kartuKeluargaRouter);
app.use('/api/detailkk', detailKkRouter);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
