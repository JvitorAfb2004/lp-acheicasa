/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimização de imagens
  images: {
    unoptimized: true, // Necessário para export estático
  },

  // Configurações de build
  output: 'export',
  trailingSlash: true,
  
  // Configurações de SEO
  generateEtags: false,
}

module.exports = nextConfig