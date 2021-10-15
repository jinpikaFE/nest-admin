// 省市区数据处理成antd级联选择器格式
export type ProvinceType = {
  value: string,
  label: string,
  children?: ProvinceType[],
}

const reduceProvArr = (dataKey: any[], tempArr: ProvinceType[]) => {
  const keyArr = Object.keys(dataKey);
  for (let i = 0; i < keyArr.length; i += 1) {
    const itemObj: ProvinceType = {
      value: keyArr[i],
      label: keyArr[i],
    };
    if (Object.keys(dataKey?.[keyArr?.[i]]) && Object.keys(dataKey?.[keyArr?.[i]])[0] !== '0') {
      itemObj.children = [];
      reduceProvArr(dataKey?.[keyArr?.[i]], itemObj.children)
    } else {
      itemObj.children = []
      const cDataKey = dataKey?.[keyArr?.[i]]
      for (let j = 0; j < cDataKey.length; j += 1) {
        const cItemObj: ProvinceType = {
          value: cDataKey[j],
          label: cDataKey[j],
        };
        itemObj.children.push(cItemObj)
      }
    }
    tempArr.push(itemObj);
  }
};