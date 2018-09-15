export const formInputsToList = <T>(formObj: object, fieldName: string) => {
  const pattern = RegExp(`${fieldName}-([0-9]+)-(.*)`);
  const res: {[key: string]: any} = {};
  Object.keys(formObj).forEach(key => {
    const match = pattern.exec(key);
    if (match && match.length === 3) {
      const index = match[1];
      const propertyName = match[2];
      res[index] = {
        ...res[index],
        [propertyName]: (formObj as any)[key]
      }
    }
  });
  return Object.keys(res).map(key => parseInt(key)).sort().map(key => res[key.toString()]) as T[];
}