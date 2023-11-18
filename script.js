const listaVeiculos = []
alert('Bem-vindo ao sistema de CRUD de veículos:')
alert(`No momento, o sistema tem ${listaVeiculos.length} carros cadastrados`) 

 function executaConcessionaria(){
      
      let opcaoSelecionada;
      do{
             opcaoSelecionada = parseInt(prompt(
                  "1 - Cadastrar veículo \n 2 - Listar todos os veículos \n 3 - Filtrar veículos por marca \n 4 - Atualizar veículo \n 5 - Remover veículo \n 6 - Sair"
            ))
            switch (opcaoSelecionada){
                   case 1:
                        cadastrarVeiculos(); 
                  case 2:
                        listarVeiculos()
                        executaConcessionaria() 
                  case 3:
                        filtrarVeiculo()
                        executaConcessionaria() 
                  case 4:
                        getIndexById()
                        listarVeiculos()
                        executaConcessionaria() 
                  case 5:
                        deletarVeiculo()
                        listarVeiculos()
                        executaConcessionaria() 

            }     
      }while(opcaoSelecionada > 6)
} 
executaConcessionaria() 

/* 1 - Cadastrar veículo
      -> Ao entrar nesta opção o sistema deve pedir os seguintes
      dados: modelo, marca, ano, cor e preco.
      -> O veículo deve ser adicionado na lista de veículos que
      armazena todos os veículos cadastrados
      -> Todo veículo deve ter um identificador único. Este
      identificador deve ser gerado de forma automática */


function cadastrarVeiculos(){
      let continuar = true 
      while(continuar){ 
      let modelo = prompt('insira um modelo')
      let marca = prompt('insira um marca')
      let ano = prompt('insira um ano')
      let cor = prompt('insira um cor')
      let preco = prompt('insira um preco')
      const novoVeiculo = {
            id: Date.now(),
            modelo,
            marca,
            ano,
            cor,
            preco,
      }
      listaVeiculos.push(novoVeiculo)
       continuar = confirm("deseja cadastrar mais um veiculo?")
      } 
      
}
/* 2 - Listar todos os veículos
-> Ao entrar nesta opção o sistema deve listar os veículos
com o seguinte layout:
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000 */

function listarVeiculos(){
      listaVeiculos.forEach((veiculo)=>{
            listaVeiculos.sort((a, b) => a.preco - b.preco);
            console.log(`ID:${veiculo.id} | Modelo:${veiculo.modelo} | Marca:${veiculo.marca} | Ano:${veiculo.ano} | Cor:${veiculo.cor} | Preço:${veiculo.preco}`)
      })
}

/* 3 - Filtrar veículos por marca
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar a marca que quer filtrar
-> Deve ser listado os veículos que forem da mesma marca
-> A lista deve ter o seguinte layout:
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000 */

function filtrarVeiculo(){
      const encontrarVeiculo = prompt("digite a marca do veiculo que deseja procurar")    
      const veiculoEncontrado = listaVeiculos.find(veiculo => veiculo.marca === encontrarVeiculo)
      return console.log(`ID: ${veiculoEncontrado.id} | Modelo: ${veiculoEncontrado.modelo} | Ano: ${veiculoEncontrado.ano} | Cor: ${veiculoEncontrado.cor} Preço: ${veiculoEncontrado.preco}`);
}



/* 4 - Atualizar veículo
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar o IDENTIFICADOR do veículo
-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"
-> Se o veículo existir, o sistema deve permitir que o usuário
atualize somente a cor e o preço. */

function getIndexById(id,cor, preco){
      let novaCor = prompt('insira a nova cor')
      let novoPreco = prompt('insira o novo preço')
      const encontrarId = Number(prompt('Insira um indice para editar o veiculo. ex: 1,2,3,4,5'))
      listaVeiculos.findIndex(veiculo => veiculo.id === encontrarId) 
      if(encontrarId < 0){
            alert("Veículo, não encontrado.")
            executaConcessionaria() 
      }else{
            listaVeiculos[encontrarId].cor = novaCor
            listaVeiculos[encontrarId].preco = novoPreco
      }
}



/* 5 - Remover veículo
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar o IDENTIFICADOR do veículo
-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"
-> Se o veículo existir, o sistema deve remover o veículo */

function deletarVeiculo(id){
      const indice = Number(prompt('informe o ID que gostaria de deletar ex: 1,2,3,4,5'))

      listaVeiculos.findIndex(veiculo => veiculo.id === id)
      if(indice < 0){
            console.log('Veículo, não encontrado');
            executaConcessionaria() 
      } 
      listaVeiculos.splice(indice, 1)
}

/* 6 - Sair do sistema

Regras:
- Os dados de um veículo são: identificador, modelo, marca,
ano, cor, preco

- A opção de filtro deve ser por marca e ordenada pelo preco
- A lista de veículos deve estar ordenada pelo preco.
- Só deve ser possível atualizar a cor e o preço do veículo. */