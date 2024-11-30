"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import TextEditor from "@/library/Components/Editor/TextEditor";
import HeadFragment from "@/library/Components/HeadFragment";
import InputContainer from "@/library/Components/InputContainer";
import ProductImages from "@/library/Components/Product/ProductImages";
import { IoMdRemoveCircle } from "react-icons/io";
import React, { useState } from "react";
import SizeSelector from "@/library/Components/Product/SizeSelector";
import { Checkbox } from "@/components/ui/checkbox";
import { Size } from "@/constant/types";
import { generateProduct } from "@/Functions/generateProduct";
import toast from "react-hot-toast";
import Loader from "@/library/Components/Loader";
import { collection, doc, getDoc } from "firebase/firestore";
import { DB } from "@/Firebase/config";

type BTL = "Add Product" | "Update Product";
type ProductType = "Update" | "Create";
function AddProduct({
  type,
  updateId,
  ButtonLabel,
}: {
  updateId?: string | undefined;
  type: ProductType;
  ButtonLabel: BTL;
}) {
  const [UploadingData, setUploadingData] = useState(false);
  const [ColorSelector, setColorSelector] = useState<boolean>(false);
  const [ThicknessSelector, setThicknessSelector] = useState<boolean>(false);
  const [ProductPrice, setProductPrice] = useState(0);
  const [ProductName, setProductName] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductCategory, setProductCategory] = useState("");
  const [ProductSize, setProductSize] = useState(Size);
  const [ProductDetails, setProductDetails] = useState("");
  const [ProductUploadImages, setProductUploadImages] = useState<
    File[] | any[]
  >([]);
  const [ProductPreviewImages, setProductPreviewImages] = React.useState<
    string[]
  >([]);
  const ResetProductSizes = () => setProductSize(Size);
  const HandleProductDetails = (event: any) => setProductDetails(event);
  const HandleProductPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(Number(event.target.value));
  };
  const HandleProductName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };
  const HandleProductDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setProductDescription(event.target.value);
  };
  const HandleProductSizes = (Size: any) => {
    const d = ProductSize.filter((c) => c.name !== Size.name);
    setProductSize(d);
  };

  const handleProductImages = (event: any) => {
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
      setProductPreviewImages((prev) => [...prev, ...previewUrls]);
      setProductUploadImages((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const RemoveProductImages = (index: number) => {
    setProductPreviewImages((prev) => prev.filter((_, i) => i !== index));
    setProductUploadImages((prev) => prev.filter((_, i) => i !== index));
  };

  // const HandleProductBorderColors = (color: ColorItem) => {
  //   if (ProductBorderColors.includes(color.code)) {
  //     setProductBorderColors(
  //       ProductBorderColors.filter((c) => c !== color.code)
  //     );
  //   } else {
  //     setProductBorderColors((prevColors) => [...prevColors, color.code]);
  //   }
  // };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setUploadingData(true);
      generateProduct(
        type,
        updateId,
        ProductName,
        ProductPrice,
        ProductDescription,
        ProductDetails,
        ProductUploadImages,
        ProductSize,
        ColorSelector,
        ThicknessSelector,
      );
      setTimeout(() => {
        toast.success("Product created successfully");
        setUploadingData(false);
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        setUploadingData(false);
        toast.error("Failed to create product");
      }, 2000);
    }
  };

  const LoadProductData = async () => {
    if (updateId) {
      setUploadingData(true);
      let DataBaseRef = doc(collection(DB, "products"), updateId);
      await getDoc(DataBaseRef).then((doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setProductPrice(data.price);
          setProductName(data.name);
          setProductDescription(data.description);
          setProductSize(data.sizes);
          setProductDetails(data.details);
          setProductPreviewImages(data.images);
          setProductUploadImages(data.images);
          setColorSelector(data.isColorSelectorEnabled);
          setThicknessSelector(data.thickness);
        }
        setUploadingData(false);
      });
    }
  };
  React.useEffect(() => {
    LoadProductData();
  }, [updateId]);
  return (
    <form className="relative" onSubmit={onSubmit}>
      <div className="mr-5 flex justify-end">
        <Button
          type="submit"
          className="bg-blue-500 hover:border hover:border-blue-500 hover:bg-transparent hover:text-blue-500"
        >
          {ButtonLabel}
        </Button>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <div className="m-3 flex flex-col rounded-md bg-white p-5">
            <HeadFragment
              des="Do not exceed 20 characters when entering the product name."
              title="General Information"
            />
            <div className="flex flex-col gap-6">
              <InputContainer
                p="Do not exceed 20 characters when entering the product name."
                label="Product Name"
              >
                <Input
                  type="text"
                  value={ProductName}
                  onChange={HandleProductName}
                  maxLength={50}
                  required
                  aria-required
                  placeholder="Enter Product Name"
                />
              </InputContainer>
              <InputContainer
                p="Do not exceed 20 characters when entering the product name."
                label="Price"
              >
                <Input
                  onChange={HandleProductPrice}
                  type="number"
                  value={ProductPrice}
                  required
                  aria-required
                  placeholder="Enter Product Price"
                />
              </InputContainer>
              <InputContainer
                p="Maximum 300 charector Allowed"
                label="Description"
              >
                <Textarea
                  value={ProductDescription}
                  onChange={HandleProductDescription}
                  maxLength={300}
                  className="h-56"
                  required
                  aria-required
                  placeholder="Maximum 300 charector Allowed"
                />
              </InputContainer>
            </div>
          </div>
          <div className="m-3 flex flex-col gap-6 rounded-md bg-white p-5">
            <div className="flex items-center justify-between space-x-2">
              <div className="grid gap-3 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-semibold leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Enable Color Selector
                </label>
                <p className="text-xs text-muted-foreground">
                  This Checkbox will automatically enable the color selector for
                  the Product
                </p>
              </div>
              <Checkbox
                onCheckedChange={(checked) =>
                  setColorSelector(checked as boolean)
                }
                checked={ColorSelector}
                id="terms1"
              />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <div className="grid gap-3 leading-none">
                <label
                  htmlFor="terms2"
                  className="text-sm font-semibold leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Enable Thickness Selector
                </label>
                <p className="text-xs text-muted-foreground">
                  This Checkbox will automatically enable the thickness selector
                  for the Product
                </p>
              </div>
              <Checkbox
                checked={ThicknessSelector}
                onCheckedChange={(checked) =>
                  setThicknessSelector(checked as boolean)
                }
                id="terms2"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="m-3 flex flex-col gap-6 rounded-md bg-white p-5">
            <InputContainer
              p="You need to add at least 4 images. Pay attention to the quality of the pictures"
              label="Upload Images"
            >
              <div className="relative my-5 flex flex-row flex-wrap gap-3">
                {ProductPreviewImages &&
                  ProductPreviewImages.map((item, index) => (
                    <div className="relative flex flex-row">
                      <img
                        height={170}
                        width={170}
                        className="rounded-md object-contain"
                        src={item}
                      />
                      <IoMdRemoveCircle
                        onClick={() => RemoveProductImages(index)}
                        className="absolute m-1 size-5 cursor-pointer text-blue-500"
                      />
                    </div>
                  ))}
                <ProductImages
                  onFileChange={handleProductImages}
                  onFileDrop={handleProductImages}
                />
              </div>
            </InputContainer>
          </div>

          <div className="m-3 flex flex-col gap-6 rounded-md bg-white p-5">
            <div className="grid gap-3 leading-none">
              <label className="text-sm font-semibold leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Please select sizes for this product.
              </label>
              <p className="text-xs text-muted-foreground">
                This feature will allow customers to select sizes for the
                Product.
              </p>
              <SizeSelector onClick={HandleProductSizes} items={ProductSize} />
              <Button
                onClick={ResetProductSizes}
                className="my-3 bg-sky-500 text-[12px] text-white"
              >
                Reset All Size
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 flex flex-col rounded-md bg-white p-5">
        <HeadFragment title="Add More Product Information" />
        <TextEditor
          initialValue={ProductDetails}
          onEditorChange={HandleProductDetails}
        />
      </div>
      {UploadingData && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="p-5 text-white">
            <Loader />
          </div>
        </div>
      )}
    </form>
  );
}

export default AddProduct;
