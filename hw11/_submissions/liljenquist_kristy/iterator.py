# fibonacci sequence iterator - follwed tutorial implementing this design pattern that explained each part.

import time

def fib():
    a, b = 0, 1
    while True:
        yield b
        a, b = b, a + b

numbers = fib()

try:
    for num in numbers:
        print(num)
        time.sleep(0.5)

except KeyboardInterrupt:
    print("Sequence Stopped")

