function translater(stringToTranslate) {
  const vocabulary = new Map();
  vocabulary.set("cat", "кіт");
  vocabulary.set("eat", "їсти");
  vocabulary.set("dog", "собака");

  const words = stringToTranslate.toLowerCase().split(" ");
  const translatedArray = words.map((word) => vocabulary.has(word) ? vocabulary.get(word) : word
  );
  return translatedArray.join(" ");
}
