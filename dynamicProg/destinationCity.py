# Given an array name paths where paths [i] = [cityAi, cityBi] means 
# there is a direct path from cityAi to cityBi. 
# Return the destination city. that is, the city without any path outgoing to another city.

# 1. Save cities that have outgoing paths into a set (call it outgoingPaths)
# 2. Save cities that have incoming paths into a set (call it incomingPaths)

# The destination city is the city which is in the incomingPaths but absent in the outgoing cities

def DestinationCity(paths: list[list[str]]) -> str:
    outgoingPaths = set()
    incomingPaths = set()

    # print("the paths are:",paths)

    for a,b in paths:
        # print(b)
        outgoingPaths.add(a)
        incomingPaths.add(b)

    
    for city in incomingPaths:
        if city not in outgoingPaths:
            print("destination city is:",city)
            return city
    # or 
    # return [b for b in incomingPaths if b not in outgoingPaths ][0] #list comprehension method


DestinationCity([["cityA", "cityB"], ["cityB", "cityC"], ["cityC", "cityD"]])