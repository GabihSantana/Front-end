
//Declarando os dados que irei manipular:
let database1 = "broken_database_1.json";
let database2 = "broken_database_2.json";

//FUNÇÕES:

//Função para corrigir os problemas de digitação no nome ou marca:
function reverterSubstituicoes(nome) {
    return nome ? nome.replace(/æ/g, 'a').replace(/ø/g, 'o') : nome;
     //Retorna o nome através de uma busca pelos caracteres que estão errados (æ ou ø) localizado em qualquer parte do nome(g), caso não encontrado nenhum problema, irá me retornar o nome normal
}

//Função para converter o valor de string para int
function converterParaNumero(valor) {
    return valor ? parseInt(valor) : valor;
    //retorna o valor em int através da propriedade parseInt, caso contrário irá retornar o valor normal
}

//Função de Fetch e Catch de informações no database 
function busca(database){
    //pegar os dados do documento JSON
    fetch(database)

    //após a resposta do fetch, sera convertido em .json()
        .then((response) => response.json())

        //após essa conversão, irei imprimir os dados para verificar como eles se encontram:
        .then((dados) => {
            console.log(dados);

            //Através desses dados, irei atribuir uma constante para o map dos dados (para criar um novo array (no caso info) através do .json) - array(info) garantindo não modificar os dados originais
            const tranformarDados = dados.map((info) => {

                //atribuir uma constante para chamar as funções, passando o nome ou marca (chave - variando de database)
                const nomeTransformado = reverterSubstituicoes(info.nome || info.marca);

                //chamar a função de conversão das vendas
                const stringToNum = converterParaNumero(info.vendas)

                //se o database possuir info.nome (caso do db1) irá retornar todas as informações previamentes (que não sofreram modificações), a chave nome com o seu valor modificado e a chave vendas com seu valor modificado pelas funções
                if(info.nome){
                    return {
                        ...info,
                        nome: nomeTransformado,
                        vendas : stringToNum
                    };
                }
                //caso o database possuir info.marca (caso do db2) irei retornar todas as informações prévias e modificar apenas a marca
                else if(info.marca){
                    return {
                        ...info,
                        marca: nomeTransformado,
                    };
                }
            });

        //imprimir todos esses dados tranformados
        console.log(tranformarDados);

        //convertendo esses dados para o formato JSON com a propriedade stringify(objeto, replacer, espaço)
        const dadosTransformadosJSON = JSON.stringify(tranformarDados, null, 2);
        //imprimir os dados transformados para JSON
        console.log(dadosTransformadosJSON);
        arquivo(dadosTransformadosJSON, "fixed_database")

        
    })

    //caso o fetch enfrente algum algum erro durante a perfonmance do fetch
    .catch((error) => {
        console.error(error);
    });
}

function arquivo(database, nomeArquivo) {
    let blob = new Blob([database], {type: "text/plain;charset=url"}) 
    saveAs(blob, nomeArquivo+".json")
}

// Realizar as modificações nos databases
busca(database1);
busca(database2);

// Baixar os arquivos JSON
//arquivo(novo_bd1, 'fixed_database_1');
//arquivo(novo_bd2, 'fixed_database_2');