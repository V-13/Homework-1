module.exports.revcheck=n=>{
    var rev=0;
    while (n!=0)
    {
        rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    return rev
}