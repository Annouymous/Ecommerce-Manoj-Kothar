import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import QRCode from "react-qr-code";

function CustomerInformation() {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Customer Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-xs text-black/70">Scan to call the customer</p>
        <QRCode size={120} value="7999608196" />
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-2">
        <div className="flex flex-col space-y-4 text-xs">
          <span>
            Name: <strong>John Doe</strong>
          </span>
          <span>
            Phone Number: <strong>7999608196</strong>
          </span>
          <span>
            Email: <strong>7YV5U@example.com</strong>{" "}
          </span>
          <span>
            Pin Code: <strong>123456</strong>
          </span>
          <span>
            City: <strong>New York</strong>
          </span>
          <span>
            Full Address: <strong>123 Main Street, Anytown USA</strong>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CustomerInformation;
