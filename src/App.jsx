import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Sparkles, Moon, Sun, Star, Heart, Zap } from 'lucide-react'
import { calcularUniversoMistico } from './lib/calculosMisticos.js'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    horaNascimento: '',
    cidade: '',
    pais: ''
  })
  
  const [resultados, setResultados] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const descobrirUniverso = async () => {
    setLoading(true)
    
    try {
      // Simular um pequeno delay para melhor UX
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Calcular resultados reais
      const resultadosCalculados = calcularUniversoMistico(formData)
      
      if (resultadosCalculados) {
        setResultados(resultadosCalculados)
      } else {
        alert('Erro ao calcular os resultados. Verifique os dados inseridos.')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao processar os cálculos místicos.')
    }
    
    setLoading(false)
  }

  const compartilharRevelacoes = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Minhas Revelações Místicas - Universo Místico',
        text: `Descobri meu universo místico! Meu signo solar é ${resultados?.astrologia?.signoSolar?.nome}, meu animal chinês é ${resultados?.astrologiaChinesa?.animal} e meu anjo guardião é ${resultados?.anjoGuardiao?.nome}.`,
        url: window.location.href
      })
    } else {
      // Fallback para navegadores que não suportam Web Share API
      const texto = `Descobri meu universo místico! Meu signo solar é ${resultados?.astrologia?.signoSolar?.nome}, meu animal chinês é ${resultados?.astrologiaChinesa?.animal} e meu anjo guardião é ${resultados?.anjoGuardiao?.nome}. Descubra o seu em: ${window.location.href}`
      navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado para a área de transferência!')
      })
    }
  }

  return (
    <div className="min-h-screen mystic-gradient">
      {/* Header */}
      <header className="text-center py-12 px-4">
        <div className="floating-animation">
          <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary sparkle-animation" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 mystic-text-gradient">
          Universo Místico
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Descubra os segredos do seu destino através da astrologia, numerologia e sabedoria ancestral
        </p>
      </header>

      <div className="container mx-auto px-4 pb-12">
        {!resultados ? (
          /* Formulário de entrada */
          <Card className="max-w-2xl mx-auto mystic-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Moon className="w-6 h-6" />
                Seus Dados Místicos
                <Sun className="w-6 h-6" />
              </CardTitle>
              <CardDescription>
                Preencha suas informações para revelar os mistérios do seu universo pessoal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  className="bg-background/50"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                  <Input
                    id="dataNascimento"
                    name="dataNascimento"
                    type="date"
                    value={formData.dataNascimento}
                    onChange={handleInputChange}
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="horaNascimento">Hora de Nascimento</Label>
                  <Input
                    id="horaNascimento"
                    name="horaNascimento"
                    type="time"
                    value={formData.horaNascimento}
                    onChange={handleInputChange}
                    className="bg-background/50"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade de Nascimento</Label>
                  <Input
                    id="cidade"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    placeholder="Ex: São Paulo"
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pais">País</Label>
                  <Input
                    id="pais"
                    name="pais"
                    value={formData.pais}
                    onChange={handleInputChange}
                    placeholder="Ex: Brasil"
                    className="bg-background/50"
                  />
                </div>
              </div>
              
              <Button 
                onClick={descobrirUniverso}
                disabled={loading || !formData.nome || !formData.dataNascimento}
                className="w-full mystic-button text-lg py-6"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 animate-spin" />
                    Revelando seus mistérios...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Descobrir meu Universo
                    <Star className="w-5 h-5" />
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>
        ) : (
          /* Resultados */
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 mystic-text-gradient">
                Suas Revelações Místicas
              </h2>
              <p className="text-muted-foreground">
                O universo revelou os segredos do seu destino, {formData.nome.split(' ')[0]}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Astrologia Ocidental */}
              <Card className="mystic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-accent" />
                    🔮 Astrologia Ocidental
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Signo Solar</h4>
                    <p className="font-medium">{resultados.astrologia.signoSolar.nome}</p>
                    <p className="text-sm text-muted-foreground">{resultados.astrologia.signoSolar.descricao}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Ascendente</h4>
                    <p className="font-medium">{resultados.astrologia.ascendente.nome}</p>
                    <p className="text-sm text-muted-foreground">{resultados.astrologia.ascendente.descricao}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Signo Lunar</h4>
                    <p className="font-medium">{resultados.astrologia.signoLunar.nome}</p>
                    <p className="text-sm text-muted-foreground">{resultados.astrologia.signoLunar.descricao}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Astrologia Chinesa */}
              <Card className="mystic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-secondary" />
                    🌕 Astrologia Chinesa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Animal</h4>
                    <p className="font-medium">{resultados.astrologiaChinesa.animal}</p>
                    <p className="text-sm text-muted-foreground">{resultados.astrologiaChinesa.descricaoAnimal}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Elemento</h4>
                    <p className="font-medium">{resultados.astrologiaChinesa.elemento}</p>
                    <p className="text-sm text-muted-foreground">{resultados.astrologiaChinesa.descricaoElemento}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Polaridade</h4>
                    <p className="font-medium">{resultados.astrologiaChinesa.polaridade}</p>
                    <p className="text-sm text-muted-foreground">{resultados.astrologiaChinesa.descricaoPolaridade}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Numerologia */}
              <Card className="mystic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    🔢 Numerologia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Número do Destino</h4>
                    <p className="font-medium">{resultados.numerologia.destino.numero}</p>
                    <p className="text-sm text-muted-foreground">{resultados.numerologia.destino.significado}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Número da Alma</h4>
                    <p className="font-medium">{resultados.numerologia.alma.numero}</p>
                    <p className="text-sm text-muted-foreground">{resultados.numerologia.alma.significado}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Número da Personalidade</h4>
                    <p className="font-medium">{resultados.numerologia.personalidade.numero}</p>
                    <p className="text-sm text-muted-foreground">{resultados.numerologia.personalidade.significado}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Anjo da Guarda */}
              <Card className="mystic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-accent" />
                    👼 Anjo da Guarda
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Nome</h4>
                    <p className="font-medium">{resultados.anjoGuardiao.nome}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Atributos</h4>
                    <p className="text-sm text-muted-foreground">{resultados.anjoGuardiao.atributos}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Mensagem</h4>
                    <p className="text-sm italic text-muted-foreground">"{resultados.anjoGuardiao.mensagem}"</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tarô */}
            <Card className="mystic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  🃏 Tarô Pessoal
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Carta de Nascimento</h4>
                  <p className="font-medium">{resultados.taro.nascimento.nome}</p>
                  <p className="text-sm text-muted-foreground mt-1">{resultados.taro.nascimento.descricao}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Carta da Personalidade</h4>
                  <p className="font-medium">{resultados.taro.personalidade.nome}</p>
                  <p className="text-sm text-muted-foreground mt-1">{resultados.taro.personalidade.descricao}</p>
                </div>
              </CardContent>
            </Card>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setResultados(null)}
                variant="outline"
                className="mystic-button"
              >
                Nova Consulta
              </Button>
              <Button 
                className="mystic-button"
                onClick={compartilharRevelacoes}
              >
                Compartilhar Revelações
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-border/50">
        <p className="text-muted-foreground mb-2">
          ✨ O universo conspira a seu favor ✨
        </p>
        <p className="text-sm text-muted-foreground">
          Feito com 💜 para conectar você com sua essência espiritual
        </p>
      </footer>
    </div>
  )
}

export default App

