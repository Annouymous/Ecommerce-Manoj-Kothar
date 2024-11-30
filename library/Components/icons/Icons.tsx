import { SiDocsify } from "react-icons/si";
import { GiClothJar } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { RiCoupon2Line } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa6";
import { AiOutlineAppstore } from "react-icons/ai";
import { CgShapeHexagon } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineRequestPage } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { LuLayers } from "react-icons/lu";
import { FiBox } from "react-icons/fi";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { IoBagCheckOutline } from "react-icons/io5";

interface IconList {
  [key: string]: JSX.Element;
}

export const iconsList: IconList = {
  GeneralIcon: (
    <CiSettings className="fill-slate-500 group-data-[hover]:fill-sky-500/80" />
  ),
  MdAutoGraph: (
    <MdAutoGraph className="size-5 hover:fill-blue-500 group-hover:fill-blue-500 group-data-[hover]:fill-blue-500" />
  ),
  FiBox: <FiBox className="size-5 group-hover:text-sky-500" />,
  IoBagCheckOutline: (
    <IoBagCheckOutline className="size-5 group-hover:text-sky-500" />
  ),
  FaQuestion: <FaQuestion className="size-5 group-hover:text-sky-500" />,
  CgWebsite: <CgWebsite className="size-5 group-hover:text-sky-500" />,
  IoSettingsOutline: (
    <IoSettingsOutline className="size-5 group-hover:text-sky-500" />
  ),
  IoDocumentTextOutline: (
    <IoDocumentTextOutline className="size-5 group-hover:text-sky-500" />
  ),
  MdOutlinePhotoCameraBack: (
    <MdOutlinePhotoCameraBack className="size-5 hover:fill-blue-500 group-hover:fill-blue-500 group-data-[hover]:fill-blue-500" />
  ),
  LuLayers: <LuLayers className="size-5 group-hover:text-sky-500" />,

  AiOutlineAppstore: (
    <AiOutlineAppstore className="size-5 hover:fill-blue-500 group-hover:fill-blue-500 group-data-[hover]:fill-blue-500" />
  ),
  FiShoppingCart: (
    <FiShoppingCart className="size-5 group-hover:text-sky-500" />
  ),
  FiUser: <FiUser className="size-5 group-hover:text-sky-500" />,
  MdOutlineRequestPage: (
    <MdOutlineRequestPage className="size-5 hover:fill-blue-500 group-hover:fill-blue-500 group-data-[hover]:fill-blue-500" />
  ),
  ProductIcon: (
    <AiFillProduct className="size-6 fill-black hover:fill-blue-500 group-hover:fill-blue-500 group-data-[hover]:fill-blue-500" />
  ),
  CgShapeHexagon: (
    <CgShapeHexagon className="size-6 fill-black hover:fill-blue-500 group-hover:fill-blue-500 group-data-[hover]:fill-blue-500" />
  ),
  OrderIcon: (
    <IoCartOutline className="size-6 fill-black hover:fill-blue-500 group-hover:fill-blue-500 group-data-[hover]:fill-blue-500" />
  ),
  UserIcon: <FaRegUser className="size-5 group-hover:text-sky-500" />,
};
