function super_reduced_string(s){
    // Complete this function
    var reduced = [];
    for (var i = 0; i < s.length; i++){
        var last = reduced[reduced.length - 1]
        if(s[i] !== last ){
            reduced.push(s[i])
        } else {
            reduced.pop()
        }
    }
    return reduced.length ? reduced.join("") : "Empty String"
}
