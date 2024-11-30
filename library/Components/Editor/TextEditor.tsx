"use client";
import { Editor } from "@tinymce/tinymce-react";
import React from "react";

function TextEditor({
  onEditorChange,
  initialValue,
}: {
  onEditorChange: (content: string) => void;
  initialValue: string;
}) {
  return (
    <Editor
      value={initialValue}
      onEditorChange={onEditorChange}
      apiKey={process.env.NEXT_PUBLIC_EDITOR}
      init={{
        menubar: false,
        min_height: 500,
        height: 1000,
        plugins: [
          "anchor",
          "autolink",
          "charmap",
          "codesample",
          "emoticons",
          "link",
          "lists",
          "searchreplace",
          "table",
          "visualblocks",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
      }}
    />
  );
}

export default TextEditor;
