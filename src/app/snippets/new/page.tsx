import { db } from "@/db";
import { redirect } from "next/navigation";
import React from "react";

function page() {
  const SnippetCreatePage = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string; // name="title"
    const code = formData.get("code") as string; // name="code"

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    redirect("/");
  };
  return (
    <div>
      <form action={SnippetCreatePage}>
        <h3 className="text-2xl font-bold mb-3 text-center">Create a Snippets</h3>
        <div className="flex flex-col gap-4 mx-auto w-[70vw]">
          <div className="flex gap-4">
            <label className="w-12 " htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              className=" border border-black rounded p-2 w-full"
              id="title"
            />
          </div>
          <div className="flex gap-4">
            <label className="w-12 " htmlFor="code">
              Code
            </label>
            <textarea
              name="code"
              className=" border border-black rounded p-2 w-full"
              id="code"
              rows={8}
            />
          </div>
          <div className="flex justify-center items-center w-full">
          <button type="submit" className="btn bg-black text-white w-[200px] text-center">
            Submit
          </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default page;
