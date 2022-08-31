function  collectValues(selector) {
  let minPrice = [];
  let options = $(selector)[0].options;
  for (let index = 0; index < options.length; index++) {
    let x = options[index]
    minPrice.push({[x.value]:`£${x.text}`})
  }
  return minPrice;
}
