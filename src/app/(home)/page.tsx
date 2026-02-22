import HeroSection from "@/src/components/home/herosection";
import Carrossel from "../../components/home/carrossel";
import SobreNos from "@/src/components/home/sobre-nos";
import PrinProdutos from "@/src/components/home/principais-produtos";
import { getProducts } from "@/actions/home/actions";
import { getIdentities } from "@/src/lib/api/get-mvv";


export default async function Home() {
  const posts = await getProducts()

  try {
    const data = await getIdentities();

  return (
    <div className="flex flex-col gap-0 m-0 p-0">
    <HeroSection />
    <Carrossel posts={posts} />
    <SobreNos data={data} />
    <PrinProdutos posts={posts} />
    </div>
  );
  } catch (error) {
    console.error("Erro fetching idetities", error);
    return <p>Ocorreu um erro ao carregar os dados</p>
  }
}