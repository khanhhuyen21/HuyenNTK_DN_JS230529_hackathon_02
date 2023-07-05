const studentsList = [
  {
    username: "Tran Van A",
    email: "a@gmail.com",
    phone: "1234567",
    country: "ĐN",
    gender: true,
  },
  {
    username: "Tran Van A",
    email: "a@gmail.com",
    phone: "1234567",
    country: "ĐN",
    gender: true,
  },
  {
    username: "Tran Van A",
    email: "a@gmail.com",
    phone: "1234567",
    country: "ĐN",
    gender: true,
  },
];

var students = JSON.stringify(studentsList);
console.log(students);
saveLocalStorage();
function saveLocalStorage() {
  let username = document.getElementById("username_id").value;
  let email = document.getElementById("email_id").value;
  let phone = document.getElementById("phone_id").value;
  let country = document.getElementById("country_id").value;
  let gender = document.getElementById("gender_id").checked;

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("country", country);
  localStorage.setItem("gender", gender);
}

function readLocalStorage() {
  document.getElementById("username_id").value =
    localStorage.getItem("username");
  document.getElementById("email_id").value = localStorage.getItem("email");
  document.getElementById("email_id").value = localStorage.getItem("email");
  document.getElementById("phone_id").value = localStorage.getItem("phone");
  document.getElementById("country_id").value = localStorage.getItem("country");
  document.getElementById("gender_id").checked = localStorage.getItem("gender");
}

let resultTag = document.getElementById("result");

let studentList = [];

function saveData() {
  let username = document.getElementById("username_id").value;
  let email = document.getElementById("email_id").value;
  let phone = document.getElementById("phone_id").value;
  let country = document.getElementById("country_id").value;
  let gender = document.getElementById("gender_id").checked;

  let students = {
    username: username,
    email: email,
    phone: phone,
    country: country,
    gender: true,
  };

  if (i >= 0) {
    //sua thong tin
    studentList[i] = students[i];
  } else {
    studentList.push(students);
  }

  showData();

  return false;
}

function showData() {
  resultTag.innerHTML = "";

  let index = 0;
  for (student of studentList) {
    resultTag.innerHTML += `<tr>
      <td>${index + 1}</td>
      <td>${students.username}</td>
      <td>${students.email}</td>
      <td>${students.phone}</td>
      <td>${students.country}</td>
      td>${students.gender}</td>
      <td>
        <button onclick="editStudent(${index})">Sua</button>
        <button onclick="removeStudent(${index})">Xoa</button>
      </td>
    </tr>`;
    index++;
  }
}

let i = 1;
function editStudent(index) {
  i = index;

  document.getElementById("username_id").value = studentList[index].username;
  document.getElementById("email_id").value = studentList[index].email;
  document.getElementById("phone_id").value = studentList[index].phone;
  document.getElementById("country_id").value = studentList[index].country;
  document.getElementById("gender_id").checked = studentList[index].gender;
}

function removeStudent(index) {
  let option = confirm("Bạn chắc chắn muốn xóa sinh viên này không?");
  if (!option) return;

  studentList.splice(index, 1);

  showData();
}
