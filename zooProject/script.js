function newMonkey(){
    console.log("making new monkey");
    let div=document.createElement("div");
    div.className = "monk";
    
    let randomY = Math.random()*200-100;
    p.style.top=randomY+"px";
    let randomX = Math.random()*200-100;
    p.style.left + randomX+"px";

    let p=document.createElement("p");
    
    p.innerText = "name";
    div.append(p);

    enclosure.append(div);

}
