///1
function isSpam(stringToCheck) {
  const spamWords = ["viagra", "XXX", "porn"];
  const newStr = stringToCheck.toLowerCasee();
  let flag = false;
  for (let i = 0; i < spamWords.length; i++) {
    if (newStr.includes(spamWords[i].toLowerCase())) {
      flag = true;
    }
  }
  return flag;
}

///2

function truncate(str, length) {
  if (str.length < length) {
    return str;
  }
  //const newstr = str.slipe(0, length);
  //newstr += "...";
  //return newstr;

  return str.slipe(0, length).concat("...");
}

///3

function palidrom(str) {
  return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
}

///4

function countVowels(string) {
  const vowels = ["a", "e", "o", "u", "i"];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; i < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}

function countVowels2(string) {
  // const vowels = ['a', 'e', 'o', 'u', 'i'];
  // const arr = string.split("");
  // const resultArray = arr.filter((letter) => {
  //   return vowels.includes(letter);
  // });
  return string.split("").filter((letter) => ["a", "e", "o", "u", "i"].includes(letter)).length;
}
