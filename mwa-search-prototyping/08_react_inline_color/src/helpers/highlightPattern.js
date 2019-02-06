import React from "react";
import Mark from "./Mark";

export default (text, pattern) => {
  const splitText = text.split(pattern);

  if (splitText.length <= 1) {
    return text;
  }

  const matches = text.match(pattern);

  return splitText.reduce(
    (arr, element, index) =>
      matches[index]
        ? [...arr, element, <Mark>{matches[index]}</Mark>]
        : [...arr, element],
    []
  );
};
