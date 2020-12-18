export function queryStringToObject(str) {
  const obj = JSON.parse(
    '{"' +
      decodeURI(str.substring(1))
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  const formattedObj = Object.entries(obj).reduce((acc, [key, value]) => {
    if (value === "undefined") {
      acc[key] = undefined;
    } else if (value === "true") {
      acc[key] = true;
    } else if (value === "false") {
      acc[key] = false;
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});

  return formattedObj;
}
