// Output a prompt
var commands = require('./command');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    var args = data.toString().trim().split(' ');
    //var cmd = data.toString().trim(); // remove the newline
    commands.command(args);
});