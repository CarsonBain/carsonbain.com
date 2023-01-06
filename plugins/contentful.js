import * as contentfulServer from 'contentful';
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const configObject = {
    space: config.public.contentfulSpaceId,
    accessToken: config.public.contentfulAccessToken,
  };
  const client = contentfulServer.createClient(configObject);
  return {
    provide: {
      contentful: client,
    },
  };
});
