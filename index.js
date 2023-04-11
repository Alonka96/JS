const monitor = {
  sizes: {
    length: {
      value: 20,
      scale: "sm",
    },
    width: {
      value: 30,
      scale: "sm",
    },
  },
  brightness: "2000lm",
  color: "black",
  manufacturer: {
    name: "Sony",
    address: {
      city: "London",
      street: "Baker",
      house: 27,
    },
  },
};

/// d - Math.sqrt(a*a + b*b);
// const diagonal = Math.sqrt(
//   monitor.sizes.length.value * monitor.sizes.length.value + monitor.sizes.width.value * monitor.sizes.width.value);
///вирішення проблеми>
// const lengthValue = monitor.sizes.length.value;
// const widthValue = monitor.sizes.width.value;
// const diagonal = Math.sqrt(lengthValue * lengthValue + widthValue * widthValue);
console.log(diagonal);

const manufacturerCity = monitor.manufacturer.address.sity;
///деструктурування (розібрання на елементи)
const {
  sizes: {
    length: { value: lengthValue },
    width: { value: widthValue },
  },
  manufacturer: {
    address: { city },
  },
} = monitor;
