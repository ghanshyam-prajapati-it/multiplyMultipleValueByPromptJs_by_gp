var a = parseInt(prompt("How many value multiply?"));

var b = [];

for (var i=0; i<a; i++)
{
    var b1 = parseInt(prompt("Enter value:"));
    b.push(b1)
}

var t = 1;

for (var i=0; i<a; i++)
{
    t = t * b[i];
}

document.write(" <b> Your Total = " + t)

// alert("Your Total = " + t)