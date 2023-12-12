const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vsakha:vsakha@cluster0.mr4oq3e.mongodb.net//budgetdata?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex : true
});