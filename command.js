var fs = require('fs');
var readline = require('readline');

module.exports = {

    pwd: function() {    
        process.stdout.write(process.env.PWD);
        process.stdout.write('\nprompt > ');
    },

    date: function(){
        process.stdout.write(Date());
        process.stdout.write('\ndateprompt > ');//print date
    },

    echo: function(args){
        let output = args.slice(1).join(' ');
        process.stdout.write(output);
        process.stdout.write('\ndateprompt > ');
    },

    ls: function(){

        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });

       // process.stdout.write('You typed: ' + cmd);
        //process.stdout.write('\nprompt > ');
    },

    cat: function(args){
        args = args.slice(1);
        args.forEach(function(ele){
                fs.readFile('./'+ele,"utf8", (err,data) => {
                    if(err) {
                        throw err;
                    }
                    process.stdout.write(data)
                })
            }
        )  
        setTimeout( () => {process.stdout.write('\nprompt > ')},500); //only works if forEach takes less than 500ms!
    },

    head: function(args){
        let numlines = 5;
        let lineArr = [];
        args = args.slice(1);
        args.forEach(function(ele){
                fs.readFile('./'+ele,"utf8", (err,data) => {
                    if(err) {
                        throw err;
                    }
                    process.stdout.write(data.split('\n').slice(0,numlines).join('\n'));
                })
            }
        )
        setTimeout( () => {process.stdout.write('\nprompt > ')},500); //only works if forEach takes less than 500ms!
    },

    default: function(args){
        //console.log(args[0]);
        process.stdout.write('You typed: ' + args.join(' '));
        process.stdout.write('\nprompt > ');
    },




    command: function(args){
        if(this[args[0]]) this[args[0]](args); //why use brackets and not this.comm
        else this.default(args);
    }
}
