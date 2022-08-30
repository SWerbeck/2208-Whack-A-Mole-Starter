let score = 0;


let holes = $("hole")



holes.push(document.getElementsByClassName("hole"))

// holes[0][2].className = "mole"

console.log(holes)


function ranNum(){
   
  for (let i = 0; i < holes[0].length; i++){
    holes[0][i].className = "hole"
  }
   

    let num = Math.floor(Math.random()*9)
   holes[0][num].className = "mole"
   

  
}



setInterval(function () {ranNum()}, 1000)

const whack = document.getElementById("mole")

whack.addEventListener("click", function(){
    alert()
})
