{}{
    //solve problem-3//

function countWordOccurrences(sentence: string, word: string): number {
    
    let lowercaseSentence = sentence.toLowerCase()
    let lowercaseWord = word.toLowerCase()

   
    let words = lowercaseSentence.split(' ');

    let matchword = words.filter(a => a === lowercaseWord);

  
    return matchword.length;
}

console.log(countWordOccurrences("I love typescript hello typescript", "typescript")); 
}