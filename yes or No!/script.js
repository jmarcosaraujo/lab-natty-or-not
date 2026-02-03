// 1. Dados dos Carros (Ouro dos anos 80/90)
const carData = {
  ferrari: {
    name: "Ferrari F40",
    period: "Anos 80 (1987-1992)",
    description:
      "O último carro aprovado pessoalmente por Enzo Ferrari. A F40 é uma supercarro de corrida homologado para as ruas, famoso por sua construção leve (usando Kevlar e fibra de carbono) e seu motor V8 biturbo. Foi o primeiro carro de produção a oficialmente ultrapassar 200 mph (320 km/h), sendo um símbolo definitivo da extravagância e performance da era.",
    imageSrc:
      "https://th.bing.com/th/id/R.6852205189f5122c713c84e4003f0193?rik=2YyktunvnKYXcA&pid=ImgRaw&r=0", // Substitua pela URL da imagem real
  },
  lancer: {
    name: "Mitsubishi Lancer EVO (Evo I)",
    period: "Anos 90 (1992-Presente)",
    description:
      "Nascido para o World Rally Championship (WRC), o Lancer Evolution é a definição de um sedã de alto desempenho. O Evo I (1992) combinou o motor turbo 4G63 do Galant VR-4 com o chassi leve do Lancer, criando uma lenda de tração integral, conhecida por sua precisão cirúrgica e domínio no rali.",
    imageSrc:
      "https://th.bing.com/th/id/R.bb3ec896db1192f40695ae5d202b86be?rik=x6Wp6RQr%2bZCSPw&riu=http%3a%2f%2fsmclassiccars.com%2fuploads%2fpostfotos%2f1993-mitsubishi-lancer-evolution-1-rs-1.jpg&ehk=obnnofhaWGUexQDKGSroHTMzKW5y3m4LCU7LxuOmRFo%3d&risl=&pid=ImgRaw&r=0",
  },
  golf: {
    name: "VW Golf GTI (Mk2)",
    period: "Anos 80 (1983-1992)",
    description:
      "O Mk2 pegou a fórmula de 'hot hatch' do original e a aperfeiçoou. Mais refinado, maior e mais robusto, manteve a essência do GTI: um carro divertido, prático e acessível. A versão 16V é particularmente icônica, sendo um divisor de águas entre o uso diário e a performance esportiva da época.",
    imageSrc:
      "https://www.topgear.com/sites/default/files/2023/02/1%20Volkswagen%20Golf%20GTI%20Mk2.jpg?w=1290&h=726",
  },
  delorean: {
    name: "DeLorean DMC-12",
    period: "Anos 80 (1981-1983)",
    description:
      "Instantaneamente reconhecível por suas portas 'asa de gaivota' e sua carroceria de aço inoxidável sem pintura, o DMC-12 é um ícone cultural. Apesar de sua vida curta no mercado e desempenho modesto, sua fama foi cimentada pelo papel principal como a máquina do tempo na trilogia 'De Volta Para o Futuro', tornando-se o carro mais famoso do cinema.",
    imageSrc:
      "https://www.williamhortonphotography.com/wp-content/uploads/2017/11/1982-Delorean-12.jpg",
  },
  m3: {
    name: "BMW M3 (E30)",
    period: "Anos 80 (1986-1991)",
    description:
      "Criado para homologação no Grupo A de corridas de turismo, o M3 original é a base de todos os BMW M de alta performance. Seu motor de quatro cilindros (S14) de alta rotação e seu chassi rígido com suspensão aprimorada o tornaram um dos carros de turismo mais bem-sucedidos da história e um puro prazer de dirigir nas ruas.",
    imageSrc:
      "https://fuelcarmagazine.com/wp-content/uploads/2020/02/bmw_m3_coupe_96-scaled.jpg",
  },
  nsx: {
    name: "Honda NSX (Primeira Geração)",
    period: "Anos 90 (1990-2005)",
    description:
      "O 'Supercarro Japonês'. Desenvolvido com a ajuda de Ayrton Senna, o NSX desafiou as marcas europeias ao provar que um supercarro poderia ser rápido, exótico e, crucialmente, confiável e fácil de usar no dia a dia. Seu motor V6 VTEC central e chassi de alumínio revolucionaram o mercado.",
    imageSrc:
      "https://retornar.com.br/wp-content/uploads/2023/10/honda-NSX-tudo-sobre-6-HONDA-NSX.jpg",
  },
  mustang: {
    name: "Ford Mustang SVT Cobra",
    period: "Anos 90 (1993-2004)",
    description:
      "O Cobra foi a prova de que o Muscle Car estava de volta e refinado. A versão 1993, a primeira produzida pela 'Special Vehicle Team' (SVT) da Ford, marcou um retorno ao alto desempenho com um motor V8 mais potente e suspensão e freios aprimorados, sendo um ícone da cultura automotiva americana dos anos 90.",
    imageSrc:
      "https://cdn.dealeraccelerate.com/planet/1/114/8299/1920x1440/2000-ford-mustang-svt-cobra-r.jpg",
  },
  porsche: {
    name: "Porsche 959",
    period: "Anos 80 (1986-1989)",
    description:
      "Tecnologicamente o carro mais avançado do seu tempo. O 959 foi uma vitrine de tecnologia, com tração integral controlada por computador, suspensão ajustável em altura e um motor twin-turbo. Foi criado para o Grupo B de rali, mas se tornou o precursor dos supercarros modernos e o grande rival tecnológico da Ferrari F40.",
    imageSrc:
      "https://s1.cdn.autoevolution.com/images/gallery/PORSCHE-959-3008_29.jpg",
  },
  supra: {
    name: "Toyota Supra (Mk4 JZA80)",
    period: "Anos 90 (1993-2002)",
    description:
      "Famoso por sua aerodinâmica e, principalmente, por seu motor 2JZ-GTE. O Supra Mk4 é uma lenda do tuning e da performance de rua. A versão turbo era robusta o suficiente para suportar modificações que elevavam a potência a níveis extremos, ganhando status de ícone na cultura pop e nos filmes.",
    imageSrc:
      "https://tse4.mm.bing.net/th/id/OIP.6c-4lVaNHqeLrdX37gXfoAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  cosworth: {
    name: "Ford Sierra RS Cosworth",
    period: "Anos 80 (1986-1992)",
    description:
      "Um sedã familiar transformado em um monstro de corrida. O Sierra Cosworth, com seu motor turbo e a icônica asa traseira gigante, dominou o Campeonato Europeu de Carros de Turismo e se tornou um dos carros de rua mais cobiçados da Grã-Bretanha nos anos 80, conhecido por sua potência bruta e manuseio desafiador.",
    imageSrc:
      "https://tse2.mm.bing.net/th/id/OIP.bGDv8YQjvwj7lb3QGenZVgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
};

// 2. Função para Renderizar o Conteúdo do Carro
function renderCarContent(carKey) {
  const car = carData[carKey];
  const contentDiv = document.getElementById("car-content");

  // Cria a estrutura HTML do carro dinamicamente
  contentDiv.innerHTML = `
        <img src="${car.imageSrc}" alt="${car.name}" class="car-image">
        <h2>${car.name}</h2>
        <h3>Período: ${car.period}</h3>
        <p>${car.description}</p>
    `;
}

// 3. Função para Lidar com o Clique nas Abas
function handleTabClick(event) {
  const clickedButton = event.target;

  // 1. Remove a classe 'active' de todos os botões
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active");
  });

  // 2. Adiciona a classe 'active' ao botão clicado
  clickedButton.classList.add("active");

  // 3. Pega a chave do carro do atributo 'data-car'
  const carKey = clickedButton.getAttribute("data-car");

  // 4. Renderiza o conteúdo do novo carro
  renderCarContent(carKey);
}

// 4. Inicialização: Adicionar Event Listeners e Carregar Conteúdo Inicial
document.addEventListener("DOMContentLoaded", () => {
  // Adiciona o ouvinte de evento para todos os botões de aba
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", handleTabClick);
  });

  // Carrega o primeiro carro (Ferrari F40) quando a página carrega
  renderCarContent("ferrari");
});
