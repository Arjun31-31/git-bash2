var list = document.querySelectorAll(".timeline li");

function visible(el){
    var r = el.getBoundingClientRect();
    return(
        r.top>=0 &&
        r.left>0 &&
        r.bottom<window.innerHeight &&
        r.right<window.innerWidth
    );
}

function callback(){
    for(var i = 0;i<list.length;i++){
        if(visible(list[i])){
            list[i].classList.add("inview");
                }
    }
}

window.addEventListener("scroll", callback);