module.exports = {
    authenticateRoutes: {
      path: [
        { url: "/api/auth/register", methods: ["POST"] },
        { url: "/api/auth/login", methods: ["POST"] },
        { url: "/", methods: ["GET"] }  // Also exclude the health check
      ]
    }
};