import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { deleteSnippet } from "@/actions/action";
import Preview from "@/components/preview";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

async function page(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);
  return (
    <div>
      <div className="flex flex-row justify-between mt-5">
        <h1 className="text-2xl font-bold capitalize">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="btn text-white bg-black rounded-lg"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="btn text-white bg-black rounded-lg">
              Delete
            </button>
          </form>
        </div>
      </div>

      <div className="mt-5">
        <div className="h-8 bg-gray-900 rounded-t-xl p-2 ">
          <div className="ml-3 flex gap-3 items-center">
          <div className="bg-red-500 h-4  rounded-full w-4"></div>
          <div className="bg-yellow-500 h-4  rounded-full w-4"></div>
          <div className="bg-green-500 h-4  rounded-full w-4"></div>
          </div>
        </div>
        <Preview code={snippet.code} />
        <div className="h-8 bg-gray-900 rounded-b-xl "></div>

      </div>
    </div>
  );
}

export default page;
