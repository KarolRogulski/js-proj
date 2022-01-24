class Todo{
  constructor(text, completed){
      this.text = text;
      this.completed = completed;
  }
  getT(){
    return text;
  }
}



class Container {
  constructor(val){
      this.data = val;
  }
}

function newArray(data){
  r = []
  if(data.data.length !=0){
  data.data.forEach(element => {
    r.push(new Todo(element.text, element.completed));
  })}
  return r;
}

function addTask(data, task){
  r = newArray(data);
  r[r.length] = new Todo(task.text, task.completed);
  return new Container(r);
}
//function newTask()
var newT = val => new Todo(val, false);

function updateTask(data, task, index){
  r = newArray(data);
  r[index] = new Todo(task.text, task.completed);
  return new Container(r);
}
function deleteTask(data, index){
  result = newArray(data);
  result.splice(index, 1);
  return new Container(result);
}
function filterByCompleted(data, wantTrue){
  r = newArray(data);
  e = r.filter(x =>
    x.completed == wantTrue)
  return new Container(e);
}
function logData(data){
  data.data.map(x => console.log(x));
}

function test(){
  var arr = new Container([]);
  names = ["test1", "test2", "test3", "test4", "test5"]

  console.log(arr);
  names.forEach(element => {
    arr = addTask(arr, newT(element))
  })
  console.log(arr);

  console.log(arr);
  arr = updateTask(arr, new Todo("updated", true), 2);
  console.log(arr);
  deleteTask(arr, 1);

  arr = filterByCompleted(arr, true);
  console.log(arr)
  logData(arr);
}

test()
