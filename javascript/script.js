q1 = document.getElementsByClassName("cu");
// q2 = document.getElementById("q2");
// q3 = document.getElementById("q3");
// q4 = document.getElementById("q4");
// q5 = document.getElementById("q5");
// q6 = document.getElementById("q6");
// q7 = document.getElementById("q7");
// q8 = document.getElementById("q8");
// q9 = document.getElementById("q9");
// q10 = document.getElementById("q10");
// q11 = document.getElementById("q11");
// q12 = document.getElementById("q12");
// q13 = document.getElementById("q13");
// q14 = document.getElementById("q14");
// q15 = document.getElementById("q15");
// q16 = document.getElementById("q16");

let click = 0;
function mudarCor(event){
    if(click < 2 && event.target.style.backgroundColor != "red"){
        event.target.style.backgroundColor = "red";
        console.log(event.target.tagName);
        console.log(click);
        event.onclick = click++;
    }
}
// q1.onclick = mudarCor;
// q2.onclick = mudarCor;
// q3.onclick = mudarCor;
// q4.onclick = mudarCor;
// q5.onclick = mudarCor;
// q6.onclick = mudarCor;
// q7.onclick = mudarCor;
q8.onclick = mudarCor;
q9.onclick = mudarCor;
// q10.onclick = mudarCor;
// q11.onclick = mudarCor;
// q12.onclick = mudarCor;
// q13.onclick = mudarCor;
// q14.onclick = mudarCor;
// q15.onclick = mudarCor;
// q16.onclick = mudarCor;



