import React, { PropsWithChildren } from "react";

function Chips({
  checked,
  children,
}: { checked: boolean } & PropsWithChildren) {
  return (
    <span className={checked ? "chips chips-active" : "chips"}>{children}</span>
  );
}

export default Chips;
