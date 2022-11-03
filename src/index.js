const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
export default function orderByProps(object, [first, second]) {
  const resArr = [];
  const newArr = [];

  for (const prop in obj) {
    if ({}.hasOwnProperty.call(prop)) {
      const elemArr = {
        key: prop,
        value: obj[prop],
      };
      if (prop === first || prop === second) {
        resArr.push(elemArr);
      } else {
        newArr.push(elemArr);
        newArr.sort((a, b) => {
          if (a.key > b.key) {
            return 1;
          }
          if (a.key < b.key) {
            return -1;
          }
          return 0;
        });
      }
    }
  }
  const superArr = resArr.concat(newArr);
  return superArr;
}

orderByProps(obj, ['name', 'level']);