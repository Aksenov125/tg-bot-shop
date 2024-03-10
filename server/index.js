const TelegramBot = require('node-telegram-bot-api');


const token = '7151472516:AAGy1CgChK3kZSz_iFts389gSsmCxzG5zJg';

const webApp = 'https://ya.ru'

const bot = new TelegramBot(token, {polling: true});



bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text
  try {
    if (text === '/start'){
      await bot.sendMessage( chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup: {
          keyboard: [
            [{text: 'Заполни форму'}]
          ]
        }
      })
  
      await bot.sendMessage( chatId, 'Заходи в наш интернет магазин', {
        reply_markup: {
          inline_keyboard: [
            [{text: 'Сделать заказ', web_app:{url: webApp}}]
          ]
        }
      })
    }
  } catch ({message}) {
    console.log(message);
  }


})
