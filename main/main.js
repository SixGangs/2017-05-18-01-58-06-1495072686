module.exports = function main(s) {
  // Write your cade here
  var sum = 0;
  for(i = 0; i < s.length;i++)
  {
  	ss = s.charAt(i);
  	k = parseInt(ss);
  	sum = sum + k;
  }
  return sum;
};
