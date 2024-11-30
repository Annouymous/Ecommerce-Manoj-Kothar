"use client";
import { useCallback, useEffect, useState } from "react";
import { DataTable } from "@/library/Components/Data Table/faq/data-table";
import { columns } from "@/library/Components/Data Table/faq/columns";
import { GetFaqQuestions } from "@/Functions/Firebase";
import CreateQuestionContainer from "@/library/Components/faq/CreateQuestionContainer";

interface Document {
  id?: string; // Optional
  question?: string; // Optional
  answer?: string; // Optional
  createdAt?: string; // Optional
  pid: string; // Required
}

export default function DemoPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [Loading, setLoading] = useState(true);

  const GetDocuments = async () => {
    setLoading(true);
    try {
      const questions = await GetFaqQuestions();
      setDocuments(questions);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    GetDocuments();
  }, []);

  return (
    <div className="mx-2 flex flex-col rounded-md">
      <div className="mb-3 flex justify-end">
        <CreateQuestionContainer />
      </div>
      <div className="container mx-auto bg-white">
        <DataTable Loading={Loading} columns={columns} data={documents} />
      </div>
    </div>
  );
}
