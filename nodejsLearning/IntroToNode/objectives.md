#Intro to Node

- What is node?
- Why are we learning it?
    - It's popilar!
    - Javascript!!!

# Using Node

- Interact with Node console
- Run a file with node

# Node Exercise

- Using the command line, create a file "echo.js"
- Inside the file, write a function named echo that takes 2 arguments: a string and a number
- It should print out the string, number number of time.

`` echo("Echo!!!",10) //should print "Echo!!!" 10 times.
   echo("Tater Tots", 3) // should print "Tater Tots" 3 times
``

- Add the above 2 example to the end of your file
- Lastly, run the contents of "echo.js" using node

# Node Exercise 2
## AVERAGE GRADE

- create a new file, 'grader.js'
- In the file define a new function named 'average'
- It should take a single parameter: an array of test scores(all numbers)
- It should return the average score in the array, rounded to the nearest whole number

`` 
var scores = [90,89,98,100,100,86,94]
average(scores); //should return 94

var scores2 = [40,65,77,82,80,54,73,63,95,49]
average(scores2); //should return 68
