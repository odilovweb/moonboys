const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const bot = new Telegraf("7360174228:AAGa2AreX6ICe1d3Eyq_IMQ71DFkpVpZ7iA");

bot.start(async (ctx) => {
  try {
    await ctx.reply("Buy $Mboys 👨‍🚀 and go to the moon 🚀🚀🚀🚀", {
      reply_to_message_id: ctx.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Buy $MBoys 💎",
              url: "https://dexscreener.com/bsc/0xC28cf3c35E63cBB13aaB281FA941fec472A46c0C",
            },
          ],
          [
            {
              text: "Telegram Community 📢",
              url: "https://t.me/mboyscoin",
            },
          ],
        ],
      },
    });
  } catch (e) {
    console.log(e);
  }
});

bot.command("help", (ctx) => {
  try {
    ctx.reply(
      `
Ushbu botdagi buyruqlar 👇

/start- botni qayta ishga tushirish
/community - telegram community linki
/buy - $MBoys tokenini sotib olish uchun link
/contract - $MBoys tokenini kontrakt adresi

/help - Botdagi barcha buyruqlar`,
      { reply_to_message_id: ctx.message.message_id }
    );
  } catch (e) {
    console.log(e);
  }
});

bot.command("community", (ctx) => {
  try {
    ctx.reply(
      `
$MBoys ning telegram communtiysi: @mboyscoin `,
      {
        reply_to_message_id: ctx.message.message_id,
        reply_markup: {
          inline_keyboard: [
            [{ text: "Communityga qo'shilish", url: "https://t.me/mboyscoin" }],
          ],
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
});

bot.command("buy", (ctx) => {
  try {
    ctx.replyWithVideo("https://t.me/mirzohid_odilov/12", {
      reply_to_message_id: ctx.message.message_id,
      caption: `Coin qanday sotib olish mumkin!!!
    
    🚀MBoys Coin 🪙 
    
    🚀 Total Supply: 23,000,000,000 
    
    🔥 Contract adress: 0x8f95cac371152f44BB7D05f551de15571404c3f2`,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Sotib olish",
              url: "https://poocoin.app/tokens/0x8f95cac371152f44bb7d05f551de15571404c3f2",
            },
          ],
        ],
      },
    });
  } catch (e) {
    console.log(e);
  }
});

bot.command("contract", (ctx) => {
  try {
    ctx.reply("0x8f95cac371152f44BB7D05f551de15571404c3f2", {
      reply_to_message_id: ctx.message.message_id,
    });
  } catch (e) {
    console.log(e);
  }
});

bot.on("message", async (ctx) => {
  const text = await ctx.message.text.toLowerCase();
  if (text.includes("kontrakt")) {
    try {
      ctx.reply("0x8f95cac371152f44BB7D05f551de15571404c3f2", {
        reply_to_message_id: ctx.message.message_id,
      });
    } catch (e) {
      console.log(e);
    }
  }
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
