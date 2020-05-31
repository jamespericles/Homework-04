<!-- - Create index.html -->
<!-- - Create style.css -->
<!-- - Create script.js -->

- Validate each file upon completion
- Explain the rules to user
  - number of questions
  - wrong answers take time away from timer
    -competing for a high score
- Create functioning start button
  <!-- - upon clicking start, a timer starts -->
    <!-- - Have timer visible and actively counting down -->
  - upon clicking start, user is prompted with first question
  - show user how many total questions in quiz
  - show user their current position in quiz
- After answering a question, user is prompted with the next question
- If users answer is incorrect, they lose time from the timer
- if all quetions are answered, the game ends
- if time runs out, the game ends
- after the game is finished, users are shown their score and asked to save their initials
- allow users to press buttons on the key pad to answer questions besides clicking
<!-- - Have text in buttons be centered -->
- Make answer buttons hidden until user press begin
- Make timer inline with where the questions are
<!-- - Make timer not beign until start is clicked -->

Notes: I expect that the stop propogation from 01-Class-Content/04-Web-APIs/01-Activities/16-Ins_Event_Bubbling will come in handy

In order to remove time from timer as penalty for wrong answer, I may need to have a keypress listen for all the wrong answers at a given time, with the consequence being a loss of time
