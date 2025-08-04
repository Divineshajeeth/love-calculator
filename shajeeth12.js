function calculate(name1, name2) {
    let n = Math.random();
    n = n * 100;
    n = Math.floor(n + 1);
    
      console.log(n);

    if (n > 85) {
        return "yore score is" + n + ":" +  name1 + " And " + name2 +" world famous couple 🥰 ";
    }
    else if (n > 60 && n < 80) {
        return "your score is " + n + ":" + name1 + " And " + name2 + " good couplen 💑";
    }
    else if ( 40 >n && n < 50) {
        return "your score is " + n +":" + name1 + " And " + name2 + " normal couple 😊";
    }
    else {
        return "your score is " + n + ":" + name1 + " And " + name2 + " inappropriate couple 😩 ";
    }
} function calculateLove(callback) {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value; 
    if (!name1 || !name2) {
        document.getElementById("result").innerText = "enter names";
        return;

    } const result = callback(name1, name2);
    document.getElementById("result").innerText ="Result:" + result ;

}
