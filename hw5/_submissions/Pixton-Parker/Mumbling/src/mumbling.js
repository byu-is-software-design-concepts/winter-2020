export const createMumble = str => {
  let str_list = []
  let main_str = ""

  let i2 = 1
  for (let i = 0; i < str.length; i++)
  {
    let myChar = str.substring(i,i2)
    str_list.push(myChar)
    i2 = i2 + 1
  }

  for (let i = 0; i < str_list.length; i++)
  {
    let firstL = str_list[i].toUpperCase()
    main_str = main_str + firstL
    for (let i2 =0; i2 < i; i2++)
    {
      let nextL = str_list[i].toLowerCase()
      main_str = main_str + nextL
    }

    if (i < ((str_list.length) - 1))
    {
      main_str = main_str + "-"
    }

  }

  return main_str
}
