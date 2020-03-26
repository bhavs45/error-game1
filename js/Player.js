class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;m
    this.rank=  null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getRank(){
    var getRank= database.ref('rank');
    getRank.on("value",(data)=>{
this.rank = data.val()
    })

  }
  static updateRank(rank0){
  database.ref('/').update({
    rank:rank0
  })
}

}
