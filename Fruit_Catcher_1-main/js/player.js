class Player
{ // index = 1, 2, 3
    // name, score, distance
    constructor()
    {
        this.name = null
        this.score = 0
        this.distance = 0
        this.index = null
    }
// to keep a track of the players from database
getCount()
{
    var playerCountRef = database.ref("playerCount")
    playerCountRef.on("value",function (data)
    {
        playerCount=data.val()
    })
}
//count is a variable to keep a track of # of players when we r in the game
//the below function updates the player count in the database
updateCount(count)
{
    database.ref("/").update({
        playerCount:count
    })
}
// updates the info of the players in the databse
update()
{
    var playerIndex = "players/player" + this.index
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        score:this.score
    })
}
//it collects the info of the players from the databse and comes back to the game
getPlayerInfo()
{

}

    display()
    {

    }
}