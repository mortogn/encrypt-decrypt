"use client";

import React, { useState } from "react";
import { decryptTextAction } from "./action";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

//088b43da115b8497fdd22379bb4c2df6:6ca3f3727f5cfdcdcf9fb66b9e9a1460

export default function DecryptPage() {
  const [decryptedText, setDecryptedText] = useState("");

  return (
    <div className="w-full">
      <h1 className="text-4xl font-medium">Decrypt Data</h1>

      <p className="mt-4">
        If the secret is not
        <span className="font-mono bg-slate-200 block w-max px-2 py-1">fb4fa912da5ddeb999e9ac87f6d7043bdc771e485b3927c781bb5564d2fc6970</span>
        the decryption will not work
      </p>

      <form
        action={async (formdata) => {
          const result = await decryptTextAction(formdata);

          setDecryptedText(result.decryptedText);
        }}
        className="mt-6 w-full space-y-3"
      >
        <Input name="value" placeholder="Enter the encrypted text" className="w-full" />

        <Input name="secret" placeholder="Enter the secret text" className="w-full" />

        <Button type="submit">Submit</Button>
      </form>

      <div className="mt-6 space-y-3">
        <p>Decrypted Text:</p>
        <p>{decryptedText}</p>

        <Link href={"/encrypt"} className={buttonVariants({ variant: "ghost", className: "gap-2" })}>
          <LinkIcon className="size-4" />
          Let&apos; go encrypt
        </Link>
      </div>
    </div>
  );
}
