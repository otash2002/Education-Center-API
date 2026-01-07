export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET ?? 'your-secret-key-change-in-production',
    expiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  },
  database: {
    url: process.env.DATABASE_URL ?? 'postgresql://localhost:5432/education_center',
  },
  app: {
    port: parseInt(process.env.PORT ?? '3000', 10),
    nodeEnv: process.env.NODE_ENV ?? 'development',
  },
});
