const repeatString = function( string, num ) {
    let reply = "";
    if ( num < 0 )
    {
        return 'ERROR';
    }
    for(let i = 0; i < num; i++)
    {
        reply += string;
    }
    return reply;
};

// Do not edit below this line
module.exports = repeatString;
