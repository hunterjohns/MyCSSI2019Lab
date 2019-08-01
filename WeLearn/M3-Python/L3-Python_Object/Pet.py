pet = {
    "name": "Doggo",
    "animal": "dog",
    "species": "labrador",
    "age": 5
}

class Pet(object):
    def __init__(self, name, age, mood):
        self.name = name
        self.age = age
        self.mood = "happy"

    def move(self):
        if self.mood == "happy":
            print("%s is %s, it jumps around" % (self.name, self.mood))
        else:
            print("%s naps" % (self.name))




my_pet = Pet("Fido", 3, "happy")

my_pet.move()

my_pet.mood = "sad"

my_pet.move()
