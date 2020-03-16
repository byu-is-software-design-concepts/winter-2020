export const getFibNumber = n => {
  if(n===0)
  {
    f = 0;
  }
  else
  {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
  }
  return f;
}
