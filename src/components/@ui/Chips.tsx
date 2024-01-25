import React, { PropsWithChildren } from "react";

function Chips({
  checked,
  children,
}: { checked: boolean } & PropsWithChildren) {
  return (
    <span
      className={
        checked
          ? "border border-gray-800 border-solid rounded p-2 bg-green-800 text-white"
          : "border border-gray-800 border-solid rounded p-2"
      }
    >
      {children}
    </span>
  );
}

export default Chips;
