# Dice Generator Enhancement (DiceGenEnhanced branch):

### US1: As a user, I want to be able to easily understand the webpage of the Dice generator:
Use the semantic elements to organize your page. You can add as much as possible (Footer, etc). But, I want to see at least this design (check attached screenshot US1)
### US2: As a user, I want to be able to see on my webpage the type of dice I am using.
A dice is composed of many characteristics: number of sides, color, size (small, medium, big), usage (for example for a DnD game: combat, decision, exploration).
Use a json object to describe a dice and print that into a new section of the page.
Knowing that D6 is the 6-sides dice and D10 is the 10 one, when I choose D6, I should see the info of D6 inside a section of the page and when I choose the D10, D6's info should be replaced by D10.
(check attached screenshot US1)
### US3: As a user, I am to see on my page the 3 types of different dice that I can use.
Each dice is presented in a small box and when we hover the cursor on one box, it changes its background color with the one corresponding to the dice. ie: if I hover the cursor on the box of the combat dice, my box should become red, and same for the other ones.
The dice boxes are lined up in a row. A red bg color for the combat dice. A green for the decision making dice and a blue one for exploration dice.
You can use flexbox to display in a row the dice characteristics.
You can make up the characteristics of each dice. For example:
Red dice as a usage of combat,
Green dice has the usage of decision, and blue dice has usage of exploration.
Red dice has 20 sides, etc.
(Check attached screenshot US2)
### US4: As a user, I want to be able to change my dice during a game. I should have a button for each type of dice I have and be able to change and use it.
Add a button in each dice box. When a user clicks on it, it should display that I'm using that dice (check the work from the US2 and US3). And when I throw the dice, the result should match with the characteristics of my dice. For example, I shouldn't be able to get a 20 from a dice that has 6 sides.
US5: As a user, I want to be able to register has a DnD player through a form.
The form doesn't get you to a specific page. So, just for the sake of the exercise, the action attribute should be set to "#". and the button submit shouldn't do anything.
The form is invisible at first but, if I click on a button, it should appear and I should be able to use it.
There will also be a button to make the form disappear again.
the form could include this fields:
Full Name.
Email address.
Phone Number.
Mailing Address.
Height.
Picture (Don't need to make this part work)
(Check attached screenshot US3)
### US6 (optional): As a user, I want to see in a table, the number of times, I draw a specific number with the dice so I can display an average.
Display in a table (or CSS grid), the number of time a specific value is drawn by the player.
For example, each time you roll a 1 with the dice, this is added and display in a table. Only do it for a 6 sides dice. Do not do it for more than 6.
I should see a new section of the page with a table showing me the number of times I've drawn each number from 1 till 6. and then, try to calculate the average of each value and put it in the same table.