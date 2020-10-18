Test implemention is in Angular 9.

To run this test -

1. Need to install Node.js version 10.9.0
   Please download it from https://nodejs.org/en/
2. Use npm to Install Angular CLI
   npm install -g @angular/cli  
   To check Node and Angular CLI version, use ng --version command once installation is done.
3. Once clone the project from git repository, from the terminal go to Test folder(Which will have package.json file)
   Run npm install - It will install all the packages required for running project
4. Once all packages are installed, run command ng serve -o, it will compile the code and open application 
   in chrome automatically.

5. You will see list of customers we are going to invite who are within 100km of our Dublin office 


**About Implementation

Customer list - assets/customers.json

Component - customer 
small UI and basic logic is inside customer component

Service - distance-calc.service.ts
Few common functions are in service

Filter for sorting with user_id  - orderBy.pipe.ts
To Sort list by user_id, created Angular Pipe

