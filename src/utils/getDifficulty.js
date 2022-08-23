export function getDifficulty(steps) {
  if (steps.length > 9) {
    return "HARD";
  }
  
  else if (steps.length > 4) {
    return "MEDIUM";
  }
  
  else {
    return "EASY";
  }
}
