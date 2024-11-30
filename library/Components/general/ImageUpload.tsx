"use client";
import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

function ImageUpload({
  onFileDrop,
  onFileChange,
}: Readonly<{
  onFileDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
  onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}>) {
  const [isDragging, setIsDragging] = useState(false);

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

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={onFileDrop}
        className={`${
          isDragging ? "border-blue-600 bg-indigo-50" : "border-gray-300"
        } mt-2 flex h-full items-center justify-center rounded-lg border border-dashed border-blue-500 px-4 py-6`}
      >
        <label
          htmlFor="file-upload"
          className="flex h-full cursor-pointer flex-col items-center justify-center rounded-md bg-white text-center text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
        >
          <FiUploadCloud
            aria-hidden="true"
            className="mx-auto h-12 w-12 text-blue-600"
          />
          <div className="mt-4 flex max-w-40 flex-col text-center text-xs text-gray-600">
            <p className="pl-1">
              Drop your images here or select
              <span className="ml-1 text-blue-600">click to browse</span>
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={onFileChange}
              id="file-upload"
              name="file-upload"
              className="sr-only"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default ImageUpload;
