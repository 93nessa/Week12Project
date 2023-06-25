let contacts = [];
let contactId = 0;

class Contact{
    constructor(name, phonenumber, email){
        this.name = name;
        this.phonenumber = phonenumber;
        this.email = email;
    }

    addContacts () {
       contacts.push(this);
}
}

function getValue(id) {
   return document.getElementById(id).value;
    
}

function create(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click',action);
    return element;
}
create( "newContact", () => {
    const contact = new Contact(
        getValue("contactName"),
        getValue("contactPhone"),
        getValue("contactEmail")
      );
      contact.addContacts();
      createTable(contacts);
      document.getElementById("contactName").value = "";
      document.getElementById("contactPhone").value = "";
      document.getElementById("contactEmail").value = "";
})

function createTable (data) {
    var contactsTable = document.getElementById("contacts");

    while (contactsTable.firstChild){
        contactsTable.removeChild(contactsTable.firstChild);
    }

    for (let i = 0; i < data.length; i++ ){
        var table = document.getElementById('contacts')
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = [i];
        cell2.innerHTML = data[i].name;
        cell3.innerHTML = data[i].phonenumber;
        cell4.innerHTML = data[i].email;
        
        var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function() {
      contacts.splice(i, 1); // Remove the contact from the array
      createTable(contacts); // Refresh the table
    });

    cell5.appendChild(deleteButton);            
           

    }
    
      }
