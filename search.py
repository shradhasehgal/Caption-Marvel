with open("captions.txt") as openfile:
    for line in openfile:
            if "confidence" in line:
                print(line)