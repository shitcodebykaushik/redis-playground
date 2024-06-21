const client = require('./client');

async function init () {
    await client.lpush("msg",1);
    await client.lpush("msg",10);
    await client.lpush("msg",100);
    await client.lpush("msg",1000);
    await client.lpush("msg",10000);
    await client.lpush("msg",100000);
    await client.lpush("msg",1000000);
    await client.lpush("msg",10000000);
    await client.lpush("msg",100000000);
    await client.lpush("msg",10000000000);

    const result = await client.rpop ("msg");
    console.log(result);
}
init();