const commandargs=[
  {
    name:"say",
    params:"<text>",
    description:"In multiplayer, sends <text> to all players."
  },
  {
    name:"title",
    params:"<x> <y> <top/world> <duration> <text>",
    description:"Emits <text> to all players."
  },
  {
    name:"title",
    params:"<x> <y> <functionname> <arguments>",
    description:"Runs an UI function called <functionname> that can show text in various forms."
  },
  {
    name:"setblock",
    params:"<x> <y> <block> [rotation] [team] [replace/keep/build/force]",
    description:"Sets the tile at <x,y> to the specified <block>."
  },
  {
    name:"execute",
    params:"<at> <x> <y> <command>",
    description:"Executes a command from another tile's perspective."
  },
  {
    name:"execute",
    params:"<as> <target> <command>",
    description:"Executes a command from another unit's perspective."
  }
];

this.global.commandargs=commandargs;
const commandblockf = this.global.commandblocks;
for(let i=0;i<commandargs.length;i++){
  //String text, String params, String description, Cons<String[]> runner
  let a=commandargs[i];
  Vars.netServer.clientCommands.register(a.name,a.params,a.description,run((arg,player)=>{
    let commandname=a.name;
    if(!player.isAdmin){
      player.sendMessage("[scarlet]You're not admin![]");
      return;
    }
    var ret=commandblockf.command(player,commandname+'"'+arg.join('" "')+'"',null,commandname+'"'+arg.join('" "')+'"',false);
    if(ret) player.sendMessage("[green]Command successfully executed.[]");
  }));
}
