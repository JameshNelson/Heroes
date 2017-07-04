var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var session = require('express-session');

var db = massive.connectSync({
  connectionString: "postgres://postgres:groningen190@localhost/Heroes"
});
var app = express();


app.use(express.static('assets'))
app.use(bodyParser.json());
app.use(cors());

app.get('/heroes', function(req, res, next){
  db.all_heroes_asc(function(err, result){
    res.send(result);
  })
})

app.post('/heroes/add', function(req, res, next){
  var hero = req.body;
  db.add_hero(
    [
      hero.name,
      hero.title,
      hero.class,
      hero.winpercent
    ],
    function(err, result){
      res.send(result);
    })
})

app.delete('/delete/:name', function(req, res, next){
  var deleteHero = req.params.name
  db.delete_hero([deleteHero], function(err, result){
    res.send(result);
    res.send(deleteHero);
  })
})

app.put('/heroes/update/:name', function(req, res, next){
  var updatedHero = req.params.name;
  var updateInfo = req.body;
  db.update_heroes(
    [
      updatedHero,
      updateInfo.name,
      updateInfo.title,
      updateInfo.class,
      updateInfo.winpercent
    ], function(err, result){
      res.send(result);
    })
})

app.listen(3000, function(){
  console.log("Listening on 3000");
})
