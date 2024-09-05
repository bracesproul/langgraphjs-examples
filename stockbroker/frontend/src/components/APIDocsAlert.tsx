"use client";

import { useEffect, useState } from "react";
import { getCookie, setCookie } from "@/utils/cookies";
import { SEEN_API_TOAST_COOKIE } from "@/constants";
import { Alert, AlertDescription, AlertTitle } from "@/components/Alert";
import { Terminal, X, Wifi, Book } from "lucide-react";

export function APIDocsAlert() {
  const [showAlert, setShowAlert] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (showAlert) return;
    if (typeof window === "undefined") return;

    const hasClosesApiToast = getCookie(SEEN_API_TOAST_COOKIE);
    if (hasClosesApiToast) return;

    setShowAlert(true);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowAlert(false);
      if (process.env.NODE_ENV === "development") {
        console.info(
          "API alert closed. Not setting cookie due to development environment."
        );
        return;
      }
      setCookie(SEEN_API_TOAST_COOKIE, "true");
    }, 300); // Match this with the transition duration
  };

  if (!showAlert) {
    return null;
  }

  return (
    <Alert
      className={`max-w-[400px] absolute top-4 left-4 z-50 shadow-lg bg-gray-200 transition-opacity duration-300 ease-in-out ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-row w-full justify-between">
        <span className="flex flex-row gap-2 items-center">
          <Terminal className="h-4 w-4" />
          <AlertTitle className="pt-1">
            Want to use the Stockbroker API?
          </AlertTitle>
        </span>
        <span>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1 transition-colors duration-200 ease-in-out"
            aria-label="Close alert"
          >
            <X />
          </button>
        </span>
      </div>
      <AlertDescription className="flex flex-col gap-1 py-2">
        <span className="flex flex-row gap-1 items-center justify-normal">
          <Book className="h-4 w-4" />
          <p className="text-black text-sm font-light">
            Click{" "}
            <a
              className="text-blue-600 underline underline-offset-1 font-normal"
              href="https://github.com/bracesproul/langgraphjs-examples/blob/main/stockbroker/README.md"
              target="_blank"
            >
              here
            </a>{" "}
            to read the Stockbroker docs.
          </p>
        </span>
        <span className="flex flex-row gap-1 items-center justify-normal">
          <Wifi className="h-4 w-4" />
          <p className="text-black text-sm font-light">
            {" "}
            Or, click{" "}
            <a
              className="text-blue-600 underline underline-offset-1 font-normal"
              href="/api/docs"
              target="_blank"
            >
              here
            </a>{" "}
            to read the REST API docs.
          </p>
        </span>
      </AlertDescription>
    </Alert>
  );
}
