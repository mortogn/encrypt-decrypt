"use server";

import { decrypt } from "@/utils/cipher";

export async function decryptTextAction(formdata: FormData) {
  const encryptedValue = String(formdata.get("value"));

  const secret = String(formdata.get("secret"));

  if (!!!encryptedValue || !!!secret) {
    throw new Error("No encrypted data provided.");
  }

  const decrypted = decrypt(encryptedValue, secret);

  return {
    decryptedText: decrypted,
  };
}
