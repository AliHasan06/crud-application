let id = null; 
document.addEventListener('DOMContentLoaded', SelectData);

function manageData() {
  document.getElementById("msg").innerHTML = "";

  let name = document.getElementById("name").value;

  if (name === "") {
    document.getElementById("msg").innerHTML = "Please enter the name";
    return; }

  let arr = JSON.parse(localStorage.getItem("crud")) || [];

  if (id === null) {
    arr.push(name);
    document.getElementById("msg").innerHTML = "Data added";
  } else {
    arr[id] = name;
    document.getElementById("msg").innerHTML = "Data updated";
    id = null; }

  localStorage.setItem("crud", JSON.stringify(arr));
  document.getElementById("name").value = "";
  SelectData();
}

function SelectData() {
  let arr = JSON.parse(localStorage.getItem("crud")) || [];
  let html = "";
  let sno = 1;
  
  for (let i = 0; i < arr.length; i++) {
    html += `<tr>
      <td>${sno}</td>
      <td>${arr[i]}</td>
      <td>
        <a href="javascript:void(0)" onclick='EditData(${i})'>Edit</a>&nbsp;
        <a href="javascript:void(0)" onclick='DeleteData(${i})'>Delete</a>
      </td>
    </tr>`;
    sno++;
  }
  
  document.getElementById("root").innerHTML = html;
}

function EditData(rid) {
  id = rid;
  let arr = JSON.parse(localStorage.getItem("crud"));
  document.getElementById("name").value = arr[rid];
}

function DeleteData(rid) {
  let arr = JSON.parse(localStorage.getItem("crud"));
  arr.splice(rid, 1);
  localStorage.setItem("crud", JSON.stringify(arr));
  SelectData();
}
