// https://codingdojo.org/kata/Anagram/

// Word list
// https://gist.githubusercontent.com/calvinmetcalf/084ab003b295ee70c8fc/raw/314abfdc74b50f45f3dbbfa169892eff08f940f2/wordlist.txt

// see screenshots

const input = document.querySelector("input");
const submit = document.getElementById("submit");
const output = document.getElementById("output");

word = "documenting";

input.addEventListener("change", () => {
  const files = input.files;
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result;
    output.innerText = text;
  };
  reader.onerror = (e) => alert(e.target.error.name);
  reader.readAsText(files[0]);
});

submit.addEventListener("click", anagram);

function anagram() {
  let array = output.innerText
    .toString()
    .split(/\r?\n/)
    .map((i) => i.trim())
    .join("")
    .split(" ")
    .filter((i) => i != "");

  const sortedWordToAnagram = word.split("").sort().join("");

  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let checkWord = array[i] + array[j];
      if (checkWord.split("").sort().join("") === sortedWordToAnagram) {
        console.log(`${word} = ${array[i]} + ${array[j]}`);
      }
    }
  }
  console.log("END");
}
