// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    switch(data.toString().trim()){
        case 'pwd':
        process.stdout.write();
        process.stdout.write('\nprompt > ');//pwd
        break;
        case 'date':
        var date = new Date();
        process.stdout.write(date.toString());
        process.stdout.write('\ndateprompt > ');//print date
        break;

        default:
        var cmd = data.toString().trim(); // remove the newline
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }

  

});