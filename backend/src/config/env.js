export const env = {
  node: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 4000),
  jwtSecret: process.env.JWT_SECRET,
  jwtExp: process.env.JWT_EXPIRES_IN || "1d",
};