"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: {
      id,
    },
  });
  redirect("/");
}

export const SnippetCreatePage = async (formData: FormData) => {
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
