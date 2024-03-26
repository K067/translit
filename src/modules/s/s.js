//************Global variables************//

// Add list items botton.
const addTaskBtn = document.getElementById('my-form');
// Get the input field item task.
const itemTask = document.getElementById('input-field');
// Grab the event Delegation to delete items.
const ul = document.getElementsByClassName('list-items')[0];
// Get the clear task button.
const cleaTask = document.getElementById('clear');

// Get the label item is empty.
const labelList = document.getElementById('label-content');
labelList.innerHTML = 'List item its empty';

let orderNumber = 1;


//************Load EventListeners************//
loadEventsListeners();

//************ Add Event Listeners************//
function loadEventsListeners() {
  // DOM LOAD event
  document.addEventListener('DOMContentLoaded', getTasks);
  // addTask
  addTaskBtn.addEventListener('submit', addTask);
  // Delete task event
  ul.addEventListener('click', deleteTask);

  // Clear Task.
  cleaTask.addEventListener('click', clearTask);

};
//************ AddTask************//
function addTask(e) {
  e.preventDefault();
  // Get the input value.
  const itemsValue = itemTask.value;

  // Check to see if there is input data in the field or not.
  if (itemsValue === '' || itemsValue === null) {
    alert('please add an item ');
  } else {
    // We call the create list items function.
    createListItems(itemsValue);
    labelList.innerHTML = '';

    // Calling the function to store  in Local Storage.
    storeTaskLocalStorage(itemsValue);
    // Clear input value.
    itemTask.value = '';
  }

};

// Store Task in LocalStorage.
function storeTaskLocalStorage(itemsValueTask) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(itemsValueTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));

};

// get Task Loaded from Local localStorage.
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  for (var i = 0; i < tasks.length; i++) {
    let myTask = tasks[i];
    createListItems(myTask);
  }


};

// Delete task function.
function deleteTask(e) {

  if (e.target.parentElement.classList.contains('delete')) {
    const liListRemove = e.target.parentElement.parentElement;
    liListRemove.parentElement.removeChild(liListRemove);
    if (ul.children.length < 1) {
      //Add label if when clear all li elements.
      labelList.innerHTML = 'List item its empty';
    } else {
      labelList.innerHTML = '';
    }

    orderNumber--;
    // Remove list from localStorage.
    removeTaskFromLocalStorage(liListRemove);
  }
};

// Remove from LocalStorage.
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  for (var j = 0; j < tasks.length; j++) {
    let mytask = tasks[j];
    if (taskItem.textContent.trim() === mytask) {
      tasks.splice(j, 1);
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));

};


// Create list items.
function createListItems(itemsValue) {

  const container = document.getElementById('list-itemsc');
  container.innerHTML = container.innerHTML + '<li class="items"><span id="number">' + orderNumber + '</span>' + itemsValue + ' ' +
    '<a href="#" class="delete">' +
    '<i class="fas fa-trash-alt"></i>' +
    '</a>' +
    '</li>';
  labelList.innerHTML = 'You have list items';
  orderNumber++;

};

// Clear Task
function clearTask(e) {
  e.preventDefault();

  const ulChildLength = ul.children.length;
  for (var i = 0; i < ulChildLength; i++) {
    ul.removeChild(ul.children[0]);
  }

  // Add label if when clear all li elements.
  labelList.innerHTML = 'List item its empty';

  // Calling the localStorage to clear on LS.
  clearTaskFromLocalStorage();
  orderNumber = 1;
};

// Clear Local Storage.
function clearTaskFromLocalStorage() {
  localStorage.clear();
};
