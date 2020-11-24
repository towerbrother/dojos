function widthMultiplier(string, w) {
  return string[0] + string[1].repeat(w) + string[2];
}

function heightMultiplier(array, h) {
  let middle = [];
  let bottom = [];
  for (let i = 0; i < h - 1; i++) {
    middle.push(array[1].replaceAll("_", " "));
    bottom.push(array[2].replaceAll("_", " "));
  }
  return [array[0], ...middle, array[1], ...bottom, array[2]];
}

function convert(number, w = 1, h = 1) {
  const string = number.toString();
  const array = [...string];

  let temp;

  let result = new Array(h === 1 ? 3 * h : 3 * h - (h - 1));
  for (let i = 0; i < result.length; i++) {
    result[i] = "";
  }

  for (let i = 0; i < array.length; i++) {
    temp = ["", "", ""];
    switch (array[i]) {
      case "0":
        temp[0] += widthMultiplier(" _ ", w);
        temp[1] += widthMultiplier("| |", w);
        temp[2] += widthMultiplier("|_|", w);
        break;
      case "1":
        temp[0] += widthMultiplier("   ", w);
        temp[1] += widthMultiplier("  |", w);
        temp[2] += widthMultiplier("  |", w);
        break;
      case "2":
        temp[0] += widthMultiplier(" _ ", w);
        temp[1] += widthMultiplier(" _|", w);
        temp[2] += widthMultiplier("|_ ", w);
        break;
      case "3":
        temp[0] += widthMultiplier(" _ ", w);
        temp[1] += widthMultiplier(" _|", w);
        temp[2] += widthMultiplier(" _|", w);
        break;
      case "4":
        temp[0] += widthMultiplier("   ", w);
        temp[1] += widthMultiplier("|_|", w);
        temp[2] += widthMultiplier("  |", w);
        break;
      case "5":
        temp[0] += widthMultiplier(" _ ", w);
        temp[1] += widthMultiplier("|_ ", w);
        temp[2] += widthMultiplier(" _|", w);
        break;
      case "6":
        temp[0] += widthMultiplier(" _ ", w);
        temp[1] += widthMultiplier("|_ ", w);
        temp[2] += widthMultiplier("|_|", w);
        break;
      case "7":
        temp[0] += widthMultiplier(" _ ", w);
        temp[1] += widthMultiplier("  |", w);
        temp[2] += widthMultiplier("  |", w);
        break;
      case "8":
        temp[0] += widthMultiplier(" _ ", w);
        temp[1] += widthMultiplier("|_|", w);
        temp[2] += widthMultiplier("|_|", w);
        break;
      case "9":
        temp[0] += widthMultiplier(" _ ", w);
        temp[1] += widthMultiplier("|_|", w);
        temp[2] += widthMultiplier(" _|", w);
        break;
    }

    temp = heightMultiplier(temp, h);

    for (let i = 0; i < result.length; i++) {
      result[i] += temp[i];
    }
  }

  for (let line of result) console.log(line);
}

convert(1234567890, 5, 3);
