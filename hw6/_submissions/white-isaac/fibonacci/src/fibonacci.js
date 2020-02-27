export const getFibNumber = steps => {
    let fib_number = 0;
    let prev_num = 0;
    let curr_num = 1;
    for (let i = 1; i < steps; i += 1) {
        fib_number = prev_num + curr_num;
        prev_num = curr_num;
        curr_num = fib_number;
    }
    return fib_number
}
