import React, { useState } from "react";

export function useVisible() {
  const [visible, setVisible] = useState(false);
  return {
      visible,setVisible
  };
}
