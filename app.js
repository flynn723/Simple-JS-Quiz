//Create Questions
var questions = [
    new Question("In the children's book series, where is Paddington Bear originally from?", [ "India", "Peru", "Canada", "Iceland" ], "Peru"),
    new Question("What letter must appear at the beginning of the registration number of all non-military aircraft in the U.S.?", ["N","A", "U", "L"], "N"),
    new Question("Who delivered the less famous two-hour speech that preceded Abraham Lincoln's two-minute Gettysburg Address?", ["Wendell Phillips","Daniel Webster", "Robert G. Ingersoll", "Edward Everett"], "Edward Everett"),
    new Question("\"Nephelococcygia\" is the practice of doing what?", ["Finding shapes in clouds","Sleeping with your eyes open", "Breaking glass with your voice", "Swimming in freezing water"], "Finding shapes in clouds"),
    new Question("Which insect shorted out an early supercomputer and inspired the term \"computer bug\"?", ["Moth","Roach", "Fly", "Japanese Beetler"], "Moth"),
    new Question("Which of the following men does not have a chemical element named for him?", ["Albert Einstein","Niels Bohr", "Isaac Newton", "Enrico Fermi"], "Isaac Newton"),
    new Question("Which of these ships was not one of the three taken over by colonists during the Boston Tea Party?", ["Eleanor","Dartmouth", "Beaver", "William"], "Beaver"),
    new Question("Now used to refer to a cat, the word \"tabby\" is derived from the name of a district of what world capital?", ["Baghdad","New Delhi", "Cairo", "Moscow"], "Baghdad"),
    new Question("Which First Lady was a ninth-generation descendant of Pocahontas?", ["Helen Taft","Edith Wilson", "Bess Truman", "Mamie Eisenhower"], "Edith Wilson"),
    new Question("For ordering his favorite beverages on demand, LBJ had four buttons installed in the Oval Office labeled \"coffee,\" \"tea,\" \"Coke,\" and what?", ["Fresca","V8", "Yoo-hoo", "A&W"], "Fresca"),
    new Question("Khrushchev's famous 1960 \"shoe-banging\" outburst at the U.N. was in response to a delegate from what nation?", ["Australia","The Netherlands", "The Phillippines", "Turkey"], "The Phillippines"),
    new Question("The most-watched TV episode of all time, the final episode of M*A*S*H aired at 8:30 p.m. on February 28, 1983, following what sitcom?", ["Private Benjamin","Square Pegs", "Alice", "Newhart"], "Alice"),
    new Question("Which of the following landlocked countries is entirely contained within another country?", ["Lesotho","Burkina Faso", "Mongolia", "Luxembourg"], "Lesotho"),
    new Question("Who did artist Grant Wood use as the model for the farmer in his classic painting \"American Gothic\"?", ["Traveling Salesman","Local sheriff", "His Dentist", "His Butcher"], "His Dentist"),
    new Question("Which of these U.S. presidents appeared on the television series Laugh-In?", ["Lyndon Johnson","Richard Nixon", "Jimmy Carter", "Gerald Ford"], "Richard Nixon"),
    new Question("Which of these U.S. presidents appeared on the television series Laugh-In?", ["Lyndon Johnson","Richard Nixon", "Jimmy Carter", "Gerald Ford"], "Richard Nixon")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();