"Rock, Paper, Scissors" Game - User Vs the computer ---> the first to arrive to 10 points will win the game.
Computer choose randomly and user choose by click on the figure of the Rock, Paper, Scissors.
the score updated and the game over until user or computer wins by arriving to 10 points.
Then, should press play again to do a rematch.










































comment:
const computerChoise = {
    const choises = ["rock","scissors","paper"]
    const randomState = Math.trunc(Math.random()*choises.length);
    return choises [randomState]
    }