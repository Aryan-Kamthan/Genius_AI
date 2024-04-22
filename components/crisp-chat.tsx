"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f2317fe5-c0da-4b68-a311-27b450a1dc43");
  }, []);

  return null;
};
