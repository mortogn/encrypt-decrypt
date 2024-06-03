"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { encryptTextAction } from "./action";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

export default function EncryptPage() {
  const [encryptedText, setEncryptedText] = useState("");

  return (
    <div className="w-full">
      <h1 className="text-4xl font-medium">Encrypt Data</h1>
      <form
        action={async (formdata) => {
          const result = await encryptTextAction(formdata);

          setEncryptedText(result.encryptedText);
        }}
        className="mt-6 w-full space-y-3"
      >
        <Input name="value" placeholder="Enter the text you want to encrypt" className="w-full" />

        <Button type="submit">Submit</Button>
      </form>

      <div className="mt-6 space-y-3">
        <p>Encrypted Text:</p>
        <p className="overflow-auto">{encryptedText}</p>

        <Link href={"/decrypt"} className={buttonVariants({ variant: "ghost", className: "gap-2" })}>
          <LinkIcon className="size-4" />
          Let&apos; go decrypt
        </Link>
      </div>
    </div>
  );
}
