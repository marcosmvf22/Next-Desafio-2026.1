import { GetPVI } from "@/actions/PVI/actions";
import Produtos from "@/src/components/produtos";

export default async function ListaProdutos() {
  
const posts = await GetPVI()

  return (
    <div className="bg-azul-medio">
    <Produtos posts={posts} />
    </div>
  );
}