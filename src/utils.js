export const formatNumber = (num) => {
  const reverseNum = num.toString().split('').reverse().join('');
  const formatted = reverseNum.replace(/\d{3}(?=[^$])/g, '$&,');
  return formatted.split('').reverse().join('')
};


