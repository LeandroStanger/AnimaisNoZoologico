let animais = JSON.parse(localStorage.getItem('animais')) || [];

document.getElementById("addBtn").addEventListener("click", function() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let genero = document.getElementById("genero").value;
    let especie = document.getElementById("especie").value;
    let raca = document.getElementById("raca").value;
    let ala = document.getElementById("ala").value;


    if(nome === "" || idade === "" || genero === "" || especie === "" || raca === "" || ala === "") {
        alert("Preencha os dois campos!");
        return;
    }

    animais.push({nome: nome, idade: idade, genero: genero, especie: especie, raca: raca, ala: ala});

    localStorage.setItem("animais", JSON.stringify(animais));

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("raca").value = "";
    document.getElementById("ala").value = "";
    
    alert("Animal adicinado!");
});

document.getElementById("mostrarBtn").addEventListener("click",
    function(){
        let texto = "Lista de animais:\n";
        animais.forEach(a => {
            texto +=`\nNome: ${a.nome} - Idade: ${a.idade} anos\nGenero: ${a.genero}\n Espécie: ${a.especie} - Raça: ${a.raca}\nAla do zoológico: ${a.ala}\n-------------------------------------------------------\n`;
        });
        document.getElementById("saida").textContent = texto;
    });
        document.getElementById("resetBtn").addEventListener("click", function()
        {
        animais = [];
        localStorage.removeItem("animais");
        document.getElementById("saida").textContent = "";
        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("genero").value = "";
        document.getElementById("especie").value = "";
        document.getElementById("raca").value = "";
        document.getElementById("ala").value = "";
        alert(`Dados removidos!`)
    });