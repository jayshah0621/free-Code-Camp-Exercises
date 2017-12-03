// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str.replace( /([a-z])([A-Z])|(_|\s)/g , "$1-$2" ).toLowerCase();
}

var spinalCaseStr = spinalCase('This Is Spinal Tap');

console.log( spinalCaseStr );

// Output
// this-is-spinal-tap

// spinalCase("The_Andy_Griffith_Show")
// the-andy-griffith-show
