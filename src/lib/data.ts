import { Product } from "@/types";

export const PRODUCTS_DATA: Product[] = [
  {
    id: "bomber-jacket-neon",
    title: "Bomber Jacket Neon",
    description: "Tecido impermeável com detalhes refletivos. O design oversized perfeito para composições urbanas noturnas. Possui bolsos internos ocultos e acabamento em neopreno.",
    price: 399.90,
    category: "Outerwear",
    imageUrl: "" // Adicione URLs reais aqui se tiver
  },
  {
    id: "cyber-sneakers-x1",
    title: "Cyber Sneakers X1",
    description: "Design futurista com solado de absorção de impacto. Malha respirável e acabamento premium. Ideal para quem busca conforto sem abrir mão do estilo techwear.",
    price: 599.00,
    category: "Footwear",
    imageUrl: ""
  },
  {
    id: "cargo-pants-tech",
    title: "Cargo Pants Tech",
    description: "Calça utilitária com múltiplos bolsos e ajuste magnético. Conforto e funcionalidade para o dia a dia. Tecido ripstop resistente a rasgos e água.",
    price: 249.50,
    category: "Bottoms",
    imageUrl: ""
  },
  {
    id: "oversized-hoodie-black",
    title: "Oversized Hoodie Black",
    description: "Algodão 100% orgânico de alta gramatura. Estampa em silk relevo nas costas. Essencial e atemporal. Corte boxy fit para máximo conforto.",
    price: 189.00,
    category: "Tops",
    imageUrl: ""
  },
  {
    id: "tactical-vest",
    title: "Tactical Vest",
    description: "Colete tático modular inspirado no techwear. Acessório statement para transformar qualquer look básico. Múltiplos compartimentos e fivelas de engate rápido.",
    price: 220.00,
    category: "Accessories",
    imageUrl: ""
  },
  {
    id: "bucket-hat-reflective",
    title: "Bucket Hat Reflective",
    description: "Proteção e estilo. Material que reage à luz e flash de câmeras. Perfeito para festivais e rolês noturnos. Aba larga para proteção extra.",
    price: 89.90,
    category: "Headwear",
    imageUrl: ""
  }
];

export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS_DATA.find((product) => product.id === id);
};
