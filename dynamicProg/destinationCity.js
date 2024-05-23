function destinationCity (paths) {
    const outgoingPaths = new Set();
    const incomingPaths = new Set();

    for (let [a, b] of paths){
        outgoingPaths.add(a)
        incomingPaths.add(b)
    }

    for (const city of incomingPaths){
        if (!outgoingPaths.has(city)){
            console.log("destination city is:", city);
        }
    }
}

destinationCity([["cityA", "cityB"], ["cityB", "cityC"], ["cityC", "cityD"]])