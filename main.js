const express = require("express");
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
// app.set("views","../easierLife/app/");
// app.set('view engine','html');
//const router = express.Router();
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/', (req, res) => {
  // r.table("projects").orderBy('createdAt').run().then(result => {
  //   res.send(result)
  // }).catch(err => {
  //   console.log("Error:", err)
  // })
  
  // res.render("app/index.html",{

  // })
  //res.sendFile('localhost:3000/easierLife/app/index.html');
  res.sendFile(__dirname+"/app/index.html");
  //res.send('Got a get request');
})

app.post("/login",function(req, res){
  console.log(req.body.userName);
  res.json(req.body)
  //res.json({msg:"got it"});
  //res.send(req);
});
// app.post('/', (req, res) => {
//   // const project = {
//   //   'title': req.body.title,
//   //   'content': req.body.content,
//   //   'createdAt': new Date().toJSON()
//   // }
//   // r.table('projects').insert(project).run().then(result => {
//   //   res.send(result)
//   // }).catch(err => {
//   //   console.log('Error:', err)
//   // })
//   res.send('Got a POST request');
//   app.render("app/index.html",{

//   })
//   console.log("post index");
// })

// router.get('/login', (req, res) => {
// 	res.render("app/index.html",{

// 	})
// 	console.log("get login");
// })

// router.post('/login', jsonParser, (req, res) => {
//   console.log("post login");
// })

app.listen(port,"localhost",function(err){
	if(err){
		console.log(err);
		return;
	};
	console.log('Listening at http://localhost:'+port)
});

