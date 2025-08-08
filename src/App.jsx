import React, { useState } from "react";

/*
  App.jsx - Universo Místico (versão única página)
  - Substitua src/App.jsx por este arquivo
  - Funciona client-side (React + Vite)
  - Calcula: signo solar, ascendente (estimado), lua (estimado), astrologia chinesa,
    numerologia (destino, alma, personalidade, expressão), anjo guardião, tarô de nascimento
  - Inclui mensagens interpretativas
*/

// ---------- Constantes e tabelas ----------
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
  'Áries': { elemento: 'Fogo', qualidade: 'Cardinal', regente: 'Marte' },
  'Touro': { elemento: 'Terra', qualidade: 'Fixo', regente: 'Vênus' },
  'Gêmeos': { elemento: 'Ar', qualidade: 'Mutável', regente: 'Mercúrio' },
  'Câncer': { elemento: 'Água', qualidade: 'Cardinal', regente: 'Lua' },
  'Leão': { elemento: 'Fogo', qualidade: 'Fixo', regente: 'Sol' },
  'Virgem': { elemento: 'Terra', qualidade: 'Mutável', regente: 'Mercúrio' },
  'Libra': { elemento: 'Ar', qualidade: 'Cardinal', regente: 'Vênus' },
  'Escorpião': { elemento: 'Água', qualidade: 'Fixo', regente: 'Plutão' },
  'Sagitário': { elemento: 'Fogo', qualidade: 'Mutável', regente: 'Júpiter' },
  'Capricórnio': { elemento: 'Terra', qualidade: 'Cardinal', regente: 'Saturno' },
  'Aquário': { elemento: 'Ar', qualidade: 'Fixo', regente: 'Urano' },
  'Peixes': { elemento: 'Água', qualidade: 'Mutável', regente: 'Netuno' }
};

const ANIMAIS_CHINESES = [
  'Rato','Boi','Tigre','Coelho','Dragão','Serpente','Cavalo','Cabra','Macaco','Galo','Cão','Porco'
];

const ELEMENTOS_CHINESES = ['Madeira','Fogo','Terra','Metal','Água'];

const TABELA_NUMEROLOGICA = {
  'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,
  'J':1,'K':2,'L':3,'M':4,'N':5,'O':6,'P':7,'Q':8,'R':9,
  'S':1,'T':2,'U':3,'V':4,'W':5,'X':6,'Y':7,'Z':8
};

const VOGAIS = ['A','E','I','O','U'];

const SIGNIFICADOS_NUMEROLOGICOS = {
  1: 'Liderança e independência.',
  2: 'Cooperação e diplomacia.',
  3: 'Criatividade e comunicação.',
  4: 'Estabilidade e organização.',
  5: 'Liberdade e aventura.',
  6: 'Responsabilidade e cuidado.',
  7: 'Espiritualidade e análise.',
  8: 'Ambição e sucesso material.',
  9: 'Humanitarismo e sabedoria.',
  11: 'Intuição e inspiração (mestre).',
  22: 'Construtor mestre (mestre).',
  33: 'Mestre professor (mestre).'
};

const ANJOS_POR_NUMERO_DESTINO = {
  1: { nome: 'Vehuiah', atributos: 'Vontade divina e novos começos' },
  2: { nome: 'Jeliel', atributos: 'Amor e fecundidade' },
  3: { nome: 'Sitael', atributos: 'Construção e expansão' },
  4: { nome: 'Elemiah', atributos: 'Proteção em viagens' },
  5: { nome: 'Mahasiah', atributos: 'Paz e harmonia' },
  6: { nome: 'Yesalel', atributos: 'Elevação espiritual' },
  7: { nome: 'Mebahel', atributos: 'Verdade e justiça' },
  8: { nome: 'Hariel', atributos: 'Purificação' },
  9: { nome: 'Hekamiah', atributos: 'Lealdade e amizade' }
};

const ARCANOS_MAIORES = [
  { numero: 0, nome: 'O Louco' },{ numero:1, nome:'O Mago' },{ numero:2, nome:'A Sacerdotisa' },
  { numero:3, nome:'A Imperatriz' },{ numero:4, nome:'O Imperador' },{ numero:5, nome:'O Hierofante' },
  { numero:6, nome:'Os Amantes' },{ numero:7, nome:'O Carro' },{ numero:8, nome:'A Força' },
  { numero:9, nome:'O Eremita' },{ numero:10, nome:'A Roda da Fortuna' },{ numero:11, nome:'A Justiça' },
  { numero:12, nome:'O Enforcado' },{ numero:13, nome:'A Morte' },{ numero:14, nome:'A Temperança' },
  { numero:15, nome:'O Diabo' },{ numero:16, nome:'A Torre' },{ numero:17, nome:'A Estrela' },
  { numero:18, nome:'A Lua' },{ numero:19, nome:'O Sol' },{ numero:20, nome:'O Julgamento' },{ numero:21, nome:'O Mundo' }
];

