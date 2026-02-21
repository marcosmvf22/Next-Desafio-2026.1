import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Camisa Cruzeiro Oficial I 2030',
      description: 'Camisa oficial titular do Cruzeiro 2024, tecido leve e respirável com tecnologia dry-fit.',
      price: 299.90,
      principalImage: '/logo/camisa1.png',
    },
    {
      title: 'Camisa Cruzeiro Oficial II 2024',
      description: 'Modelo reserva 2024, design moderno com detalhes em branco e azul.',
      price: 279.90,
      principalImage: '/logo/camisa1.png',
    },
    {
      title: 'Camisa Cruzeiro Treino 2024',
      description: 'Camisa de treino utilizada pelos jogadores, tecido leve e confortável.',
      price: 199.90,
      principalImage: '/logo/camisa1.png',
    },
    {
      title: 'Camisa Cruzeiro Retrô 2003',
      description: 'Modelo retrô em homenagem ao time campeão da Tríplice Coroa 2003.',
      price: 249.90,
      principalImage: '/logo/camisa1.png',
    },
    {
      title: 'Camisa Cruzeiro Feminina 2024',
      description: 'Modelo feminino oficial 2024, modelagem acinturada e confortável.',
      price: 269.90,
      principalImage: '/logo/camisa1.png',
    },
    {
      title: 'Camisa Cruzeiro Infantil 2024',
      description: 'Camisa oficial infantil 2024, ideal para os pequenos torcedores.',
      price: 189.90,
      principalImage: '/logo/camisa1.png',
    },
    {
      title: 'Camisa Cruzeiro Edição Especial Libertadores',
      description: 'Edição especial comemorativa com detalhes exclusivos.',
      price: 319.90,
      principalImage: '/logo/camisa1.png',
    },
    {
      title: 'Camisa Cruzeiro Goleiro 2024',
      description: 'Modelo oficial de goleiro 2024 com cores vibrantes.',
      price: 289.90,
      principalImage: '/logo/camisa1.png',
    },
    {
      title: 'Camisa Cruzeiro Azul Clássica',
      description: 'Camisa azul tradicional com escudo bordado de alta qualidade.',
      price: 259.90,
      principalImage: '/logo/camisa1.png',
    },
    {
      title: 'Camisa Cruzeiro Torcedor 2024',
      description: 'Versão torcedor 2024 com ótimo custo-benefício e excelente acabamento.',
      price: 219.90,
      principalImage: '/logo/camisa1.png',
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });