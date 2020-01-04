const token = process.env.token;
const prefix = "/"
const Discord = require("discord.js");

var client =  new Discord.Client({disableEveryone: true})


client.on("ready", async () => {

    console.log(  "I am READY!")
    client.user.setActivity ("FOUK with BlazingDragon")

});
 const fs = require("fs");
 client.msgs = require("./msgs.json");


client.on ("message" , (message) => {
    
    console.log(message.author.username);
    console.log(message.content);
    message.content = message.content.toLowerCase();
    mention = message.mentions.users.first();
    if (message.author.bot) return;
    if (message.content.startsWith (prefix + "hello")){
        message.reply ('Hi!')
    }
    if (message.content.startsWith (prefix + "hi")){
        message.reply ('Sup Dup Sup Sup!')

    }
    if (message.content.startsWith (prefix + "yo")){
        message.reply ('Yo,wassup!!')

    }
    if (message.content.includes ("goose")){
        message.channel.send ("Quack quack!!??!!?!")

    }
    if (message.content.includes ("knock knock")){
        message.channel.send ("Who is THERE?")
    }
    if (message.content.includes ("gay" )){
        message.reply ("GET OUT OF THIS SERVER,YOU LITTLE GAE ******,**** U,GET ******* OUT OF HERE")
    }
    
    if (message.content.includes ("gae" )){
        message.reply ("GET OUT OF THIS SERVER,YOU LITTLE GAE ******,**** U,GET ******* OUT OF HERE")


    }

    if (message.content.startsWith(prefix + "write")){

        editedmessage = message.content.slice (6);
        
        client.msgs [message.author.username] = {

            message: editedmessage
        }
        fs.writeFile ("./msgs.json" , JSON.stringify (client.msgs, null, 4), err => {
            if(err) throw err;
            message.channel.send ("message written") ;
        });
    }
    

    if (message.content.startsWith(prefix + "get")){

        let _message = client.msgs[message.author.username].message;
        message.channel.send ("message is :" + _message);
    }



    if (message.content.startsWith(prefix + "send")){
        
        
        if (mention == null){return;}
       
        message.delete();
        mentionMessage = message.content.slice (7);
        mention.send (mentionMessage);
        message.channel.send("done!");

        




    }

    if (message.content.startsWith("kill")){

       

                                          
        if (mention == null){return;}
        mentionMessage = message.content.slice ( 5 );
         for( var i = 0; i < 100;i++){
             mention.send (mentionMessage);

         }
        message.channel.send("Successfully executed" + mention);
     


    }


                      

});

client.login (token);

