import type { Jwt } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

const getExpiryFateFromToken = (token: string) => {
  try {
    // Decode the JWT token without verifying it
    const decodedToken = jwt.decode(token);
    return decodedToken as Jwt;
  } catch (error) {
    return null;
  }
};

export default getExpiryFateFromToken;
