let chooseElment;

const move = function(element) {
    const elements = document.querySelectorAll(".element");

    elements.forEach(element => {
        element.addEventListener("mousedown", () =>{
            element.style.position = "absolute";
            chooseElment = element;

            document.onmousemove = (e) => {
                var x = e.pageX
                var y = e.pageX


                chooseElment.style.left = x -50 + "px"
                chooseElment.style.top = y -50 + "px"

                console.log(chooseElment);
            }
        })
    })
    document.onmouseup = function(e){
        chooseElment = null
    }
}  