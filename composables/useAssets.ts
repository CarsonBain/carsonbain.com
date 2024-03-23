export default function useAssets() {
  const nuxtApp = useNuxtApp();
  const getAllAssets = async (options: any) => {
    // TODO: what's this error about with unsafe headers? https://github.com/contentful/contentful.js/issues/422
    return await nuxtApp.$contentful
      .getAssets(options)
      .then((response) => {
        return response.items;
      })
      .catch(console.error);
  };

  return {
    getAllAssets,
  };
}
