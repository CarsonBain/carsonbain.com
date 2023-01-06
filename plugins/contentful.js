import * as contentful from 'contentful';
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const configObject = {
    space: config.public.contentfulSpaceId,
    accessToken: config.public.contentfulAccessToken,
  };
  const client = contentful.createClient(configObject);
  return {
    provide: {
      contentful: client,
    },
  };
});
