$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown(); // Desce
    })
})

$('#can').click(function(){
    $('#form').slideUp(); // Sobe
})

$('#form').on('submit', function(e){
    e.preventDefault(); 

    const tarefa = $('.form').val();
    var nvtarefa = $(`<li style='display none'>${tarefa}</li>`)
    $(nvtarefa).appendTo('ul')
    $(nvtarefa).fadeIn(800)

    $('li').click(function(){
    const linha = `style='text-decoration: line-through;'`
    $(linha).appendTo(nvtarefa)
})
})

