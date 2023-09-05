// common
export const HTTPS = "https://";
export const HTTP = "http://";

// swapi
export const SWAPI_ROOT = "swapi.dev/api/";
export const SWAPI_PEOPLE = "people";
export const SWAPI_PARAM_PAGE = "/?page=";
export const SWAPI_PARAM_SEARCH = "/?search=";

export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE;
export const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;
export const API_SEARCH =
  HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_SEARCH;

// visualguide

export const GUIEDE_ROOT_IMG = "https://starwars-visualguide.com/assets/img/";
export const GUIDE_PEOPLE = "characters";
export const GUIDE_IMG_EXTENSTION = ".jpg";

export const URL_IMG_PERSON = GUIEDE_ROOT_IMG + GUIDE_PEOPLE;