import React, { ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@headlessui/react";
import { CreateQuestion } from "@/Functions/Firebase";
import toast from "react-hot-toast";

function CreateQuestionContainer() {
  const [question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");

  const HandleQuestion = () => {
    try {
      CreateQuestion(question, Answer);
      toast.success("Question created successfully");
      //   GetDocuments();
    } catch (error) {
      toast.error("Failed to create question");
    }
  };
  const HandleOnChangeQuestion = (e: ChangeEvent<HTMLInputElement>) =>
    setQuestion(e.target.value);
  const HandleOnChangeAnswer = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setAnswer(e.target.value);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-sky-500 hover:bg-sky-700" variant="default">
          Add New FAQ Question
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Question</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Question
            </Label>
            <Input
              onChange={HandleOnChangeQuestion}
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Answer
            </Label>
            <Textarea
              onChange={HandleOnChangeAnswer}
              id="username"
              className="col-span-3 min-h-[100px] rounded-md border border-gray-300 p-4"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={HandleQuestion}>
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateQuestionContainer;
