import { Express, Request, Response } from "express";

export default (app: Express) => {
  app.get("*", (req: Request, res: Response) => {
    req;
    res.status(404).json({
      message: "Route GET:/ not found",
      error: "Not Found",
      statusCode: 404,
    });
  });
};
