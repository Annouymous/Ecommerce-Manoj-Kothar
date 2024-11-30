"use client";
import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";

function MediaUploadFragment({
  label,
  onFileChange,
}: Readonly<{
  label?: string;
  onFileChange: (file: File) => void;
}>) {
  const [isDragging, setIsDragging] = useState(false);
  const [Picture, setPicture] = useState("");
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      console.log(selectedFiles);
      const file = selectedFiles[0];
      const previewUrl = URL.createObjectURL(file);
      setPicture(previewUrl);
      // onFileChange(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFiles = event.dataTransfer.files; // Access the dropped files
    if (droppedFiles.length > 0) {
      console.log(droppedFiles);
      const file = droppedFiles[0];
      const previewUrl = URL.createObjectURL(file);
      setPicture(previewUrl);
      // onFileChange(file); // Handle the dropped file
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-gray-800">
        <strong>{label}</strong>
      </label>
      {Picture ? (
        <div className="relative w-full">
          <Image
            width={100}
            height={100}
            src={Picture}
            alt="preview"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`${
            isDragging ? "border-sky-600 bg-sky-100" : "border-blue-600"
          } mt-2 inline-block h-auto min-w-[160px] max-w-[170px] justify-center rounded-lg border-[1px] border-dashed border-sky-500 p-5 py-10`}
        >
          <div className="text-center">
            <IoCloudUploadOutline className="size-10 w-full self-center text-blue-500" />
            <div className="flex w-full text-center text-xs text-gray-400">
              <span className="w-full text-center text-xs leading-6 text-gray-400">
                Drop your images here or
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer text-indigo-600"
                >
                  <span className="ml-1 text-blue-500">
                    select click to browse
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSelect}
                    id="file-upload"
                    name="file-upload"
                    className="sr-only"
                  />
                </label>
              </span>
            </div>
          </div>
        </div>
      )}
      {Picture && (
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer text-indigo-600"
        >
          <span className="text-center text-xs text-blue-500">
            Change Image
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleSelect}
            id="file-upload"
            name="file-upload"
            className="sr-only"
          />
        </label>
      )}
    </div>
  );
}

export default MediaUploadFragment;
