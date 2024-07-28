import { Express, Request, Response, NextFunction } from "express";
import createError, { HttpError } from "http-errors";

function errorLoader(app: Express) {
  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.json({ result: "error", status: err.status, message: err.message });
    console.error(err);
  });
}

export default errorLoader;
