const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

main().then(() =>{
    console.log("Connection Successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//Index Route
app.get("/chats", async (req, res) =>{
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
});

//New Route
app.get("/chats/new", (req, res) =>{
    res.render("new.ejs");
});

//Create Route
app.post("/chats", asyncWrap(async(req, res) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat ({
        from : from,
        to : to,
        msg : msg,
       created_at : new Date(),
    });
    await newChat.save();   
    res.redirect("/chats");
})
);

function asyncWrap(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}

//Edit Route
app.get("/chats/:id/edit", asyncWrap(async (req, res) =>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})
);

//Update Route
app.put("/chats/:id", asyncWrap(async (req, res) =>{
    let {id} = req.params;
    let {msg : newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {msg : newMsg}, {runValidators : true, new : true});
    res.redirect("/chats");
})
);

//Destroy Route
app.delete("/chats/:id", asyncWrap(async (req, res) =>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})
);

// let chat1 = new Chat({
//     from : "Mind",
//     to : "Lala",
//     msg : "Let's play Battleground Now",
//     created_at : new Date(),
// });

// chat1.save().then((res) =>{
//     console.log(res);
// });


app.get("/", (req, res) => {
    console.log("Root is working");
    res.send("Working on Browser");
});

const handleValidationErr = (err) => {
     console.log("This was a Validation error, Please Follow rules");
     console.dir(err.message);
     return err;
};

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError") {
       err = handleValidationErr(err);
    }
    next(err);
});

//Error Handling MiddleWare
app.use((err, req, res, next) => {
    let {status= 500, message= "Some Error"} = err;
    res.status(status).send(message);
})


app.listen(8080, () => {
    console.log("App is listening on Port 8080");
});