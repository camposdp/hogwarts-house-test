const questions = [
  {
    text: "Em uma missão fora dos muros de Hogwarts, você está com três colegas e o líder da missão desaparece. O que faz?",
    options: [
      { text: "Assume o comando e segue o plano original com convicção.", points: { grifinoria: 3 } },
      { text: "Sugere uma votação democrática sobre o que fazer.", points: { lufa_lufa: 3 } },
      { text: "Propõe uma nova estratégia mais arriscada.", points: { sonserina: 3 } },
      { text: "Busca mais informações antes de decidir.", points: { corvinal: 3 } }
    ]
  },
  {
    text: "Você encontra um livro perigoso escondido. O que faz?",
    options: [
      { text: "Estuda às escondidas.", points: { sonserina: 3 } },
      { text: "Entrega ao diretor.", points: { lufa_lufa: 3 } },
      { text: "Estuda com cautela e devolve sem ser visto.", points: { corvinal: 3 } },
      { text: "Guarda para usar em necessidade extrema.", points: { grifinoria: 3 } }
    ]
  },
  {
    text: "Um colega pede que você encubra uma trapaça. O que faz?",
    options: [
      { text: "Conta ao professor.", points: { lufa_lufa: 3 } },
      { text: "Guarda segredo, é seu amigo.", points: { grifinoria: 2, sonserina: 1 } },
      { text: "Usa isso como moeda de troca.", points: { sonserina: 3 } },
      { text: "Tenta convencê-lo a confessar.", points: { corvinal: 3 } }
    ]
  },
  {
    text: "Qual matéria você escolheria?",
    options: [
      { text: "Magia Antiga.", points: { corvinal: 3 } },
      { text: "Herbologia Avançada.", points: { lufa_lufa: 3 } },
      { text: "Poções Experimentais.", points: { sonserina: 3 } },
      { text: "Defesa Contra as Artes das Trevas.", points: { grifinoria: 3 } }
    ]
  },
  {
    text: "Você olha no Espelho de Ojesed. O que vê?",
    options: [
      { text: "Reconhecimento por uma descoberta.", points: { corvinal: 3 } },
      { text: "Pessoas que te admiram e confiam.", points: { lufa_lufa: 3 } },
      { text: "Uma vitória heroica.", points: { grifinoria: 3 } },
      { text: "Prestígio e influência no mundo bruxo.", points: { sonserina: 3 } }
    ]
  },
  {
    text: "Você encontra uma criatura ferida. O que faz?",
    options: [
      { text: "Tenta curá-la mesmo sem preparo.", points: { grifinoria: 3 } },
      { text: "Vai buscar ajuda.", points: { lufa_lufa: 3 } },
      { text: "Observa antes de agir.", points: { corvinal: 3 } },
      { text: "Reúne colegas para agir em grupo.", points: { sonserina: 3 } }
    ]
  },
  {
    text: "Em situações de grupo, você costuma ser quem…",
    options: [
      { text: "Assume a liderança.", points: { grifinoria: 3 } },
      { text: "Organiza e ajuda todos.", points: { lufa_lufa: 3 } },
      { text: "Gera estratégias.", points: { sonserina: 3 } },
      { text: "Traz ideias diferentes.", points: { corvinal: 3 } }
    ]
  },
  {
    text: "Você foi acusado injustamente. O único que pode te defender tem medo. O que faz?",
    options: [
      { text: "Assume a culpa.", points: { lufa_lufa: 3 } },
      { text: "Confronta o colega para que fale.", points: { grifinoria: 3 } },
      { text: "Se defende sozinho.", points: { sonserina: 3 } },
      { text: "Tenta provar por conta própria com provas.", points: { corvinal: 3 } }
    ]
  },
  {
    text: "Você tem a chance de explorar Azkaban para estudo. O que faz?",
    options: [
      { text: "Vai. É uma oportunidade única.", points: { corvinal: 3 } },
      { text: "Recusa. É um lugar sombrio demais.", points: { lufa_lufa: 3 } },
      { text: "Vai e documenta tudo para debate.", points: { grifinoria: 3 } },
      { text: "Vai com intuito de questionar o sistema.", points: { sonserina: 3 } }
    ]
  },
  {
    text: "O Chapéu Seletor sugere uma casa diferente da que esperava. O que faz?",
    options: [
      { text: "Aceita. Ele sabe melhor.", points: { corvinal: 3 } },
      { text: "Insiste na sua escolha.", points: { grifinoria: 3 } },
      { text: "Pede mais informações antes de decidir.", points: { sonserina: 3 } },
      { text: "Escolhe pensando nos colegas e futuro.", points: { lufa_lufa: 3 } }
    ]
  },
  {
    text: "Você encontra um objeto mágico que prevê o futuro. O que faz?",
    options: [
      { text: "Usa na hora.", points: { corvinal: 3 } },
      { text: "Guarda para momento crítico.", points: { sonserina: 3 } },
      { text: "Deixa onde está.", points: { lufa_lufa: 3 } },
      { text: "Estuda sem ativá-lo.", points: { grifinoria: 3 } }
    ]
  },
  {
    text: "Você nota um plágio do seu trabalho. O que faz?",
    options: [
      { text: "Fala com o aluno diretamente.", points: { grifinoria: 3 } },
      { text: "Ignora. Você conhece seu valor.", points: { lufa_lufa: 3 } },
      { text: "Conta ao professor.", points: { corvinal: 3 } },
      { text: "Refaz o trabalho ainda melhor.", points: { sonserina: 3 } }
    ]
  },
  {
    text: "Você deve escolher o novo líder de grupo. O que faz?",
    options: [
      { text: "Se indica.", points: { sonserina: 3 } },
      { text: "Indica alguém mais experiente.", points: { lufa_lufa: 3 } },
      { text: "Sugere votação coletiva.", points: { grifinoria: 3 } },
      { text: "Propõe alguém com ideias inovadoras.", points: { corvinal: 3 } }
    ]
  },
  {
    text: "Você pode conversar com um bruxo histórico. Quem escolhe?",
    options: [
      { text: "Uma inventora brilhante e esquecida.", points: { corvinal: 3 } },
      { text: "Um curandeiro que criou métodos sem pedir nada em troca.", points: { lufa_lufa: 3 } },
      { text: "Um herói anônimo de batalhas mágicas.", points: { grifinoria: 3 } },
      { text: "Um diplomata que manipulou guerras sem lançar um feitiço.", points: { sonserina: 3 } }
    ]
  },
  {
    text: "Uma competição entre casas depende de você. Seu oponente te provoca publicamente.",
    options: [
      { text: "Responde e encara o desafio.", points: { grifinoria: 3 } },
      { text: "Ignora e foca no objetivo.", points: { lufa_lufa: 3 } },
      { text: "Usa a provocação para distraí-lo mais tarde.", points: { sonserina: 3 } },
      { text: "Reflete sobre os motivos dele antes da disputa.", points: { corvinal: 3 } }
    ]
  },
  {
    text: "Você vê um aluno ser humilhado por um professor. O que faz?",
    options: [
      { text: "Confronta o professor.", points: { grifinoria: 3 } },
      { text: "Apoia o aluno em segredo.", points: { lufa_lufa: 3 } },
      { text: "Organiza denúncia formal com colegas.", points: { corvinal: 3 } },
      { text: "Cria armadilha para o professor se revelar.", points: { sonserina: 3 } }
    ]
  },
  {
    text: "Na sua mesa de cabeceira há sempre:",
    options: [
      { text: "Um objeto mágico raro.", points: { sonserina: 3 } },
      { text: "Livros anotados.", points: { corvinal: 3 } },
      { text: "Um bilhete de amigo.", points: { lufa_lufa: 3 } },
      { text: "Uma lista de metas.", points: { grifinoria: 3 } }
    ]
  },
  {
    text: "Você pode jogar quadribol. Que posição escolhe?",
    options: [
      { text: "Apanhador.", points: { corvinal: 3 } },
      { text: "Batedor.", points: { grifinoria: 3 } },
      { text: "Artilheiro.", points: { sonserina: 3 } },
      { text: "Goleiro.", points: { lufa_lufa: 3 } }
    ]
  },
  {
    text: "Um ser mágico oferece sabedoria ilimitada se você abrir mão de amar. Você…",
    options: [
      { text: "Recusa.", points: { lufa_lufa: 3 } },
      { text: "Aceita pelo bem maior.", points: { corvinal: 3 } },
      { text: "Negocia um meio-termo.", points: { grifinoria: 3 } },
      { text: "Aceita. Amor é fraqueza.", points: { sonserina: 3 } }
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
