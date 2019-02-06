export default function grepObject(obj, reg) {
  const result = [];
  for (let i = 0; i < obj.length; i++) {
    const { volume } = obj[i];
    // console.log(volume);
    for (let j = 0; j < obj[i].texts.length; j++) {
      const { textNumber, textName } = obj[i].texts[j];
      // console.log( volume, textName );

      for (let k = 0; k < obj[i].texts[j].contents.length; k++) {
        const { lineNumber, textus, versio } = obj[i].texts[j].contents[k];

        if (reg.test(textus)) {
          result.push({
            volume,
            textNumber,
            textName,
            lineNumber,
            textus,
            versio
          });
        }
      }
    }
  }

  return result;
}
