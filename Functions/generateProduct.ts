import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { uploadImage } from "./Firebase";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { DB } from "@/Firebase/config";

const UploadProductImages = async (ProductImages: any) => {
  const imageUrls = [];
  for (let i = 0; i < ProductImages.length; i++) {
    const file = ProductImages[i];
    if (typeof file === "string" && file?.startsWith("")) {
      imageUrls.push(file);
    } else if (file instanceof File) {
      const url = await uploadImage("ProductImage", file);
      imageUrls.push(url);
    }
  }
  return imageUrls;
};

type ProductType = "Update" | "Create";
export async function generateProduct(
  type: ProductType,
  updateId: string | undefined,
  ProductName: string,
  ProductPrice: number,
  ProductDescription: string,
  ProductDetails: string,
  ProductUploadImages: File[],
  ProductSize: any[],
  ColorSelector: boolean,
  ThicknessSelector: boolean,
) {
  if (!ProductUploadImages || ProductUploadImages.length < 4) {
    toast("Please upload at least 4 images.");
    return;
  }
  if (
    ProductName.trim() === "" ||
    ProductPrice === 0 ||
    ProductDescription.trim() === "" ||
    ProductDetails.trim() === ""
  ) {
    toast("Please fill in all fields.");
    return;
  }

  const ProductImages = await UploadProductImages(ProductUploadImages);
  const ProductId = uuidv4();
  let ProductObject = {
    name: ProductName,
    price: ProductPrice,
    description: ProductDescription,
    details: ProductDetails,
    images: ProductImages,
    coverImage: ProductImages[0],
    sizes: ProductSize,
    isColorSelectorEnabled: ColorSelector,
    thickness: ThicknessSelector,
  };
  if (type === "Create") {
    const generateProduct = {
      ...ProductObject,
      id: ProductId,
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
    };
    let DatabaseRef = doc(collection(DB, "products"), ProductId);
    await setDoc(DatabaseRef, generateProduct);
  }
  if (type === "Update") {
    const generateProduct = {
      ...ProductObject,
      modifiedAt: new Date().toISOString(),
    };
    let DatabaseRef = doc(collection(DB, "products"), updateId);
    await updateDoc(DatabaseRef, generateProduct);
  }
}
