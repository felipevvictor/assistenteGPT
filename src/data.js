export const language = "NodeJS";

const themes = [
    {
        name: "Variáveis",
    },
    {
        name: "Tipo de dados",
    },
    {
        name: "Operadores",
    },
    {
        name: "Constantes",
    },
    {
        name: "Arrays",
    },
    {
        name: "Programação orientada a objetos",
    },
    {
        name: "Laço de repetição",
    },
    {
        name: "Classes",
    },
  
];

themes.forEach((theme) => {
    theme.message = `Escreva uma documentação com exemplos de como funciona ${theme.name} em ${language}, retorno um resumo geral, com alguns detalhes. Retorne a resposta na estrutura HTML para ser mostrado em tela, nessa estrutura também deve ser adicionada classes do tailwind css para estilizar o conteudo. Crie um texto completo`
});

export default themes;