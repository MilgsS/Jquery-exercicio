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
    var nvtarefa = $(`<li style='display: none' id='linha' >${tarefa}</li>`)
    $(nvtarefa).appendTo('ul')
    $(nvtarefa).fadeIn(800)

    
    $(nvtarefa).click(function(){
    $(nvtarefa).addClass('linha')
})

})
