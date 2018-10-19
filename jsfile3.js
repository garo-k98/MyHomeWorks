for (var line ="#"; line.length <= 7; line += "#")
console.log(line);

var i, j;

for (i = 1; i <= 8; i++)
{
    for (j = 1; j <=8; j++)
    {
        document.write('*');
    }
    document.write('<br/>');
}

for (var i = 1; i <= 100; i++)
 {
    var number = '';
    if (i%3 === 0) number += 'fizz';
    if (i%5 === 0) number += 'buzz';
    console.log(number + ' ' + i || i);
  }