import {NextFunction, Request, Response} from "express"
export const asyncHandler = (handler: any) => (req:Request, res:Response, next: NextFunction) => handler(req, res, next).catch(next);