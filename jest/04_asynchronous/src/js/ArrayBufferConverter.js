class ArrayBufferConverter {
  static load(str) {
    const buffer = new ArrayBuffer(str.length * 2);
    const bufferView = new Uint16Array(buffer);

    str.split('').forEach((el, i) => {
      bufferView[i] = el.charCodeAt();
    });

    return buffer;
  }

  static toString(buffer) {
    return String.fromCharCode(...new Uint16Array(buffer));
  }
}

export default ArrayBufferConverter;
