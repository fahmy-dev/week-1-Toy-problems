# Week 1 Code Challenges: Toy Problems
This project contains challenges, in Javascript, completed for Week 1 of Phase 1 - Software Engineering at Moringa School.

## How to Access it
1. Open your Terminal and clone this repository
- `git clone https://github.com/fahmy-dev/week-1-Toy-problems.git`

2. Move into the directory
- `cd week-1-Toy-problems`

3. Open it in VSCode
- `code .`

## The Files
You should see 4 files; 3 .js files and this readme. The challenges are named one after the other, in chronological order.<br> 
challenge1.js, challenge2.js, and challenge3.js
  
- **Challenge 1** - A calculator used to assign a grade to the inputted marks based on a scale from A to E 

- **Challenge 2** - A speed detector that checks the speed of a vehicle, and penalises them for every 5 Km/h above 80 Km/h  

- **Challenge 3** - A net salary calculator that calculates your salary based on the inputted salary by making the necessary deductions (once again, according to specific criteria)

## How to Run them
* Challenge 1 (Grade Calculator):

  - In line 20, `console.log(calcGrade(20));` replace where there is 20 with your mark 
  
  - Open your VsCode Terminal (Control + shift + \` or Terminal > New Terminal) and type;  
  `node challenge1.js` 
  
  - It should output your grade; in this example, it will output `E`

* Challenge 2 (Speed Detector):

  - In line 22, `carSpeed(125);` replace where there is 125 with the speed you want to check
  
  - Open your terminal and type `node challenge2.js`
  
  - If your speed is below 80, it will output `Ok`, above 80 for every 5 Km/h it will output:  
  `${points} demerit points, slow down!`  
    
    where `${points}` is the number of points you have accumulated
  
  - More than 12 points accumulated, it will output `License Suspended`  
   In this example, it will output `9 demerit points, slow down!`

* Challenge 3 (Net Salary Calculator):
  - In line 135:  
  
    ```console.log(`Your net salary is Ksh`, netSalaryCalculator(1111000, 5000, "2024-02-10", "yearly"));```  
    
    replace each of the 3 arguments in this order: `(Salary, benefits, "Date", "monthly/yearly")` 
    with its actual values such as in the example above
  - Open your Terminal and type `node challenge3.js`
  - It will calculate your taxable pay, make necessary deductions and print out your net salary  
  - In this example, it will output `Your net salary is Ksh 772500`


## License
I don't have a license tbf. If you decide to steal this, remember God's watching you.
