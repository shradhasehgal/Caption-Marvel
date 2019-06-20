dict = {"confidence", "words", "pretty","trees"}

with open("captions.txt") as openfile:
    y = 1
    for word in dict:
        if y==0:
            break
        for line in openfile:
                if word in line:
                    print(line)
                    y = input()