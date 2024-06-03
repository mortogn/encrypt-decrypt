"use client"; // Error components must be Client Components

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl text-red-500 font-semibold">{error.message || "Something went wrong"}</h2>
        <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
          Try different value
        </Link>
      </div>
    </div>
  );
}
