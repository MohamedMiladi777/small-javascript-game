/**
 * 1-Plan For step 2 :
 * Input:Nothing for now  ; output:
 */

/**
 * PseudoCode:
 *  func getComputerChoice
 *  create a var that gets a random value from 1 to 3
 *  if 1 => rock, if 2 => scissors, if 3 => rock
 * return "rock" or "paper"or "scissor"
 */
console.log("Js");

function getComputerChoice() {
  //Gets 3 numbers, the +1 is  because the last number is exclusive
  const randomizer = Math.random() * 3 + 1;

  console.log("randomier : ", Math.floor(randomizer));
  switch (Math.floor(randomizer)) {
    case 1:
      return "rock";
    case 2:
      return "scissor";
    case 3:
      return "paper";
  }
}
