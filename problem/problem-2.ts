{

    function removeDuplicates(remove_Duplicate: number[]): number[]{
        let count: number[] = []
        for(let i= 0; i < remove_Duplicate.length; i++){
            if(!count.includes(remove_Duplicate[i])){
            count.push(remove_Duplicate[i])
            }
        }
        return count
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}