// ---------- Funções utilitárias ----------
function reduzirNumeroCompleto(numero) {
  while (numero > 9 && ![11,22,33].includes(numero)) {
    numero = [...numero.toString()].reduce((s, d) => s + parseInt(d,10), 0);
  }
  return numero;
}

function pad2(n){ return String(n).padStart(2,'0'); }

// ---------- Cálculos ----------
export function calcularSignoSolar(dataISO) {
  if(!dataISO) return { nome: 'Não informado' };
  const data = new Date(dataISO);
  const mes = data.getMonth()+1;
  const dia = data.getDate();

  for(const signo of SIGNOS_DATAS){
    if(signo.inicio.mes === signo.fim.mes){
      if(mes === signo.inicio.mes && dia >= signo.inicio.dia && dia <= signo.fim.dia)
        return { nome: signo.nome, ...SIGNOS_CARACTERISTICAS[signo.nome] };
    } else {
      if((mes === signo.inicio.mes && dia >= signo.inicio.dia) || (mes === signo.fim.mes && dia <= signo.fim.dia))
        return { nome: signo.nome, ...SIGNOS_CARACTERISTICAS[signo.nome] };
    }
  }
  return { nome: 'Não identificado' };
}

export function calcularAscendente(dataISO, horaStr) {
  // Método estimado: divide o dia em 12 blocos de 2 horas começando em 0h = Áries.
  // Não é um cálculo legítimo de casas/plácido — para isso seria preciso latitude/longitude e tabela de efemérides.
  if(!horaStr) return { nome: 'Hora não informada' };
  const [h, m] = horaStr.split(':').map(x=>parseInt(x,10));
  const totalMin = (h||0)*60 + (m||0);
  const bloco = Math.floor(totalMin / (24*60/12)); // 12 blocos iguais
  const signos = ['Áries','Touro','Gêmeos','Câncer','Leão','Virgem','Libra','Escorpião','Sagitário','Capricórnio','Aquário','Peixes'];
  const signo = signos[bloco % 12];
  return { nome: signo, ...SIGNOS_CARACTERISTICAS[signo], nota: 'ascendente estimado (uso simplificado)' };
}

export function calcularSignoLunar(dataISO) {
  if(!dataISO) return { nome: 'Não informado' };
  const data = new Date(dataISO);
  const diasDesde1900 = Math.floor((data - new Date(1900,0,1)) / (1000*60*60*24));
  const cicloLunar = diasDesde1900 % 28;
  const indice = Math.floor(cicloLunar / (28/12)) % 12;
  const signos = ['Áries','Touro','Gêmeos','Câncer','Leão','Virgem','Libra','Escorpião','Sagitário','Capricórnio','Aquário','Peixes'];
  const signo = signos[indice];
  return { nome: signo, ...SIGNOS_CARACTERISTICAS[signo], nota:'lua estimada (método simplificado)' };
}

export function calcularAstrologiaChinesa(dataISO) {
  if(!dataISO) return {};
  const ano = new Date(dataISO).getFullYear();
  const indiceAnimal = (ano - 1924) % 12;
  const animal = ANIMAIS_CHINESES[(indiceAnimal+12)%12];
  const indiceElemento = Math.floor(((ano - 1924) % 10) / 2);
  const elemento = ELEMENTOS_CHINESES[(indiceElemento+5)%5];
  const polaridade = ano % 2 === 0 ? 'Yang' : 'Yin';
  return { animal, elemento, polaridade };
}

// Numerologia - nome
function calcularValorNome(nome, somenteVogais=false, somenteConsoantes=false){
  const s = (nome||'').toUpperCase().replace(/[^A-Z]/g,'');
  let soma = 0;
  for(const ch of s){
    const isV = VOGAIS.includes(ch);
    if(somenteVogais && !isV) continue;
    if(somenteConsoantes && isV) continue;
    soma += TABELA_NUMEROLOGICA[ch] || 0;
  }
  return reduzirNumeroCompleto(soma);
}

export function calcularNumeroDestino(dataISO){
  if(!dataISO) return null;
  const d = new Date(dataISO);
  const dia = pad2(d.getDate());
  const mes = pad2(d.getMonth()+1);
  const ano = d.getFullYear();
  const todos = `${dia}${mes}${ano}`; // garante zeros à esquerda
  let soma = 0;
  for(const ch of todos) soma += parseInt(ch,10);
  return reduzirNumeroCompleto(soma);
}

