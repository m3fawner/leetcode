![Code coverage: lines](https://img.shields.io/badge/lines-100%25-brightgreen?logo=jest "lines") ![Code coverage: statements](https://img.shields.io/badge/statements-100%25-brightgreen?logo=jest "statements") ![Code coverage: functions](https://img.shields.io/badge/functions-100%25-brightgreen?logo=jest "functions") ![Code coverage: branches](https://img.shields.io/badge/branches-100%25-brightgreen?logo=jest "branches")   
# Evan's leetcode Project

I got tired of waiting for re-runs for simple things like debugging so I built a project to be able to do leetcode problems in a quicker fashion.

Plus, this way I can own the source and build a project around it!

# README...README?

This readme is automatically generated from the problems directory. The runtime & memory usage is assigned onto the function exported in the index.js, and is used to produce the problem name & runtime/memory values you see in the readme. This markdown? Joined via the produceReadme.js file. READMEception.

# Using it for yourself!

If you clone this repo and simply delete out the directories under `problems` then you should be able to produce this status report from scratch!

For each problem, create a new directory that joins the problem by hyphens. These will be used to produce the title of each problem.

Export the function from `index.js`, in that directory, used for the problem, and assign the following properties to that function:

| Property | Description |
| -------- | ----------- |
| problemURL | The leetcode problem URL |
| runtime    | The %, expressed as a number, of submissions you ran faster than |
| memory     | The %, expressed as a number, of submission in which you had better memory allocation |
| dateCompleted | The date completed as a date object |

Each commit will execute jest code coverage to produce the coverage tags at the top of the README (asserting that your unit tests have enough code coverage to execute each line used for the submission). Additionally, it will then produce a new README highlighting your solutions!
  
# Problems  
## Completed  
| Problem | Date completed | Runtime (% faster than others) | Memory (% less than others) |
| ------- | -------------- | ------------------------------ | --------------------------- |
| [reorder list](https://leetcode.com/problems/reorder-list/) | December 23, 2021 | 90.38 | 70.63 |
| [decode string](https://leetcode.com/problems/decode-string/) | December 23, 2021 | 69.04 | 51.68 |
| [range sum of bst](https://leetcode.com/problems/range-sum-of-bst/) | December 23, 2021 | 63.65 | 86.62 |
| [letter combinations of a phone number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | December 22, 2021 | 71.78 | 24.63 |
| [minimum absolute difference](https://leetcode.com/problems/minimum-absolute-difference/) | December 20, 2021 | 70.76 | 54.66 |
| [remove nth node from end of list](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | December 20, 2021 | 62.66 | 69.86 |
| [add two numbers](https://leetcode.com/problems/add-two-numbers/) | December 16, 2021 | 83.2 | 64.71 |
| [string to integer atoi](https://leetcode.com/problems/string-to-integer-atoi/) | December 16, 2021 | 24.59 | 51.44 |
| [consecutive characters](https://leetcode.com/problems/consecutive-characters/) | December 13, 2021 | 94.81 | 51.76 |
| [merge two sorted arrays](https://leetcode.com/problems/merge-two-sorted-lists/) | December 10, 2021 | 67.79 | 49.38 |
| [integer to english words](https://leetcode.com/problems/integer-to-english-words/) | August 26, 2019 | 97.92 | 100 |
| [valid parenthesis](https://leetcode.com/problems/valid-parentheses/) | August 20, 2019 | 100 | 100 |
| [first missing positive](https://leetcode.com/problems/first-missing-positive/) | August 20, 2019 | 100 | 100 |
| [minimum number of arrows to burst balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | May 9, 2019 | 38.55 | 38.55 |
| [longest common prefix](https://leetcode.com/problems/longest-common-prefix/) | June 8, 2018 | 99.96 | 90.59 |
| [reverse integer](https://leetcode.com/problems/reverse-integer/) | June 5, 2018 | 99.62 | 72.32 |
| [longest substring without repeating chars](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | June 4, 2018 | 89.4 | 41.25 |
| [longest palindromic substring](https://leetcode.com/problems/longest-palindromic-substring/) | June 4, 2018 | 30.81 | 45.49 |
| [subsets](https://leetcode.com/problems/subsets/) | June 3, 2018 | 99.88 | 16.2 |
| [set mismatch](https://leetcode.com/problems/set-mismatch/) | June 3, 2018 | 50 | 38.29 |
  
## Incomplete  
[regular expression matching]()  
