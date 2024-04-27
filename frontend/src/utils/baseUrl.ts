const baseUrl: string =
  process.env.NODE_ENV === "deploy"
    ? "http://localhost:3000" // Yes, makes no sense now but will be needed for deployment
    : "http://localhost:3000";

export default baseUrl;
