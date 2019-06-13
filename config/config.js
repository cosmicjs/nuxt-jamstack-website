const config = {
    bucket_name: process.env.JAMSTACK_APP_BUCKET_SLUG || "JAMstack_app",
    bucket_slug: process.env.JAMSTACK_APP_BUCKET_SLUG || "jamstack-app",
    bucket_id: process.env.JAMSTACK_APP_BUCKET_ID || "",
    read_key: process.env.JAMSTACK_APP_BUCKET_READ_KEY || "",
    write_key: process.env.JAMSTACK_APP_BUCKET_WRITE_KEY || "",
    url: "https://api.cosmicjs.com/v1/"
  }
  export default config;