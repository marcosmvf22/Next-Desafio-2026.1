import Admin from "@/src/components/admin";
import { FetchProduto } from "@/actions/admin/action";

export default async function Tabela({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const params = await searchParams;
    const page = Number(params?.page) || 1;
    
    const { produtos, totalPages, currentPage, totalCount } = await FetchProduto(page);

    return (
        <div className="flex flex-col w-full bg-azul-claro">
            <Admin 
                produtos={produtos} 
                total={totalCount} 
                totalPages={totalPages} 
                currentPage={currentPage} 
            />
        </div>
    );
}