const base_url = process.env.REACT_APP_SERVER_URL;

export const getServerUrl = (route) => {
  return `${base_url}/${route}`;
};

export const removeNullValues = (obj) => {
  return Object.entries(obj).reduce((acc, curr) => {
    const [k, v] = curr;
    if (v === null || typeof v === "undefined" || v === "") {
      return acc;
    } else {
      return Object.assign(acc, { [k]: v });
    }
  }, {});
};

export const getUrlWithParams = (path, params) => {
  const cleanParams = removeNullValues(params);
  const formattedParams = new URLSearchParams(cleanParams);
  const url = getServerUrl(path);
  return `${url}?${formattedParams}`;
};

export const determineUrl = (searchCriteria, preexistingParamString) => {
  if (preexistingParamString) {
    return preexistingParamString;
  } else {
    const a = removeNullValues(searchCriteria);
    const b = new URLSearchParams(a);
    const c = b.toString();
    return c;
  }
};
