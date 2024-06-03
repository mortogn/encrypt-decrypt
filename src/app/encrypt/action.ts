"use server";

import { encrypt } from "@/utils/cipher";

export async function encryptTextAction(formdata: FormData) {
  const value = String(formdata.get("value"));

  if (value.length === 0) {
    throw new Error("Value should at least be of 1 character");
  }

  const encrypted = encrypt(value);

  return {
    encryptedText: encrypted,
  };
}
