word = raw_input("In: ")

if word[-3:] == "ife":
    word = word[:-3]
    print("Pluralized: %sives " % (word))
elif word[-2:] == "sh":
    word = word[:-2]
    print("Pluralized: %sshes " % (word))
elif word[-2:] == "ch":
    word = word[:-2]
    print("Pluralized: %sches " % (word))
elif word[-2:] == "us":
    word = word[:-2]
    print("Pluralized: %si " % (word))
elif word[-2:] == "ay":
    word = word[:-2]
    print("Pluralized: %says " % (word))
elif word[-2:] == "oy":
    word = word[:-2]
    print("Pluralized: %soys " % (word))
elif word[-2:] == "ey":
    word = word[:-2]
    print("Pluralized: %seys " % (word))
elif word[-2:] == "uy":
    word = word[:-2]
    print("Pluralized: %suys " % (word))
elif word[-1:] == "y":
    word = word[:-1]
    print("Pluralized: %sies " % (word))
else:
    print("Pluralized: %ss " % (word))
