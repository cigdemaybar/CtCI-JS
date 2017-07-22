function main() {
    var s = readLine();
    var n = parseInt(readLine());
    var hash = {};
    for(var i=0; i < s.length; i++){
        (hash[s[i]]) ? hash[s[i]]++ : hash[s[i]] = 1;
    }
    var vals = new Set();
    for(var key in hash){
        var ind = s.indexOf(key)
        var val = s.charCodeAt(ind) - 96
        //console.log(val)
        for(var i=1; i <= hash[key]; i++){
            vals.add(val*i)
        }
     }
    for(var a0 = 0; a0 < n; a0++){
        var x = parseInt(readLine());
        // your code goes here
        vals.has(x) ? console.log('Yes') : console.log('No')
    }

}
