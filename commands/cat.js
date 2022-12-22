const url ='https://cataas.com/cat?json=true';
const start='https://cataas.com';
const fetch = require('node-fetch')
module.exports= {
    async execute(message,client){
        const res = await fetch(`${url}`);
        const data = await res.json();
        console.log(data)
        console.log(res);
        const embed ={
            title: "Cat",
            url:start,//it's the same
            image:{url:`${start+data.url}`},
            colour:16133127,
            footer:{text:`using cataas.com`},
        }
        message.utils.sendEmbed(embed,message)
    }
}