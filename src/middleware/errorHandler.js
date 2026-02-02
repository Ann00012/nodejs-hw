import { HttpError } from "http-errors";


export const errorHandler = (err, req, res, next) => {
  console.error("Error Middleware:", err);

  if (err instanceof HttpError) {
    return res.status(err.status).json({
      message: err.message || err.name,
    });
  }
  
  const isProp = process.env.NODE_ENV === "production";
  res.status(500).json(
    {
    message:isProp?"Something went wrong. Please try again later.":err.message
    }
  );
};
