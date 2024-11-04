var makeFancyString = function(s) {
    const r = s.split('')
    r.forEach((ch, i) => {
        if(ch === s[i-1] && ch === s[i+1]) {
            r[i] = '';
        }
    });
    return r.join('')
};

console.log(makeFancyString("aaabaaaa"));
