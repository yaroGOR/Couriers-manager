const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const createTables = require('./models/createTables')
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require('config')


const couriersRouter = require("./routes/couriers");
const destinationsRouter = require("./routes/destinations");
const tasksRouter = require("./routes/tasks");
const viewsRouter = require("./routes/views");
const middlewares = require('./middlewares/viewsMiddlewares')


const app = express();
createTables()
let port;
if(process.env.PORT){
   port = process.env.PORT
} else {
   port = config.get('server.port')
}

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// app.use(morgan("combined"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use("/", viewsRouter);
app.use("/couriers", couriersRouter);
app.use("/destinations", destinationsRouter);
app.use("/tasks", tasksRouter);

app.listen(port, function () {
  console.log(`server is running on ${port}`);
});


// app.use('/' ,
// (req, res, next)=>{
//     try {
//         req.message='messege from middle'
//         return next()
//     } catch(err) {
//         return res.status(500).send({
//             msg: 'error',
//             err
//         })
//     }

// },
// (req,res)=>{
//     try {
//         console.log(req.message)
//         console.log(res)
//         res.status(501).send({message:"message with err2 "})
//     } catch(err) {
//         console.log(err)
//     }
// })