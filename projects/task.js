
let allData = []; // Saare records yahan store honge

function submitData() {
    var details = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        pwd: document.getElementById("pwd").value,
        address: document.getElementById("address").value,
        age: document.getElementById("age").value,
        status: document.getElementById("status").value,
        cls: document.getElementById("class").value,
        year: document.getElementById("year").value,
        branch: document.getElementById("branch").value,

        m1: parseFloat(document.getElementById("m1").value),
        m2: parseFloat(document.getElementById("m2").value),
        m3: parseFloat(document.getElementById("m3").value),
        m4: parseFloat(document.getElementById("m4").value),
        m5: parseFloat(document.getElementById("m5").value),
    };

    var total = details.m1 + details.m2 + details.m3 + details.m4 + details.m5;
    details.percentage = ((total / 500) * 100);

    allData.push(details);
    renderTable();
}

function pwd() {
    var l = document.getElementById("pwd").value;
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

function renderTable() {
    let table = document.getElementById("outputTable");

    // Purane sab <tr> (except heading) remove karo
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Naye rows add karo
    for (let i = 0; i < allData.length; i++) {
        let row = table.insertRow();

        row.insertCell(0).innerText = allData[i].name;
        row.insertCell(1).innerText = allData[i].mobile;
        row.insertCell(2).innerText = allData[i].pwd;
        row.insertCell(3).innerText = allData[i].address;
        row.insertCell(4).innerText = allData[i].age;
        row.insertCell(5).innerText = allData[i].status;
        row.insertCell(6).innerText = allData[i].cls;
        row.insertCell(7).innerText = allData[i].year;
        row.insertCell(8).innerText = allData[i].branch;
        row.insertCell(9).innerText = allData[i].percentage + "%";

        // Delete Button
        let btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.onclick = function () {
            allData.splice(i, 1); // Array se delete
            renderTable();        // Table ko dubara banaao
        };
        row.insertCell(10).appendChild(btn);
    }
}
