# PasswordChecker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## TASK

Create applications to test password strength.

The essence of the assignment:

1. Create a field for entering a password, under the field add 3 sections which will show the strength of the password;

2. Changes in password strength must take place in real time;

3. How to calculate the strength of a password:
   Only letters/digits/symbols - the password is easy;
   Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
   Has letters, symbols and numbers - the password is strong;

4. The color of the sections will depend on the strength of the password:
   If the field is empty, all sections are gray;
   If the field has less than 8 characters, all sections are red;
   If the password is easy - the first section is red the rest are gray;
   If the password is medium - the first two sections are yellow the last one is gray;
   If the password is strong, all sections are green;
