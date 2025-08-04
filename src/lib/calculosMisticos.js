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
]

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
}

export function calcularSignoSolar(dataNascimento) {
  const data = new Date(dataNascimento)
  const mes = data.getMonth() + 1
  const dia = data.getDate()
  
  for (const signo of SIGNOS_DATAS) {
    if (signo.inicio.mes === signo.fim.mes) {
      // Signo dentro do mesmo mês
      if (mes === signo.inicio.mes && dia >= signo.inicio.dia && dia <= signo.fim.dia) {
        return { 
          nome: signo.nome, 
          ...SIGNOS_CARACTERISTICAS[signo.nome] 
        }
      }
    } else {
      // Signo que atravessa dois meses
      if ((mes === signo.inicio.mes && dia >= signo.inicio.dia) || 
          (mes === signo.fim.mes && dia <= signo.fim.dia)) {
        return { 
          nome: signo.nome, 
          ...SIGNOS_CARACTERISTICAS[signo.nome] 
        }
      }
    }
  }
  
  return { nome: 'Não identificado', descricao: 'Não foi possível determinar o signo.' }
}

// Cálculo simplificado de ascendente (baseado em hora e local aproximado)
export function calcularAscendente(dataNascimento, horaNascimento, cidade) {
  // Simulação simplificada - em um sistema real, seria necessário cálculos astronômicos complexos
  const data = new Date(dataNascimento)
  const [hora, minuto] = horaNascimento.split(':').map(Number)
  
  // Fórmula simplificada baseada na hora
  const indiceHora = Math.floor(hora / 2)
  const signos = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 
                  'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes']
  
  const signoAscendente = signos[indiceHora % 12]
  return { 
    nome: signoAscendente, 
    ...SIGNOS_CARACTERISTICAS[signoAscendente],
    descricao: `Seu ascendente em ${signoAscendente} influencia como você se apresenta ao mundo e suas primeiras impressões.`
  }
}

// Cálculo simplificado de signo lunar
export function calcularSignoLunar(dataNascimento, horaNascimento) {
  const data = new Date(dataNascimento)
  const diasDesde1900 = Math.floor((data - new Date(1900, 0, 1)) / (1000 * 60 * 60 * 24))
  
  // Ciclo lunar aproximado de 28 dias
  const cicloLunar = diasDesde1900 % 28
  const indiceSigno = Math.floor(cicloLunar / 2.33) % 12
  
  const signos = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 
                  'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes']
  
  const signoLunar = signos[indiceSigno]
  return { 
    nome: signoLunar, 
    ...SIGNOS_CARACTERISTICAS[signoLunar],
    descricao: `Sua lua em ${signoLunar} revela suas emoções mais profundas e necessidades emocionais.`
  }
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
  { nome: 'Cão', yin_yang: 'Yang', descricao: 'Leal, responsável e confiável. Você é um amigo verdadeiro e protetor natural.' },
  { nome: 'Porco', yin_yang: 'Yin', descricao: 'Compassivo, generoso e diligente. Você tem um coração grande e natureza altruísta.' }
]

const ELEMENTOS_CHINESES = [
  { nome: 'Madeira', descricao: 'Crescimento, flexibilidade e vitalidade. Você tem uma energia expansiva e criativa.' },
  { nome: 'Fogo', descricao: 'Energia, transformação e dinamismo. Você possui paixão e capacidade de inspirar outros.' },
  { nome: 'Terra', descricao: 'Estabilidade, nutrição e centro. Você é uma pessoa equilibrada e confiável.' },
  { nome: 'Metal', descricao: 'Força, clareza e transformação. Você tem determinação e capacidade de foco.' },
  { nome: 'Água', descricao: 'Fluxo, adaptabilidade e intuição. Você possui sabedoria emocional e flexibilidade.' }
]

