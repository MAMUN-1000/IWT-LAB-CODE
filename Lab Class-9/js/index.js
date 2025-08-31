var a = 10;
var a = 15; // Re-declaring with var is allowed
document.writeln("Value of a: " + a + "<br>");
let b = 150;
let c = "HelloWorld";
let v = 48.912;
document.writeln("Type of b: " + typeof(b) + "<br>");
document.writeln("Type of c: " + typeof(c) + "<br>");
document.writeln("Type of v: " + typeof(v) + "<br>");
let s = b.toString();
document.writeln("b as string: " + s + "<br>");
let x = "50.78";
let y = 49.4567
x = parseFloat(x);
document.writeln("x as number: " + x + "<br>");
document.writeln("Type of x: " + typeof(x) + "<br>");
document.writeln("Invalid Number conversion: " + Number("XYZ") + "<br>");
document.writeln("Valid Number conversion: " + Number("67.89") + "<br>");
document.writeln("y toFixed(2): " + y.toFixed(3) + "<br>");
document.writeln("y toPrecision(4): " + y.toPrecision(4) + "<br>");
let studFirstName, studLastName;
studFirstName = prompt("Enter your First Name");
studLastName = prompt("Enter your Last Name");
document.writeln("<p style='color:blue;'>Hello, " + studFirstName + " " + studLastName + "!</p>");





