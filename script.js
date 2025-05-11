const questions = [
  {
    text: "Em uma missão fora dos muros de Hogwarts, você está com três colegas e o líder da missão desaparece. A decisão sobre o rumo do grupo recai sobre você. O que faz?",
    options: [
      { text: "Assume o comando e segue o plano original com convicção.", points: { grifinoria: 3 } },
      { text: "Sugere uma votação democrática sobre o que fazer.", points: { lufa_lufa: 3 } },
      { text: "Propõe uma nova estratégia mais arriscada, mas com mais chances de sucesso.", points: { sonserina: 3 } },
      { text: "Busca informações adicionais antes de agir, mesmo que isso tome tempo.", points: { corvinal: 3 } },
    ]
  },
  {
    text: "Você encontra um livro antigo e poderoso escondido na biblioteca restrita. Ele parece conter feitiços perigosos. O que faz?",
    options: [
      { text: "Leva para estudar, mesmo que seja proibido.", points: { corvinal: 2, sonserina: 2 } },
      { text: "Entrega ao diretor, é o mais sensato.", points: { lufa_lufa: 3 } },
      { text: "Lê rapidamente e devolve sem que ninguém saiba.", points: { sonserina: 3 } },
      { text: "Esconde para usar apenas em emergências.", points: { grifinoria: 2, sonserina: 1 } },
    ]
  },
  {
    text: "Um colega trapaceia em um exame e pede que você o encubra. Se você contar, ele será expulso. Se aceitar, ele lhe deve um favor. O que você faz?",
    options: [
      { text: "Conta. A honestidade vem antes de qualquer laço.", points: { lufa_lufa: 3 } },
      { text: "Guarda segredo. Ele é seu amigo, e todos erram.", points: { grifinoria: 2, sonserina: 2 } },
      { text: "Usa isso como vantagem: não conta, mas cobra algo importante em troca.", points: { sonserina: 3 } },
      { text: "Fala com ele, tentando convencê-lo a confessar.", points: { corvinal: 2, lufa_lufa: 1 } },
    ]
  },
  {
    text: "Você pode escolher uma matéria eletiva:",
    options: [
      { text: "Magia Antiga — difícil, mas cheia de segredos.", points: { corvinal: 3 } },
      { text: "Herbologia Avançada — útil, mas pouco prestigiada.", points: { lufa_lufa: 3 } },
      { text: "Poções Experimentais — instável, mas cheia de descobertas.", points: { sonserina: 3 } },
      { text: "Defesa Contra as Artes das Trevas — intensa e prática.", points: { grifinoria: 3 } },
    ]
  },
  {
    text: "Você sente que, em um grupo, normalmente é a pessoa que…",
    options: [
      { text: "Tem as ideias mais diferentes.", points: { corvinal: 3 } },
      { text: "Garante que todos sejam ouvidos.", points: { lufa_lufa: 3 } },
      { text: "Assume o comando quando ninguém sabe o que fazer.", points: { grifinoria: 3 } },
      { text: "Analisa riscos e oportunidades enquanto os outros agem.", points: { sonserina: 3 } },
    ]
  },
  {
    text: "Você olha no Espelho de Ojesed e se vê…",
    options: [
      { text: "Recebendo reconhecimento por uma descoberta mágica importante.", points: { corvinal: 3 } },
      { text: "Sendo lembrado por algo grandioso que fez.", points: { grifinoria: 3 } },
      { text: "Rodeado por pessoas que te admiram e confiam.", points: { lufa_lufa: 3 } },
      { text: "Tendo alcançado poder e prestígio no mundo bruxo.", points: { sonserina: 3 } },
    ]
  },
  {
    text: "Você encontra uma criatura mágica ferida. O que faz?",
    options: [
      { text: "Tenta ajudá-la com feitiços de cura, mesmo sem domínio.", points: { grifinoria: 3 } },
      { text: "Vai buscar um professor imediatamente.", points: { lufa_lufa: 3 } },
      { text: "Espera para observar o comportamento da criatura.", points: { corvinal: 3 } },
      { text: "Chama colegas e organiza uma estratégia de resgate.", points: { sonserina: 3 } },
    ]
  },
  {
    text: "Na sua mesa de cabeceira, o que está sempre presente?",
    options: [
      { text: "Um diário com reflexões e pensamentos pessoais.", points: { grifinoria: 2, corvinal: 1 } },
      { text: "Uma pilha de livros com assuntos diversos e anotações.", points: { corvinal: 3 } },
      { text: "Um bilhete de um amigo que te lembra de quem você é.", points: { lufa_lufa: 3 } },
      { text: "Um objeto mágico raro que você encontrou por conta própria.", points: { sonserina: 3 } },
    ]
  },
  {
    text: "O Chapéu Seletor escuta seus pensamentos. Ele percebe que você teme ser colocado em uma casa onde…",
    options: [
      { text: "Precise tomar decisões difíceis em nome de muitos.", points: { grifinoria: 2 } },
      { text: "Precise disputar com colegas que querem te superar.", points: { sonserina: 2 } },
      { text: "Precise manter uma rotina constante de esforço e repetição.", points: { lufa_lufa: 2 } },
      { text: "Precise lidar com o peso de sempre provar que é digno.", points: { corvinal: 2 } },
    ]
  },
  {
    text: "Em um sábado à tarde em Hogwarts, qual dessas atividades te atrairia mais?",
    options: [
      { text: "Treinar feitiços não lecionados com colegas avançados.", points: { grifinoria: 3 } },
      { text: "Trabalhar em um projeto colaborativo nas estufas.", points: { lufa_lufa: 3 } },
      { text: "Estudar teorias mágicas antigas na biblioteca.", points: { corvinal: 3 } },
      { text: "Discutir estratégias para um torneio com colegas.", points: { sonserina: 3 } },
    ]
  },
    {
    text: "Em uma missão fora dos muros de Hogwarts, você está com três colegas e o líder da missão desaparece. A decisão sobre o rumo do grupo recai sobre você. O que faz?",
    options: [
      { text: "Assume o comando e segue o plano original com convicção.", points: { grifinoria: 3 } },
      { text: "Sugere uma votação democrática sobre o que fazer.", points: { lufa_lufa: 3 } },
      { text: "Propõe uma nova estratégia mais arriscada, mas com mais chances de sucesso.", points: { sonserina: 3 } },
      { text: "Busca informações adicionais antes de agir, mesmo que isso tome tempo.", points: { corvinal: 3 } },
    ]
  },
  // (As 10 primeiras já foram adicionadas. Adicionando as últimas 10 abaixo)
  {
    text: "Durante uma competição intercasas, você percebe que um colega do seu time trapaceou. Vencer trará glória para sua casa. O que faz?",
    options: [
      { text: "Finge não saber. A vitória importa mais.", points: { sonserina: 3 } },
      { text: "Conversa com o colega para convencê-lo a se retratar.", points: { lufa_lufa: 3 } },
      { text: "Denuncia discretamente, mesmo sendo seu colega.", points: { corvinal: 3 } },
      { text: "Tenta reverter a situação na prática, sem envolver denúncias.", points: { grifinoria: 3 } }
    ]
  },
  {
    text: "Você descobre que um feitiço contido em um livro secreto pode curar alguém muito próximo, mas também causar instabilidade mágica em Hogwarts se usado incorretamente.",
    options: [
      { text: "Usa, assumindo o risco para salvar quem ama.", points: { grifinoria: 3 } },
      { text: "Busca ajuda para tentar estabilizar o feitiço antes.", points: { corvinal: 3 } },
      { text: "Deixa o feitiço de lado. O risco coletivo é maior.", points: { lufa_lufa: 3 } },
      { text: "Tenta replicar o efeito do feitiço por outros meios, mesmo que demore.", points: { sonserina: 3 } }
    ]
  },
  {
    text: "Um aluno mais novo entra em pânico durante uma aula prática com criaturas mágicas e coloca todos em risco. O professor está distraído. O que faz?",
    options: [
      { text: "Intervém fisicamente, mesmo sem preparo.", points: { grifinoria: 3 } },
      { text: "Usa feitiços simples para tentar conter a criatura.", points: { corvinal: 3 } },
      { text: "Ajuda o aluno a sair da situação com calma.", points: { lufa_lufa: 3 } },
      { text: "Chama ajuda, mantendo todos a salvo à distância.", points: { sonserina: 3 } }
    ]
  },
  {
    text: "Você está prestes a entrar em uma sala secreta. Apenas um feitiço pode abrir a porta, mas não sabe o efeito ao usá-lo.",
    options: [
      { text: "Usa o feitiço. A curiosidade é maior que o medo.", points: { grifinoria: 3 } },
      { text: "Espera, prefere investigar mais primeiro.", points: { corvinal: 3 } },
      { text: "Tenta abrir a sala por outro meio, criativamente.", points: { sonserina: 3 } },
      { text: "Chama alguém com mais experiência para decidir.", points: { lufa_lufa: 3 } }
    ]
  },
  {
    text: "Um professor convida você a escolher o próximo líder de um grupo estudantil. Você pode se indicar ou sugerir outro colega.",
    options: [
      { text: "Se indica. Você sabe que tem capacidade.", points: { sonserina: 3 } },
      { text: "Sugere alguém mais experiente.", points: { lufa_lufa: 3 } },
      { text: "Sugere alguém menos óbvio, para dar oportunidade.", points: { corvinal: 3 } },
      { text: "Se recusa a escolher sozinho. Pede uma votação.", points: { grifinoria: 3 } }
    ]
  },
  {
    text: "Seu nome aparece no Cálice de Fogo, mesmo sem tê-lo colocado. O que faz?",
    options: [
      { text: "Participa. Já que está dentro, vai até o fim.", points: { grifinoria: 3 } },
      { text: "Tenta provar sua inocência.", points: { lufa_lufa: 3 } },
      { text: "Usa a visibilidade para seu benefício.", points: { sonserina: 3 } },
      { text: "Pede ajuda para sair da competição.", points: { corvinal: 3 } }
    ]
  },
  {
    text: "Você encontra uma sala com objetos mágicos antigos. Um deles permite ver o futuro, mas por pouco tempo. O que faz?",
    options: [
      { text: "Usa imediatamente. O conhecimento vale o risco.", points: { corvinal: 3 } },
      { text: "Guarda para um momento de crise.", points: { sonserina: 3 } },
      { text: "Deixa onde está. Mexer pode ser perigoso.", points: { lufa_lufa: 3 } },
      { text: "Estuda o objeto sem ativá-lo.", points: { grifinoria: 3 } }
    ]
  },
  {
    text: "Um aluno mais novo copia seu trabalho. O professor elogia a 'inspiração' dele sem saber do plágio. O que faz?",
    options: [
      { text: "Confronta o aluno e exige retratação.", points: { grifinoria: 3 } },
      { text: "Deixa passar. O importante é o que você sabe.", points: { lufa_lufa: 3 } },
      { text: "Conta discretamente ao professor.", points: { corvinal: 3 } },
      { text: "Reescreve seu trabalho para se destacar ainda mais.", points: { sonserina: 3 } }
    ]
  },
  {
    text: "Um ser mágico te oferece sabedoria ilimitada em troca da sua capacidade de amar. Você tem 10 segundos para decidir. O que faz?",
    options: [
      { text: "Recusa. O amor é insubstituível.", points: { lufa_lufa: 3 } },
      { text: "Aceita. Conhecimento vale o sacrifício.", points: { corvinal: 3 } },
      { text: "Hesita, mas aceita. A longo prazo, o bem que fará compensa.", points: { sonserina: 3 } },
      { text: "Tenta negociar um meio-termo com a criatura.", points: { grifinoria: 3 } }
    ]
  }
];

