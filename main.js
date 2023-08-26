$(document).ready(function(){
    //chamando o formulario e modificando o default

$('form').on('submit', function(e){
    e.preventDefault();
 const new_task = $('#nova_tarefa').val();
 //const task_list = $(`<li style="display: none"><a' >${new_task}</a> </li>`);
 const task_list = $(`<li style="display: none">${new_task}</li>`);
 //agregando a nova tarefa na lista, usando o segundo botáo
 $('#add').on('click', function(){
     $(new_task).appendTo(task_list);
     $(task_list).appendTo('ul');
     $(task_list).fadeIn(1500);
     $('#nova_tarefa').val('');
   /* alert(`la nueva tarea es ${new_task}
     y la lista es ${task_list}`)*/
     $('li').on ('click',function(){
         $('li').addClass('done');
     })
 })
 /*$('#verTarefas').click(function(){
     alert(`Prueba de funcionamiento del botón ${new_task}`);
    })*/
})

});

//*************************Plain javaScript**************************//
let d = new Date();
let day =d.getDate();
let month= d.getMonth()+1;
let y = d.getFullYear();
const date = `${day} / ${month}`;
document.getElementById('date').innerText= date;
document.getElementById('year').innerText= y;