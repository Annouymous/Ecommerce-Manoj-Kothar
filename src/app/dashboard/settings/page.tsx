"use client";
import { AuthorContext } from "@/context/authorization";
import { Auth } from "@/Firebase/config";
import {
  passwordChange,
  UpdateDisplayName,
  UpdateUseProfile,
  uploadImage,
} from "@/Functions/Firebase";
import AdminProfile from "@/library/Components/Settings/AdminProfile";
import { updateEmail, updateProfile } from "firebase/auth";
// import { passwordChange, UpdateDisplayName, UpdateEmail, UpdateUseProfile, uploadImage } from '@/library/Firebase/Services'
import { useRouter } from "next/navigation";
import React, { useCallback, useContext, useState } from "react";

function page() {
  const Author = useContext(AuthorContext);
  const [DisplayName, SetDisplayName] = useState(Author?.user?.displayName);
  const [Email, SetEmail] = useState(Author?.user?.email);
  const [Password, SetPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [LoadingStatus, setLoadingStatus] = useState(false);

  const HandlePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      SetPassword(event.target.value);
    },
    [Password],
  );
  const HandleConfirmPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value);
    },
    [ConfirmPassword],
  );
  const HandleDisplayName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      SetDisplayName(event.target.value);
    },
    [DisplayName],
  );
  const HandleEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      SetEmail(event.target.value);
    },
    [Email],
  );

  const HandlePasswordChange = async () => {
    setLoadingStatus(true);
    if (Password === ConfirmPassword) {
      try {
        await passwordChange(Author?.user, ConfirmPassword);
        setLoadingStatus(false);
        alert("Password Change Success");
        SetPassword("");
        setConfirmPassword("");
      } catch (error) {
        SetPassword("");
        setConfirmPassword("");
        alert("Password Change Failed");
        setLoadingStatus(false);
      }
    } else {
      setLoadingStatus(false);
      alert("Password don't Match");
    }
  };

  const HandleProfileIcon = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLoadingStatus(true);
    const files = event.target.files;
    if (files && files[0]) {
      const image = files[0];
      try {
        const imageURL = await uploadImage("local", image);
        await UpdateUseProfile(Author?.user, imageURL);
        setLoadingStatus(false);
        alert("Profile updated successfully!");
      } catch (error) {
        setLoadingStatus(false);
        console.error("Error updating profile: ", error);
        alert("There was an error updating the profile.");
      }
    } else {
      console.error("No image selected.");
    }
  };

  const HandleDisplayInfo = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const shouldUpdateDisplayName =
      DisplayName && DisplayName !== Author?.user?.displayName;
    const shouldUpdateEmail = Email && Email !== Author?.user?.email;
    try {
      if (shouldUpdateDisplayName && shouldUpdateEmail) {
        await UpdateDisplayName(Author?.user, DisplayName);
        alert("Display Name and Email updated successfully!");
      } else if (shouldUpdateDisplayName) {
        await UpdateDisplayName(Author?.user, DisplayName);
        alert("Display Name updated successfully!");
      } else if (shouldUpdateEmail) {
        await updateEmail(Author?.user, Email);
        alert("Email updated successfully!");
      } else {
        alert("No changes detected.");
      }
    } catch (error) {
      console.error("Error updating profile: ", error);
      alert("There was an error updating your profile.");
    }
  };

  return (
    <div className="m-3 flex flex-col overflow-y-auto rounded-md bg-white p-5 shadow-sm">
      <AdminProfile
        defaultName={Author?.user?.displayName}
        user={Author?.user}
        handleDisplayInformation={HandleDisplayInfo}
        onEmailChange={HandleEmail}
        onDisplayNameChange={HandleDisplayName}
        Email={Author?.user?.email}
        DisplayName={DisplayName}
        onIconChange={HandleProfileIcon}
        ConfirmPassword={ConfirmPassword}
        LoadingStatus={LoadingStatus}
        ChangePassword={HandlePasswordChange}
        Password={Password}
        onConfirmPasswordChange={HandleConfirmPassword}
        onPasswordChange={HandlePassword}
      />
    </div>
  );
}

export default page;
