const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router=require("./routes/book-routes");
const cors=require("cors");
//middleware
app.use(express.json());
app.use(cors());
app.use("/books",router)
const PORT=process.env.PORT||5000;
if(process.env.NODE_ENV=="production")
{

app.use(express.static("book-store/build"));
}
mongoose.connect("mongodb+srv://admin:oubUOQOe2x3LsRNI@cluster0.o2yoz3e.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(() => console.log("connected to database"))
.then(() => {app.listen(PORT)}).catch((err)=>console.log(err));



//oubUOQOe2x3LsRNI