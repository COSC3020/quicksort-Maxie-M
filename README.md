# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Runtime Analysis, Maxie M.

**Worst Case Scenario:** 
- In this implementation, the worst case will occur when the pivot is selected is consistently disproportional (too small or large) in the array 
- Leading to unbalanced partitions, where one side has all elements except one 
- Almost the entire array is processed when the recursive partition is called 
- At each level, the while loop will iterate O(n) times, this is due to the near-complete partitioning on every level 
- **$\text{Total Worst-Case Time Complexity}$** $= \Theta(n^2)$ 
  
**Average Case:** 
- In this implementation, the average case will occur when the pivot divides the array into roughly equal parts 
- Leading to balanced partitions, where there will be a reduction of the depth of recursion to $O(\log n)$
- Due to the partitioning process comparing every element the time taken per level is $O(n)$
- **$\text{Total Average-Case Time Complexity}$**  $= \Theta(n \log n)$ 

  
**Overall:**
- **Worst Case**: $\Theta(n^2)$
- **Average Case**: $\Theta(n\log n)$

## Plagiarism Statement: 
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Resources:
**Repositories: used as reference in order to better understand exercise** 
- quicksort-IshitaPatel18
- quicksort-egkallas

## Differences Between My Repository and The Two Repositories Referenced: 
**Pivot Selection** 
- **My Repository**: Uses the median of the current subarray, by taking middle element of the range  
- **IshitaPatel18’s Repository**: Selects first element of the subarray, leads to suboptimal pivot choices in sorted arrays
- **egakllas’s Repository**: Uses fixed position, specifically the first element in the range, also results in suboptimal pivot choices in sorted array 

**Stack Structure**
- **My Repository**: Uses tuples [low, high] to represent subarray boundaries and directly pushes them onto the stack
- **IshitaPatel18’s Repository**: Uses a top variable to manually track the stack pointer
- **egakllas’s Repository**: Also directly manipulates the stack, although they push individual indices

**Partitioning Process:** 
- **My Repository**: The pivot element moves to the end before the comparisons and swaps are performed, then it will place it back into its correct position after partitioning. Also including rearranging elements by comparing them to the pivot which is located at the end
- **IshitaPatel18’s Repository**: The pivot remains fixed at the start of the subarray, and the comparisons are directly made with this pivot
- **egakllas’s Repository**: Pivot remains in place, with the comparisons occurring directly. Not moving the pivot to the end during partitioning 

**Flow and Logic**
- **My Repository**: Contains early exits for small subarrays and utilizes streamlined process in order to manage the stack and partitioning, als avoiding redundancy in operations 
- **IshitaPatel18’s Repository**: Uses extra steps such as manually adjusting stack pointer with top variable
- **egakllas’s Repository**: Fellows standard iterative approach, lacking early exits and efficiency optimization 

