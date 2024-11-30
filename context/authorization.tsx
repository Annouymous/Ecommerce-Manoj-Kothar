"use client";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { Auth } from "@/Firebase/config";
import { useRouter } from "next/navigation";
import { getGeneral } from "@/Functions/Firebase";
import { SiteMetaData } from "@/constant/types";

interface AuthorContextType {
  user: User | null;
  Status: boolean;
  General: SiteMetaData | null;
  setStatus: (status: boolean) => void;
  LayoutWrapperVisible: boolean;
  setLayoutWrapperVisible: (layoutWrapperVisible: boolean) => void;
  setUser: Dispatch<SetStateAction<any>>;
}

export const AuthorContext = createContext<AuthorContextType | null>(null);
export const AuthorProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [Status, setStatus] = useState(true);
  const [General, setGeneral] = useState<SiteMetaData | null>(null);
  const [LayoutWrapperVisible, setLayoutWrapperVisible] = useState(true);
  // Your logic for fetching and setting the user goes here

  useEffect(() => {
    const fetchGeneral = async () => {
      const result = (await getGeneral("SiteMetaData")) as SiteMetaData;
      setGeneral(result);
    };
    fetchGeneral();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (!user) {
        setUser(user);
        router.push("/");
        setStatus(false);
      } else {
        setUser(user);
        router.push("/dashboard");
        setStatus(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthorContext.Provider
      value={{
        General,
        LayoutWrapperVisible,
        setLayoutWrapperVisible,
        Status,
        setStatus,
        user,
        setUser,
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
};
