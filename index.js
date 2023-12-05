const mineflayer = require('mineflayer')
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
const prefix = '!'

const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear, GoalNearXZ } = require('mineflayer-pathfinder').goals

const bot = mineflayer.createBot({
  host: 'Anarkcraft.xyz', // minecraft server ip
  username: 'MUCALOL', // minecraft username
  //password: '12345678' // minecraft password, comment out if you want to log into online-mode=false servers
   //port: 50197,                // only set if you need a port that isn't 25565
   version: "1.16.5",             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})


  //function logar(){
    //bot.on('login', ()=>{
  //bot.chat('/login mucalolbot123')
//})
  //}

 // setTimeout(logar,1000*10)
  function login(){
    
      bot.chat('/login mucalolbot123')
    }
  
  setTimeout(login, 1000*10);
  function entrar(){
    bot.chat('/queue anarkcraft')
  }
  setTimeout(entrar, 1000*20)

 bot.on('chat',(user, message)=>{
  console.log(`[${user}]${message}`)

  if(user == 'MUCALOL')return
  //CRIAR UM COMANDO PRA SORTEAR AS PIADAS E FAZER O BOT ANDAR EM CIRCULO


 }) 


bot.loadPlugin(pathfinder)
bot.once('spawn', () => {
    // A new movement instance for specific behavior
  const defaultMove = new Movements(bot)

  defaultMove.allow1by1towers = false // Do not build 1x1 towers when going up
  defaultMove.canDig = true // Disable breaking of blocks when pathing 
  defaultMove.allowParkour = true
  defaultMove.allowSprinting = true
  defaultMove.scafoldingBlocks = []

  defaultMove.scafoldingBlocks.push(bot.registry.itemsByName['dirt'].id) // Add nether rack to allowed scaffolding items
  bot.pathfinder.setMovements(defaultMove) // Update the movement instance pathfinder uses

  // Do pathfinder things
  // ...


    mineflayerViewer(bot, { port: 19132 , firstPerson: true }) // port is the minecraft server port, if first person is false, you get a bird's-eye view
  })

bot.on('chat', (username, message) => {
  if(username == 'PatoBot'){
    bot.chat('cala boca patobot, mucalol é melhor >:(')
  }
  if (username === bot.username) return
  
  if(!message.startsWith(prefix)){
    return
  }

  const args = message.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()


  
  if(command == 'piada'){
    
    
      
      const number = Math.floor(Math.random()*11)
    
    
    console.log(number)
    if(number == 0){
      bot.chat('smurfdomuca vc disse pra eu acreditar nos meus sonhos, acreditei e consegui ser pai, engravidei a minha tia')
      const number = Math.floor(Math.random()*11)
    }else if(number == 1){
      bot.chat('sabia que os pombos morrem durante o sexo? O último que eu meti o pau morreu')
      const number = Math.floor(Math.random()*11)
    }else if(number == 2){
      bot.chat('você sabe como que come um gato com batatas? amarra as batatas nas patinhas dele e tacale a piroca')
      const number = Math.floor(Math.random()*11)
    }else if(number == 3){
      bot.chat('Ola maninho tudo bem, ontem eu tava na escola e precisava de algo em comum pra chegar nela, injetei meu sangue nela, agora nós dois temos o virus da virus da imunodeficiência humana')
      const number = Math.floor(Math.random()*11)
    }else if(number == 4){
      bot.chat('desentortei a coluna da minha vó no murro, vou virar médico')
      const number = Math.floor(Math.random()*11)
    }else if(number == 5){
      bot.chat('fui comer uma anã e ela pediu para ser dominada, joguei ela pra cima e matei no peito')
      const number = Math.floor(Math.random()*11)
    }else if(number == 6){
      bot.chat('muca chutei o poste da igreja catolica que ficava aqui perto, o padre me puniu estou com o bumbum doendo ')
      const number = Math.floor(Math.random()*11)
    }else if(number == 7){
      bot.chat('acordei nu e logo em seguida fui me pesar na balança, fui expulso da farmacia')
      const number = Math.floor(Math.random()*11)
    }else if(number == 8){
      bot.chat('ate quantos anos de idade vc mamou na sua mae e no seu pai, comigo foi ate os 3 anos e mamo no meu pai ate hoje')
      const number = Math.floor(Math.random()*11)
    }else if(number == 9){
      bot.chat('se um ano pra gente é 7 anos pro cachorro, entao um segundo pra gente é 7 segundos pro cachorro, entao quando eu gozo em 10 minutos a cachorra da sua mae pensa caralho uma hora sem parar esse mlk é um monstro famoso mucalol pica de ferro')
      const number = Math.floor(Math.random()*11)
    }else if(number == 10){
      bot.chat('boa noite smurfdomuca ontem meu pai chegou bebado a noite e bateu nos quatro filhos, sorte que ele errou o apartamento')
      const number = Math.floor(Math.random()*11)
    }else if(number == 11){
      bot.chat('todas essas merdas foram tiradas da live do mu?qui?nha? amigao')
      const number = Math.floor(Math.random()*11)
    }
    
      
    
    
    
 }


  
  if(command == 'coords'){
    const c = bot.entity 
    const l = c.position
    const d = l.x 
    const e = l.z 
    
    bot.chat(`coe meno minhas coordenadas ${d} ${e}`)
    
   
  
  }



  if(command == 'coordenadas'){
    const c = bot.entity 
    const l = c.position
    console.log(`${l.x} ${l.z}`)
  }

  
  if(command == 'seed'){
    bot.chat('Ta a seed ai meu cria 4030416628395652580')
  }

  if(command == 'di'){
    bot.chat(args.join(' '))
  }
  if(command == 'vem'){
    const target = bot.players[username] ? bot.players[username].entity : null
    
      if (!target) {
        bot.chat('coe meno n sei onde tu ta')
        return
      }
      const p = target.position//p == player

     
      bot.pathfinder.setGoal(new GoalNear(p.x, p.y, p.z, 1))
    
  }
  if(command == 'xz'){
    const x = parseInt(args[0])
    
    const z = parseInt(args[1])

    bot.pathfinder.setGoal(new GoalNearXZ(x, z, 1))
  }
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
