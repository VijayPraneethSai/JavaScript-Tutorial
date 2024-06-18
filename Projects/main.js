let taskEntry = document.getElementsByClassName("task-table");
let task = document.getElementById("content");
let category = document.getElementById("category1");
let tableRow = document.getElementsByClassName("task-table-row");
let button = document.getElementsByClassName("add-task-button");

let t = task.value;
let c = category.value;
task.addEventListener('input', function(){
  let a = this.value;
   t = a;
});
category.addEventListener('input', function(){
let a = this.value;
c = a;
});


button.addEventListener('click', function(){
let tr1 = taskEntry.appendChild(tr);
tr1.className = "task-table-row";
let td1 = tr1.appendChild(td);
let taskName = document.createTextNode(t);
td1.appendChild(taskName);

let td2 = tr1.appendChild(td);
let catName = document.createTextNode(c);
td2.appendChild(catName);



//  let t1 =  taskEntry.appendChild(tr);
//   t1.className = "task-table-row";
//   let td1 = t1.appendChild(td);
//   let taskText = document.createTextNode(t);
//   td1.appendChild(taskText);

//   let td2 = t1.appendChild(td);
//   let catText = document.createTextNode(c);
//   td2.appendChild(catText);



});