const form = document.getElementById("quiz-form");
const resultDiv = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");

questions.forEach((q, index) => {
  const container = document.createElement("div");
  container.classList.add("question");

  const title = document.createElement("h2");
  title.textContent = `${index + 1}. ${q.text}`;
  container.appendChild(title);

  q.options.forEach((opt, optIndex) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `question-${index}`;
    radio.value = optIndex;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt.text));
    container.appendChild(label);
  });

  form.appendChild(container);
});

submitBtn.addEventListener("click", () => {
  const scores = {
    grifinoria: 0,
    sonserina: 0,
    corvinal: 0,
    lufa_lufa: 0
  };

  let allAnswered = true;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name='question-${index}']:checked`);
    if (!selected) {
      allAnswered = false;
      return;
    }
    const optIndex = parseInt(selected.value);
    const opt = q.options[optIndex];
    for (const house in opt.points) {
      scores[house] += opt.points[house];
    }
  });

  if (!allAnswered) {
    resultDiv.textContent = "Por favor, responda todas as perguntas.";
    return;
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topHouse = sorted[0][0];

  const houseNames = {
    grifinoria: "Grifinória",
    sonserina: "Sonserina",
    corvinal: "Corvinal",
    lufa_lufa: "Lufa-Lufa"
  };

  resultDiv.textContent = `Você pertence à casa ${houseNames[topHouse]}!`;
});
