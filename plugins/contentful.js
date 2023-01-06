import { createClient } from 'contentful';
import contentful from 'contentful';
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  // For some reason you have to do this for prod vs dev...https://github.com/contentful/contentful.js/issues/1233#issuecomment-1216175360
  const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient;
  const configObject = {
    space: config.public.contentfulSpaceId,
    accessToken: config.public.contentfulAccessToken,
  };
  const client = createClientFunc(configObject);
  return {
    provide: {
      contentful: client,
    },
  };
});
