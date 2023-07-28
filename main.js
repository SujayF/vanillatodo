let userdata = [];

let login = () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const username = usernameInput.value;
  const password = passwordInput.value;

  const user = {
    username: username,
    password: password,
  };

  userdata.push(user);

  localStorage.setItem("userdata", JSON.stringify(userdata));

  usernameInput.value = "";
  passwordInput.value = "";

  window.location.href = `home.html?username=${encodeURIComponent(username)}`;

  return false;
};

let displayUserName = () => {
  const usernamedata = localStorage.getItem("userdata");

  const usr = JSON.parse(usernamedata);

  const usrnm = usr[0]?.username;
  document.getElementById("usernameDisplay").innerText = usrnm;
};

window.onload = displayUserName;

const task = document.getElementById("task");
const taskList = document.getElementById("taskList");

let createToDo = () => {
  let taskText = task.value.trim();

  if (taskText === "") {
    alert("Please Enter a task");
    return;
  }

  const item = document.createElement("li");
  item.innerText = taskText;
  item.classList.add("li-class");
  taskList.appendChild(item);

   //for updating li items
   //to deleteTask
   let deleteTask = () => {
    taskList.removeChild(item);
  };

  item.addEventListener("dblclick", deleteTask);
  task.value = "";
};


