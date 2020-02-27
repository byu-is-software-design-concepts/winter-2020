camelize = function camelize(str) {
  return str.replace(/\W+(.)/g, function(match, chr)
   {
        return chr.toUpperCase();
    });
}