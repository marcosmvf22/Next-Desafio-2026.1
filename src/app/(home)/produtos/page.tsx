import { GetPVI } from "@/actions/PVI/actions";
import Produtos from "@/src/components/produtos";

export default async function ListaProdutos({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const query = params?.query || "";
  const page = Number(params?.page) || 1;

  const { posts, totalPages, currentPage } = await GetPVI(query, page);

  return (
    <div className="bg-azul-medio">
      <Produtos posts={posts} totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}