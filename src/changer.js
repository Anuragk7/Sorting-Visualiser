const a = document.getElementById("btn")
a.addEventListener('click', changer);
const changer = ()=> {
    for (let i=0; i<100000; i++){
        const a = document.getElementById("bar")
        if (i%2 === 0){
           a.style["backgroundColor"] = "blue";
        }
        else {
            a.style["backgroundColor"] = "red";
        }
    }
}