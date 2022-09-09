const question1 = document.getElementById("arrow1");
const question2 = document.getElementById("arrow2");
const question3 = document.getElementById("arrow3");
const question4 = document.getElementById("arrow4");
const question5 = document.getElementById("arrow5");

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answer5 = document.getElementById("answer5");

const header1 = document.getElementById("question1");
const header2 = document.getElementById("question2");
const header3 = document.getElementById("question3");
const header4 = document.getElementById("question4");
const header5 = document.getElementById("question5");

let hasBeenClicked = false;

function displayAnswer(arrow, answer, string, hasBeenClicked, title) {
	if (hasBeenClicked === false) {
		arrow.style.transform = "rotate(180deg)";
		title.style.fontWeight = "600";
		answer.textContent = string;
		return hasBeenClicked = true;
	} else {
		arrow.style.transform = "rotate(360deg)";
		title.style.fontWeight = "normal";
		answer.textContent = "";
		return hasBeenClicked = false;
	}
}

question1.addEventListener("click", function() {
	const string = "You can invite up to 2 additional users on the Free plan. There is no limit on team members the Premium plan.";
	hasBeenClicked = displayAnswer(question1, answer1, string, hasBeenClicked, header1);
	//question2.style.transform = question3.style.transform = question4.style.transform = question5.style.transform = "rotate(360deg)";
	//answer2.textContent = answer3.textContent = answer4.textContent = answer5.textContent = "";
})

question2.addEventListener("click", function() {
	const string = "No more than 2GB. All files in your account must fit your allotted storage space.";
	hasBeenClicked = displayAnswer(question2, answer2, string, hasBeenClicked, header2);
	//question1.style.transform = question3.style.transform = question4.style.transform = question5.style.transform = "rotate(360deg)";
	//answer1.textContent = answer3.textContent = answer4.textContent = answer5.textContent = "";
})

question3.addEventListener("click", function() {
	const string = "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.";
	hasBeenClicked = displayAnswer(question3, answer3, string, hasBeenClicked, header3);
	//question1.style.transform = question2.style.transform = question4.style.transform = question5.style.transform = "rotate(360deg)";
	//answer1.textContent = answer2.textContent = answer4.textContent = answer5.textContent = "";
})

question4.addEventListener("click", function() {
	const string = "Yes! Send us a message and we’ll process your request no questions asked.";
	hasBeenClicked = displayAnswer(question4, answer4, string, hasBeenClicked, header4);
	//question1.style.transform = question2.style.transform = question3.style.transform = question5.style.transform = "rotate(360deg)";
	//answer1.textContent = answer2.textContent = answer3.textContent = answer5.textContent = "";
})

question5.addEventListener("click", function() {
	const string = "Chat and email support is available 24/7. Phone lines are open during normal business hours.";
	hasBeenClicked = displayAnswer(question5, answer5, string, hasBeenClicked, header5);
	//question1.style.transform = question2.style.transform = question3.style.transform = question4.style.transform = "rotate(360deg)";
	//answer1.textContent = answer2.textContent = answer3.textContent = answer4.textContent = "";
})