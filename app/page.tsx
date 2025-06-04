'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <nav className="absolute top-0 left-0 right-0 py-6">
            <div className="container mx-auto px-6 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Luan Carlos</h1>
              <div className="hidden md:flex gap-6">
                <a href="#about" className="hover:text-blue-200">Sobre</a>
                <a href="#services" className="hover:text-blue-200">Serviços</a>
                <a href="#portfolio" className="hover:text-blue-200">Portfólio</a>
                <a href="#contact" className="hover:text-blue-200">Contato</a>
              </div>
            </div>
          </nav>

          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transformando cliques em resultados reais
              </h2>
              <p className="text-xl mb-8">
                Gestor de Tráfego Pago | Especialista em Google Ads
              </p>
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
              >
                Solicitar uma análise gratuita
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Luan Carlos"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Sobre Mim</h2>
            <p className="text-lg text-gray-600 mb-6">
              Com 23 anos e baseado em Içara/SC, sou especialista em transformar investimentos em Google Ads em resultados mensuráveis. Minha abordagem combina análise de dados com estratégias inovadoras para maximizar o ROI dos meus clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Gestão de Google Ads',
                description: 'Campanhas otimizadas para maximizar seu retorno sobre investimento.',
              },
              {
                title: 'Performance para E-commerce',
                description: 'Estratégias específicas para aumentar vendas online.',
              },
              {
                title: 'Negócios Locais',
                description: 'Atraia mais clientes para seu negócio físico.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Resultados Reais</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce de Moda',
                metric: '300%',
                description: 'Aumento em vendas com 40% menos custo por aquisição',
              },
              {
                title: 'Clínica Odontológica',
                metric: '5x',
                description: 'Mais agendamentos mantendo o mesmo orçamento',
              },
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{result.title}</h3>
                <p className="text-4xl font-bold text-blue-600 mb-4">{result.metric}</p>
                <p className="text-gray-600">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Vamos Conversar</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Vamos escalar seu negócio
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Luan Carlos</h3>
              <p className="text-gray-400">Gestor de Tráfego Pago | Google Ads</p>
            </div>
            <div className="flex gap-6">
              <Link href="https://instagram.com/luan.cxv" target="_blank" className="hover:text-blue-400">
                Instagram
              </Link>
              <Link href="https://linkedin.com/in/luancarlos" target="_blank" className="hover:text-blue-400">
                LinkedIn
              </Link>
              <Link href="https://calendly.com/luancarlos" target="_blank" className="hover:text-blue-400">
                Agendar Call
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}