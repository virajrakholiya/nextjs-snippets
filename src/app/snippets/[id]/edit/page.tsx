import SnippetEditForm from "@/components/snippetEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetsEdit {
  params: {
    id: string;
  };
}

async function page(props: SnippetsEdit) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <div>
        <SnippetEditForm snippet={snippet}/>
    </div>
  );
}

export default page;
