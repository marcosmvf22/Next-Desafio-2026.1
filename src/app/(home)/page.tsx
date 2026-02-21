import HeroSection from "@/src/components/home/herosection";
import Carrossel from "../../components/home/carrossel";
import SobreNos from "@/src/components/home/sobre-nos";
import PrinProdutos from "@/src/components/home/principais-produtos";
import { getProducts } from "@/actions/home/actions";


export default async function Home() {
  const posts = await getProducts()

  return (
    <div className="flex flex-col gap-0 m-0 p-0">
    <HeroSection />
    <Carrossel posts={posts} />
    <SobreNos />
    <PrinProdutos posts={posts} />
    </div>
  );
}
