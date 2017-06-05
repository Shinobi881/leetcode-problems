var shortestDistance = function(words, word1, word2) {
    const newMap = {};
    let shortestPath;
    
    const newMap = words.reduce((map, word, index) => {
      map[word] = (map[word] || []).concat(index);
      
      return map;
    }, {});
    
    // words.forEach((word, index) => {
    //    if (newMap[word]) {
    //        let temp = newMap[word]
    //        newMap[word].push(index);
    //    }
    //    
    //    if (!newMap[word]) {
    //        newMap[word] = [index]
    //    }
    // });
    
    
    newMap[word1].forEach(word1Index => {
        newMap[word2].forEach(word2Index => {
            const currPath = Math.abs(word1Index - word2Index);
            
            if (!shortestPath) shortestPath = currPath;
            
            if (currPath < shortestPath) shortestPath = currPath;
        });
    });
    
    return shortestPath;
};