export function calcularNumerologiaCompleta(nome, dataISO){
  const destino = calcularNumeroDestino(dataISO);
  const alma = calcularValorNome(nome, true, false);
  const personalidade = calcularValorNome(nome, false, true);
  const expressao = calcularValorNome(nome, false, false);
  return {
    destino: { numero: destino, significado: SIGNIFICADOS_NUMEROLOGICOS[destino] || '—' },
    alma: { numero: alma, significado: SIGNIFICADOS_NUMEROLOGICOS[alma] || '—' },
    personalidade: { numero: personalidade, significado: SIGNIFICADOS_NUMEROLOGICOS[personalidade] || '—' },
    expressao: { numero: expressao, significado: SIGNIFICADOS_NUMEROLOGICOS[expressao] || '—' }
  };
}

export function calcularAnjoGuardiaoPorData(dataISO){
  const num = calcularNumeroDestino(dataISO);
  return ANJOS_POR_NUMERO_DESTINO[num] || ANJOS_POR_NUMERO_DESTINO[1];
}

export function calcularTaroNascimento(dataISO){
  if(!dataISO) return {};
  const d = new Date(dataISO);
  const dia = d.getDate();
  const mes = d.getMonth()+1;
  const anoSom = [...d.getFullYear().toString()].reduce((s,ch)=>s+parseInt(ch,10),0);
  let soma = dia + mes + anoSom;
  while(soma > 22) soma = [...String(soma)].reduce((s,ch)=>s+parseInt(ch,10),0);
  if(soma === 22) soma = 0;
  const carta = ARCANOS_MAIORES.find(a=>a.numero===soma) || ARCANOS_MAIORES[0];
  let somaPersonal = soma;
  if(soma > 9) somaPersonal = [...String(soma)].reduce((s,ch)=>s+parseInt(ch,10),0);
  const cartaPersonal = ARCANOS_MAIORES.find(a=>a.numero===somaPersonal) || carta;
  return { nascimento: carta, personalidade: cartaPersonal };
}

