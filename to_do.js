let addToDoButton = document.getElementById('add-to-do-button');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click', function(){

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes()  + ':' + today.getSeconds();
    let dateTime = ': ' + date + ' | ' + time;

    var para = document.createElement('p');
    para.classList.add('paraStyle');
    para.innerText = inputField.value + dateTime;
    toDoContainer.appendChild(para);
    inputField.value ="";
    para.addEventListener('click',function(){
        para.style.textDecoration = "line-through";
    })
    para.addEventListener('dblclick', function(){
        toDoContainer.removeChild(para);
    })
})