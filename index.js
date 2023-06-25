/* let contacts = [];
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
} */
const url="https://6498805c9543ce0f49e219bd.mockapi.io/api/contacts" ;
$.get(url, (data) => console.log(data));


function addObjectToArray(objectToAdd) {
$.post(url, objectToAdd, (data) => {
    console.log("New Contact Added:", data);
});
}

const newObject = {
    name:"",
    phonenumber:"",
    email:"",
};

function deleteObjectFromArray(objectIdToDelete) {
    $.ajax({
        url: url,
        type: "GET",
        success: function (arrayData) {
            const indexToDelete = arrayData.findIndex(obj => obj.id === objectIdToDelete);

            if (indexToDelete !== -1) {
                arrayData.splice(indexToDelete, 1);
                console.log("Object deleted successfully.");
                console.log("Modified array:", arrayData);
            } else {
                console.log("Object not found in the array");
            }
        }
    });
}

function updateObjectInArray(objectIdToUpdate, updatedObject) {
    const url = "https://6498805c9543ce0f49e219bd.mockapi.io/api/contacts";

    $.ajax({
        url: url,
        type: "GET",
        success: function (arrayData) {
            const indexToUpdate = arrayData.findIndex(obj => obj.id === objectIdToUpdate);

            if (indexToUpdate !== -1) {
                arrayData[indexToUpdate] = { ...arrayData[indexToUpdate], ...updatedObject };
                console.log("Object updated successfully.");
                console.log("Modified array:", arrayData);
            } else {
                console.log("Object not found in the array.");
            }
        }
    });
}
const objectIdToUpdate = "";
const updatedObject = {
    name: "",
    phonenumber: "",
    email: ""
};









 /* function getValue(id) {
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
    })
    }};

    cell5.appendChild(deleteButton);
 */