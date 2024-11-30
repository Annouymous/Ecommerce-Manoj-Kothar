"use client";
import React, { useEffect, useState } from "react";
// import MediaUploadFragment from '../components/MediaUploadFragment'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  updateDoc,
} from "firebase/firestore";
// import { DB } from "../Firebase/config";
// import MediaUploadFragment from "../components/general/MediaUploadFragment";
import Image from "next/image";
import HeadFragment from "../HeadFragment";
import { uploadImage } from "@/Functions/Firebase";
import InputContainer from "../InputContainer";
import { DB } from "@/Firebase/config";
import { toast as Toaster } from "sonner";
import toast from "react-hot-toast";
import Loader from "../Loader";
import MediaUploadFragment from "./MediaUploadFragment";
import ImageUpload from "./ImageUpload";
import { Label } from "@/components/ui/label";

function SiteMetaDataFragment() {
  const [Process, setProcess] = useState(false);
  const [Process2, setProcess2] = useState(true);
  const [PreviewImages, setPreviewImages] = useState({
    AdminLogo: "",
    WebsiteLogo: "",
    Favicon: "",
  });
  type IMAGE = "AdminLogo" | "WebsiteLogo" | "Favicon";
  const [GeneralInformation, setGeneralInformation] = useState({
    WebsiteLogo: "",
    Favicon: "",
    AdminLogo: "",
    WebsiteName: "",
    Tagline: "",
    Description: "",
    email: "",
    Whatsapp: "",
    BusinessAddress: "",
  });

  useEffect(() => {
    setProcess2(true);
    const pt = doc(collection(DB, "general"), "SiteMetaData");
    getDoc(pt).then((data) => {
      setGeneralInformation(data.data());
    });
    setTimeout(() => {
      setProcess2(false);
    }, 1000);
  }, []);

  const handleWebsiteName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralInformation({
      ...GeneralInformation,
      WebsiteName: event.target.value,
    });
  };

  const handleTagline = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralInformation({
      ...GeneralInformation,
      Tagline: event.target.value,
    });
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralInformation({
      ...GeneralInformation,
      Description: event.target.value,
    });
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralInformation({
      ...GeneralInformation,
      email: event.target.value,
    });
  };

  const handleWhatsappNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralInformation({
      ...GeneralInformation,
      Whatsapp: event.target.value,
    });
  };
  const handleBusinessAddress = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setGeneralInformation({
      ...GeneralInformation,
      BusinessAddress: event.target.value,
    });
  };

  const HandleWebsiteLogo = async (file: File) => {
    try {
      const upload = await uploadImage("SiteMeta", file);
      setGeneralInformation({
        ...GeneralInformation,
        WebsiteLogo: upload,
      });
    } catch (error) {
      alert("Failed To Upload Image");
    }
  };
  const HandleFavicon = async (file: File) => {
    try {
      const upload = await uploadImage("SiteMeta", file);
      setGeneralInformation({
        ...GeneralInformation,
        Favicon: upload,
      });
    } catch (error) {
      alert("Failed To Upload Image");
    }
  };
  const HandleAdminLogo = async (file: File) => {
    try {
      const upload = await uploadImage("SiteMeta", file);
      setGeneralInformation({
        ...GeneralInformation,
        AdminLogo: upload,
      });
    } catch (error) {
      alert("Failed To Upload Image");
    }
  };

  const UpdateMetaData = async () => {
    setProcess(true);
    try {
      let paths = doc(collection(DB, "general"), "SiteMetaData");
      updateDoc(paths, GeneralInformation);
      setTimeout(() => {
        setProcess(false);
      }, 300);
      Toaster("General Information Updated", {
        description: new Date().toISOString(),
        action: {
          label: "hide",
          onClick: () => console.log("Undo"),
        },
      });
    } catch (error) {
      setTimeout(() => {
        setProcess(false);
      }, 300);
      toast.error("Failed To Update General Information");
    }
  };

  const handleProductImages = async (type: IMAGE, event: any) => {
    setProcess(true);
    let files: FileList | null = null;
    if (event.type === "drop") {
      event.preventDefault();
      event.stopPropagation();
      files = event.dataTransfer.files;
    } else if (event.type === "change") {
      files = event.target.files;
    }
    if (files && files.length > 0) {
      const previewUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      const upload = await uploadImage("SiteMeta", files[0]);
      console.log(upload);
      setGeneralInformation({
        ...GeneralInformation,
        [type]: upload,
      });
      console.log(GeneralInformation);
      UpdateMetaData();
      setProcess(false);
      // setwebsiteUploadImages((prev) => [...prev, ...Array.from(files)]);
    }
  };

  return (
    <div className="m-3 flex flex-col rounded-md bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-6 p-5">
        <HeadFragment
          Label="Update Website Info"
          onClick={UpdateMetaData}
          des="This information will be displayed publicly so be careful what you share."
          title="General information"
        />
        <div className="flex flex-row gap-3">
          <InputContainer label="Website Logo">
            {GeneralInformation.WebsiteLogo ? (
              <div className="flex flex-col gap-2">
                <img
                  src={GeneralInformation.WebsiteLogo}
                  alt="Website Logo"
                  className="size-40 object-contain"
                />
                <Label
                  htmlFor="website-logo"
                  className="item-center cursor-pointer text-center text-sm text-sky-600 underline"
                >
                  Change Image
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleProductImages("WebsiteLogo", e)}
                    className="hidden"
                    id="website-logo"
                    name="website-logo"
                  />
                </Label>
              </div>
            ) : (
              <ImageUpload
                onFileChange={(e) => handleProductImages("WebsiteLogo", e)}
                onFileDrop={(e) => handleProductImages("WebsiteLogo", e)}
              />
            )}
          </InputContainer>
          <InputContainer label="Admin Logo">
            {GeneralInformation.AdminLogo ? (
              <div className="flex flex-col gap-2">
                <img
                  src={GeneralInformation.AdminLogo}
                  alt="Admin Logo"
                  className="size-40 object-contain"
                />
                <Label
                  htmlFor="AdminLogo-logo"
                  className="item-center cursor-pointer text-center text-sm text-sky-600 underline"
                >
                  Change Image
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleProductImages("AdminLogo", e)}
                    className="hidden"
                    id="AdminLogo-logo"
                    name="AdminLogo-logo"
                  />
                </Label>
              </div>
            ) : (
              <ImageUpload
                onFileChange={(e) => handleProductImages("AdminLogo", e)}
                onFileDrop={(e) => handleProductImages("AdminLogo", e)}
              />
            )}
          </InputContainer>
        </div>
        <InputContainer p="Name of the website" label="Website name">
          <Input
            value={GeneralInformation.WebsiteName}
            onChange={handleWebsiteName}
          />
        </InputContainer>
        <InputContainer p="Write a tagline for the website" label="Tagline">
          <Input
            value={GeneralInformation.Tagline}
            defaultValue={GeneralInformation.Tagline}
            onChange={handleTagline}
          />
        </InputContainer>
        <InputContainer
          p="Write a few sentences about website"
          label="Description"
        >
          <Input
            value={GeneralInformation.Description}
            onChange={handleDescription}
          />
        </InputContainer>
        <div className="grid grid-cols-3 gap-4">
          <InputContainer
            p="Write a few sentences about website"
            label="Update Whatsapp Number"
          >
            <Input
              type="text"
              autoComplete="phoneNumber"
              value={GeneralInformation.Whatsapp}
              onChange={handleWhatsappNumber}
            />
          </InputContainer>
          <InputContainer
            p="Write a few sentences about website"
            label="Update Business email"
          >
            <Input
              type="email"
              autoComplete="email"
              placeholder="exmple@gmail.com"
              value={GeneralInformation.email}
              onChange={handleEmail}
            />
          </InputContainer>
        </div>
        <InputContainer
          p="Write a few sentences about website"
          label="Update Business email"
        >
          <Textarea
            value={GeneralInformation.BusinessAddress}
            onChange={handleBusinessAddress}
            className="min-h-32"
          />
        </InputContainer>
      </div>
      {Process2 && (
        <div className="absolute h-full w-full select-none rounded-md bg-gray-600/20 backdrop-blur-sm">
          <div className="flex h-full items-center justify-center text-sm font-semibold text-gray-600">
            <Loader />
          </div>
        </div>
      )}
      {Process && (
        <div className="absolute h-full w-full select-none rounded-md bg-gray-600/20 backdrop-blur-sm">
          <div className="flex h-full items-center justify-center text-sm font-semibold text-gray-600">
            Saving Changes...
          </div>
        </div>
      )}
    </div>
  );
}

export default SiteMetaDataFragment;
