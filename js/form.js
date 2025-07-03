  function checkfname() {
        var f = document.getElementById("fname").value;
        var l = f.length
        console.log(l);
        if (l < 4) {
            document.getElementById("firstname").textContent = "length should be greater than 4."
            document.getElementById("firstname").style.visibility = "visible";
            document.getElementById("firstname").style.color = "red";
        }
        else {
            document.getElementById("firstname").style.visibility = "hidden";
        }
    }
    function checklname() {
        var f = document.getElementById("lname").value;
        var l1 = f.length;
        if (l1 < 4) {
            document.getElementById("lastname").textContent = "length should be greater than 4."
            document.getElementById("lastname").style.visibility = "visible";
            document.getElementById("lastname").style.color = "red";
        }
        else {
            document.getElementById("lastname").style.visibility = "hidden";
        }

    }
    function checkmob() {
        var f = document.getElementById("mob").value;
        var l = f.length;
        if (l < 10) {
            document.getElementById("no").textContent = "length should be greater than 10.";
            document.getElementById("no").style.visibility = "visible";
            document.getElementById("no").style.color = "red";
        }
        else {
            document.getElementById("no").style.visibility = "hidden";
        }

    }
    function chectmail() {
        var f = document.getElementById("email").value;
        if (!(f.includes("@") && f.includes(".com"))) {
            document.getElementById("mail").textContent = "must contain @ and .com";
            document.getElementById("mail").style.visibility = "visible";
            document.getElementById("mail").style.color = "red";

        }
        else {
            document.getElementById("mail").style.visibility = "hidden";
        }

    }
     function pass() {
        var l = document.getElementById("pass").value;
        var len = l.length;
        var upper = /[A-Z]/;
        var low = /[a-z]/;
        var num = /[0-9]/;
        var sp = /[@!#$%^&*<./;]/;
        if (len < 8) {
            document.getElementById("len").textContent = "length should be greater than 8.";
            document.getElementById("len").style.visibility = "visible";
            document.getElementById("len").style.color = "red";
        }
        else {
            document.getElementById("len").style.visibility = "hidden";
        }
        if ((!(upper.test(l)))) {
            document.getElementById("cap").textContent = "must have capital";
            document.getElementById("cap").style.visibility = "visible";
            document.getElementById("cap").style.color = "red";
        }
        else {
            document.getElementById("cap").style.visibility = "hidden";
        }
        if ((!(low.test(l)))) {
            document.getElementById("small").textContent = "must have small letter";
            document.getElementById("small").style.visibility = "visible";
            document.getElementById("small").style.color = "red";
        }
        else {
            document.getElementById("small").style.visibility = "hidden";
        }
        if ((!(num.test(l)))) {
            document.getElementById("number").textContent = "must have number";
            document.getElementById("number").style.visibility = "visible";
            document.getElementById("number").style.color = "red";
        }
        else {
            document.getElementById("number").style.visibility = "hidden";
        }
        if ((!(sp.test(l)))) {
            document.getElementById("spchar").textContent = "must have special character";
            document.getElementById("spchar").style.visibility = "visible";
            document.getElementById("spchar").style.color = "red";
        }
        else {
            document.getElementById("spchar").style.visibility = "hidden";

        }
    }