export function calcularAstrologiaChinesa(dataNascimento) {
  const data = new Date(dataNascimento)
  const ano = data.getFullYear()
  
  // Cálculo do animal (ciclo de 12 anos, começando do Rato em 1924)
  const indiceAnimal = (ano - 1924) % 12
  const animal = ANIMAIS_CHINESES[indiceAnimal]
  
  // Cálculo do elemento (ciclo de 5 elementos, cada um dura 2 anos)
  const indiceElemento = Math.floor((ano - 1924) % 10 / 2)
  const elemento = ELEMENTOS_CHINESES[indiceElemento]
  
  // Polaridade Yin/Yang (anos pares = Yang, ímpares = Yin)
  const polaridade = ano % 2 === 0 ? 'Yang' : 'Yin'
  
  return {
    animal: animal.nome,
    elemento: elemento.nome,
    polaridade: polaridade,
    descricaoAnimal: animal.descricao,
    descricaoElemento: elemento.descricao,
    descricaoPolaridade: polaridade === 'Yang' ? 
      'Energia ativa, extrovertida e assertiva. Você tende a ser mais direto e focado na ação.' :
      'Energia receptiva, introvertida e reflexiva. Você tende a ser mais contemplativo e intuitivo.'
  }
}

// ===== NUMEROLOGIA CORRIGIDA =====

const TABELA_NUMEROLOGICA = {
  'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
  'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
  'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
}

const VOGAIS = ['A', 'E', 'I', 'O', 'U']

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
}

function reduzirNumero(numero) {
  while (numero > 9 && numero !== 11 && numero !== 22 && numero !== 33) {
    numero = numero.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
  }
  return numero
}

function calcularValorNome(nome, somenteVogais = false, somenteConsoantes = false) {
  const nomeUpper = nome.toUpperCase().replace(/[^A-Z]/g, '')
  let soma = 0
  
  for (const letra of nomeUpper) {
    const isVogal = VOGAIS.includes(letra)
    
    if (somenteVogais && !isVogal) continue
    if (somenteConsoantes && isVogal) continue
    
    soma += TABELA_NUMEROLOGICA[letra] || 0
  }
  
  return reduzirNumero(soma)
}

// FUNÇÃO CORRIGIDA - Número do Destino
export function calcularNumerologia(nomeCompleto, dataNascimento) {
  const data = new Date(dataNascimento)
  
  // CORREÇÃO: Número do Destino (Caminho de Vida) - somar TODOS os dígitos da data
  const dia = data.getDate()
  const mes = data.getMonth() + 1
  const ano = data.getFullYear()
  
  // Somar todos os dígitos individualmente
  let somaData = 0
  
  // Somar dígitos do dia
  somaData += Math.floor(dia / 10) + (dia % 10)
  
  // Somar dígitos do mês
  somaData += Math.floor(mes / 10) + (mes % 10)
  
  // Somar dígitos do ano
  const anoStr = ano.toString()
  for (let i = 0; i < anoStr.length; i++) {
    somaData += parseInt(anoStr[i])
  }
  
  const numeroDestino = reduzirNumero(somaData)
  
  // Número da Alma (vogais do nome)
  const numeroAlma = calcularValorNome(nomeCompleto, true, false)
  
  // Número da Personalidade (consoantes do nome)
  const numeroPersonalidade = calcularValorNome(nomeCompleto, false, true)
  
  // Número de Expressão (nome completo)
  const numeroExpressao = calcularValorNome(nomeCompleto, false, false)
  
  return {
    destino: {
      numero: numeroDestino,
      significado: SIGNIFICADOS_NUMEROLOGICOS[numeroDestino]
    },
    alma: {
      numero: numeroAlma,
      significado: SIGNIFICADOS_NUMEROLOGICOS[numeroAlma]
    },
    personalidade: {
      numero: numeroPersonalidade,
      significado: SIGNIFICADOS_NUMEROLOGICOS[numeroPersonalidade]
    },
    expressao: {
      numero: numeroExpressao,
      significado: SIGNIFICADOS_NUMEROLOGICOS[numeroExpressao]
    }
  }
}

