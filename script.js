
function sortnumber(){
    return Math.floor(Math.random() * (0 - 152)) + 152;
}


function btnbuscar(){
    const numerosorteado=sortnumber();
    console.log(numerosorteado);
    let urlform="https://pokeapi.co/api/v2/pokemon/";

    urlform=urlform+numerosorteado

    let resposta =document.getElementById('content')

    let imagem=document.getElementById('imgPokemon')
    
    let html =''   

    fetch(urlform)
    .then(resposta => resposta.json())    
    .then(function(result){
        html='Name: '+result.name+'<br>'
        html= html+'Type: '+result.types[0].type.name
        resposta.innerHTML=html
        imagem.innerHTML="<img src=' "+result.sprites.front_default+"'><img src=' "+result.sprites.back_default+"'>"
        $.ajax({
            url:'controller.php',
            method:'POST',
            data:{name:result.name,type:result.types[0].type.name,front_default:result.sprites.front_default,back_default:result.sprites.back_default},
            dataType:'json'
        }).done(function(data){
            if(data==1){
                const divConsulta = document.createElement('div');
                divConsulta.innerHTML = '';    
                const containerHistorico = document.querySelector('.containerhistorico');
                $.ajax({
                    url:'getpokemon.php',
                    method:'GET',
                    dataType:'json'
                }).done(function(res){
                                        
                    for(var i=0;i<res.length;i++){
                        console.log(res[i].type);
                        console.log(res[i].back_default);
                        console.log(res[i].front_default);
                                           
                    const exibirhtml=`<div style=background-color:#ffcc01;><p>Name: ${res[i].name}</p>
                    <p>Type: ${res[i].type}</p></div>
                    <img src="${res[i].front_default}" alt="${res[i].name}">
                    <img src="${res[i].back_default}" alt="${res[i].name}">`
                           
                    divConsulta.innerHTML = exibirhtml;                  
                    containerHistorico.appendChild(divConsulta);
                   
                    }       
                })
            }
        });

    })    
    .catch(function(err){
        console.log(err)
    })        
}




