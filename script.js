// script.js

const questions = [
  // Nível 1 – Dilemas ético-motivacionais (peso: 3-5)
  {
    text: "Você está com colegas em uma missão quando o líder desaparece. O que faz?",
    options: [
      { text: "Assume o comando e segue o plano original com convicção.", points: { grifinoria: 5 } },
      { text: "Sugere uma votação democrática sobre o que fazer.", points: { lufa_lufa: 5 } },
      { text: "Propõe uma nova estratégia arriscada, mas com mais chances de sucesso.", points: { sonserina: 5 } },
      { text: "Busca informações adicionais antes de agir, mesmo que isso tome tempo.", points: { corvinal: 5 } }
    ]
  },
  {
    text: "Durante uma competição, um colega trapaceia. O que faz?",
    options: [
      { text: "Ignora. A vitória da casa é mais importante.", points: { sonserina: 4 } },
      { text: "Conversa com o colega para que confesse.", points: { lufa_lufa: 3 } },
      { text: "Denuncia anonimamente.", points: { corvinal: 4 } },
      { text: "Tenta reverter a vantagem injusta com esforço próprio.", points: { grifinoria: 4 } }
    ]
  },
  {
    text: "Você encontra um feitiço que pode curar alguém próximo, mas é instável.",
    options: [
      { text: "Usa mesmo assim. Vale o risco.", points: { grifinoria: 5 } },
      { text: "Busca ajuda para estabilizar o feitiço.", points: { corvinal: 4 } },
      { text: "Espera. O bem coletivo importa mais.", points: { lufa_lufa: 4 } },
      { text: "Tenta recriar o efeito com outra abordagem.", points: { sonserina: 5 } }
    ]
  },
  {
    text: "Você é acusado injustamente. O único que pode te defender tem medo.",
    options: [
      { text: "Assume a culpa.", points: { lufa_lufa: 4 } },
      { text: "Enfrenta o colega.", points: { grifinoria: 4 } },
      { text: "Se defende sozinho.", points: { sonserina: 4 } },
      { text: "Busca evidências para se inocentar.", points: { corvinal: 4 } }
    ]
  },
  {
    text: "Você encontra um livro de magia avançada e perigosa.",
    options: [
      { text: "Estuda mesmo sendo proibido.", points: { sonserina: 5, corvinal: 2 } },
      { text: "Entrega à direção.", points: { lufa_lufa: 5 } },
      { text: "Estuda e devolve sem que ninguém saiba.", points: { corvinal: 4 } },
      { text: "Guarda para emergências.", points: { grifinoria: 3, sonserina: 2 } }
    ]
  },
  {
    text: "Você vê um aluno ser humilhado publicamente por um professor.",
    options: [
      { text: "Confronta o professor.", points: { grifinoria: 5 } },
      { text: "Oferece apoio em particular.", points: { lufa_lufa: 4 } },
      { text: "Organiza denúncia com outros colegas.", points: { corvinal: 3 } },
      { text: "Cria forma do professor ser desmascarado indiretamente.", points: { sonserina: 5 } }
    ]
  },
  {
    text: "Você tem a chance de visitar Azkaban para estudo.",
    options: [
      { text: "Aceita. É uma oportunidade única.", points: { corvinal: 4 } },
      { text: "Recusa. É perturbador demais.", points: { lufa_lufa: 3 } },
      { text: "Vai para investigar o sistema prisional.", points: { sonserina: 4 } },
      { text: "Vai para enfrentar seu medo.", points: { grifinoria: 4 } }
    ]
  },
  {
    text: "Você é indicado para representar sua casa em um duelo. Seu oponente te provoca.",
    options: [
      { text: "Encara de frente e rebate.", points: { grifinoria: 4 } },
      { text: "Ignora e mantém foco.", points: { lufa_lufa: 3 } },
      { text: "Usa a provocação contra ele no momento certo.", points: { sonserina: 4 } },
      { text: "Analisa os motivos da provocação.", points: { corvinal: 3 } }
    ]
  },
  {
    text: "Você descobre um segredo sobre um colega que pode prejudicá-lo.",
    options: [
      { text: "Confronta diretamente.", points: { grifinoria: 4 } },
      { text: "Ignora. Não é problema seu.", points: { lufa_lufa: 3 } },
      { text: "Guarda como vantagem futura.", points: { sonserina: 5 } },
      { text: "Investiga o contexto antes de agir.", points: { corvinal: 4 } }
    ]
  },
  {
    text: "Você foi sorteado para liderar um grupo em uma tarefa difícil.",
    options: [
      { text: "Assume o desafio sem hesitar.", points: { grifinoria: 5 } },
      { text: "Ouça os colegas antes de decidir.", points: { lufa_lufa: 4 } },
      { text: "Tenta delegar tarefas para ganhar eficiência.", points: { sonserina: 4 } },
      { text: "Organiza tudo com base em lógica e dados.", points: { corvinal: 4 } }
    ]
  },

  // Nível 2 – Subjetivas (peso: 2-3)
  {
    text: "O Chapéu Seletor escuta seus pensamentos. Você teme ser colocado onde...",
    options: [
      { text: "Precise tomar decisões difíceis por todos.", points: { grifinoria: 2 } },
      { text: "Precise disputar constantemente.", points: { sonserina: 2 } },
      { text: "Precise se provar em silêncio.", points: { corvinal: 2 } },
      { text: "Precise trabalhar duro por pouco reconhecimento.", points: { lufa_lufa: 2 } }
    ]
  },
  {
    text: "No Espelho de Ojesed, você se vê...",
    options: [
      { text: "Com uma descoberta celebrada.", points: { corvinal: 3 } },
      { text: "Sendo lembrado por coragem.", points: { grifinoria: 3 } },
      { text: "Rodeado por aliados leais.", points: { lufa_lufa: 3 } },
      { text: "Como alguém de grande influência.", points: { sonserina: 3 } }
    ]
  },
  {
    text: "Na maioria das vezes, você é quem...",
    options: [
      { text: "Pensa diferente do grupo.", points: { corvinal: 3 } },
      { text: "Garante que todos sejam ouvidos.", points: { lufa_lufa: 3 } },
      { text: "Toma frente em situações confusas.", points: { grifinoria: 3 } },
      { text: "Analisa sem se comprometer de início.", points: { sonserina: 3 } }
    ]
  },
  {
    text: "Na sua cabeceira está sempre...",
    options: [
      { text: "Um objeto raro e poderoso.", points: { sonserina: 3 } },
      { text: "Um livro cheio de anotações.", points: { corvinal: 3 } },
      { text: "Algo com valor sentimental.", points: { lufa_lufa: 3 } },
      { text: "Planos e metas anotados.", points: { grifinoria: 3 } }
    ]
  },
  {
    text: "Na dúvida, você costuma confiar mais em...",
    options: [
      { text: "Sua habilidade de convencer.", points: { sonserina: 3 } },
      { text: "Seus conhecimentos prévios.", points: { corvinal: 3 } },
      { text: "Seus valores pessoais.", points: { lufa_lufa: 3 } },
      { text: "Sua capacidade de agir rápido.", points: { grifinoria: 3 } }
    ]
  },

  // Nível 3 – Lore e simbólicas (peso: 1-2)
  {
    text: "Qual atividade de sábado em Hogwarts mais combina com você?",
    options: [
      { text: "Treinar feitiços em grupo avançado.", points: { grifinoria: 2 } },
      { text: "Ajudar no viveiro mágico.", points: { lufa_lufa: 2 } },
      { text: "Estudar teorias na biblioteca.", points: { corvinal: 2 } },
      { text: "Discutir táticas de torneio com amigos.", points: { sonserina: 2 } }
    ]
  },
  {
    text: "Se pudesse conversar com um personagem histórico, escolheria...",
    options: [
      { text: "Uma inventora brilhante e esquecida.", points: { corvinal: 2 } },
      { text: "Um curandeiro generoso e invisível.", points: { lufa_lufa: 2 } },
      { text: "Um herói silencioso das batalhas.", points: { grifinoria: 2 } },
      { text: "Um diplomata manipulador e estratégico.", points: { sonserina: 2 } }
    ]
  },
  {
    text: "Se pudesse escolher uma posição no quadribol:",
    options: [
      { text: "Apanhador.", points: { corvinal: 2 } },
      { text: "Artilheiro.", points: { sonserina: 2 } },
      { text: "Batedor.", points: { grifinoria: 2 } },
      { text: "Goleiro.", points: { lufa_lufa: 2 } }
    ]
  },
  {
    text: "Entre os tipos de magia, qual mais te atrai?",
    options: [
      { text: "Oclumência e Legilimência.", points: { sonserina: 2 } },
      { text: "Magias de proteção e vínculo.", points: { lufa_lufa: 2 } },
      { text: "Transfiguração avançada.", points: { corvinal: 2 } },
      { text: "Feitiços de combate.", points: { grifinoria: 2 } }
    ]
  },
  {
    text: "Se estivesse em um grupo restaurando um artefato antigo:",
    options: [
      { text: "Coordenaria o grupo.", points: { grifinoria: 2 } },
      { text: "Garantiria que todos fossem ouvidos.", points: { lufa_lufa: 2 } },
      { text: "Faria a pesquisa histórica.", points: { corvinal: 2 } },
      { text: "Cuidaria da eficiência do processo.", points: { sonserina: 2 } }
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

  const totalPoints = Object.values(scores).reduce((sum, val) => sum + val, 0);
  const percentages = Object.fromEntries(
    Object.entries(scores).map(([house, val]) => [house, Math.round((val / totalPoints) * 100)])
  );

  const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
  const topHouse = sorted[0][0];

  const houseNames = {
    grifinoria: "Grifinória",
    sonserina: "Sonserina",
    corvinal: "Corvinal",
    lufa_lufa: "Lufa-Lufa"
  };

  resultDiv.innerHTML = `<p>Você pertence à casa <strong>${houseNames[topHouse]}</strong>!</p>`;
  resultDiv.innerHTML += `<p><em>Distribuição:</em><br>
    Grifinória: ${percentages.grifinoria}%<br>
    Sonserina: ${percentages.sonserina}%<br>
    Corvinal: ${percentages.corvinal}%<br>
    Lufa-Lufa: ${percentages.lufa_lufa}%</p>`;
});
