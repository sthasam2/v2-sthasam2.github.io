export const fallbackLng = "en";
export const languages = [fallbackLng, "np", "hi"];
export const defaultNS = "translation";
export const cookieName = "i18next";

type GetOptionsReturn = {
  supportedLngs: string[];
  fallbackLng: string;
  lng: string;
  fallbackNS: string;
  defaultNS: string;
  ns: string;
};

export function getOptions(
  lng = fallbackLng,
  ns = defaultNS,
): GetOptionsReturn {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
