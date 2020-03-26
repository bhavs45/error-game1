class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.button1 =  createButton('reset')
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    this.button1.position(displayWidth-100,25)

    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50,15);

    this.input.position(displayWidth/2-20,displayHeight/2-80);
    this.button.position(displayWidth/2,displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2,displayHeight/4);
    });
this.button1.mousePressed(()=>{
player.updateCount(0)
game.update(0)

}
)
  }
}