// ---------- React App ----------
export default function App(){
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('12:00');
  const [cidade, setCidade] = useState('');
  const [pais, setPais] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);

  function handleSubmit(e){
    e.preventDefault();
    setErro(null);
    try{
      if(!data) return setErro('por favor, selecione sua data de nascimento');
      const signoSolar = calcularSignoSolar(data);
      const ascendente = calcularAscendente(data, hora);
      const signoLunar = calcularSignoLunar(data);
      const chinesa = calcularAstrologiaChinesa(data);
      const numerologia = calcularNumerologiaCompleta(nome, data);
      const anjo = calcularAnjoGuardiaoPorData(data);
      const taro = calcularTaroNascimento(data);

      setResultado({ signoSolar, ascendente, signoLunar, chinesa, numerologia, anjo, taro, nome, cidade, pais, hora, data });

      // rolar para resultados
      setTimeout(()=>{
        const el = document.getElementById('resultados');
        if(el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    }catch(err){
      console.error(err);
      setErro('ocorreu um erro ao calcular — verifique os dados e tente novamente');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-semibold mb-2">Universo místico</h1>
        <p className="mb-4 text-sm text-gray-600">insira seu nome completo, data, hora e local de nascimento para receber um relatório místico completo.</p>

        <form onSubmit={handleSubmit} className="grid gap-3 grid-cols-1 md:grid-cols-2">
          <label className="col-span-2">
            <div className="text-xs text-gray-700">nome completo</div>
            <input value={nome} onChange={e=>setNome(e.target.value)} className="w-full mt-1 p-2 border rounded" placeholder="Ex: Maria da Silva" />
          </label>

          <label>
            <div className="text-xs text-gray-700">data de nascimento</div>
            <input value={data} onChange={e=>setData(e.target.value)} type="date" className="w-full mt-1 p-2 border rounded" />
          </label>

          <label>
            <div className="text-xs text-gray-700">hora de nascimento</div>
            <input value={hora} onChange={e=>setHora(e.target.value)} type="time" className="w-full mt-1 p-2 border rounded" />
          </label>

          <label>
            <div className="text-xs text-gray-700">cidade</div>
            <input value={cidade} onChange={e=>setCidade(e.target.value)} className="w-full mt-1 p-2 border rounded" placeholder="Cidade" />
          </label>

          <label>
            <div className="text-xs text-gray-700">país</div>
            <input value={pais} onChange={e=>setPais(e.target.value)} className="w-full mt-1 p-2 border rounded" placeholder="País" />
          </label>

          <div className="col-span-2 flex gap-2 mt-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded">calcular</button>
            <button type="button" onClick={()=>{setResultado(null); setErro(null);}} className="px-4 py-2 border rounded">limpar</button>
          </div>
        </form>

        {erro && <div className="mt-4 text-red-600">{erro}</div>}

        {resultado && (
          <div id="resultados" className="mt-6 space-y-4">
            <section className="p-4 border rounded">
              <h2 className="font-semibold">dados básicos</h2>
              <div className="text-sm text-gray-700">nome: <strong>{resultado.nome || '—'}</strong></div>
              <div className="text-sm text-gray-700">nascimento: <strong>{resultado.data}</strong> às <strong>{resultado.hora}</strong></div>
              <div className="text-sm text-gray-700">local: <strong>{resultado.cidade || '—'}</strong> — <strong>{resultado.pais || '—'}</strong></div>
            </section>

            <section className="p-4 border rounded">
              <h2 className="font-semibold">astrologia ocidental</h2>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600">signo solar</div>
                  <div className="font-medium">{resultado.signoSolar.nome}</div>
                  <div className="text-xs text-gray-600">regente: {resultado.signoSolar.regente}</div>
                </div>

                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600">ascendente (estimado)</div>
                  <div className="font-medium">{resultado.ascendente.nome}</div>
                  <div className="text-xs text-gray-600">{resultado.ascendente.nota}</div>
                </div>

                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600">lua (estimada)</div>
                  <div className="font-medium">{resultado.signoLunar.nome}</div>
                  <div className="text-xs text-gray-600">{resultado.signoLunar.nota}</div>
                </div>
              </div>
            </section>

            <section className="p-4 border rounded">
              <h2 className="font-semibold">astrologia chinesa</h2>
              <div className="mt-2 text-sm text-gray-700">animal: <strong>{resultado.chinesa.animal}</strong></div>
              <div className="text-sm text-gray-700">elemento: <strong>{resultado.chinesa.elemento}</strong></div>
              <div className="text-sm text-gray-700">polaridade: <strong>{resultado.chinesa.polaridade}</strong></div>
            </section>

            <section className="p-4 border rounded">
              <h2 className="font-semibold">numerologia</h2>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600">número do destino</div>
                  <div className="font-medium">{resultado.numerologia.destino.numero}</div>
                  <div className="text-xs text-gray-600">{resultado.numerologia.destino.significado}</div>
                </div>

                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600">número da alma</div>
                  <div className="font-medium">{resultado.numerologia.alma.numero}</div>
                  <div className="text-xs text-gray-600">{resultado.numerologia.alma.significado}</div>
                </div>

                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600">número da personalidade</div>
                  <div className="font-medium">{resultado.numerologia.personalidade.numero}</div>
                  <div className="text-xs text-gray-600">{resultado.numerologia.personalidade.significado}</div>
                </div>

                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600">número da expressão</div>
                  <div className="font-medium">{resultado.numerologia.expressao.numero}</div>
                  <div className="text-xs text-gray-600">{resultado.numerologia.expressao.significado}</div>
                </div>
              </div>
            </section>

            <section className="p-4 border rounded">
              <h2 className="font-semibold">anjo guardião</h2>
              <div className="mt-2 text-sm text-gray-700">anjo: <strong>{resultado.anjo.nome}</strong></div>
              <div className="text-sm text-gray-700">atributos: <strong>{resultado.anjo.atributos}</strong></div>
              <div className="text-sm text-gray-700 mt-2">mensagem: <em>{resultado.anjo.mensagem || 'Confie nas qualidades deste anjo para guiar sua jornada.'}</em></div>
            </section>

            <section className="p-4 border rounded">
              <h2 className="font-semibold">tarô de nascimento</h2>
              <div className="mt-2 text-sm text-gray-700">carta de nascimento: <strong>{resultado.taro.nascimento.nome}</strong></div>
              <div className="text-sm text-gray-700">carta de personalidade: <strong>{resultado.taro.personalidade.nome}</strong></div>
            </section>

            <section className="p-4 border rounded">
              <h2 className="font-semibold">mensagens finais</h2>
              <div className="text-sm text-gray-700 mt-2">com base nos cálculos, sugerimos que você reflita sobre os temas dominantes: <strong>{resultado.signoSolar.nome}</strong> (como você brilha), <strong>{resultado.numerologia.destino.numero}</strong> (sua missão) e <strong>{resultado.anjo.nome}</strong> (seu suporte espiritual).</div>
            </section>

          </div>
        )}
      </div>

      <footer className="max-w-3xl mx-auto mt-6 text-center text-xs text-gray-500">Universo místico • gerado localmente no navegador</footer>
    </div>
  );
}
