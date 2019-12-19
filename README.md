# Bank (Tech Test)

## Info
This a bank account program, ran through the console on a browser.

## Setting up machine
Make sure you have node downloaded on your machine, and install the dependencies:
jasmine-node, istanbul, eslint

In the package.json file, scripts should look like this:
```
"scripts": {
  "test": "jasmine-node spec",
  "coverage": "istanbul cover jasmine-node spec",
  "show-coverage": "open coverage/lcov-report/index.html"
},
```

From the command line,
To see the tests evaluated and test coverage, npm run coverage

To see if the code has any mistakes,
npx eslint src/Bank.js


Open the index file by typing
open index.html

All code is through the dev tool console.

## Instructions
This is a bank account program.
Create a new bank with var newBank = new Bank(). Your balance starts with 0.
Credit the bank with newBank.credit(amount-to-top-up).
Debit the bank with newBank.debit(amount-to-spend).
You can see the bank statement by typing newBank.statementShow().

## Approach
To begin, I looked at the acceptance criteria and instructions to get a good understanding of what i needed to do. I started with a feature test to simply return the header of text when 'statement' was called without making credit or debits. This then lead me to create unit tests to solve this feature test. I would repeat this process until I felt comfortable I have given the Project Owner exactly what they asked for. Adding tests, and trying to make them pass as simply as i could.

## Structure
I used the prototype structure for the Bank function, this meant it was easy to add on functions for each test. Any repeated code was extracted and placed into a new function which I then called.

## Pictures of program
![Alt text](/img/bankProgram.png?raw=true)
