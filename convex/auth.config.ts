export default {
  providers: [
    {
      domain: process.env.CLERK_TEMPLATE_ISSUER_URL as string,
      applicationID: 'convex',
    },
  ],
}