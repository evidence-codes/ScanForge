declare module "custom-env" {
  interface ProcessEnv {
    MONGODB_URI: string;
    JWT_SEC: string;
  }
}
