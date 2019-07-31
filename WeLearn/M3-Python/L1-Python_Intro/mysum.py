
quit = True

while quit:
    num = int(raw_input("What number should I sum? "))
    def findSum(x):
        for i in range(x):
            x += i
        return x
    print(str(findSum(num)))
