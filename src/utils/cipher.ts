import crypto from "node:crypto";

export function encrypt(text: string) {
  const key = process.env.ENCRYPTION_KEY as string;
  const iv = crypto.randomBytes(16);
  const algorithm = "aes-256-cbc";

  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key, "hex"), iv);
  //   const encodedText = encodeText(text);

  let encrypt = cipher.update(text, "utf8", "hex");

  encrypt += cipher.final("hex");

  return iv.toString("hex") + ":" + encrypt;
}

export function decrypt(encryptedString: string, secret: string) {
  const algorithm = "aes-256-cbc";
  const textParts = encryptedString.split(":");

  try {
    const iv = Buffer.from(textParts[0], "hex");
    const encryptedData = Buffer.from(textParts[1], "hex");

    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secret, "hex"), iv);

    let decrypted = decipher.update(encryptedData, undefined, "utf8");

    decrypted += decipher.final("utf8");

    return decrypted;
  } catch (err) {
    throw new Error("Unable to decrypt the value");
  }
}
