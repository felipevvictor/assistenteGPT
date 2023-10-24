export const language = "JavaScript";

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
    theme.message = `Escreva uma documentação com exemplos de como funciona ${theme.name} em ${language}, tenha o máximo de detalhes,
    separando os exemplos por tópico, além disso, explique o que cada linha faz. Retorne a resposta na estrutura HTML para ser mostrado em tela, nessa estrutura também deve ser adicionada classes do tailwind css para estilizar o conteudo. Crie um texto completo`
});

export default themes;