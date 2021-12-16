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

Each commit will execute jest code coverage to produce the coverage tags at the top of the README (asserting that your unit tests have enough code coverage to execute each line used for the submission). Additionally, it will then produce a new README highlighting your solutions!
