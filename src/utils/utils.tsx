export const uppercaseFirstLetter = (text: string) => {
  const textParsed = text.toLowerCase();
  return textParsed.charAt(0).toUpperCase() + textParsed.slice(1);
};

export const setToSessionStorage = (name: string, value: any) => {
  sessionStorage.setItem(name, JSON.stringify(value));
};

export const getFromSessionStorage = (name: string) => {
  return JSON.parse(sessionStorage.getItem(name) as string);
};
