const base_url = process.env.REACT_APP_SERVER_URL;

export const serverUrl = (route) => {
  return `${base_url}/${route}`;
};
