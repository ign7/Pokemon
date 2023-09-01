
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
    .then(function(data){
        const historico=JSON.parse(localStorage.getItem('historico')) || [];
        historico.push(data);
        localStorage.setItem('historico', JSON.stringify(historico));
         //console.log(data)
        html='Name: '+data.name+'<br>'
        html= html+'Type: '+data.types[0].type.name
        resposta.innerHTML=html
        imagem.innerHTML="<img src=' "+data.sprites.front_default+"'><img src=' "+data.sprites.back_default+"'>"

        gethistorico();

    })    
    .catch(function(err){
        console.log(err)
    })
}

function gethistorico(){
    const consultasAnteriores = JSON.parse(localStorage.getItem('historico')) || [];
    const containerHistorico = document.querySelector('.containerhistorico');
    containerHistorico.innerHTML = ''; 
    for (const consulta of consultasAnteriores) {
        console.log(consulta.name);

        const divConsulta = document.createElement('div');
        

        const exibirhtml=`<div style=background-color:#ffcc01;><p>Name: ${consulta.name}</p>
        <p>Type: ${consulta.types[0].type.name}</p></div>
        <img src="${consulta.sprites.front_default}" alt="${consulta.name}">
        <img src="${consulta.sprites.back_default}" alt="${consulta.name}">`

        divConsulta.style.padding = '10px';       
        divConsulta.innerHTML = exibirhtml;

       
        containerHistorico.appendChild(divConsulta);
    }

   

        
}

