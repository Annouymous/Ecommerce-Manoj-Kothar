"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import LoginFragment from "@/library/Screens/LoginFragment";
import { Auth } from "@/Firebase/config";
import { getGeneral, signInEmail } from "@/Functions/Firebase";
import { AuthorContext } from "@/context/authorization";

import { SiteMetaData } from "@/constant/types";
import Loading from "@/library/Components/Loading";

export default function LoginForm() {
  const Context = useContext(AuthorContext);
  const [Logo, SetLogo] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [LoadingStatus, setLoadingStatus] = useState(false);

  const FormHandling = async (event: React.FormEvent) => {
    setLoadingStatus(true);
    event.preventDefault();
    try {
      console.log(Email, Password);
      await signInEmail(Email, Password);
      setLoadingStatus(false);
    } catch (Error) {
      console.log((Error as Error)?.message);
      setError((Error as Error)?.message || "Unknown error occurred");
      setLoadingStatus(false);
    }
  };

  const HandleEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [Email],
  );

  const HandlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [Password],
  );

  useEffect(() => {
    getLogo();
  });
  const getLogo = async () => {
    const result = (await getGeneral("SiteMetaData")) as SiteMetaData;
    SetLogo(result.AdminLogo);
  };
  if (Context?.Status) return <Loading />;
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-300">
      <LoginFragment
        Error={Error}
        onPasswordChange={HandlePassword}
        onEmailChange={HandleEmail}
        loadingStatus={LoadingStatus}
        HandleForm={FormHandling}
        AdminLogo={Logo}
      />
    </div>
  );
}
