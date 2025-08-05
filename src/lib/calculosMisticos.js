// Cálculos Místicos CORRIGIDOS - Astrologia, Numerologia e Espiritualidade

// ===== ASTROLOGIA OCIDENTAL =====

// Datas dos signos para 2025 (baseado em dados reais coletados)
const SIGNOS_DATAS = [
  { nome: 'Capricórnio', inicio: { mes: 12, dia: 21 }, fim: { mes: 1, dia: 19 } },
  { nome: 'Aquário', inicio: { mes: 1, dia: 20 }, fim: { mes: 2, dia: 18 } },
  { nome: 'Peixes', inicio: { mes: 2, dia: 19 }, fim: { mes: 3, dia: 20 } },
  { nome: 'Áries', inicio: { mes: 3, dia: 21 }, fim: { mes: 4, dia: 19 } },
  { nome: 'Touro', inicio: { mes: 4, dia: 20 }, fim: { mes: 5, dia: 20 } },
  { nome: 'Gêmeos', inicio: { mes: 5, dia: 21 }, fim: { mes: 6, dia: 21 } },
  { nome: 'Câncer', inicio: { mes: 6, dia: 22 }, fim: { mes: 7, dia: 22 } },
  { nome: 'Leão', inicio: { mes: 7, dia: 23 }, fim: { mes: 8, dia: 22 } },
  { nome: 'Virgem', inicio: { mes: 8, dia: 23 }, fim: { mes: 9, dia: 22 } },
  { nome: 'Libra', inicio: { mes: 9, dia: 23 }, fim: { mes: 10, dia: 22 } },
  { nome: 'Escorpião', inicio: { mes: 10, dia: 23 }, fim: { mes: 11, dia: 21 } },
  { nome: 'Sagitário', inicio: { mes: 11, dia: 22 }, fim: { mes: 12, dia: 20 } }
];

const SIGNOS_CARACTERISTICAS = {
  'Áries': { elemento: 'Fogo', qualidade: 'Cardinal', regente: 'Marte', descricao: 'Pioneiro, corajoso e determinado. Você tem uma energia natural para liderar e iniciar novos projetos.' },
  'Touro': { elemento: 'Terra', qualidade: 'Fixo', regente: 'Vênus', descricao: 'Estável, sensual e persistente. Você valoriza a segurança e tem um forte senso estético.' },
  'Gêmeos': { elemento: 'Ar', qualidade: 'Mutável', regente: 'Mercúrio', descricao: 'Comunicativo, versátil e curioso. Você tem facilidade para se adaptar e aprender coisas novas.' },
  'Câncer': { elemento: 'Água', qualidade: 'Cardinal', regente: 'Lua', descricao: 'Emotivo, protetor e intuitivo. Você tem uma forte conexão com a família e o lar.' },
  'Leão': { elemento: 'Fogo', qualidade: 'Fixo', regente: 'Sol', descricao: 'Criativo, generoso e dramático. Você brilha naturalmente e inspira outros ao seu redor.' },
  'Virgem': { elemento: 'Terra', qualidade: 'Mutável', regente: 'Mercúrio', descricao: 'Analítico, prático e perfeccionista. Você tem um olhar atento aos detalhes e busca a excelência.' },
  'Libra': { elemento: 'Ar', qualidade: 'Cardinal', regente: 'Vênus', descricao: 'Harmonioso, diplomático e estético. Você busca o equilíbrio e a beleza em todas as coisas.' },
  'Escorpião': { elemento: 'Água', qualidade: 'Fixo', regente: 'Plutão', descricao: 'Intenso, transformador e misterioso. Você tem uma profundidade emocional única e poder de regeneração.' },
  'Sagitário': { elemento: 'Fogo', qualidade: 'Mutável', regente: 'Júpiter', descricao: 'Aventureiro, filosófico e otimista. Você busca constantemente expandir seus horizontes e conhecimentos.' },
  'Capricórnio': { elemento: 'Terra', qualidade: 'Cardinal', regente: 'Saturno', descricao: 'Ambicioso, disciplinado e responsável. Você tem uma determinação natural para alcançar seus objetivos.' },
  'Aquário': { elemento: 'Ar', qualidade: 'Fixo', regente: 'Urano', descricao: 'Inovador, independente e humanitário. Você tem uma visão única e busca contribuir para o bem comum.' },
  'Peixes': { elemento: 'Água', qualidade: 'Mutável', regente: 'Netuno', descricao: 'Intuitivo, compassivo e sonhador. Você tem uma sensibilidade especial e conexão com o mundo espiritual.' }
};

