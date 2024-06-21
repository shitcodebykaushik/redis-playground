const client = require('./client');

async function init () {
  //  await client.set("msg:7", "Hey from rust dev");
  // Using expiery method to delete the value automatically from the databse of the redis ,
  await client.expire("msg:1",10)
  const msg = await client.get ("msg:1");
    console.log("Message->",msg);
}
init();