"use client";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import { editSnippet } from "@/actions/action";
interface SnippetsEditForm {
  snippet: Snippet;
}

function snippetEditFrom({ snippet }: SnippetsEditForm) {
  const [code, setCode] = useState(snippet.code);
  const HandelEditorChange = (value: string = "") => {
    setCode(value);
  };
  const action = editSnippet.bind(null, snippet.id, code);
  return (
    <div className="mt-5">
      <div className="h-8 bg-gray-900 rounded-t-xl p-2 ">
        <div className="ml-3 flex gap-3 items-center">
          <div className="bg-red-500 h-4  rounded-full w-4"></div>
          <div className="bg-yellow-500 h-4  rounded-full w-4"></div>
          <div className="bg-green-500 h-4  rounded-full w-4"></div>
        </div>
      </div>
      <Editor
        height="40vh"
        language="javascript"
        defaultValue={snippet.code}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          padding: {
            top: 20,
          },
          fontSize: 18,
        }}
        onChange={HandelEditorChange}
        className="bg-gray-900"

      />
      <div className="h-8 bg-gray-900 rounded-b-xl "></div>
      <form action={action} className="mt-5">
        <button
          type="submit"
          className="btn p-2 border  rounded-xl bg-black text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default snippetEditFrom;
