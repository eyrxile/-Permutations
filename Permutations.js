var permute = function(nums) {
    const result = [];

    function backtrack(current, remaining) {
        if(remaining.length === 0) {
            result.push([...current]);
        } else {
            for(let i = 0; i < remaining.length; i++){
                const num = remaining[i];
                current.push(num);
                remaining.splice(i, 1);

                backtrack(current, remaining);

                current.pop();
                remaining.splice(i, 0, num);
            }
        }
    }
    backtrack([], nums);
    return result;
};

//Example usage:
console.log(permute([1,2,3]));
console.log(permute([0,1]));
console.log(permute([1]));