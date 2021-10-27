const removeDuplicate = (array: any[]) => {
  const set = new Set(array);
  const duplicateFreeArray = [...set];
  return duplicateFreeArray;
};

const uniqueArray = (array: any[]) => {
  const res = new Map();
  return array.filter(array => !res.has(array.id) && res.set(array.id, 1));
};

const reduceAndRemoveDuplicate = (arr: any[]) => {
    var nn = [...arr];
    let obj = {};
    let peon = nn.reduce((cur, next) => {
      //根据 属性scac + 属性disPlayName 判断去重
      obj[next.name + next.unit + next.size]
        ? ''
        : (obj[next.name + next.unit + next.size] = true && cur.push(next));
      return cur;
    }, []); //设置cur默认类型为数组，并且初始值为空的数组
    console.log(peon);
    return peon;
};
export { removeDuplicate, reduceAndRemoveDuplicate };
