/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключаем генерацию статических страниц, так как мы полностью на Edge
  output: 'standalone', 
};

export default nextConfig;