/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
  this.newMap = words.reduce((map, word, i) => {
        map[word] = (map[word] || []).concat(i);
       
       return map;
    }, {});
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let shortestPath;
    
    this.newMap[word1].forEach(word1Index => {
        this.newMap[word2].forEach(word2Index => {
            const currPath = Math.abs(word1Index - word2Index);
            
            if (!shortestPath) shortestPath = currPath;
            
            if (currPath < shortestPath) shortestPath = currPath;
        });
    });
    
    return shortestPath;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = Object.create(WordDistance).createNew(words)
 * var param_1 = obj.shortest(word1,word2)
 */