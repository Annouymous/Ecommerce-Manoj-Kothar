"use client";
import React, { useCallback, useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { DB } from "@/Firebase/config";
import HeadFragment from "../HeadFragment";
import InputContainer from "../InputContainer";

interface SocialAccounts {
  _WhatsApp: string;
  _Instagram: string;
  _Facebook: string;
}

const path = doc(collection(DB, "general"), "_socialhandles");
function SocialAccountFragment() {
  const [Process, setProcess] = useState(false);
  const [ServerData, setServerData] = useState({
    _WhatsApp: "",
    _Instagram: "",
    _Facebook: "",
  });
  const [socialAccounts, setSocialAccounts] = useState({
    _WhatsApp: "",
    _Instagram: "",
    _Facebook: "",
  });

  useEffect(() => {
    const sys = getDoc(path)
      .then((data) => {
        console.log(data.data());
        setServerData(data.data() as SocialAccounts);
      })
      .catch(() => {
        console.log("Got Error during the time");
      });
  }, []);

  const HandleWhatsapp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialAccounts({
      ...socialAccounts,
      _WhatsApp: event.target.value,
    });
  };

  const HandleInstagram = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialAccounts({
      ...socialAccounts,
      _Instagram: event.target.value,
    });
  };
  const HandleFacebook = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialAccounts({
      ...socialAccounts,
      _Facebook: event.target.value,
    });
  };

  const UpdateSocialHandle = async () => {
    setProcess(true);
    try {
      let paths = doc(collection(DB, "general"), "_socialhandles");
      console.log(socialAccounts);
      updateDoc(paths, socialAccounts);
      setTimeout(() => {
        setProcess(false);
      }, 300);
      alert("Social Handles Updated");
    } catch (error) {
      setTimeout(() => {
        setProcess(false);
      }, 300);
      alert("Getting error In Updating Social Handles");
    }
  };
  return (
    <div className={`relative m-3 flex flex-col rounded-md bg-white shadow-sm`}>
      <div className="flex flex-col gap-8 p-5">
        <HeadFragment
          Label="Update Social Handles"
          onClick={UpdateSocialHandle}
          des=" Update your social-media accounts maximum can be added up to 3"
          title="Social Accounts"
        />
        <InputContainer p="https://intstagram.com/your-name" label="Instagram">
          <Input
            defaultValue={ServerData._Instagram}
            onChange={HandleInstagram}
            placeholder="Place your handle URL here"
          />
        </InputContainer>
        <InputContainer p="whatsapp Chanel link" label="WhatsApp Group">
          <Input
            defaultValue={ServerData._WhatsApp}
            onChange={HandleWhatsapp}
            placeholder="Place your handle URL here"
          />
        </InputContainer>
        <InputContainer p="if you have any" label="Facebook">
          <Input
            defaultValue={ServerData._Facebook}
            onChange={HandleFacebook}
            placeholder="Place your handle URL here"
          />
        </InputContainer>
      </div>
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

export default SocialAccountFragment;
