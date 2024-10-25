let title = "Madlibs";
alert('Testing script');

/* WORDS BELOW */

// adj //
let var1 = prompt("Enter an adjective.");

// adj //
let var2 = prompt("Enter an adjective.");

// noun //
let var3 = prompt("Enter a plural noun.");

// adj //
let var4 = prompt("Enter an adjective.");

// adj //
let var5 = prompt("Enter an adjective.");

// animal //
let var6 = prompt("Enter an animal.");

// number //
let var7 = prompt("Enter a number.");

// plural noun //
let var8 = prompt("Enter a plural noun.");

// sound //
let var9 = prompt("Enter a sound.");

// emotion //
let var10 = prompt("Enter an emotion.");

// adj //
let var11 = prompt("Enter an adjective.");

// place //
let var12 = prompt("Enter a place.");

// adj //
let var13 = prompt("Enter an adjective.");

// noun //
let var14 = prompt("Enter a noun.");

// noun //
let var15 = prompt("Enter a noun.");

// adj //
let var16 = prompt("Enter an adjective.");

// number //
let var17 = prompt("Enter a number.");

// verb - ing //
let var18 = prompt("Enter a verb ending in -ing.");

// noun //
let var19 = prompt("Enter a noun.");

// number //
let var20 = prompt("Enter a number.");

// plural noun //
let var21 = prompt("Enter a plural noun.");

// adj //
let var22 = prompt("Enter an adjective.");

/* - - - */

let story = `One Halloween night, I decided to go trick-or-treating with my ${var1} friends. We dressed up as ${var2} ${var3} and set off into the ${var4} neighborhood.

As we walked, we saw a ${var5} ${var6} lurking in the bushes. It had ${var7} ${var8} for eyes and made a ${var9} noise. We were so ${var10} that we ran away and found ourselves in front of a ${var11} ${var12}.

Suddenly, a ${var13} ${var14} appeared and said, “You must solve my ${var15} if you want to leave!” We knew we had to be ${var16} and think quickly.

Finally, after ${var17} minutes of ${var18}, we solved the ${var19} and escaped! We went home with ${var20} bags of ${var21} and promised to always remember that ${var22} Halloween night.`;

let OutputDiv = document.getElementById("OutputDiv");

OutputDiv.innerHTML = `<p>${story}</p>`;