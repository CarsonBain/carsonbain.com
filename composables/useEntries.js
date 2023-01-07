export default function useEntries() {
  const nuxtApp = useNuxtApp();
  const getEntriesForContentType = async (contentType) => {
    // TODO: what's this error about with unsafe headers? https://github.com/contentful/contentful.js/issues/422
    return await nuxtApp.$contentful
      .getEntries({ content_type: contentType })
      .then((response) => {
        return response.items;
      })
      .catch(console.error);
  };

  return {
    getEntriesForContentType,
  };
}
