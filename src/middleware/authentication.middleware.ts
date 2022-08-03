import { NextFunction, Request, Response } from 'express';
const TOKEN_AUTHORIZATION = 'RpLVr0SwWH602g5m4PH3itwrz6siED2dan9Xax6IR';
export const AuthenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token != TOKEN_AUTHORIZATION) {
    return res.status(403).json({ message: 'authen fail' });
  }
  console.log('token', token);
  next();
};
