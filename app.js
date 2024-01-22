const ptr = prompt("Enter Your Percentage");

    if (ptr < 40) {
        document.write("Sorry, you have failed. Please try again.");
    } else if (ptr >= 40 && ptr < 50) {
        document.write("You have passed. Keep studying!");
    } else if (ptr >= 50 && ptr < 60) {
        document.write("Grade C");
    } else if (ptr >= 60 && ptr < 70) {
        document.write("Grade B");
    } else if (ptr >= 70 && ptr < 80) {
        document.write("Grade A");
    } else if (ptr >= 80 && ptr <= 100) {
        document.write("Grade A+");
    } else {
        document.write("Please input a correct percentage value.");
    }