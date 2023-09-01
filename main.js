$(document).ready(function(){
    //chamando o formulario e modificando o default

    $('form').on('submit', function(e){
        e.preventDefault();
        let novaTarefa = $('#nova_tarefa').val();
        const tarefas = $('<li></li>');
        $(`<a>${novaTarefa}</a>`).appendTo(tarefas);
        $(tarefas).appendTo('#lista_completa ul');

        $('#nova_tarefa').val('');

        $('a').on('click',function(){
            $('li a:hover').addClass('done');
        })
    });


    /*$('form').on('submit', function(e){
        $('li').on('click',function(){
            $('li a').addClass('done');
        })
        e.preventDefault();
        const new_task = $('#nova_tarefa').val();
        const total_tasks = [];
        //const task_list = $(`<li><a>${new_task}</a> </li>`);
      //  const task_list = $(`<li><a>${new_task}</a></li>`);
        //agregando a nova tarefa na lista, usando o segundo botáo
        $('#add').click(function(){
            if( $.inArray('new_task', total_tasks) !== -1 ){
                alert("esa tarefa ja foi inserida")
            } else{
                $(new_task).appendTo(total_tasks);
                $(total_tasks).appendTo('ul')
                
                alert(`la nueva tarea es ${new_task}
                y la lista es ${total_tasks}`)
            }
        })

            
        $('#nova_tarefa').val('');
        $('a').on ('click',function(){
            $('li:visited').addClass('done');
        })
 $('#verTarefas').click(function(){
     alert(`Prueba de funcionamiento del botón ${new_task}`);
    })
    })*/

});

//*************************Plain javaScript**************************//
let d = new Date();
let day =d.getDate();
let month= d.getMonth()+1;
let y = d.getFullYear();
const date = `${day} / ${month}`;
document.getElementById('date').innerText= date;
document.getElementById('year').innerText= y;