const getSex = function(sex) {
  switch (sex) {
  case '1': 
    return '男';
  case '2':
    return '女';
  default:
    return '隐秘';
  }    
};

export default {
  getSex
};