# CODER tg/@FUSUF github/@Quiec#
# @ASENAUSERBOT #
# PLEASE DON'T DELETE THIS LINES (IF YOU KANG) #

from telethon import events
import asyncio
from userbot.events import register
from userbot.cmdhelp import CmdHelp

@register(outgoing=True, pattern="^.stag ?(.*)")
async def stag(event):
    if not event.is_reply:
        return await event.edit('```Lütfen bir mesaja yanıt verin!```')
    
    sure = event.pattern_match.group(1)
    if (sure == ''):
        sure = 1.5
    else:
        try:
            sure = float(sure)
        except:
            sure = 1.5
    await event.edit(f'```{sure} saniye baz alınıyor...```')
    mesaj = await event.get_reply_message()
    await event.edit('```Gruplar getiriliyor...```')
    gruplar = await event.client.get_dialogs()
    await event.edit(f'```{len(gruplar)} adet sohbet bulundu! Gruplar seçiliyor...```')
    
    i = 0
    for grup in gruplar:
        if grup.is_group:
            await event.edit(f'```{grup.name} grubuna mesajınız gönderiliyor...```')
            try:
                await grup.send_message(mesaj)
            except:
                await event.edit(f'```❌ {grup.name} grubuna mesajınız gönderilemedi!```')
                await asyncio.sleep(sure)
                continue
            i += 1
            await event.edit(f'```✅ {grup.name} grubuna mesajınız gönderildi!```')
            await asyncio.sleep(sure)
    await event.edit(f'```✅ {i} adet gruba mesajınız gönderildi!```')

Komut = CmdHelp('stag')
Komut.add_command('stag', '<süre>', 'Yanıt verdiğiniz mesajı bulunduğunuz tüm gruplara gönderir.', 'stag 1')
Komut.add_info('İsterseniz komutun yanına süre yazabilirsiniz. @fusuf tarafından yapılmıştır.')
Komut.add()
