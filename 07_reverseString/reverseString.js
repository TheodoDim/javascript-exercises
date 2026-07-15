const reverseString = function(input_string) {
    let reply_string;
    reply_string = input_string.split('').reverse().join('');
    return reply_string;
};

// Do not edit below this line
module.exports = reverseString;
