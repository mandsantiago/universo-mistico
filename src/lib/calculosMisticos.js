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
        return { nome: signo.nome, ...SIGNOS_CARACTERISTICAS[signo.nome] };
      }
    } else {
      if ((mes === signo.inicio.mes && dia >= signo.inicio.dia) || 
          (mes === signo.fim.mes && dia <= signo.fim.dia)) {
        return { nome: signo.nome, ...SIGNOS_CARACTERISTICAS[signo.nome] };
      }
    }
  }
  
  return { nome: 'Não identificado', descricao: 'Não foi possível determinar o signo.' };
}

export function calcularAscendente(dataNascimento, horaNascimento, cidade) {
  const [hora] = horaNascimento.split(':').map(Number);
  const indiceHora = Math.floor(hora / 2);
  const signos = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 
                  'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes'];
  
  const signoAscendente = signos[indiceHora % 12];
  return { nome: signoAscendente, ...SIGNOS_CARACTERISTICAS[signoAscendente], descricao: `Seu ascendente em ${signoAscendente} influencia como você se apresenta ao mundo e suas primeiras impressões.` };
}

export function calcularSignoLunar(dataNascimento) {
  const data = new Date(dataNascimento);
  const diasDesde1900 = Math.floor((data - new Date(1900, 0, 1)) / (1000 * 60 * 60 * 24));
  
  const cicloLunar = diasDesde1900 % 28;
  const indiceSigno = Math.floor(cicloLunar / 2.33) % 12;
  
  const signos = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 
                  'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes'];
  
  const signoLunar = signos[indiceSigno];
  return { nome: signoLunar, ...SIGNOS_CARACTERISTICAS[signoLunar], descricao: `Sua lua em ${signoLunar} revela suas emoções mais profundas e necessidades emocionais.` };
}

// ===== NUMEROLOGIA (CORREÇÃO AQUI) =====

function reduzirNumeroCompleto(numero) {
  while (numero > 9 && numero !== 11 && numero !== 22 && numero !== 33) {
    numero = [...numero.toString()].reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return numero;
}

function calcularNumeroDestino(dataNascimento) {
  const data = new Date(dataNascimento);
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();

  let somaTotal = 0;
  for (const digito of `${dia}${mes}${ano}`) {
    somaTotal += parseInt(digito, 10);
  }

  return reduzirNumeroCompleto(somaTotal);
}

// ===== ANJOS =====
const ANJOS_POR_NUMERO_DESTINO = {
  1: { nome: 'Vehuiah', atributos: 'Vontade divina e novos começos', mensagem: 'Confie em sua força interior para iniciar novos projetos.' },
  2: { nome: 'Jeliel', atributos: 'Amor e fecundidade', mensagem: 'O amor verdadeiro floresce quando você se abre para receber.' },
  3: { nome: 'Sitael', atributos: 'Construção e expansão', mensagem: 'Seus projetos crescerão com paciência e dedicação.' },
  4: { nome: 'Elemiah', atributos: 'Proteção em viagens', mensagem: 'Você está protegido em todas as suas jornadas.' },
  5: { nome: 'Mahasiah', atributos: 'Paz e harmonia', mensagem: 'A paz interior é a chave para a harmonia exterior.' },
  6: { nome: 'Yesalel', atributos: 'Elevação espiritual', mensagem: 'Sua alma está em constante elevação rumo à luz divina.' },
  7: { nome: 'Mebahel', atributos: 'Verdade e justiça', mensagem: 'A verdade sempre prevalece, e a justiça divina está ao seu lado.' },
  8: { nome: 'Hariel', atributos: 'Purificação', mensagem: 'A purificação interior traz clareza e renovação.' },
  9: { nome: 'Hekamiah', atributos: 'Lealdade e amizade', mensagem: 'As amizades verdadeiras são tesouros que enriquecem sua jornada.' }
};

export function calcularAnjoGuardiao(dataNascimento) {
  const numeroDestino = calcularNumeroDestino(dataNascimento);
  return ANJOS_POR_NUMERO_DESTINO[numeroDestino] || ANJOS_POR_NUMERO_DESTINO[1];
}

// ===== FUNÇÃO PRINCIPAL =====

export function calcularUniversoMistico(dados) {
  const { nome, dataNascimento, horaNascimento, cidade } = dados;
  
  return {
    astrologia: {
      signoSolar: calcularSignoSolar(dataNascimento),
      ascendente: calcularAscendente(dataNascimento, horaNascimento, cidade),
      signoLunar: calcularSignoLunar(dataNascimento)
    },
    numerologia: { destino: calcularNumeroDestino(dataNascimento) },
    anjoGuardiao: calcularAnjoGuardiao(dataNascimento)
  };
}
