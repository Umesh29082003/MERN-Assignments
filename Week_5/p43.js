function check(x, y, z) {
    var a=x%10
    var b=y%10
    var c=z%10
    return a==b || b==c || c==a 
}
  console.log(check(10,20,30));
  console.log(check(10,8,9));
  console.log(check(10,9,8)); 
  