export const getSex = function (sex) {
  switch (sex) {
    case '1':
      return '男';
    case '2':
      return '女';
    default:
      return '隐秘';
  }
};

export const timeFormatter = function (date) {
  let ret = `${date.getFullYear()}-${date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`
  return ret;
}
