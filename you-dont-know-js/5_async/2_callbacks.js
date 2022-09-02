console.log('1 FIRST');

setTimeout(function() {
    useCallback('1 I AM PARAM', function(){
        console.log('1 SECOND');
    })
}, 3000);


function useCallback(param, callback) {
    console.log('param - ', param)
    callback();
}

console.log('1 THIRD');
