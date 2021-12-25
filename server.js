const express= require('express')
const app=express()
const mongoose=require('mongoose')
const ShortUrl=require('./modals/shortUrl')

app.use(express.urlencoded({extended: false}))


mongoose.connect('mongodb://localhost/urlShortner',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


app.set('view engine','ejs')
app.get('/', async (req,res) => {

    const shortUrls= await ShortUrl.find()
res.render('index',{shortUrls:shortUrls})
})


app.post('/shorturls',async (req,res)=>{
     await ShortUrl.create({ full: req.body.furl })
     res.redirect('/')
    })
app.get('/:shortUrl',async(req,res)=>{
  const link=await ShortUrl.findOne({short: req.params.shortUrl}) 

  if(link==null)
  return res.sendStatus(404)
  

link.clicks++
link.save()
res.redirect(link.full)
})

app.listen(process.env.PORT|| 5000);