export function calcularSignoSolar(dataNascimento) {
  const data = new Date(dataNascimento);
  const mes = data.getMonth() + 1;
  const dia = data.getDate();
  
  for (const signo of SIGNOS_DATAS) {
    if (signo.inicio.mes === signo.fim.mes) {
      if (mes === signo.inicio.mes && dia >= signo.inicio.dia && dia <= signo.fim.dia) {
        return { 
          nome: signo.nome, 
          ...SIGNOS_CARACTERISTICAS[signo.nome] 
        };
      }
    } else {
      if ((mes === signo.inicio.mes && dia >= signo.inicio.dia) || 
          (mes === signo.fim.mes && dia <= signo.fim.dia)) {
        return { 
          nome: signo.nome, 
          ...SIGNOS_CARACTERISTICAS[signo.nome] 
        };
      }
    }
  }
  
  return { nome: 'Não identificado', descricao: 'Não foi possível determinar o signo.' };
}

export function calcularAscendente(dataNascimento, horaNascimento, cidade) {
  const data = new Date(dataNascimento);
  const [hora, minuto] = horaNascimento.split(':').map(Number);
  
  const indiceHora = Math.floor(hora / 2);
  const signos = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 
                  'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes'];
  
  const signoAscendente = signos[indiceHora % 12];
  return { 
    nome: signoAscendente, 
    ...SIGNOS_CARACTERISTICAS[signoAscendente],
    descricao: `Seu ascendente em ${signoAscendente} influencia como você se apresenta ao mundo e suas primeiras impressões.`
  };
}

export function calcularSignoLunar(dataNascimento, horaNascimento) {
  const data = new Date(dataNascimento);
  const diasDesde1900 = Math.floor((data - new Date(1900, 0, 1)) / (1000 * 60 * 60 * 24));
  
  const cicloLunar = diasDesde1900 % 28;
  const indiceSigno = Math.floor(cicloLunar / 2.33) % 12;
  
  const signos = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 
                  'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes'];
  
  const signoLunar = signos[indiceSigno];
  return { 
    nome: signoLunar, 
    ...SIGNOS_CARACTERISTICAS[signoLunar],
    descricao: `Sua lua em ${signoLunar} revela suas emoções mais profundas e necessidades emocionais.`
  };
}

// ===== ASTROLOGIA CHINESA =====

const ANIMAIS_CHINESES = [
  { nome: 'Rato', yin_yang: 'Yang', descricao: 'Inteligente, adaptável e charmoso. Você tem uma habilidade natural para encontrar oportunidades.' },
  { nome: 'Boi', yin_yang: 'Yin', descricao: 'Confiável, determinado e honesto. Você é uma pessoa em quem outros podem confiar.' },
  { nome: 'Tigre', yin_yang: 'Yang', descricao: 'Corajoso, competitivo e imprevisível. Você tem uma energia poderosa e magnética.' },
  { nome: 'Coelho', yin_yang: 'Yin', descricao: 'Gentil, elegante e responsável. Você traz paz e harmonia onde quer que vá.' },
  { nome: 'Dragão', yin_yang: 'Yang', descricao: 'Carismático, energético e corajoso. Você tem um magnetismo natural e liderança inata.' },
  { nome: 'Serpente', yin_yang: 'Yin', descricao: 'Sábio, intuitivo e misterioso. Você possui uma sabedoria profunda e percepção aguçada.' },
  { nome: 'Cavalo', yin_yang: 'Yang', descricao: 'Energético, independente e alegre. Você valoriza a liberdade e tem espírito aventureiro.' },
  { nome: 'Cabra', yin_yang: 'Yin', descricao: 'Criativo, gentil e compassivo. Você tem uma sensibilidade artística e empatia natural.' },
  { nome: 'Macaco', yin_yang: 'Yang', descricao: 'Inteligente, espirituoso e versátil. Você tem uma mente ágil e senso de humor único.' },
  { nome: 'Galo', yin_yang: 'Yin', descricao: 'Observador, trabalhador e corajoso. Você tem um senso de justiça forte e é muito confiável.' },
  { nome: 'Cão', yin_yang: 'Yang', descricao: 'Leal, responsável e confiável. Você é um amigo verdadeiro e protecto natural.' },
  { nome: 'Porco', yin_yang: 'Yin', descricao: 'Compassivo, generoso e diligente. Você tem um coração grande e natureza altruísta.' }
];

