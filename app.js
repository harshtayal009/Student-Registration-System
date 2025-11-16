let tbody=document.querySelector("tbody");
let form=document.querySelector("form");
if(form)
{
    //add eventlistner on form
    form.addEventListener("submit",function(e)
    {
           e.preventDefault();
           let name=document.querySelector("#student_name").value;
            let id=document.querySelector("#student_id").value;
           let mail=document.querySelector("#student_email").value;
           let contact=document.querySelector("#student_contact").value;
           let users=JSON.parse(localStorage.getItem('users') || '[]');
           users.push({name,id,contact,mail});
           localStorage.setItem("users",JSON.stringify(users));
           this.reset();
    });
}
if(tbody)
{
    showtabledata();
}
// her we add new row by using fxn 
function showtabledata()
{
    let users=JSON.parse(localStorage.getItem("users") || "[]");//convert into js object
    tbody.innerHTML="";
    users.forEach((u,index)=>{
        tbody.innerHTML +=`
        <tr>
           <td>${u.name}</td>
           <td>${u.id}</td>
           <td>${u.contact}</td>
           <td>${u.mail}</td>
           <td><button onclick="editusers(${index})">Edit</button></td>
           <td><button onclick="deleteusers(${index})">Delete</button></td>
        </tr>`;
    });
}
// Delete function
function deleteusers(index)
{
    let users=JSON.parse(localStorage.getItem("users") || "[]");
    users.splice(index,1);
    localStorage.setItem("users",JSON.stringify(users));
    showtabledata();
}
//EDIT FUNCTION
function editusers(index)
{
     let users=JSON.parse(localStorage.getItem("users") || "[]");
     let newname=prompt("enter a new name ",users[index].name);
     let newcontact=prompt("enter a new contact ",users[index].contact);
     let newmail=prompt("enter a new mail ",users[index].mail);
     if(newname && newcontact && newmail)
     {
        users[index].name=newname;
        users[index].contact=newcontact;
        users[index].mail=newmail;
        localStorage.setItem("users",JSON.stringify(users));
        showtabledata();
     }
}