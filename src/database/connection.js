const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://Zainab_Samreen:Sr3V8KiGp74ZyBG@cluster0.cociq.mongodb.net/reservationAPI?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: false,
      //useCreateIndex: true,
    }
  )
  .then(() => {
    console.warn("db connection done");
  })
  .catch((e) => {
    console.log(e);
  });