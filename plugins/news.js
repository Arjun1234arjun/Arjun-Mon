/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'news ?(.*)', fromMe: false, desc: Lang.NEWS_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_CATEGORY);
	const url = `https://inshortsapi.vercel.app/news?category=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY +':* ```' + match[1] + '```\n\n\n' +
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[0].title + '```\n' + 
                '*📰 ' + Lang.NEWS +':* ```' + json.data[0].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[0].readMoreUrl + '```\n\n' +
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[1].title + '```\n' +                                                                         
		'*📰 ' + Lang.NEWS +':* ```' + json.data[1].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[1].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[2].title + '```\n' +
                '*📰 ' + Lang.NEWS +':* ```' + json.data[2].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[2].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[3].title + '```\n' +
   	        '*📰 ' + Lang.NEWS +':* ```' + json.data[3].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[3].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[4].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[4].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[4].readMoreUrl + '```\n\n'+ 
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[5].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[5].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[5].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[6].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[6].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[6].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[7].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[7].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[7].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[8].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[8].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[8].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[9].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[9].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[9].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[10].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[10].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[10].readMoreUrl + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDC, MessageType.text);
	}
});

Asena.addCommand({pattern: 'fulleva ?(.*)', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (message.jid === '919562803423-1627735504@g.us') {
 
             return;
         }
         let regex1 = new RegExp('Bro')
         let regex2 = new RegExp('name')
         let regex3 = new RegExp('bot')
         let regex4 = new RegExp('Amalser')
         let regex5 = new RegExp('Amal')
         let regex6 = new RegExp('git')
         let regex7 = new RegExp('Who are you')
         let regex8 = new RegExp('send')
         let regex9 = new RegExp('Di')
         let regex10 = new RegExp('bye')
         let regex11 = new RegExp('Support')
         let regex12 = new RegExp('Myre')
         let regex13 = new RegExp('myre')
         let regex14 = new RegExp('Fuck')
         let regex15 = new RegExp('fuck')
         let regex16 = new RegExp('Sex')
         let regex17 = new RegExp('version')
         let regex18 = new RegExp('spam')
         if (regex1.test(message.message)) {              
             await message.client.sendMessage(message.jid,'to get all commands type .help', MessageType.text, {quoted: message.data })
         } 
         else if (regex2.test(message.message)) {
            await message.client.sendMessage(message.jid,'my name is Amalser' , MessageType.text, {quoted: message.data })
         }
          else if (regex3.test(message.message)) {
             await message.client.sendMessage(message.jid,'yes tell me', MessageType.text, {quoted: message.data })
         }
         else if (regex4.test(message.message)) {
            await message.client.sendMessage(message.jid,'ʏᴇꜱ ᴛʜᴀᴛꜱ ᴍᴇ', MessageType.text, {quoted: message.data })
         }
         else if (regex5.test(message.message)) {
           await message.client.sendMessage(message.jid,'i know him he is my creator', MessageType.text, {quoted: message.data })
         }
          else if (regex6.test(message.message)) {
            await message.client.sendMessage(message.jid,'\n*Amalser v1 ❣️*\n*github.com/cyberchekuthan/Amalser_v1*', MessageType.text, {quoted: message.data })
         }
          else if (regex7.test(message.message)) {
            await message.client.sendMessage(message.jid,'```I am Amalser.```', MessageType.text, {quoted: message.data })
         }
          else if (regex8.test(message.message)) {
            await message.client.sendMessage(message.jid,'what', MessageType.text, {quoted: message.data })
         }
          else if (regex9.test(message.message)) {
            await message.client.sendMessage(message.jid,'enthada kutta', MessageType.text, {quoted: message.data })
         }
         else if (regex10.test(message.message)) {
           await message.client.sendMessage(message.jid,'```oh, ninnod arenkilm ivde nikkan paranjo..poo mister```', MessageType.text, {quoted: message.data })
         }
         else if (regex11.test(message.message)) {
           await message.client.sendMessage(message.jid,'```Farhan ❤️ Afnan ❤️ Adhithari ❤️```', MessageType.text, {quoted: message.data })
         }
         else if (regex12.test(message.message)) {
           await message.client.sendMessage(message.jid,'```Your Father man stupid country fellow🤙```', MessageType.text, {quoted: message.data })
         }      
          else if (regex13.test(message.message)) {
            await message.client.sendMessage(message.jid,'```I the name of father get lost man😏 You are a kundan```', MessageType.text, {quoted: message.data })
         }
          else if (regex14.test(message.message)) {
            await message.client.sendMessage(message.jid,'```I think you are gay am i correct 😂not this is the place to call that```', MessageType.text, {quoted: message.data })
         }
          else if (regex15.test(message.message)) {
            await message.client.sendMessage(message.jid,'```you want sex then call call girl baby not here sorry```', MessageType.text, {quoted: message.data })
         }
         else if (regex16.test(message.message)) {
           await message.client.sendMessage(message.jid,'```Go away Gay man🏃‍♂️this is not fucking group```', MessageType.text, {quoted: message.data })
         }
         else if (regex17.test(message.message)) {
           await message.client.sendMessage(message.jid,'```I am nagavalli season 2😂 podaa poo poyi kala parikan nokk```', MessageType.text, {quoted: message.data })
         }
         else if (regex18.test(message.message)) {
           await message.client.sendMessage(message.jid,'*Dont spam ✅️*\n*Warning ⚠️*', MessageType.text, {quoted: message.data })
         }
       
 }));