const ELEMENTOS_CHINESES = [
  { nome: 'Madeira', descricao: 'Crescimento, flexibilidade e vitalidade. Você tem uma energia expansiva e criativa.' },
  { nome: 'Fogo', descricao: 'Energia, transformação e dinamismo. Você possui paixão e capacidade de inspirar outros.' },
  { nome: 'Terra', descricao: 'Estabilidade, nutrição e centro. Você é uma pessoa equilibrada e confiável.' },
  { nome: 'Metal', descricao: 'Força, clareza e transformação. Você tem determinação e capacidade de foco.' },
  { nome: 'Água', descricao: 'Fluxo, adaptabilidade e intuição. Você possui sabedoria emocional e flexibilidade.' }
];

export function calcularAstrologiaChinesa(dataNascimento) {
  const data = new Date(dataNascimento);
  const ano = data.getFullYear();
  
  const indiceAnimal = (ano - 1924) % 12;
  const animal = ANIMAIS_CHINESES[indiceAnimal];
  
  const indiceElemento = Math.floor((ano - 1924) % 10 / 2);
  const elemento = ELEMENTOS_CHINESES[indiceElemento];
  
  const polaridade = ano % 2 === 0 ? 'Yang' : 'Yin';
  
  return {
    animal: animal.nome,
    elemento: elemento.nome,
    polaridade: polaridade,
    descricaoAnimal: animal.descricao,
    descricaoElemento: elemento.descricao,
    descricaoPolaridade: polaridade === 'Yang' ? 
      'Energia ativa, extrovertida e assertiva. Você tende a ser mais direto e focado na ação.' :
      'Energia receptiva, introvertida e reflexiva. Você tende a ser mais contemplativo e intuitivo.'
  };
}

// ===== NUMEROLOGIA CORRIGIDA =====

const TABELA_NUMEROLOGICA = {
  'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
  'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
  'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
};

const VOGAIS = ['A', 'E', 'I', 'O', 'U'];

const SIGNIFICADOS_NUMEROLOGICOS = {
  1: 'Liderança e independência. Você é um pioneiro natural com forte individualidade.',
  2: 'Cooperação e diplomacia. Você tem um dom para trabalhar em equipe e mediar conflitos.',
  3: 'Criatividade e comunicação. Você possui talentos artísticos e facilidade para se expressar.',
  4: 'Estabilidade e organização. Você é prático, confiável e tem habilidade para construir bases sólidas.',
  5: 'Liberdade e aventura. Você busca variedade, mudança e novas experiências.',
  6: 'Responsabilidade e cuidado. Você tem uma natureza nurturante e senso de responsabilidade familiar.',
  7: 'Espiritualidade e análise. Você é introspectivo, busca conhecimento profundo e verdades espirituais.',
  8: 'Ambição e sucesso material. Você tem habilidade para negócios e capacidade de alcançar o sucesso.',
  9: 'Humanitarismo e sabedoria. Você tem uma visão ampla e desejo de servir a humanidade.',
  11: 'Intuição e inspiração. Você é um visionário com forte conexão espiritual e capacidade de inspirar outros.',
  22: 'Construtor mestre. Você tem o potencial de realizar grandes projetos que beneficiam muitas pessoas.',
  33: 'Mestre professor. Você possui uma sabedoria especial e capacidade de elevar a consciência dos outros.'
};

