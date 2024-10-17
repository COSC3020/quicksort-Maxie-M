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
- In this specific implementation, the worst case is occurring when the array is reversed in its order 
- There is unbalanced partitions, this is due to the pivot always being the first element (low) 
- Every element need to be checked and possibly swapped, making the partitioning take $O(n)$ time. 
- The while loop will iterate $O(n)$ times due to the partitions being unbalanced 
- The Total Worst-Case Time Complexity: $\Theta(n^2)$
  
**Average Case:** 
- In this specific implementation, the average case, where the pivot will divide the array into roughly equal parts at each step
- The time taken per level is $O(n)$, this is due to partitioning occurring at each level 
- The Total Average-Case Time Complexity: $\Theta(n\log n)$
  
**Overall:**
- Worst Case: $\Theta(n^2)$
- Average Case: $\Theta(n\log n)$

## Plagiarism Statement: 
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Resources:
**Repositories: used as reference in order to better understand exercise** 
- quicksort-IshitaPatel18
- quicksort-egkallas

