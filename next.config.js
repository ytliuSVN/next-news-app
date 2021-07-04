module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    GUARDIAN_API_KEY: process.env.GUARDIAN_API_KEY,
    GUARDIAN_API_URL: process.env.GUARDIAN_API_URL,
  },
  images: {
    domains: ['media.guim.co.uk'],
  },
};
