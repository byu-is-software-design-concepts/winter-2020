export const scramble = (str1, str2) => {
  var obj1={};
  var obj2={};
  for(var i=0; i<str1.length; i++){
    if(!obj1[str1[i]]){
      obj1[str1[i]]=1;
    }else{
      obj1[str1[i]]++;
    }
  }
  for(var j=0; j<str2.length; j++){
    if(!obj2[str2[j]]){
      obj2[str2[j]]=1;
    }else{
      obj2[str2[j]]++;
    }
  }
  for(var key in obj2){
    if(!obj1[key]||obj1[key]<obj2[key]){
      return false;
    }
  }
  return true;
}