function reduzirNumeroCompleto(numero) {
  while (numero > 9 && numero !== 11 && numero !== 22 && numero !== 33) {
    numero = [...numero.toString()].reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return numero;
}

function calcularValorNome(nome, somenteVogais = false, somenteConsoantes = false) {
  const nomeUpper = nome.toUpperCase().replace(/[^A-Z]/g, '');
  let soma = 0;
  
  for (const letra of nomeUpper) {
    const isVogal = VOGAIS.includes(letra);
    
    if (somenteVogais && !isVogal) continue;
    if (somenteConsoantes && isVogal) continue;
    
    soma += TABELA_NUMEROLOGICA[letra] || 0;
  }
  
  return reduzirNumeroCompleto(soma);
}

// FUNÇÃO TOTALMENTE REFATORADA - Número do Destino
function calcularNumeroDestino(dataNascimento) {
  const data = new Date(dataNascimento);
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  
  // Função de redução segura
  const reduzirComponente = (num) => {
    let n = num;
    while (n > 9 && ![11, 22, 33].includes(n)) {
      n = [...n.toString()].reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return n;
  };
  
  // Reduzir cada componente individualmente
  const diaReduzido = reduzirComponente(dia);
  const mesReduzido = reduzirComponente(mes);
  const anoReduzido = reduzirComponente(
    [...ano.toString()].reduce((sum, digit) => sum + parseInt(digit), 0)
  );
  
  // Soma final e redução
  const somaTotal = diaReduzido + mesReduzido + anoReduzido;
  return reduzirComponente(somaTotal);
}

export function calcularNumerologia(nomeCompleto, dataNascimento) {
  const numeroDestino = calcularNumeroDestino(dataNascimento);
  
  const numeroAlma = calcularValorNome(nomeCompleto, true, false);
  const numeroPersonalidade = calcularValorNome(nomeCompleto, false, true);
  const numeroExpressao = calcularValorNome(nomeCompleto, false, false);
  
  return {
    destino: {
      numero: numeroDestino,
      significado: SIGNIFICADOS_NUMEROLOGICOS[numeroDestino] || 'Significado não disponível'
    },
    alma: {
      numero: numeroAlma,
      significado: SIGNIFICADOS_NUMEROLOGICOS[numeroAlma] || 'Significado não disponível'
    },
    personalidade: {
      numero: numeroPersonalidade,
      significado: SIGNIFICADOS_NUMEROLOGICOS[numeroPersonalidade] || 'Significado não disponível'
    },
    expressao: {
      numero: numeroExpressao,
      significado: SIGNIFICADOS_NUMEROLOGICOS[numeroExpressao] || 'Significado não disponível'
    }
  };
}

// ===== ANJOS CABALÍSTICOS CORRIGIDOS =====

const ANJOS_POR_NUMERO_DESTINO = {
  1: { 
    nome: 'Vehuiah', 
    atributos: 'Vontade divina e novos começos', 
    mensagem: 'Confie em sua força interior para iniciar novos projetos.' 
  },
  2: { 
    nome: 'Jeliel', 
    atributos: 'Amor e fecundidade', 
    mensagem: 'O amor verdadeiro floresce quando você se abre para receber.' 
  },
  3: { 
    nome: 'Sitael', 
    atributos: 'Construção e expansão', 
    mensagem: 'Seus projetos crescerão com paciência e dedicação.' 
  },
  4: { 
    nome: 'Elemiah', 
    atributos: 'Proteção em viagens', 
    mensagem: 'Você está protegido em todas as suas jornadas.' 
  },
  5: { 
    nome: 'Mahasiah', 
    atributos: 'Paz e harmonia', 
    mensagem: 'A paz interior é a chave para a harmonia exterior.' 
  },
  6: { 
    nome: 'Yesalel', 
    atributos: 'Elevação espiritual', 
    mensagem: 'Sua alma está em constante elevação rumo à luz divina.' 
  },
  7: { 
    nome: 'Mebahel', 
    atributos: 'Verdade e justiça', 
    mensagem: 'A verdade sempre prevalece, e a justiça divina está ao seu lado.' 
  },
  8: { 
    nome: 'Hariel', 
    atributos: 'Purificação', 
    mensagem: 'A purificação interior traz clareza e renovação.' 
  },
  9: { 
    nome: 'Hekamiah', 
    atributos: 'Lealdade e amizade', 
    mensagem: 'As amizades verdadeiras são tesouros que enriquecem sua jornada.' 
  }
};

export function calcularAnjoGuardiao(dataNascimento) {
  const numeroDestino = calcularNumeroDestino(dataNascimento);
  
  // Retorna o anjo correspondente ou o primeiro se não encontrado
  return ANJOS_POR_NUMERO_DESTINO[numeroDestino] || ANJOS_POR_NUMERO_DESTINO[1];
}

// ===== TARÔ =====

const ARCANOS_MAIORES = [
  { numero: 0, nome: 'O Louco', descricao: 'Novos começos, espontaneidade e fé no desconhecido.' },
  { numero: 1, nome: 'O Mago', descricao: 'Manifestação, poder pessoal e habilidade para criar a realidade.' },
  { numero: 2, nome: 'A Sacerdotisa', descricao: 'Intuição, mistério e sabedoria interior.' },
  { numero: 3, nome: 'A Imperatriz', descricao: 'Fertilidade, criatividade e abundância maternal.' },
  { numero: 4, nome: 'O Imperador', descricao: 'Autoridade, estrutura e liderança responsável.' },
  { numero: 5, nome: 'O Hierofante', descricao: 'Tradição, ensino espiritual e orientação.' },
  { numero: 6, nome: 'Os Amantes', descricao: 'Amor, escolhas importantes e união harmoniosa.' },
  { numero: 7, nome: 'O Carro', descricao: 'Determinação, controle e vitória através do esforço.' },
  { numero: 8, nome: 'A Força', descricao: 'Coragem interior, compaixão e domínio gentil.' },
  { numero: 9, nome: 'O Eremita', descricao: 'Busca interior, sabedoria e orientação espiritual.' },
  { numero: 10, nome: 'A Roda da Fortuna', descricao: 'Ciclos da vida, destino e mudanças inevitáveis.' },
  { numero: 11, nome: 'A Justiça', descricao: 'Equilíbrio, verdade e consequências justas.' },
  { numero: 12, nome: 'O Enforcado', descricao: 'Sacrifício, nova perspectiva e rendição.' },
  { numero: 13, nome: 'A Morte', descricao: 'Transformação, fim de ciclos e renascimento.' },
  { numero: 14, nome: 'A Temperança', descricao: 'Moderação, paciência e alquimia espiritual.' },
  { numero: 15, nome: 'O Diabo', descricao: 'Tentação, materialismo e libertação de amarras.' },
  { numero: 16, nome: 'A Torre', descricao: 'Mudança súbita, revelação e libertação.' },
  { numero: 17, nome: 'A Estrela', descricao: 'Esperança, inspiração e orientação divina.' },
  { numero: 18, nome: 'A Lua', descricao: 'Ilusão, intuição e navegação pelo inconsciente.' },
  { numero: 19, nome: 'O Sol', descricao: 'Alegria, sucesso e vitalidade radiante.' },
  { numero: 20, nome: 'O Julgamento', descricao: 'Renascimento, chamado superior e avaliação.' },
  { numero: 21, nome: 'O Mundo', descricao: 'Completude, realização e integração total.' }
];

export function calcularTaroNascimento(dataNascimento) {
  const data = new Date(dataNascimento);
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  
  let soma = dia + mes + [...ano.toString()].reduce((sum, digit) => sum + parseInt(digit), 0);
  
  while (soma > 22) {
    soma = [...soma.toString()].reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  
  if (soma === 22) soma = 0;
  
  const cartaNascimento = ARCANOS_MAIORES.find(arcano => arcano.numero === soma) || ARCANOS_MAIORES[0];
  
  let somaPersonalidade = soma;
  if (soma > 9) {
    somaPersonalidade = [...soma.toString()].reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  
  const cartaPersonalidade = ARCANOS_MAIORES.find(arcano => arcano.numero === somaPersonalidade) || cartaNascimento;
  
  return {
    nascimento: cartaNascimento,
    personalidade: cartaPersonalidade
  };
}

// ===== FUNÇÃO PRINCIPAL =====

export function calcularUniversoMistico(dados) {
  const { nome, dataNascimento, horaNascimento, cidade, pais } = dados;
  
  try {
    const signoSolar = calcularSignoSolar(dataNascimento);
    const ascendente = calcularAscendente(dataNascimento, horaNascimento, cidade);
    const signoLunar = calcularSignoLunar(dataNascimento, horaNascimento);
    
    const astrologiaChinesa = calcularAstrologiaChinesa(dataNascimento);
    const numerologia = calcularNumerologia(nome, dataNascimento);
    const anjoGuardiao = calcularAnjoGuardiao(dataNascimento);
    const taroNascimento = calcularTaroNascimento(dataNascimento);
    
    return {
      astrologia: {
        signoSolar,
        ascendente,
        signoLunar
      },
      astrologiaChinesa,
      numerologia,
      anjoGuardiao,
      taro: taroNascimento
    };
  } catch (error) {
    console.error('Erro nos cálculos místicos:', error);
    return null;
  }
}