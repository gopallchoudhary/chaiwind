"use client";

import { useLayoutEffect } from "react";
import { classesToStylesheet } from "@/lib/chaiwind-inject-css";

const STYLE_ID = "chaiwind-runtime-css";

export function ChaiwindStyles() {
  useLayoutEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = classesToStylesheet();
    document.head.appendChild(el);
  }, []);

  return null;
}
