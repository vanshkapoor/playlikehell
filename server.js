const express = require('express');

const app = express();

app.set('view engine', 'hbs');

// app.use(express.static('play/public'));
// app.use(express.static(path.resolve('./public')));
// app.use('/public', express.static(path.resolve('./public'))); //<--new line added
// app.use(express.static(__dirname + '/styles'));
// app.use('/static', express.static(__dirname + '/public'));
app.use('*/images',express.static('public/images'));



app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/dice',(req,res)=>{
    res.render('dice')
})

// app.get('/spin',(req,res)=>{
//     res.render('spinthebottle')
// })

app.get('/puzzle',(req,res)=>{
    res.render('puzzle')
})

app.get('/quiz',(req,res)=>{
    res.render('quiz')
})

app.get('/hypnotizer',(req,res)=>{
    res.render('hypnotizer')
})

app.get('/crossword',(req,res)=>{
    res.render('crossword')
})

app.listen(4000,() => console.log("Server running on http://localhost:4000"));  