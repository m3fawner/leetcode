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
## [add two numbers](https://leetcode.com/problems/add-two-numbers/)  
**Date completed:** December 16, 2021  
**Runtime:** better than 83.2% of other JS submissions  
**Memory:** better than 64.71% of other JS submissions  
## [consecutive characters](https://leetcode.com/problems/consecutive-characters/)  
**Date completed:** December 13, 2021**Runtime:** better than 94.81% of other JS submissions  
**Memory:** better than 51.76% of other JS submissions  
## [integer to english words](https://leetcode.com/problems/integer-to-english-words/)  
**Date completed:** August 26, 2019**Runtime:** better than 97.92% of other JS submissions  
**Memory:** better than 100% of other JS submissions  
## [merge two sorted arrays](https://leetcode.com/problems/merge-two-sorted-lists/)  
**Date completed:** December 10, 2021**Runtime:** better than 67.79% of other JS submissions  
**Memory:** better than 49.38% of other JS submissions  
