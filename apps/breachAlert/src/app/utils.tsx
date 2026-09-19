export function genHexString(length: number) {
    let result = '';
    const hexChars = '0123456789abcdef';
  
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * hexChars.length);
      result += hexChars[randIndex];
    }
  
    return result;
  }