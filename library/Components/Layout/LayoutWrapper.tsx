"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { LayoutNavigation } from "@/constant/LayoutNavigation";
import { AuthorContext } from "@/context/authorization";
import Image from "next/image";
import { useContext } from "react";
import { RiMenuFold3Fill } from "react-icons/ri";
import SingleView from "../Layout/SingleView";
import MultipleView from "../Layout/MultipleView";
import { iconsList } from "../icons/Icons";
import ConnectWithMe from "../Promotion/ConnectWithMe";

export default function LayoutWrapper() {
  const Author = useContext(AuthorContext);
  return (
    <div
      className={` ${
        Author?.LayoutWrapperVisible
          ? "w-96 translate-x-0 transform transition-all duration-300 ease-in-out"
          : "w-0 -translate-x-96 transform transition-all duration-300 ease-in-out"
      } flex flex-col items-start justify-between p-2 pr-0`}
    >
      <div className="w-full">
        <div className="flex w-full items-center justify-between gap-4">
          {Author?.General?.AdminLogo ? (
            <Image
              width={176}
              height={176}
              className="w-44 self-center object-scale-down"
              alt="logo"
              src={Author?.General?.AdminLogo}
            />
          ) : (
            <Skeleton className="h-auto w-44 rounded-md" />
          )}
          <button
            onClick={() =>
              Author?.setLayoutWrapperVisible(!Author?.LayoutWrapperVisible)
            }
          >
            <RiMenuFold3Fill className="size-6 text-slate-400" />
          </button>
        </div>
        <div className="scrollbar m-4 h-[calc(100vh-100px)] overflow-y-scroll">
          <div className="flex flex-col gap-5">
            {LayoutNavigation.map((item) => {
              return (
                <div className="flex flex-col gap-1">
                  <span className="px-3 py-2 text-[12px] font-bold uppercase text-gray-400/60">
                    {item.name} -{" "}
                  </span>
                  {item.NavigationProperties.map((item) => {
                    return item.isSingle ? (
                      <SingleView
                        key={item.name}
                        href={item.href}
                        text={item.name}
                      >
                        {iconsList[item.icon]}
                      </SingleView>
                    ) : (
                      <MultipleView
                        Docs={item.sub}
                        item={item.name}
                        key={item.name}
                      >
                        {iconsList[item.icon]}
                      </MultipleView>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <ConnectWithMe />
        </div>
      </div>
    </div>
  );
}
