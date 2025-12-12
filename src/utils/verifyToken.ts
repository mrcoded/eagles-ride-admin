import { Buffer } from "buffer";

const decodeToken = (token: string) => {
  try {
    const decodedToken = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
    return decodedToken;
  } catch (error: unknown) {
    console.log(error);
    return false;
    // throw new Error("Invalid token");
  }
};

const verifyTokenExpiration = (token: string): boolean => {
  const decodedToken = decodeToken(token);
  const expirationTime = decodedToken.exp;
  const currentTime = Math.floor(Date.now() / 1000);

  if (expirationTime < currentTime) {
    // console.log("Token is expired");
    return false;
  } else {
    return true;
  }
};

export { verifyTokenExpiration };
