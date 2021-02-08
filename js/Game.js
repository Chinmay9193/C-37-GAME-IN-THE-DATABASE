class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("game Start",120,100);
    Player.getPlayerInfo();

    /*Player.getPlayerInfo()
    player1: {distance:0,name: Sky}
    player2: {distance:0,name: rolly}
    player3: {distance:0, name: chin}
    player4: {distance:0, name: nidhi}
    */

    if(allPlayers !== undefined){
      var display_position = 130;
      for (var plr in allPlayers){
        /*plr = player1,player2,player3,player4*/
        if(plr === "player" + player.index){
          fill("red");
        }
        else{
          fill("black")
        }
        display_position = display_position + 20;
        textSize (15);
        text(allPlayers[plr].name + " : " +allPlayers[plr].distance,120,display_position)
      }
    }
      if(keyIsDown(UP_ARROW) && player.index !==null){
        player.distance = player.distance + 50;
        player.update();
        
      }
    }

}
