const generateOutput = (text: string, output = "0") => {
  if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(text) > -1) {
    if (output === "0") {
      return text;
    } else {
      return output + text;
    }
  }
  switch (text) {
    case ".":
      if (output.indexOf(".") === -1) {
        return output + text;
      } else {
        return output;
      }
    case "删除":
      if (output.length === 1) {
        return "";
      } else {
        return output.slice(0, -1);
      }
    case "清空":
    default:
      return "";
  }
};

export { generateOutput };
