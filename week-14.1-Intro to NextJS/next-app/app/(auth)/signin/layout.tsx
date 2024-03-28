import React from "react";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
        <div className="border-b p-4 text-center">
         20% off for the next 3 days
        </div>
        {children}
        </div>
    );
  }
  