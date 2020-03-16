export const getFibNumber = steps => {
    let arr = [0, 1]
    if (steps !== 0)
    {
        for (let i = 1; i < steps; i++)
        {
            let newnum = arr[i] + arr[i - 1]
            arr.push(newnum)
        }
    }
  return arr[steps]
}