// ===== ANJOS CABALÍSTICOS CORRIGIDOS =====

const ANJOS_CABALISTICOS = [
  { nome: 'Vehuiah', datas: ['20/03', '01/06', '13/08', '25/10', '06/01'], atributos: 'Vontade divina e novos começos', mensagem: 'Confie em sua força interior para iniciar novos projetos.' },
  { nome: 'Jeliel', datas: ['21/03', '02/06', '14/08', '26/10', '07/01'], atributos: 'Amor e fecundidade', mensagem: 'O amor verdadeiro floresce quando você se abre para receber.' },
  { nome: 'Sitael', datas: ['22/03', '03/06', '15/08', '27/10', '08/01'], atributos: 'Construção e expansão', mensagem: 'Seus projetos crescerão com paciência e dedicação.' },
  { nome: 'Elemiah', datas: ['23/03', '04/06', '16/08', '28/10', '09/01'], atributos: 'Proteção em viagens', mensagem: 'Você está protegido em todas as suas jornadas, físicas e espirituais.' },
  { nome: 'Mahasiah', datas: ['24/03', '05/06', '17/08', '29/10', '10/01'], atributos: 'Paz e harmonia', mensagem: 'A paz interior é a chave para a harmonia exterior.' },
  { nome: 'Lelahel', datas: ['25/03', '06/06', '18/08', '30/10', '11/01'], atributos: 'Luz e cura', mensagem: 'Sua luz interior tem o poder de curar a si mesmo e aos outros.' },
  { nome: 'Achaiah', datas: ['26/03', '07/06', '19/08', '31/10', '12/01'], atributos: 'Paciência e descoberta', mensagem: 'A paciência revela os segredos que o tempo esconde.' },
  { nome: 'Cahethel', datas: ['27/03', '08/06', '20/08', '01/11', '13/01'], atributos: 'Bênçãos divinas', mensagem: 'As bênçãos fluem naturalmente quando você está alinhado com seu propósito.' },
  { nome: 'Haziel', datas: ['28/03', '09/06', '21/08', '02/11', '14/01'], atributos: 'Misericórdia e perdão', mensagem: 'O perdão liberta sua alma e abre caminhos para a felicidade.' },
  { nome: 'Aladiah', datas: ['29/03', '10/06', '22/08', '03/11', '15/01'], atributos: 'Graça divina', mensagem: 'A graça divina está sempre presente, mesmo nos momentos mais difíceis.' },
  { nome: 'Laoviah', datas: ['30/03', '11/06', '23/08', '04/11', '16/01'], atributos: 'Vitória e renome', mensagem: 'Sua perseverança será recompensada com reconhecimento merecido.' },
  { nome: 'Hahahiah', datas: ['31/03', '12/06', '24/08', '05/11', '17/01'], atributos: 'Refúgio e proteção', mensagem: 'Você sempre encontrará refúgio seguro nos momentos de necessidade.' },
  { nome: 'Yesalel', datas: ['01/04', '13/06', '25/08', '06/11', '18/01'], atributos: 'Elevação espiritual', mensagem: 'Sua alma está em constante elevação rumo à luz divina.' },
  { nome: 'Mebahel', datas: ['02/04', '14/06', '26/08', '07/11', '19/01'], atributos: 'Verdade e justiça', mensagem: 'A verdade sempre prevalece, e a justiça divina está ao seu lado.' },
  { nome: 'Hariel', datas: ['03/04', '15/06', '27/08', '08/11', '20/01'], atributos: 'Purificação', mensagem: 'A purificação interior traz clareza e renovação para sua vida.' },
  { nome: 'Hekamiah', datas: ['04/04', '16/06', '28/08', '09/11', '21/01'], atributos: 'Lealdade e amizade', mensagem: 'As amizades verdadeiras são tesouros que enriquecem sua jornada.' },
  { nome: 'Lauviah', datas: ['05/04', '17/06', '29/08', '10/11', '22/01'], atributos: 'Vitória sobre inimigos', mensagem: 'Sua força interior supera qualquer obstáculo ou oposição.' },
  { nome: 'Caliel', datas: ['06/04', '18/06', '30/08', '11/11', '23/01'], atributos: 'Justiça divina', mensagem: 'A justiça divina trabalha a seu favor, trazendo equilíbrio à sua vida.' },
  { nome: 'Leuviah', datas: ['07/04', '19/06', '31/08', '12/11', '24/01'], atributos: 'Expansão da memória', mensagem: 'Sua sabedoria se expande através das experiências e memórias.' },
  { nome: 'Pahaliah', datas: ['08/04', '20/06', '01/09', '13/11', '25/01'], atributos: 'Redenção', mensagem: 'Cada dia é uma nova oportunidade de redenção e crescimento.' },
  { nome: 'Nelchael', datas: ['09/04', '21/06', '02/09', '14/11', '26/01'], atributos: 'Ensino e aprendizado', mensagem: 'Você é tanto professor quanto estudante na escola da vida.' },
  { nome: 'Ieiaiel', datas: ['10/04', '22/06', '03/09', '15/11', '27/01'], atributos: 'Consolação', mensagem: 'O consolo divino acalma seu coração nos momentos de tristeza.' },
  { nome: 'Melahel', datas: ['11/04', '23/06', '04/09', '16/11', '28/01'], atributos: 'Cura e medicina', mensagem: 'Você possui dons naturais de cura, seja física, emocional ou espiritual.' },
  { nome: 'Haheuiah', datas: ['12/04', '24/06', '05/09', '17/11', '29/01'], atributos: 'Proteção', mensagem: 'Você está sob proteção divina constante em todos os aspectos da vida.' },
  { nome: 'Nith-Haiah', datas: ['13/04', '25/06', '06/09', '18/11', '30/01'], atributos: 'Sabedoria divina', mensagem: 'A sabedoria divina flui através de você, iluminando seu caminho.' },
  { nome: 'Haaiah', datas: ['14/04', '26/06', '07/09', '19/11', '31/01'], atributos: 'Política e diplomacia', mensagem: 'Sua habilidade diplomática traz harmonia e resolve conflitos.' },
  { nome: 'Ierathel', datas: ['15/04', '27/06', '08/09', '20/11', '01/02'], atributos: 'Confusão dos malvados', mensagem: 'A luz da verdade dissipa as trevas e confunde aqueles que fazem o mal.' },
  { nome: 'Seheiah', datas: ['16/04', '28/06', '09/09', '21/11', '02/02'], atributos: 'Longevidade', mensagem: 'Sua vida é abençoada com vitalidade e longevidade.' },
  { nome: 'Reyel', datas: ['17/04', '29/06', '10/09', '22/11', '03/02'], atributos: 'Libertação', mensagem: 'Você será libertado de todas as amarras que limitam seu crescimento.' },
  { nome: 'Omael', datas: ['18/04', '30/06', '11/09', '23/11', '04/02'], atributos: 'Paciência e fecundidade', mensagem: 'A paciência é a chave que abre as portas da abundância.' },
  { nome: 'Lecabel', datas: ['19/04', '01/07', '12/09', '24/11', '05/02'], atributos: 'Inteligência e iluminação', mensagem: 'Sua inteligência é iluminada pela sabedoria divina.' },
  { nome: 'Vasariah', datas: ['20/04', '02/07', '13/09', '25/11', '06/02'], atributos: 'Clemência', mensagem: 'A clemência divina perdoa e oferece novas oportunidades.' },
  { nome: 'Iehuiah', datas: ['21/04', '03/07', '14/09', '26/11', '07/02'], atributos: 'Conhecimento', mensagem: 'O conhecimento verdadeiro vem da união entre mente e coração.' },
  { nome: 'Lehahiah', datas: ['22/04', '04/07', '15/09', '27/11', '08/02'], atributos: 'Obediência', mensagem: 'A obediência às leis divinas traz harmonia e prosperidade.' },
  { nome: 'Chavakiah', datas: ['23/04', '05/07', '16/09', '28/11', '09/02'], atributos: 'Reconciliação', mensagem: 'A reconciliação cura feridas e restaura relacionamentos.' },
  { nome: 'Menadel', datas: ['24/04', '06/07', '17/09', '29/11', '10/02'], atributos: 'Trabalho e vocação', mensagem: 'Seu trabalho é uma expressão de sua vocação divina.' },
  { nome: 'Aniel', datas: ['25/04', '07/07', '18/09', '30/11', '11/02'], atributos: 'Vitória e coragem', mensagem: 'Sua coragem interior garante a vitória sobre todos os desafios.' },
  { nome: 'Haamiah', datas: ['26/04', '08/07', '19/09', '01/12', '12/02'], atributos: 'Rituais e cerimônias', mensagem: 'Os rituais sagrados conectam você com o divino.' },
  { nome: 'Rehael', datas: ['27/04', '09/07', '20/09', '02/12', '13/02'], atributos: 'Saúde e cura', mensagem: 'A cura flui através de você, restaurando saúde e vitalidade.' },
  { nome: 'Ieiazel', datas: ['28/04', '10/07', '21/09', '03/12', '14/02'], atributos: 'Alegria e consolação', mensagem: 'A alegria divina ilumina seu coração e consola sua alma.' },
  { nome: 'Hahahael', datas: ['29/04', '11/07', '22/09', '04/12', '15/02'], atributos: 'Refúgio', mensagem: 'Você sempre encontrará refúgio seguro na proteção divina.' },
  { nome: 'Mikael', datas: ['30/04', '12/07', '23/09', '05/12', '16/02'], atributos: 'Proteção e força', mensagem: 'A força do Arcanjo Miguel protege e fortalece sua jornada.' },
  { nome: 'Veuliah', datas: ['01/05', '13/07', '24/09', '06/12', '17/02'], atributos: 'Prosperidade', mensagem: 'A prosperidade flui naturalmente quando você está alinhado com seu propósito.' },
  { nome: 'Yelaiah', datas: ['02/05', '14/07', '25/09', '07/12', '18/02'], atributos: 'Guerreiro da luz', mensagem: 'Você é um guerreiro da luz, lutando pelo bem e pela verdade.' },
  { nome: 'Sealiah', datas: ['03/05', '15/07', '26/09', '08/12', '19/02'], atributos: 'Motivação', mensagem: 'A motivação divina impulsiona você rumo aos seus objetivos.' },
  { nome: 'Ariel', datas: ['04/05', '16/07', '27/09', '09/12', '20/02'], atributos: 'Revelação', mensagem: 'As revelações divinas iluminam seu caminho e esclarecem dúvidas.' },
  { nome: 'Asaliah', datas: ['05/05', '17/07', '28/09', '10/12', '21/02'], atributos: 'Contemplação', mensagem: 'A contemplação traz paz interior e compreensão profunda.' },
  { nome: 'Mihael', datas: ['06/05', '18/07', '29/09', '11/12', '22/02'], atributos: 'Fecundidade e proteção', mensagem: 'Você é abençoado com fertilidade em todos os aspectos da vida.' },
  { nome: 'Vehuel', datas: ['07/05', '19/07', '30/09', '12/12', '23/02'], atributos: 'Grandeza', mensagem: 'Sua grandeza interior se manifesta através de atos de bondade.' },
  { nome: 'Daniel', datas: ['08/05', '20/07', '01/10', '13/12', '24/02'], atributos: 'Misericórdia', mensagem: 'A misericórdia divina perdoa e oferece novas oportunidades.' },
  { nome: 'Hahasiah', datas: ['09/05', '21/07', '02/10', '14/12', '25/02'], atributos: 'Medicina universal', mensagem: 'Você possui dons de cura que beneficiam a todos ao seu redor.' },
  { nome: 'Imamaiah', datas: ['10/05', '22/07', '03/10', '15/12', '26/02'], atributos: 'Expiação', mensagem: 'A expiação liberta você de cargas passadas e abre novos caminhos.' },
  { nome: 'Nanael', datas: ['11/05', '23/07', '04/10', '16/12', '27/02'], atributos: 'Comunicação espiritual', mensagem: 'Sua comunicação é um canal para a sabedoria espiritual.' },
  { nome: 'Nithael', datas: ['12/05', '24/07', '05/10', '17/12', '28/02'], atributos: 'Rejuvenescimento', mensagem: 'Você possui a capacidade de se renovar constantemente.' },
  { nome: 'Mebahiah', datas: ['13/05', '25/07', '06/10', '18/12', '01/03'], atributos: 'Lucidez intelectual', mensagem: 'Sua mente é clara e capaz de compreender verdades profundas.' },
  { nome: 'Poiel', datas: ['14/05', '26/07', '07/10', '19/12', '02/03'], atributos: 'Fortuna', mensagem: 'A fortuna sorri para você quando você age com integridade.' },
  { nome: 'Nemamiah', datas: ['15/05', '27/07', '08/10', '20/12', '03/03'], atributos: 'Discernimento', mensagem: 'Seu discernimento o guia para fazer as escolhas certas.' },
  { nome: 'Iealel', datas: ['16/05', '28/07', '09/10', '21/12', '04/03'], atributos: 'Força mental', mensagem: 'Sua força mental supera qualquer desafio intelectual.' },
  { nome: 'Harahel', datas: ['17/05', '29/07', '10/10', '22/12', '05/03'], atributos: 'Riqueza intelectual', mensagem: 'Sua riqueza verdadeira está no conhecimento e na sabedoria.' },
  { nome: 'Mitzrael', datas: ['18/05', '30/07', '11/10', '23/12', '06/03'], atributos: 'Reparação', mensagem: 'Você tem o dom de reparar e restaurar o que está quebrado.' },
  { nome: 'Umabel', datas: ['19/05', '31/07', '12/10', '24/12', '07/03'], atributos: 'Amizade', mensagem: 'As amizades verdadeiras são bênçãos que enriquecem sua vida.' },
  { nome: 'Iah-Hel', datas: ['20/05', '01/08', '13/10', '25/12', '08/03'], atributos: 'Desejo de conhecer', mensagem: 'Sua sede de conhecimento o leva a descobertas maravilhosas.' },
  { nome: 'Anauel', datas: ['21/05', '02/08', '14/10', '26/12', '09/03'], atributos: 'Unidade', mensagem: 'Você promove a unidade e a harmonia onde quer que vá.' },
  { nome: 'Mehiel', datas: ['22/05', '03/08', '15/10', '27/12', '10/03'], atributos: 'Vivificação', mensagem: 'Sua presença traz vida e energia para tudo ao seu redor.' },
  { nome: 'Damabiah', datas: ['23/05', '04/08', '16/10', '28/12', '11/03'], atributos: 'Fonte de sabedoria', mensagem: 'Você é uma fonte de sabedoria para aqueles que buscam orientação.' },
  { nome: 'Manakel', datas: ['24/05', '05/08', '17/10', '29/12', '12/03'], atributos: 'Conhecimento do bem e do mal', mensagem: 'Sua sabedoria distingue claramente entre o bem e o mal.' },
  { nome: 'Ayel', datas: ['25/05', '06/08', '18/10', '30/12', '13/03'], atributos: 'Sublimidade', mensagem: 'Sua alma aspira às alturas mais sublimes da existência.' },
  { nome: 'Habuhiah', datas: ['26/05', '07/08', '19/10', '31/12', '14/03'], atributos: 'Cura e saúde', mensagem: 'A cura flui através de você, restaurando saúde e bem-estar.' },
  { nome: 'Rochel', datas: ['27/05', '08/08', '20/10', '01/01', '15/03'], atributos: 'Restituição', mensagem: 'O que foi perdido será restituído no momento certo.' },
  { nome: 'Yabamiah', datas: ['28/05', '09/08', '21/10', '02/01', '16/03'], atributos: 'Regeneração', mensagem: 'Você possui o poder de regeneração e renovação constante.' },
  { nome: 'Haiaiel', datas: ['29/05', '10/08', '22/10', '03/01', '17/03'], atributos: 'Proteção divina', mensagem: 'A proteção divina o acompanha em todos os momentos.' },
  { nome: 'Mumiah', datas: ['30/05', '11/08', '23/10', '04/01', '18/03'], atributos: 'Renascimento', mensagem: 'Cada fim é um novo começo, cada morte é um renascimento.' }
]

