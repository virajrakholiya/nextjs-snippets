import { db } from "@/db";
import Link from "next/link";
import React from "react";

async function page() {
  const snippet = await db.snippet.findMany();

  return (
    <div>
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex justify-between">
          {" "}
          <h1 className="text-2xl font-bold" >Snippets</h1>
          <Link href={`/snippets/new`} className="btn bg-black text-white">New</Link>
        </div>
        {snippet.map((snippet) => {
          return (
            <Link
              className="flex flex-row p-2 justify-between items-center border border-black rounded-lg "
              key={snippet.id}
              href={`/snippets/${snippet.id}`}
            >
              <div className="text-xl capitalize"> {snippet.title}</div>
              <div className="">View</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default page;
