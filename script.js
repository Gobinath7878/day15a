function submitButton(){

    // event.preventDefault();
    var table=document.getElementById("tbody");
    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    var firstName=document.getElementById('firstname').value
    var tx1=document.createTextNode(firstName);
    td1.appendChild(tx1);
    tr.appendChild(td1);

    var td2=document.createElement("td");
    var lastName=document.getElementById('lastname').value
    var tx2=document.createTextNode(lastName);
    td2.appendChild(tx2);
    tr.appendChild(td2);
    
    var td3=document.createElement("td");
    var Address=document.getElementById('address').value
    var tx3=document.createTextNode(Address);
    td3.appendChild(tx3);
    tr.appendChild(td3);
    
    var td4=document.createElement("td");
    var Country=document.getElementById('country').value
    var tx4=document.createTextNode(Country);
    td4.appendChild(tx4);
    tr.appendChild(td4);
    
    var td5=document.createElement("td");
    var Gender=document.getElementById('gender').value
    var tx5=document.createTextNode(Gender);
    td5.appendChild(tx5);
    tr.appendChild(td5);
    
    var td6=document.createElement("td");
    var Pincode=document.getElementById('pincode').value
    var tx6=document.createTextNode(Pincode);
    td6.appendChild(tx6);
    tr.appendChild(td6);
    
    var td7=document.createElement("td");
    var State=document.getElementById('state').value
    var tx7=document.createTextNode(State);
    td7.appendChild(tx7);
    tr.appendChild(td7);
    
    var td8=document.createElement("td");
    var City=document.getElementById('city').value;
    var tx8=document.createTextNode(City);
    td8.appendChild(tx8);
    tr.appendChild(td8);
    
    var td9=document.createElement("td");
    var checkbox=document.getElementsByName('foodItems');
    var checkeditems=0;
    var list=[];
    for(let i=0; i<checkbox.length;i++){
        if(checkbox[i].checked){
            checkeditems++;
            console.log(checkbox[i].value)
            list.push(checkbox[i].value)
        }
    }
    var tx9=document.createTextNode(list);
    td9.appendChild(tx9);
    tr.appendChild(td9);
    
    if(list.length<2){
        alert("Please Select atleast 2 items")
        td9.innerHTML="";
    }
    table.appendChild(tr);
    console.log(table);
    }