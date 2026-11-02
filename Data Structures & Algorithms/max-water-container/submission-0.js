class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // like two pointer 
        // left and right
        // to calculate max amount
        // min(left,right) value * right - left

        let n = heights.length
        let maxArea =0;
        let left =0;
        let right = n-1;

        while(left < right){
            let height = Math.min(heights[left],heights[right]);
            let width = right - left;
            let tempArea = height * width;

            if(tempArea > maxArea){
                maxArea = tempArea;
                if(heights[left] < heights[right]){
                    left++;
                }else if(heights[left] > heights[right]){
                    right--;
                }else{
                    right--;
                }
            }else{
                if(heights[left] < heights[right]){
                    left++;
                }else if(heights[left] > heights[right]){
                    right--;
                }else{
                    right--;
                }
            }
        }
        return maxArea;
        
    }
}
