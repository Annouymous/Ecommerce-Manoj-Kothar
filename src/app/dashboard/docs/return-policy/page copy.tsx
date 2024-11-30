"use client";
import { Button } from "@/components/ui/button";
import { docsType } from "@/constant/types";
import { getDocument, SaveDocument } from "@/Functions/Firebase";
import TextEditor from "@/library/Components/Editor/TextEditor";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function page() {
  const [content, setContent] = useState("");
  const HandleContent = (e: string) => setContent(e);

  const LoadDocument = async () => {
    const result = (await getDocument("about")) as docsType;
    setContent(result.content);
  };

  useEffect(() => {
    LoadDocument();
  }, []);

  const HandleSaveContent = async () => {
    try {
      await SaveDocument("about", content);
      toast.success("Doc Update Success");
    } catch (error) {
      toast.error("Doc Update Failed");
    }
  };

  return (
    <div>
      <div className="mb-5 flex items-center justify-end px-3">
        <Button
          onClick={HandleSaveContent}
          className="bg-indigo-600 hover:bg-indigo-800 disabled:cursor-not-allowed disabled:bg-indigo-950 disabled:text-gray-600"
        >
          Update About us
        </Button>
      </div>
      <TextEditor onEditorChange={HandleContent} initialValue={content} />
    </div>
  );
}

export default page;
