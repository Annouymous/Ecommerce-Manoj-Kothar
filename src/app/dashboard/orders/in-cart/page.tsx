import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import QRCode from "react-qr-code";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import CustomerInformation from "@/library/Components/Orders/CustomerInformation";
import StatusAlert from "./StatusAlert";

export default function DialogDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent className="bg-gray-100 px-8">
        <DrawerHeader>
          <DrawerTitle>View details</DrawerTitle>
          <DrawerDescription>
            All information about the cam be seem here
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-row gap-4 py-4">
          <div className="flex grow flex-col space-y-4">
            <StatusAlert status="Delivered" />
            <Card className="max-h-56 w-full">
              <CardContent className="my-3 flex h-full items-center gap-10">
                <Image
                  alt="Eli"
                  width={120}
                  height={120}
                  className="h-auto w-auto rounded-md"
                  src={
                    "https://i.pinimg.com/736x/1e/ac/b3/1eacb34fb0b1f13758ca232c44d92d15.jpg"
                  }
                />
                <div className="flex h-full flex-col justify-between gap-2">
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold text-gray-800">
                      OMGS® Clear Acrylic Photo
                    </Label>
                    <p className="text-xs text-gray-600">
                      Experience the brilliance and vibrancy of our acrylic
                      prints, expertly crafted to bring your images to life.
                      Create a captivating visual display that truly reflects
                      your style and creates a lasting impression.
                    </p>
                    <div className="text-xs text-gray-600">
                      Order value: $100
                    </div>
                    <div className="text-xs text-gray-600">
                      Color Code value: #123456
                    </div>
                    <div className="text-xs text-gray-600">size: 12x12</div>
                    <div className="text-xs text-gray-600">Thickness : 2mm</div>
                  </div>
                  <span className="text-xs text-gray-600">Quantity: 1</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <CustomerInformation />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
