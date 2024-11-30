"use client";
import React from "react";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { CgShapeRhombus } from "react-icons/cg";

type DocItem = {
  name: string;
  href: string;
  ref?: string;
};

function MultipleView({
  children,
  Docs = [],
  item,
}: Readonly<{
  children: React.ReactNode;
  Docs?: DocItem[];
  item: string;
}>) {
  const pathname = usePathname();
  return (
    <Disclosure as="div" defaultOpen={false}>
      {({ open }) => (
        <>
          <DisclosureButton
            className={`${
              open && "bg-sky-100 fill-transparent text-sky-500"
            } group flex h-12 w-full items-center justify-between rounded-md p-3 hover:bg-sky-100`}
          >
            <div className="flex flex-row items-center gap-3">
              {children}
              <span
                className={`${
                  open && "text-sky-500"
                } text-sm font-semibold text-black group-data-[hover]:text-sky-500`}
              >
                {item}
              </span>
            </div>
            <ChevronDownIcon
              className={` ${
                open && "fill-sky-500"
              } size-4 fill-black/80 group-data-[open]:rotate-180 group-data-[hover]:fill-sky-500/50`}
            />
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="flex transform-gpu flex-col gap-4 pb-8 pl-6 pt-6 text-sm/5 text-white/50 duration-500 ease-in-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          >
            {Docs.map((item, index) => {
              return (
                <Link
                  key={index}
                  className={`group flex flex-row items-center gap-3 ${
                    pathname === item.href && "fill-sky-500 text-sky-500"
                  } `}
                  href={item.href}
                >
                  <CgShapeRhombus className="size-2 text-gray-300 group-hover:fill-blue-500 group-hover:text-blue-500" />
                  <span
                    className={clsx(
                      "text-sm font-medium text-gray-700 hover:text-sky-500/80 group-data-[hover]:text-sky-500/80",
                      {
                        "text-sky-500/80": pathname === item.href,
                      },
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default MultipleView;
