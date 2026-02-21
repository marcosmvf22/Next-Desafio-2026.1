import { FetchPVI } from "@/actions/PVI/actions";
import PVI from "@/src/components/PVI";


export default async function PagVisuIndividual({ params }: { params: { id: string } }) {
    const { id } = await params;

    const post = await FetchPVI(Number(id));

  return (
    <div>
        <PVI post={post} />
    </div>
  );
}