// FUNÇÃO CORRIGIDA - Anjo da Guarda
export function calcularAnjoGuardiao(dataNascimento) {
  const data = new Date(dataNascimento)
  const dia = String(data.getDate()).padStart(2, '0')
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const dataFormatada = `${dia}/${mes}`
  
  console.log('Data formatada para busca:', dataFormatada) // Debug
  
  // Verificar se é um "Gênio da Humanidade"
  const geniosHumanidade = ['05/01', '19/03', '31/05', '12/08', '24/10']
  if (geniosHumanidade.includes(dataFormatada)) {
    return {
      nome: 'Gênio da Humanidade',
      atributos: 'Essência angelical universal',
      mensagem: 'Você é protegido pela poderosa essência angelical universal. Sua alma carrega a sabedoria de vidas passadas e tem uma missão especial na Terra.'
    }
  }
  
  // Encontrar o anjo correspondente
  for (const anjo of ANJOS_CABALISTICOS) {
    if (anjo.datas.includes(dataFormatada)) {
      console.log('Anjo encontrado:', anjo.nome) // Debug
      return anjo
    }
  }
  
  console.log('Nenhum anjo encontrado, usando fallback') // Debug
  // Fallback para o primeiro anjo se não encontrar
  return ANJOS_CABALISTICOS[0]
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
]

