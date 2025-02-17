function check(m,f)
  {
  if (f) {
    return m >= 90
  }
 return m >= 89 && m <= 100
 }

console.log(check("89", ""));
console.log(check("89", true));
console.log(check("95", true));