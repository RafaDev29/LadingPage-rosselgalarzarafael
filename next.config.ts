import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Requerido por Next.js para exportaciones estáticas si usas el componente <Image />
  },
};

export default nextConfig;