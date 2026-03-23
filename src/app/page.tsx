'use client'

import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Users, 
  BarChart3, 
  MessageCircle, 
  Search, 
  Smartphone, 
  ArrowRight, 
  Check, 
  Star, 
  Building, 
  Home, 
  Key, 
  Zap, 
  Globe, 
  Shield, 
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Bot,
  Network,
  Target,
  Clock,
  Award,
  Heart
} from 'lucide-react'
import Image from 'next/image'

export default function AcheiCasaLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showFeaturesModal, setShowFeaturesModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }



  return (
    <div className="min-h-screen ">
      {/* Header/Navegação */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-100 shadow-lg' : 'bg-gray-100 shadow-lg'}`}>
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-30 h-15 rounded-lg overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="AcheiCasa.net Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
            
            </motion.div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('sobre')} className="text-gray-600 hover:text-orange-500 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('plataforma')} className="text-gray-600 hover:text-orange-500 transition-colors">Plataforma</button>
              <button onClick={() => scrollToSection('pagina-exclusiva')} className="text-gray-600 hover:text-orange-500 transition-colors">Recursos</button>
              <button onClick={() => scrollToSection('planos')} className="text-gray-600 hover:text-orange-500 transition-colors">Planos</button>
              <a href="http://acheicasa.net" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Acessar Plataforma
              </a>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-gray-600 mb-1 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 mb-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          </div>

          {/* Menu Mobile */}
          <motion.div 
            initial={false}
            animate={{ 
              height: mobileMenuOpen ? 'auto' : 0,
              opacity: mobileMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('sobre');
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => {
                  scrollToSection('plataforma');
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors"
              >
                Plataforma
              </button>
              <button 
                onClick={() => {
                  scrollToSection('pagina-exclusiva');
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors"
              >
                Recursos
              </button>
              <button 
                onClick={() => {
                  scrollToSection('planos');
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors"
              >
                Planos
              </button>
              <div className="px-4">
                <a href="http://acheicasa.net" target="_blank" rel="noopener noreferrer" className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  Acessar Plataforma
                </a>
              </div>
            </div>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section with Background Photo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/banner.webp"
            alt="Profissional imobiliário usando tecnologia"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6">
              <span className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 block">
              AcheiCasa.NET
              </span>
              <p className="text-2xl md:text-base text-white opacity-90 mb-2">Mais leads, mais vendas, mais resultados</p>
            </div>
            
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight text-white">
              Encontre, corretores, imobiliárias, construtores
              <br />
              <span className="text-white">e crie sua rede de parceiros</span>
            </h1>
            
            
            
            <motion.a
              href="http://acheicasa.net"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2"
            >
              Acessar Plataforma
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Hero Section */}
      <section className="pt-15 py-2 pb-10 px-6 md:px-12 lg:px-20 bg-[#ffffff] from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                A primeira plataforma imobiliária com{' '}
                <span className="text-orange-500">rede de parceiros</span> e{' '}
                <span className="text-orange-500">inteligência artificial</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Conecte anunciantes, corretores, construtoras e imobiliárias em um só ambiente inteligente. 
                Automatize anúncios, encontre parceiros e feche negócios em menos tempo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://acheicasa.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  Acesse a plataforma
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </a>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-all"
                >
                  Saiba mais
                </button>
              </div>
              
            
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5, 
                rotateX: 2,
                transition: { duration: 0.3 }
              }}
              className="relative perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              
              
              {/* Container de imagem responsivo */}
              <div className="relative px-0 mx-[1px] w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-6">
                <Image
                  src="/img/img1.jpg"
                  alt="Painel da plataforma AcheiCasa"
                  fill
                  sizes="(min-width: 1024px) 600px, calc(100vw - 2px)"
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Pontos de luz decorativos */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-300 rounded-full blur-sm opacity-40 animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section do Vídeo */}
      <section className="py-10 md:py-16 lg:py-20 px-2 md:px-12 lg:px-20 bg-green-500">
        <div className="container  mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Lado Esquerdo - Vídeo */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900 mx-1 sm:mx-0">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/kmDBmbc5-rE"
                  title="AcheiCasa.NET - Vídeo Demonstrativo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </motion.div>

            {/* Lado Direito - Texto */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Conecte-se ao futuro do{' '}
                  <span className="text-white">mercado imobiliário</span>
                </h2>
                
                <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed">
                  Anuncie agora e descubra o poder da IA no mercado imobiliário
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre a Plataforma */}
      <section id="sobre" className="py-10 md:py-16 lg:py-20 px-2 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-6">
                <div className="relative w-full h-56 sm:h-72 md:h-[380px] rounded-lg overflow-hidden mx-1 sm:mx-0">
                  <Image
                    src="/img/img2.jpg"
                    alt="Visão geral da plataforma AcheiCasa"
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-contain"
                  />
                </div>
              
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-lg md:text-2xl lg:text-2xl font-bold text-blue-900 mb-6">
                Revolucionando o mercado imobiliário
              </h2>
              <p className="font-semibold text-sm md:text-lg text-gray-600 mb-6 leading-relaxed">
                A AcheiCasa.net revoluciona o mercado imobiliário com automação, IA e conexão entre profissionais. 
                Uma solução completa para quem anuncia, vende ou aluga imóveis.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base text-gray-900">Rede de Parceiros Exclusiva</h3>
                    <p className="font-semibold text-sm text-gray-600">Conecte-se com outros profissionais do mercado</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base text-gray-900">Inteligência Artificial</h3>
                    <p className="font-semibold text-sm text-gray-600">Crie anúncios automáticos com descrições otimizadas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base text-gray-900">Automação Completa</h3>
                    <p className="font-semibold text-sm text-gray-600">Do cadastro ao fechamento, tudo automatizado</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simples em 4 passos */}
      <section className="py-2 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simples em 4 passos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comece a usar a plataforma em minutos e feche negócios mais rápido
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Passo 1 - Cadastre-se */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cadastre-se</h3>
              <p className="text-gray-600 leading-relaxed">
                Crie sua conta gratuita em menos de 2 minutos
              </p>
            </motion.div>

            {/* Passo 2 - Crie anúncios com IA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Bot className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crie anúncios com IA</h3>
              <p className="text-gray-600 leading-relaxed">
                Descreva seu imóvel e deixe nossa IA criar o anúncio perfeito
              </p>
            </motion.div>

            {/* Passo 3 - Encontre parceiros */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Network className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Encontre parceiros</h3>
              <p className="text-gray-600 leading-relaxed">
                Conecte-se com outros profissionais do mercado
              </p>
            </motion.div>

            {/* Passo 4 - Feche negócios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Feche negócios</h3>
              <p className="text-gray-600 leading-relaxed">
                Acelere vendas e aluguéis com nossas ferramentas
              </p>
            </motion.div>
          </div>
        </div>
      </section>

     {/* Recursos que transformam seu negócio */}
      <section className="py-2 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Recursos que transformam seu negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ferramentas modernas e inteligentes para potencializar suas vendas e gestão de imóveis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - IA que ajuda a criar anúncios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">IA que ajuda a criar anúncios</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Com apenas uma descrição básica, nossa IA cria títulos e descrições perfeitas para seus anúncios.
              </p>
            </motion.div>

            {/* Card 2 - CRM de Atendimento */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">CRM de Atendimento</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Gerencie toda a jornada de venda com o CRM AcheiCasa.NET - das primeiras conversas ao fechamento.
              </p>
            </motion.div>

            {/* Card 3 - Painel ADM completo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Painel ADM completo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tenha total controle de suas vendas com o painel de controle da sua conta.
              </p>
            </motion.div>

            {/* Card 4 - WhatsApp Integrado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-green-500 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-white"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">WhatsApp Integrado</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Maior conversão de LEADS, receba notificações em tempo real.
              </p>
            </motion.div>

            {/* Card 5 - Sistema de Geolocalização */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sistema de Geolocalização</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sistema inteligente para te ajudar a encontrar e indicar posições nas buscas seu imóvel.
              </p>
            </motion.div>

            {/* Card 6 - Anúncios Multimídia */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Anúncios Multimídia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Apresentação moderna e completa com Fotos, Mapa, Street View, Vídeo, Tour 360°.
              </p>
            </motion.div>

            {/* Card 7 - Anúncios em PDF */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Anúncios em PDF</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Crie anúncios profissionais em PDF em segundos e imprima e se vire e venda mais.
              </p>
            </motion.div>

            {/* Card 8 - Tenha mais destaque */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tenha mais destaque</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Coloque seu imóvel em DESTAQUE, seja o primeiro a ser visto e venda mais.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

     {/* Outras Funcionalidades */}
      <section className="py-2 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Descubra Todas as Funcionalidades
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Uma plataforma completa com recursos avançados para o mercado imobiliário
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFeaturesModal(!showFeaturesModal)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2"
            >
              Outras Funcionalidades
              <motion.div
                animate={{ rotate: showFeaturesModal ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Seção Expansível */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: showFeaturesModal ? "auto" : 0,
              opacity: showFeaturesModal ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                {/* Card 1: NAVEGAÇÃO E BUSCA + PUBLICAÇÃO */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                    <Search className="w-6 h-6" />
                    NAVEGAÇÃO E BUSCA
                  </h4>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li>• Sistema de Filtro Avançado</li>
                    <li>• Sistema de Navegação com IA</li>
                    <li>• Rolagem Infinita de Anúncios</li>
                    <li>• Páginas Limpas e Rápidas</li>
                    <li>• Favoritos / Anúncios Salvos</li>
                    <li>• Geolocalização Inteligente</li>
                  </ul>
                  
                  <h4 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-3">
                    <Building className="w-6 h-6" />
                    PUBLICAÇÃO DE ANÚNCIOS
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Criação de Anúncios em Tempo Real</li>
                    <li>• Cadastro com IA</li>
                    <li>• Formulário Intuitivo e Auto Completar</li>
                    <li>• Anúncios Grátis e Planos de Assinatura</li>
                    <li>• Sistema de Destaque e Super Destaque</li>
                    <li>• Ficha Especial para Construtoras e Leiloeiros</li>
                    <li>• Geração Automática de Anúncio em PDF</li>
                    <li>• Multimídia Completa</li>
                    <li>• Descrição Completa</li>
                  </ul>
                </div>

                {/* Card 2: GESTÃO + LEADS */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-500">
                  <h4 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                    <BarChart3 className="w-6 h-6" />
                    GESTÃO E PAINEL
                  </h4>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li>• Painel de Controle Completo</li>
                    <li>• Estatísticas Detalhadas</li>
                    <li>• Notificações Instantâneas via WhatsApp</li>
                    <li>• Anunciantes Certificados</li>
                    <li>• Agenda de Compromissos</li>
                    <li>• CRM de Atendimento Integrado</li>
                  </ul>
                  
                  <h4 className="text-xl font-bold text-orange-900 mb-6 flex items-center gap-3">
                    <MessageCircle className="w-6 h-6" />
                    LEADS E COMUNICAÇÃO
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Leads Multicanal</li>
                    <li>• Enviar proposta</li>
                    <li>• Simular financiamento</li>
                    <li>• WhatsApp</li>
                    <li>• Mensagem interna</li>
                    <li>• Agendamento de visita</li>
                    <li>• Ligação telefônica</li>
                    <li>• Sistema de Notificações Instantâneas</li>
                    <li>• Histórico de Conversas e Contatos</li>
                  </ul>
                </div>

                {/* Card 3: REDE DE PARCEIROS + PERFIL */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
                  <h4 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-3">
                    <Network className="w-6 h-6" />
                    REDE DE PARCEIROS
                  </h4>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li>• Sistema de Parceiros Profissionais</li>
                    <li>• Troca de Mensagens Internas</li>
                    <li>• Permite seguir e ser seguido</li>
                    <li>• Exibe atividades e anúncios dos parceiros</li>
                  </ul>
                  
                  <h4 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    PERFIL DO ANUNCIANTE
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Página Exclusiva do Anunciante</li>
                    <li>• Foto, Logo e Descrição Personalizada</li>
                    <li>• Link Personalizado do Perfil</li>
                    <li>• Verificação de Credibilidade</li>
                    <li>• Selo de confiança</li>
                  </ul>
                </div>

                {/* Card 4: IA + FUNCIONALIDADES COMPLEMENTARES + ADMINISTRATIVAS */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-500">
                  <h4 className="text-xl font-bold text-yellow-900 mb-6 flex items-center gap-3">
                    <Brain className="w-6 h-6" />
                    RECURSOS DE IA
                  </h4>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li>• IA para Criação de Anúncios</li>
                    <li>• IA de Busca e Recomendação</li>
                    <li>• Auto Completar de Endereço (CEP)</li>
                    <li>• Sugestão Inteligente de Palavras-chave</li>
                  </ul>
                  
                  <h4 className="text-xl font-bold text-teal-900 mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    FUNCIONALIDADES EXTRAS
                  </h4>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li>• Busca por Corretores, Imobiliárias e Construtoras</li>
                    <li>• Alertas de Imóveis Novos</li>
                    <li>• Sistema Responsivo (mobile friendly)</li>
                    <li>• Sistema Seguro e Verificado</li>
                    <li>• Integração com Redes Sociais</li>
                    <li>• Favoritos e Histórico de Visualizações</li>
                    <li>• Suporte Técnico e FAQ</li>
                  </ul>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    ADMINISTRATIVAS
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Sistema de Moderação de Anúncios</li>
                    <li>• Logs de Atividades e Auditoria</li>
                    <li>• Backup e Redundância de Dados</li>
                    <li>• Painel de Administração Centralizado</li>
                    <li>• SEO Automático com IA</li>
                    <li>• Integração com APIs (Mapas, CEP, Pagamentos)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Página Exclusiva */}
      <section id="pagina-exclusiva" className="py-10 md:py-16 lg:py-20 px-2 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Lado Esquerdo - Imagem */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full h-64 sm:h-80 md:h-[500px] rounded-lg overflow-hidden mx-[1px] sm:mx-0">
                <Image
                  src="/img/img3.jpg"
                  alt="Página exclusiva do anunciante no AcheiCasa.NET"
                  fill
                  sizes="(min-width: 1024px) 600px, calc(100vw - 2px)"
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Lado Direito - Conteúdo */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Sua Página Exclusiva no{' '}
                  <span className="text-orange-500">AcheiCasa.NET</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Uma página exclusiva para você e seus imóveis, sem concorrência. 
                  Sua vitrine digital completa para vender, alugar e fortalecer sua marca.
                </p>
              </div>

              <div className="space-y-6">
                {/* Exclusividade Total */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Exclusividade Total</h3>
                    <p className="text-gray-600">
                      Seus clientes veem apenas seus imóveis, sem concorrência ou distrações.
                    </p>
                  </div>
                </div>

                {/* Foco na Sua Marca */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Foco na Sua Marca</h3>
                    <p className="text-gray-600">
                      Página personalizada que reforça sua identidade e gera mais confiança.
                    </p>
                  </div>
                </div>

                {/* Comece Agora */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comece Agora Mesmo!</h3>
                    <p className="text-gray-600">
                      Página exclusiva gratuita com autonomia, tecnologia e resultados reais.
                    </p>
                  </div>
                </div>
              </div>

          
            </motion.div>
          </div>
        </div>
      </section>

     {/* Plataforma */}
<section id="plataforma" className="py-2 mt-6 px-6 md:px-12 lg:px-20 bg-gray-50">
  <div className="container mx-auto">
    {/* Título da seção */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl mt-4 md:text-4xl font-bold text-gray-900 mb-3">
        Interface moderna e intuitiva
      </h2>
      <p className="text-xl text-gray-600">
        Pensada para corretores, construtoras e anunciantes
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Estatísticas",
          description:
            "Cada acesso conta: nosso painel mostra o desempenho de visitas, leads gerados e anúncios publicados com transparência.",
          image: "/img/img4.jpg",
          features: [
            "Cada visita ao site pode se transformar em contato real",
            "Anúncios e campanhas são acompanhados em tempo real",
            "Cada imóvel publicado ganha visibilidade estratégica",
          ],
        },
        {
          title: "Gestão de Imóveis",
          description:
            "Controle total do seu portfólio de imóveis.",
          image: "/img/img5.jpg",
          features: [
            "Edite, pause, exclua",
            "Gere anúncios em PDF",
            "Impulsione seus anúncios",
          ],
        },
        {
          title: "CRM de Atendimento",
          description:
            "Não deixe clientes escaparem: gerencie seus LEADS de forma eficiente em 4 etapas.",
          image: "/img/img6.jpg",
          features: [
            "Informações completas do LEAD",
            "Adicione notas, histórico e arquive LEADS",
            "Agenda completa de compromissos",
          ],
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
        >
          {/* Imagem */}
          <div className="w-full">
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={350}
              className="w-full object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <ul className="space-y-2">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Seção Verde - App no Celular */}
      <section className="relative py-10 md:py-16 lg:py-20 px-2 md:px-12 lg:px-20 bg-[#099625] overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          {/* Padrão de pontos */}
          <div className="absolute top-20 left-20 w-32 h-32 opacity-20">
            <div className="grid grid-cols-8 gap-1">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
              ))}
            </div>
          </div>
          
          {/* Setas decorativas */}
          <div className="absolute top-16 right-32 opacity-30">
            <div className="flex flex-col space-y-1">
              {[...Array(6)].map((_, i) => (
                <ChevronRight key={i} className="w-4 h-4 text-white" />
              ))}
            </div>
          </div>
          
          {/* Estrela decorativa */}
          <div className="absolute bottom-32 left-16">
            <div className="relative">
              <div className="w-8 h-8 bg-white opacity-40 transform rotate-45"></div>
              <div className="absolute top-2 left-2 w-4 h-4 bg-white opacity-60 transform rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Lado Esquerdo - Imagem do Celular */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center lg:justify-start"
            >
              <div className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[420px] mx-1 sm:mx-0">
                <Image
                  src="/img/img7.jpg"
                  alt="Aplicativo AcheiCasa.NET no celular"
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 80vw, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Lado Direito - Conteúdo */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div>
                <h2 className="text-2xl text-left md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Anúncios em Tempo Real
                </h2>
                
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-lg">
                  Transforme seu imóvel em anúncio em tempo real com a IA da AcheiCasa.NET
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rolagem Infinita */}
      <section className="py-2 md:py-16 lg:py-20 !bg-[#ffffff] px-2 md:px-12 lg:px-20">
        <div className="container  mx-auto">
          <div className="grid lg:grid-cols-2 gap-x-4 md:gap-x-10 lg:gap-x-12 gap-y-8 items-center">
            {/* Lado Esquerdo - Título e Ícone */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <div>
                <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold text-orange-500 mb-2 leading-tight">
                  Rolagem
                  <br />
                  Infinita
                </h2>
              </div>
              
              {/* Ícone decorativo - Rolagem Infinita */}
              <div className="flex justify-center">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="w-full h-full">
                    <defs>
                      {/* Gradiente animado */}
                      <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316">
                          <animate attributeName="stop-color" values="#f97316;#fb923c;#f97316" dur="3s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#fb923c" />
                      </linearGradient>
                    </defs>

                    {/* Smartphone */}
                    <g transform="translate(25, 25)">
                      <rect
                        x="0"
                        y="0"
                        width="28"
                        height="45"
                        rx="6"
                        fill="none"
                        stroke="url(#scrollGradient)"
                        strokeWidth="2.5"
                      />
                      {/* Tela */}
                      <rect x="3" y="5" width="22" height="30" rx="2" fill="#fed7aa" className="opacity-20 justify-center" />
                      {/* Linhas de conteúdo com movimento de rolagem */}
                      <g>
                        <line x1="6" y1="10" x2="22" y2="10" stroke="url(#scrollGradient)" strokeWidth="1.5">
                          <animateTransform attributeName="transform" type="translate" from="0 0" to="0 10" dur="1.5s" repeatCount="indefinite" />
                        </line>
                        <line x1="6" y1="14" x2="19" y2="14" stroke="url(#scrollGradient)" strokeWidth="1">
                          <animateTransform attributeName="transform" type="translate" from="0 0" to="0 10" dur="1.5s" repeatCount="indefinite" />
                        </line>
                        <line x1="6" y1="18" x2="21" y2="18" stroke="url(#scrollGradient)" strokeWidth="1">
                          <animateTransform attributeName="transform" type="translate" from="0 0" to="0 10" dur="1.5s" repeatCount="indefinite" />
                        </line>
                      </g>
                    </g>

                    {/* Setas de rolagem com animação */}
                    <g transform="translate(85, 30)">
                      <path d="M0 0 L4 4 L8 0" fill="none" stroke="url(#scrollGradient)" strokeWidth="2" strokeLinecap="round" />
                      <path d="M0 8 L4 12 L8 8" fill="none" stroke="url(#scrollGradient)" strokeWidth="2" strokeLinecap="round">
                        <animateTransform attributeName="transform" type="translate" from="0 0" to="0 10" dur="1s" repeatCount="indefinite" />
                      </path>
                      <path d="M0 16 L4 20 L8 16" fill="none" stroke="url(#scrollGradient)" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Lado Direito - Interface do Painel */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative justify-left w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden mx-1 sm:mx-0">
                <Image
                  src="/img/img1.jpg"
                  alt="Interface do painel AcheiCasa.NET"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-2 px-6 md:px-12 lg:px-20 bg-orange-500">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto"
          >
            {/* Ícone PDF */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 lg:w-64 lg:h-64">
                <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  <text x="12" y="16" textAnchor="middle" className="text-xs font-bold fill-orange-500">PDF</text>
                  {/* Linhas do documento */}
                  <rect x="7" y="11" width="6" height="0.5" fill="white"/>
                  <rect x="7" y="12.5" width="4" height="0.5" fill="white"/>
                  <rect x="7" y="14" width="5" height="0.5" fill="white"/>
                  <rect x="7" y="15.5" width="3" height="0.5" fill="white"/>
                  {/* Área de imagem */}
                  <rect x="13.5" y="11" width="3" height="2.5" fill="white" opacity="0.7"/>
                </svg>
              </div>
            </div>

            {/* Conteúdo de texto */}
            <div className="flex-1 text-white text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
              >
                Gere anúncios
                <br />
                profissionais em <span className="font-black">PDF</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl lg:text-2xl text-white/90 leading-relaxed"
              >
                apresente seus imóveis com elegância, praticidade e
                <br />
                alto impacto visual!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

    {/*anunciantes */}
    <section className="py-2 mt-4 px-6 md:px-12 lg:px-20 bg-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Anunciantes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aqui, cada anunciante tem o poder da inteligência artificial para criar anúncios incríveis e alcançar o público certo e fechar negócios com muito mais rapidez.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Proprietários */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-orange-500">Proprietários</h3>
          </motion.div>

          {/* Corretores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L13 18L15 16V11C16.1 11 17 10.1 17 9H21Z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-orange-500">Corretores</h3>
          </motion.div>

          {/* Imobiliárias */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 7H18V6C18 5.45 17.55 5 17 5H7C6.45 5 6 5.45 6 6V7H5C4.45 7 4 7.45 4 8V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V8C20 7.45 19.55 7 19 7ZM8 7V6H16V7H8ZM18 18H6V9H18V18ZM8 11H16V13H8V11ZM8 15H13V16H8V15Z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-orange-500">Imobiliárias</h3>
          </motion.div>

          {/* Construtoras */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2ZM12 4.19L19 7.3V10C19 15.05 16.05 18.81 12 19.91C7.95 18.81 5 15.05 5 10V7.3L12 4.19ZM7 9H17V11H7V9ZM7 13H17V15H7V13Z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-orange-500">Construtoras</h3>
          </motion.div>

          {/* Leiloeiros */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2ZM8 16L9 19L12 20L15 19L16 16L15 13L12 12L9 13L8 16Z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-orange-500">Leiloeiros</h3>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Planos e Benefícios */}
<section id="planos" className="py-2 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-[#ffffff] relative overflow-hidden">
      <div className="container mx-auto relative">
        
        {/* Ícone do foguete animado */}
       <motion.img
  src="/img/iconefoguete.png"
  alt="Ícone de foguete"
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 className="absolute hidden md:block lg:-left-[4] xl:left-[8rem] top-2 w-20 sm:w-14 md:w-28 lg:w-26 xl:w-44 z-30"

 />


        {/* Cabeçalho da seção */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="text-xl text-orange-600">
            Planos em condições especiais
          </p>
        </motion.div>

        {/* Cards dos planos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Pacote - Bronze",
              price: "R$ 99,00",
              period: "/mês",
              features: [
                "Até 30 anúncios",
                "30 dias de exibição",
                "Até 30 imagens",
                "Tour 360° - Visita Virtual",
                "Suporte IA AcheiCasa.NET",
                "Anúncios em PDF",
                "Página Exclusiva",
                "CRM de Atendimento",
                "Sem fidelidade",
              ],
              highlighted: false,
            },
            {
              name: "Pacote - Plano Ouro",
              price: "R$ 199,00",
              period: "/mês",
              features: [
                "Até 100 anúncios",
                "30 dias de exibição",
                "Até 30 imagens",
                "Tour 360° - Visita Virtual",
                "Suporte IA AcheiCasa.NET",
                "Anúncios em PDF",
                "Página Exclusiva",
                "CRM de Atendimento",
                "Sem fidelidade",
              ],
              highlighted: true,
            },
            {
              name: "Pacote - Plano diamante",
              price: "R$ 349,00",
              period: "/mês",
              features: [
                "Até 400 anúncios",
                "30 dias de exibição",
                "Até 30 imagens",
                "Tour 360° - Visita Virtual",
                "Suporte IA AcheiCasa.NET",
                "Anúncios em PDF",
                "Página Exclusiva",
                "CRM de Atendimento",
                "Sem fidelidade",
              ],
              highlighted: false,
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col justify-between ${
                plan.highlighted
                  ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl scale-105"
                  : "bg-white shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div>
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={
                      plan.highlighted ? "text-white/80" : "text-gray-600"
                    }
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-white" : "text-green-500"
                        }`}
                      />
                      <span
                        className={plan.highlighted ? "text-white" : "text-gray-600"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href="https://acheicasa.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center text-center ${
                    plan.highlighted
                      ? "bg-white text-orange-500 hover:bg-gray-100"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  }`}
                >
                  Selecionar Plano
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


      {/* Chamada Final (CTA) */}
      <section className="py-2 px-6 md:px-12 lg:px-20 bg-white text-black">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Cadastre-se agora e experimente o futuro do mercado imobiliário
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Junte-se a outros profissionais e trasnforme suas vendas com a IA da AcheiCasa.NET
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="http://acheicasa.net" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                Acessar AcheiCasa.net
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </a>
            </div>
            
          </motion.div>
        </div>
      </section>

    {/*voucher */}
    <section className="hidden py-2 mt-4 px-6 md:px-12 lg:px-20 bg-gray-100 relative overflow-hidden">
      {/* Background text "VOUCHER" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[20rem] md:text-[25rem] lg:text-[30rem] font-black text-gray-200 opacity-30 select-none leading-none">
          VOUCHER
        </h1>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Parabéns! Você acaba de ganhar 60 dias
            <br />
            de anúncios <span className="text-black">100% grátis!</span>
          </h2>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-orange-500 mb-12 font-medium">
            Seus próximos 60 dias de anúncios são por nossa conta! Aproveite seu voucher grátis!
          </p>
          
          {/* Código promocional */}
          <div className="mb-8">
            <div className="inline-block mx-4 sm:mx-auto bg-white rounded-2xl shadow-lg border-2 border-gray-200 px-6 sm:px-8 py-4 sm:py-6 mb-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-normal sm:tracking-wider">
                ACHEIMARINGA30
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Código Promocional
            </p>
          </div>
          
          {/* Botão de ação */}
          <motion.a
            href="http://acheicasa.net"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 inline-flex items-center gap-2"
          >
            Acessar AcheiCasa.net
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          
          {/* Condição */}
          <p className="text-gray-500 text-sm mt-6">
            *Condição válida pelo período de PRÉ LANÇAMENTO
          </p>
        </motion.div>
      </div>
    </section>
    </div>
  )
}
