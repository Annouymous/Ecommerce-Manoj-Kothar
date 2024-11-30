"use client";

import SiteMetaDataFragment from "@/library/Components/general/SiteMetaDataFragment";
import SocialAccountFragment from "@/library/Components/general/SocialAccountFragment";
import React from "react";

function page() {
  return (
    <div className="w-full overflow-y-auto">
      <SiteMetaDataFragment />
      <SocialAccountFragment />
    </div>
  );
}

export default page;
