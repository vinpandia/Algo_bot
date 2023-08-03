const  axios  = require('axios');
const { Telegraf } = require('telegraf');


const bot = new Telegraf('6669277595:AAGQlhqt6_oGQwc6n9ejJfuPRYv6ajDCikk');

bot.start((ctx) => ctx.reply('Welcome to Algo_bot made by Vinayak \n This bot will send you most optimized code for searching and sorrting algorithms'));

bot.command('BinarySearch' , async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/vinpandia/algorithms/main/Binary%20Search');
    console.log(response.data);
    return ctx.reply(response.data);
})
bot.command('LinearSearch' , async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/vinpandia/algorithms/main/linear%20serach');
    console.log(response.data);
    return ctx.reply(response.data);
})
bot.command('QuickSort' , async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/vinpandia/algorithms/main/quick%20sort');
    console.log(response.data);
    return ctx.reply(response.data);
})
bot.command('SelectionSort' , async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/vinpandia/algorithms/main/selection%20sort');
    console.log(response.data);
    return ctx.reply(response.data);
})
bot.command('InsertionSort' , async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/vinpandia/algorithms/main/insertion%20sort');
    console.log(response.data);
    return ctx.reply(response.data);
})

bot.on('sticker', (ctx) => ctx.reply('❤️'));

bot.launch();