class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // loop 2 arrays
        // cal container 
        // height (height[j],height[i])
        //width j-i
        // container = width * height
        // how to iterate ?
        // increase the side with the lowest one bcs we want to get max, get rid the small one
        // what if the height same ? increase both side
        let n = heights.length
        let max =0;
        let i = 0;
        let j = n-1
                
                while(i < j){
                let height = Math.min(heights[i],heights[j]);
                                let width = j - i;

                                let container = height * width;

                                if(container > max){
                                    max = container;

                                    if(heights[j] > heights[i]){
                                        i++;
                                    }else if(heights[j] < heights[i]){
                                        j--;
                                    }else{
                                        i++;
                                        j--;
                                    }
                                }else{
                                    if(heights[j] > heights[i]){
                                        i++;
                                    }else if(heights[j] < heights[i]){
                                        j--;
                                    }else{
                                        i++;
                                        j--;
                                    }
                                }
                }
        return max;
        
    }
}
