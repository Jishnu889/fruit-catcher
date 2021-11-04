class Game
{
    constructor()
    {

    }
    // its a function to find the current state  of the gameState in the data base
    getState()
    {
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    // update is a function to update the value of the game state in the data base and state is a variable 
    //created by the player to keep a track of the gamestate in the game
    update(state)
    {
        database.ref("/").update({
            gameState:state
        })
    }

    async start()
    {
        if(gameState==0)
        {
            player= new Player()
            var playerCountRef=await database.ref("playerCount").once("value")
            if(playerCountRef.exists())
            {
                playerCount=playerCountRef.val()
            }
            form=new Form()
            form.display()
        }
    }

    play()
    {

    }

    end()
    {
        console.log("Game Over")
    }
    
    display()
    {

    }
}