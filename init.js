const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() =>{
    console.log("Connection Successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = ([
    {
    from : "Mind",
    to : "Lala",
    msg : "Let's play Battleground Now",
    created_at : new Date(),
},
{
    from : "Tony",
    to : "Hulk",
    msg : "Come Fight",
created_at : new Date(),
},
{
    from : "Spider",
    to : "Black Spider",
    msg : "I am Better",
    created_at : new Date(),
},
{
    from : "Human",
    to : "Lion",
    msg : "Battle is going to interesting",
    created_at : new Date(),
},
]);

Chat.insertMany(allChats);