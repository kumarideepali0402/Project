import random

# Some sample names and message templates
names = ["Alice", "Bob", "Charlie", "Deepali", "Eve", "Frank", "Grace", "Hannah"]
messages = [
    "Hey, how are you?",
    "Did you complete the assignment?",
    "I'm going to the library.",
    "Let’s catch up later!",
    "Can we meet tomorrow?",
    "What's the plan for tonight?",
    "That project was quite interesting.",
    "Python is such a cool language.",
    "I need help with my code.",
    "Let's start the group discussion now.",
    "This is so confusing!",
    "I'm almost done with my task."
]

with open ("data/chat_history.txt", "w") as file:
    
    for _ in range(500):
        name = random.choice(names)
        msg = random.choice(messages)
        file.write(f"{name} : {msg}\n" )


print("Chat history generated successfully!")