const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const users = [];

app.set('view engine', 'hbs');

app.use(express.urlencoded({extended:false}));

// app.use(express.static('play/public'));
// app.use(express.static(path.resolve('./public')));
// app.use('/public', express.static(path.resolve('./public'))); //<--new line added
// app.use(express.static(__dirname + '/styles'));
// app.use('/static', express.static(__dirname + '/public'));
app.use('*/images',express.static('public/images'));



app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/register',(req,res) => {
    res.render('register')
})

app.post('/register', async(req,res) => {
    try{
        const hashedpassword = await bcrypt.hash(req.body.password,10);
        users.push({
            name : req.body.name,
            gamingname :req.body.gamingname,
            dateofbirth : req.body.dateofbirth,
            email : req.body.email,
            password: hashedpassword
        })
        res.redirect('/login');
    }
    catch{
        res.redirect('/regsiter');
    }
    console.log("done")
    console.log(users);

})

app.get('/login',(req,res) => {
    res.render('login')
})

app.post('/login',(req,res) => {


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