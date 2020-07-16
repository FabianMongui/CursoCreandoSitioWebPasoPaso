$(document).ready(function(){
    const lista_items = document.getElementById('lista-items');
    configurarInicio();
    $('.myIcon').click(function(e){
        console.log(lista_items.className, 'click');
        
        if(!lista_items.classList.contains('display-block')){
            console.log(lista_items.className, 'click');
            $('#navbar ul').removeClass('display-none');
            $('#navbar ul').addClass('display-block');
        }else {
            console.log(lista_items.className, 'clicknone');
            $('#navbar ul').removeClass('display-block');
            $('#navbar ul').addClass('display-none');
        }
    });
    
    $('#content').click(function(){
        $('#navbar ul').addClass('display-none');
    });

    function configurarInicio(){
        const urlPath = window.location.pathname;
        $('nav a').each(function(){
            var href = $(this).attr('href');
            var indice = urlPath.length - href.length;
            if(urlPath.substring(indice) === href){
                console.log('match');
                $(this).closest('li').addClass('active');
            }
        });
    }
});