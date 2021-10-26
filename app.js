const express = require('express')
const app = express()

app.use(express.static(__dirname + '/views'));
app.set('view engine','ejs');

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.get('/battle-arena', (req, res)=>{
    console.log(req.query)  
    res.render('play.ejs' , {
        characters : {
            p1 : req.query.p1_character,
            p2 : req.query.p2_character,
        }
    })
})

let port = process.env.PORT || 3000; 
app.listen(port , ()=> console.log(`Listening to port ${port}`))