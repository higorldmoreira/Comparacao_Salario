import escolha from "readline-sync";

//Variaveis Globais
let i = 0;
let anoLabel = "Ano: ";
let salarioLabel = "Salário mínimo: ";
let crescimentoLabel = "Crescimento Salarial: ";
let ipcaLabel = "Inflação IPCA: ";

let colecao_salarioXinflacao = [
  { salario: 510.0, inflacao: 5.91, ano: 2010 },
  { salario: 545.0, inflacao: 6.5, ano: 2011 },
  { salario: 622.0, inflacao: 5.84, ano: 2012 },
  { salario: 678.0, inflacao: 5.91, ano: 2013 },
  { salario: 724.0, inflacao: 6.41, ano: 2014 },
  { salario: 788.0, inflacao: 10.67, ano: 2015 },
  { salario: 880.0, inflacao: 6.29, ano: 2016 },
  { salario: 937.0, inflacao: 2.95, ano: 2017 },
  { salario: 954.0, inflacao: 3.75, ano: 2018 },
  { salario: 998.0, inflacao: 4.31, ano: 2019 },
  { salario: 1045.0, inflacao: 4.52, ano: 2020 },
];

//Loop de controle do Usuario

while (i == "1") {
  console.log("Escolha uma das alternativas:\n");
  console.log("1 - Listar os salários minímos de 2010 à 2020");
  console.log("2 - Listar o índice IPCA de 2010 à 2020");
  console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");
  console.log("4 - Sair do pragrama.");

  let escolha_usuario = escolha.question("Digite o número de sua escolha: ");
  
  i = escolha_usuario;

  switch (escolha_usuario) {
    case 1:
        for(let i = 0; i <= salarioMinimo.length-1; i++)
        {
            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;

            let salarioFormatado = salario.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(salarioLabel+"R$ "+salarioFormatado);
        }
        break;
    case 2:
        for(let i = 0; i <= inflacao.length-1; i++)
        {
            let ano = inflacao[i].ano;
            let ipca = inflacao[i].ipca;

            let ipcaFormatado = ipca.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(ipcaLabel+ipcaFormatado+"%");
        }
        break;
        case 3:
        for(let i = 0; i <= salarioMinimo.length-1; i++)
        {
            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;
            let percentualCrescimento;
            let crescimentoFormatado;

            if(i > 0)
            {
                let salarioAnterior = salarioMinimo[i-1].salario;
                let diferenca = salario - salarioAnterior;

                percentualCrescimento = (diferenca / salarioAnterior) * 100;

                crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".",",")+"%";
            }
            else
            {
                crescimentoFormatado = "-";
            }

            let ipca = inflacao[i].ipca;

            let salarioFormatado = salario.toFixed(2).replace(".",",");
            let ipcaFormatado = ipca.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(salarioLabel+"R$ "+salarioFormatado);
            console.log(crescimentoLabel+crescimentoFormatado);
            console.log(ipcaLabel+ipcaFormatado+"%");
        }
        break;

        case 4:
        console.log("Saindo do programa...");
        i = "1";

    default:
        console.log("Opção Inválida!");
        break;
        i = "2";
  }
}
