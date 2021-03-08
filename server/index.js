const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8009;
const movieRouter = require('./routes/movieRouter.js');
const adminRouter = require('./routes/adminRouter.js');
const authRouter = require('./routes/authRouter.js');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', hbs);

app.use('/movies', movieRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

mongoose.connect("mongodb+srv://vasyl:BQPMUSFnztrg72J@cluster0.tsjvw.mongodb.net/Moviesdb?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true});

app.listen(port, () => {
  console.log(`App is listening on port ${port}...`)
});

