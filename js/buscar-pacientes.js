var botaoAdicionar = document.querySelector("#buscar-pacientes");

//Metodo AJAXX - O arquivo pega a linguagem JASON e converte em JavaScript, integrando assim os dois

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});