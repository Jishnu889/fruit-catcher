class Form
{
constructor()
{
this.input=createInput("name")
this.button=createButton("play")
this.reset=createButton("reset")
this.title=createElement("h1")
this.greeting=createElement("h2")

}
hide()
{
this.input.hide()
this.button.hide()
this.greeting.hide()
this.title.hide()

}
display()
{
this.title.html("Fruit Catch")
this.title.position(350,50)
this.title.style("font-size","70px")
this.title.style("color","blue")
this.input.position(550,400)
this.input.style("width","200px")
this.input.style("height","20px")
this.input.style("background","pink")
this.button.position(560,500)
this.button.style("width","200px")
this.button.style("height","40px")
this.button.style("background","pink")
this.reset.position(900,660)
this.reset.style("width","100px")
this.reset.style("height","30px")
this.reset.style("background","pink")
//creating an arrow function()=>{}
this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
this.greeting.html("Hello " + "Jishnu")
this.greeting.position(400,250)
this.greeting.style("color","white")
this.greeting.style("font-size","100px")
})
}





}