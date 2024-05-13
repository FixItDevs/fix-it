const baseUrl: string =
  process.env.NODE_ENV === "deploy"
    ? "https://fixit-backend-rqp5.onrender.com" 
    : "http://localhost:3000";

export default baseUrl;
