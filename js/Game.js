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

  async start(){
    if(gameState === 0){
      player = new Player();  
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   car1 = createSprite(100,200)
   car2 = createSprite(300,200) 
  car3  = createSprite(500,200)
  car4 = createSprite(700,200)
car1.addImage("car1",car11)
car2.addImage("car2",car22)
car3.addImage("car3",car33)
car4.addImage("car4",car44)

  allCars = [car1,car2,car3,car4]
 
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
     player.getRank();

    if(allPlayers !== undefined){
    //  var display_position = 130;
    image(trackk,0,-displayHeight*4,displayWidth,displayHeight*5)
    if(frameCount %50 === 0){
      
    
    coinn = createSprite(random(0,displayWidth),random(0,displayHeight),30,30)
    coinn.addImage("coins",coin)
coin.scale=0.5
    }
    var x = 200
    var y  ;
    var index = 0
      for(var plr in allPlayers){
    index = index+1
    x = x+300
    y = displayHeight-allPlayers[plr].distance
    allCars[index-1].x = x
    allCars[index-1].y = y
    if(index === player.index){
      fill ("green")
      stroke (34)
      ellipse(x,y,100,100)
allCars[index-1].shapeColor = "red"
camera.position.x = displayWidth/2
camera.position.y = allCars[index-1].y

    }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>3860){
      gameState = 2;
      player.rank = player.rank+1;
      Player.updateRank(player.rank)

      
    }
    if(keyIsDown(RIGHT_ARROW) && player.index!== null){
      [allCars]
      player.update();
    }
    


    drawSprites()
  }
end(){

  game.update(2)
    console.log("end")
    console.log(player.rank)
}
}
