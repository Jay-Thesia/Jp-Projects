import React, { ReactNode } from "react";

function SiteLoader({
  variant = "gradient",
  children,
  withAnimation = false,
}: {
  children?: ReactNode;
  withAnimation?: boolean;
  variant?: "ocean" | "gradient" | "transparent";
}) {
  const bg = `${
    variant === "ocean"
      ? "bg-ocean"
      : variant === "transparent"
      ? "bg-black/60"
      : "bg-main-gradient"
  }
  `;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        withAnimation && "animate-stickSlideLeft"
      } ${bg}`}
    >
      {children}
      <div className="h-32 w-32 p-4 bg-white rounded-full siteLoaderMask duration-1000 box-border animate-spin" />
    </div>
  );
}

export default SiteLoader;
