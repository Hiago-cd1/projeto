"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Smartphone,
  Wrench,
  ShoppingBag,
  Clock,
  CheckCircle,
  Star,
  ChevronRight,
  Phone,
  MapPin,
  Mail,
  ArrowRight,
  MessageCircle,
} from "lucide-react"

export default function Home() {
  // Função para abrir o WhatsApp
  const abrirWhatsApp = () => {
    // Substitua pelo seu número de WhatsApp
    window.open("https://wa.me/5577999076426?text=Olá! Vim pelo site e gostaria de mais informações.", "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#930f0f] to-[#7a0d0d]">
      {/* Botão flutuante do WhatsApp */}
      <button
        onClick={abrirWhatsApp}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-bounce"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/20 bg-[#930f0f]/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-rh-celulares.png"
              alt="RH Celulares Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white">RH Celulares</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#servicos" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Serviços
            </Link>
            <Link href="#por-que-nos" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Por que nós?
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Contato
            </Link>
          </nav>
          <Button onClick={abrirWhatsApp} className="bg-white text-[#930f0f] hover:bg-gray-100">
            Fale Conosco
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-[#930f0f]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">Serviços Profissionais</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Seu celular merece o melhor cuidado
                </h1>
                <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Consertos rápidos, atendimento personalizado e os melhores acessórios para seu smartphone. Tudo em um
                  só lugar!
                </p>
                <div>
                  <Button onClick={abrirWhatsApp} size="lg" className="bg-white text-[#930f0f] hover:bg-gray-100">
                    Orçamento Grátis <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/90">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span>Garantia</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span>Componentes de Qualidade</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span>Técnicos Certificados</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-white/80">Celulares Consertados</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-sm text-white/80">Satisfação dos Clientes</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-sm text-white/80">Anos de Experiência</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">90 dias</div>
                    <div className="text-sm text-white/80">Garantia</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="rounded-full bg-white/20 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Wrench className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Reparo Rápido</h3>
                    <p className="text-white/80 text-sm">Maioria dos consertos em até 2 horas</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="rounded-full bg-white/20 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Componentes de Qualidade</h3>
                    <p className="text-white/80 text-sm">Qualidade garantida e durabilidade</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="rounded-full bg-white/20 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Atendimento 5 Estrelas</h3>
                    <p className="text-white/80 text-sm">Suporte personalizado e dedicado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-red-100 text-[#930f0f] hover:bg-red-100">Nossos Serviços</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Soluções completas para seu smartphone
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos uma variedade de serviços para manter seu dispositivo funcionando perfeitamente.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-red-100 p-4">
                    <Wrench className="h-6 w-6 text-[#930f0f]" />
                  </div>
                  <h3 className="text-xl font-bold">Reparo Profissional</h3>
                  <p className="text-gray-500">
                    Conserto de telas, baterias, conectores, alto-falantes e muito mais. Diagnóstico rápido e preciso.
                  </p>
                  <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d] w-full mt-4">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-red-100 p-4">
                    <Smartphone className="h-6 w-6 text-[#930f0f]" />
                  </div>
                  <h3 className="text-xl font-bold">Venda de Celulares</h3>
                  <p className="text-gray-500">
                    Smartphones novos e seminovos com garantia. As melhores marcas e modelos do mercado.
                  </p>
                  <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d] w-full mt-4">
                    Ver Catálogo
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-red-100 p-4">
                    <ShoppingBag className="h-6 w-6 text-[#930f0f]" />
                  </div>
                  <h3 className="text-xl font-bold">Acessórios</h3>
                  <p className="text-gray-500">
                    Capas, películas, carregadores, fones de ouvido e muito mais para complementar seu dispositivo.
                  </p>
                  <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d] w-full mt-4">
                    Conhecer Produtos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Por que nos escolher */}
        <section id="por-que-nos" className="py-12 md:py-24 bg-[#930f0f]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-white/20 text-white hover:bg-white/30">Por que nos escolher</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Excelência em cada detalhe
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nosso compromisso é oferecer o melhor serviço com transparência e qualidade.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-white/20 p-3">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Atendimento Rápido</h3>
                  </div>
                  <p className="text-white/80">
                    Diagnóstico preciso e reparo ágil para você voltar a usar seu aparelho o quanto antes.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-white/20 p-3">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Todas as Marcas</h3>
                  </div>
                  <p className="text-white/80">
                    Especialistas em iPhone, Samsung, Xiaomi, Motorola e todas as principais marcas.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-white/20 p-3">
                      <ShoppingBag className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Preços Justos</h3>
                  </div>
                  <p className="text-white/80">
                    Orçamento transparente sem taxas ocultas. Você só paga se aprovar o serviço.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-white/20 p-3">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Garantia Estendida</h3>
                  </div>
                  <p className="text-white/80">
                    90 dias de garantia em todos os serviços para sua total tranquilidade.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/20 p-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Técnicos Especializados</h3>
                    <p className="text-white/80">
                      Nossa equipe é formada por profissionais certificados e com anos de experiência no mercado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/20 p-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Componentes de Qualidade</h3>
                    <p className="text-white/80">
                      Utilizamos apenas componentes de alta qualidade para garantir a durabilidade e o melhor desempenho
                      do reparo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/20 p-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Garantia em Todos os Serviços</h3>
                    <p className="text-white/80">
                      Oferecemos garantia em todos os nossos serviços para sua tranquilidade e segurança.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/20 p-2">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Agilidade no Atendimento</h3>
                    <p className="text-white/80">
                      Entendemos a importância do seu dispositivo. Por isso, priorizamos a rapidez sem comprometer a
                      qualidade.
                    </p>
                  </div>
                </div>
                <Button onClick={abrirWhatsApp} className="w-full bg-white text-[#930f0f] hover:bg-gray-100">
                  Fale com um Especialista Agora
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Populares */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-red-100 text-[#930f0f] hover:bg-red-100">Serviços Populares</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Soluções para os problemas mais comuns
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira nossos serviços mais procurados e solicite um orçamento sem compromisso.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Tabs defaultValue="tela" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="tela">Tela</TabsTrigger>
                  <TabsTrigger value="bateria">Bateria</TabsTrigger>
                  <TabsTrigger value="sistema">Sistema</TabsTrigger>
                </TabsList>
                <TabsContent value="tela" className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Smartphone className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Troca de Tela</h3>
                        <p className="text-sm text-gray-500">Telas quebradas ou com mau funcionamento</p>
                      </div>
                    </div>
                    <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d]" size="sm">
                      Orçamento <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Smartphone className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Troca de Touch</h3>
                        <p className="text-sm text-gray-500">Touch não responde ou com falhas</p>
                      </div>
                    </div>
                    <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d]" size="sm">
                      Orçamento <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Smartphone className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Película de Proteção</h3>
                        <p className="text-sm text-gray-500">Instalação de películas de vidro ou gel</p>
                      </div>
                    </div>
                    <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d]" size="sm">
                      Orçamento <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="bateria" className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Smartphone className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Troca de Bateria</h3>
                        <p className="text-sm text-gray-500">Baterias com baixa duração ou inchadas</p>
                      </div>
                    </div>
                    <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d]" size="sm">
                      Orçamento <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Smartphone className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Reparo de Conector de Carga</h3>
                        <p className="text-sm text-gray-500">Problemas para carregar o dispositivo</p>
                      </div>
                    </div>
                    <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d]" size="sm">
                      Orçamento <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Smartphone className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Otimização de Bateria</h3>
                        <p className="text-sm text-gray-500">Diagnóstico e ajustes para melhor desempenho</p>
                      </div>
                    </div>
                    <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d]" size="sm">
                      Orçamento <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="sistema" className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Smartphone className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Atualização de Sistema</h3>
                        <p className="text-sm text-gray-500">Instalação da versão mais recente do sistema</p>
                      </div>
                    </div>
                    <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d]" size="sm">
                      Orçamento <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Smartphone className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Remoção de Vírus</h3>
                        <p className="text-sm text-gray-500">Limpeza de malwares e softwares maliciosos</p>
                      </div>
                    </div>
                    <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d]" size="sm">
                      Orçamento <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Smartphone className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Recuperação de Dados</h3>
                        <p className="text-sm text-gray-500">Recuperação de fotos, vídeos e arquivos importantes</p>
                      </div>
                    </div>
                    <Button onClick={abrirWhatsApp} className="bg-[#930f0f] text-white hover:bg-[#7a0d0d]" size="sm">
                      Orçamento <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Não encontrou o serviço que procura? Entre em contato conosco!
                </p>
                <Button onClick={abrirWhatsApp} className="bg-[#930f0f] hover:bg-[#7a0d0d]">
                  Falar com um Técnico <MessageCircle className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-12 md:py-24 bg-[#930f0f]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-white/20 text-white hover:bg-white/30">Depoimentos</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  O que nossos clientes dizem
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A satisfação dos nossos clientes é nossa maior recompensa.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="overflow-hidden bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4">
                    "Meu celular caiu e a tela quebrou completamente. Levei na RH Smartphones e em apenas 2 horas estava
                    com meu aparelho de volta, funcionando perfeitamente. Excelente atendimento!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-white/20 w-10 h-10 flex items-center justify-center">
                      <span className="font-medium text-white">MC</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">Maria Costa</p>
                      <p className="text-sm text-white/70">Cliente desde 2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4">
                    "Comprei um smartphone seminovo e estou super satisfeito. O aparelho está em perfeito estado e com
                    garantia. Recomendo a todos que buscam qualidade e bom preço."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-white/20 w-10 h-10 flex items-center justify-center">
                      <span className="font-medium text-white">RS</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">Rafael Silva</p>
                      <p className="text-sm text-white/70">Cliente desde 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4">
                    "Meu celular não carregava mais e pensei que teria que comprar um novo. Levei na RH Smartphones e
                    descobri que era apenas o conector. Consertaram no mesmo dia e por um preço justo!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-white/20 w-10 h-10 flex items-center justify-center">
                      <span className="font-medium text-white">JO</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">João Oliveira</p>
                      <p className="text-sm text-white/70">Cliente desde 2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-24 bg-[#930f0f] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Seu celular precisa de reparos?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed">
                  Entre em contato agora mesmo e receba um orçamento gratuito. Atendimento rápido e eficiente para
                  resolver seu problema.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button onClick={abrirWhatsApp} size="lg" className="bg-white text-[#930f0f] hover:bg-gray-100">
                    Falar no WhatsApp <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => window.open("https://g.co/kgs/QoJwTSd", "_blank")}
                    size="lg"
                    className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#930f0f] transition-colors"
                  >
                    Ver Localização
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="rounded-full bg-white/20 p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Fale Conosco Agora</h3>
                  <p className="text-white/80">Atendimento imediato pelo WhatsApp</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-white">
                    <Phone className="h-5 w-5" />
                    <span className="font-medium">(77) 99907-6426</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white">
                    <Clock className="h-5 w-5" />
                    <span>Segunda a Sexta: 9h às 18h</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white">
                    <MapPin className="h-5 w-5" />
                    <span>Zabelê, Vitória da Conquista - BA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-red-100 text-[#930f0f] hover:bg-red-100">Contato</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Estamos à sua disposição
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entre em contato conosco ou visite nossa loja física.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Phone className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Telefone</h3>
                        <p className="text-gray-500">(77) 99907-6426</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <MessageCircle className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">WhatsApp</h3>
                        <p className="text-gray-500">(77) 99907-6426</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Mail className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">E-mail</h3>
                        <p className="text-gray-500">contato@rhsmartphones.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <MapPin className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Endereço</h3>
                        <p className="text-gray-500">Caminho Dez, 2 - Zabelê, Vitória da Conquista - BA, 45079-170</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-100 p-3">
                        <Clock className="h-5 w-5 text-[#930f0f]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Horário de Funcionamento</h3>
                        <p className="text-gray-500">Segunda a Sexta: 9h às 18h</p>
                        <p className="text-gray-500">Sábado: 9h às 13h</p>
                      </div>
                    </div>
                    <Button onClick={abrirWhatsApp} className="w-full bg-[#930f0f] hover:bg-[#7a0d0d] mt-4">
                      Falar no WhatsApp <MessageCircle className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="relative overflow-hidden rounded-xl h-[400px]">
                {/* Aqui você pode integrar um mapa do Google Maps */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-[#930f0f] mx-auto mb-2" />
                    <p className="font-medium">Mapa da Localização</p>
                    <p className="text-sm text-gray-500">Caminho Dez, 2 - Zabelê, Vitória da Conquista - BA</p>
                    <p className="text-xs text-gray-500 mt-1 mb-3">
                      Clique abaixo para ver avaliações, fotos e mais informações
                    </p>
                    <Button
                      onClick={() => window.open("https://g.co/kgs/QoJwTSd", "_blank")}
                      className="bg-[#930f0f] text-white hover:bg-[#7a0d0d]"
                    >
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-24 bg-[#930f0f]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-white/20 text-white hover:bg-white/30">Perguntas Frequentes</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Dúvidas comuns
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Encontre respostas para as perguntas mais frequentes sobre nossos serviços.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="space-y-4">
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white">Quanto tempo leva para consertar meu celular?</h3>
                    <p className="text-white/80 mt-2">
                      O tempo de reparo varia de acordo com o problema e disponibilidade de peças. Fazemos o diagnóstico
                      rapidamente e informamos o prazo estimado para cada caso específico.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white">Vocês oferecem garantia nos serviços?</h3>
                    <p className="text-white/80 mt-2">
                      Sim, todos os nossos serviços possuem garantia. O período varia de acordo com o tipo de reparo,
                      mas geralmente é de 90 dias para peças e serviços.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white">Vocês usam componentes de qualidade?</h3>
                    <p className="text-white/80 mt-2">
                      Sim, trabalhamos exclusivamente com componentes de alta qualidade e certificados para garantir o
                      melhor desempenho e durabilidade do seu dispositivo.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white">
                      É possível recuperar dados de um celular danificado?
                    </h3>
                    <p className="text-white/80 mt-2">
                      Na maioria dos casos, sim. Nossa equipe especializada pode recuperar fotos, vídeos, contatos e
                      outros arquivos importantes, mesmo de dispositivos com danos severos.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white">Vocês fazem orçamento sem compromisso?</h3>
                    <p className="text-white/80 mt-2">
                      Sim, oferecemos orçamento gratuito e sem compromisso. Você pode trazer seu aparelho à loja ou
                      entrar em contato pelo WhatsApp para uma avaliação inicial.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-white/70 mb-4">Ainda tem dúvidas? Entre em contato conosco!</p>
                <Button onClick={abrirWhatsApp} className="bg-white text-[#930f0f] hover:bg-gray-100">
                  Falar com um Atendente <MessageCircle className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/20 bg-[#930f0f]">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-rh-celulares.png"
                alt="RH Celulares Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">RH Celulares</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="#servicos" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Serviços
              </Link>
              <Link
                href="#por-que-nos"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Por que nós?
              </Link>
              <Link
                href="#depoimentos"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Depoimentos
              </Link>
              <Link href="#contato" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Contato
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} RH Celulares. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com/rhcelulares.oficial" className="text-white/70 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="https://wa.me/5577999076426" className="text-white/70 hover:text-white">
                <span className="sr-only">WhatsApp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