export function calcularTaroNascimento(dataNascimento) {
  const data = new Date(dataNascimento)
  const dia = data.getDate()
  const mes = data.getMonth() + 1
  const ano = data.getFullYear()
  
  // Somar todos os dígitos da data
  let soma = dia + mes + ano.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
  
  // Reduzir até ficar entre 1-22 (ou 0 para O Louco)
  while (soma > 22) {
    soma = soma.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
  }
  
  // Se for 22, manter como 22 (não existe arcano 22, então será 0 - O Louco)
  if (soma === 22) soma = 0
  
  const cartaNascimento = ARCANOS_MAIORES.find(arcano => arcano.numero === soma) || ARCANOS_MAIORES[0]
  
  // Carta da personalidade (redução adicional se necessário)
  let somaPersonalidade = soma
  if (soma > 9) {
    somaPersonalidade = soma.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
  }
  
  const cartaPersonalidade = ARCANOS_MAIORES.find(arcano => arcano.numero === somaPersonalidade) || cartaNascimento
  
  return {
    nascimento: cartaNascimento,
    personalidade: cartaPersonalidade
  }
}

// ===== FUNÇÃO PRINCIPAL =====

export function calcularUniversoMistico(dados) {
  const { nome, dataNascimento, horaNascimento, cidade, pais } = dados
  
  try {
    const signoSolar = calcularSignoSolar(dataNascimento)
    const ascendente = calcularAscendente(dataNascimento, horaNascimento, cidade)
    const signoLunar = calcularSignoLunar(dataNascimento, horaNascimento)
    
    const astrologiaChinesa = calcularAstrologiaChinesa(dataNascimento)
    const numerologia = calcularNumerologia(nome, dataNascimento)
    const anjoGuardiao = calcularAnjoGuardiao(dataNascimento)
    const taroNascimento = calcularTaroNascimento(dataNascimento)
    
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
    }
  } catch (error) {
    console.error('Erro nos cálculos místicos:', error)
    return null
  }
}