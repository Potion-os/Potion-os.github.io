var drag;

function dragMove(id){
    var element = document.getElementById(id);
    element.style.position = "absolute";
    element.onmousedown = function(){
        drag = element;
    }
}

document.onmouseup = function(e){
    drag = null;
}

document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

    drag.style.left = x + "px";
    drag.style.top = y = "px";
}