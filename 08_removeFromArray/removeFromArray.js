const removeFromArray = function(array) {
    let current_arg;

    for( let i = 0; i < arguments.length; i++ )
    {
        current_arg = arguments[i];
        let cur_index = array.indexOf(current_arg);

        while( cur_index >=0 )
        {
            array.splice( cur_index, 1);
            cur_index = array.indexOf(current_arg);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
