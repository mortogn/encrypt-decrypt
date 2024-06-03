import { Button, buttonVariants } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-8">
      <h1 className="text-5xl font-semibold">Hello Mr. Na..l?</h1>
      <p className="text-lg">Let&apos; try encryption and decryption.</p>

      <div className="flex items-center gap-2">
        <Link className={buttonVariants({ variant: "default" })} href="/encrypt">
          Encrypt
        </Link>
        <Link className={buttonVariants({ variant: "secondary" })} href="/decrypt">
          Decrypt
        </Link>
      </div>
    </div>
  );
}
