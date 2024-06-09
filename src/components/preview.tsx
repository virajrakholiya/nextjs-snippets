"use client";
import { Editor } from "@monaco-editor/react";

import React from "react";

interface PreviewProps {
  code: string;
}

const Preview: React.FC<PreviewProps> = ({ code }) => {
  return (
    <Editor
      height="40vh"
      theme="vs-dark"
      language="javascript"
      defaultValue={code}
      options={{
        readOnly: true,
        minimap: { enabled: false },

        padding:{
            top:20
        },
        fontSize:18
      }}
      className="bg-gray-900"
    />
  );
};

export default Preview;
