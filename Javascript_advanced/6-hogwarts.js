// Define the studentHogwarts module
const studentHogwarts = (function () {
    // Private variables
    let privateScore = 0;
    let name = null;
  
    // Private method to change the score
    function changeScoreBy(points) {
      privateScore += points;
    }
  
    // Public methods accessible through the returned object
    return {
      // Public method to set the name
      setName(newName) {
        name = newName;
      },
      // Public method to reward the student
      rewardStudent() {
        changeScoreBy(1);
      },
      // Public method to penalize the student
      penalizeStudent() {
        changeScoreBy(-1);
      },
      // Public method to get the score as "name: score"
      getScore() {
        return `${name}: ${privateScore}`;
      },
    };
  })();
  
  // Create an instance of studentHogwarts named harry
  const harry = Object.create(studentHogwarts);
  harry.setName("Harry"); // Set the name to Harry
  harry.rewardStudent(); // Reward the student four times
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  
  // Log the name and score for Harry
  console.log(harry.getScore());
  
  // Create another instance of studentHogwarts named draco
  const draco = Object.create(studentHogwarts);
  draco.setName("Draco"); // Set the name to Draco
  draco.rewardStudent(); // Reward the student one time
  draco.penalizeStudent(); // Penalize the student three times
  
  // Log the name and score for Draco
  console.log(draco.getScore());
  