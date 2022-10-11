
/* Requirements: 
Build it from scratch
Follow the design
Make all six buttons work

Optional: 
Add a "new game" button
highlight the leader
add a few more counters ie. period, fouls
Change the design
*/

let homePoints = 0
let guestPoints = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function homeOne() {
    homeScore.textContent = homePoints += 1
}

function guestOne() {
    guestScore.textContent = guestPoints +=1
}

function homeTwo() {
    homeScore.textContent = homePoints += 2
}

function guestTwo() {
    guestScore.textContent = guestPoints += 2
}

function homeThree() {
    homeScore.textContent = homePoints += 3
}

function guestThree() {
    guestScore.textContent = guestPoints += 3
}

