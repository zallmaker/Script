import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['62895423489481', 'Lin Sec', true],
  ['62895423489481'], 
  ['62895423489481'] 
] //Numeros de owner 

global.mods = ['62895423489481'] 
global.prems = ['62895423489481', '62895423489481', '62895423489481']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'KISUKE┃ᴮᴼᵀ' 
global.author = '@Lin Sec' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/pexstarl47\n' 
global.dygp = 'https://chat.whatsapp.com/HZoqr8hzSEhD5Lkv2eIe05'
global.fgsc = 'https://github.com/zallmods' 
global.fgyt = 'https://null.zallmods.repl.co'
global.fgpyp = 'https://saweria.co/zallmods'
global.fglog = 'https://i.ibb.co/tbHVZZ5/20230528-113117.png' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})