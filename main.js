let cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", 
"Josh", "Nikki", "Matt", "Dale", "Sydney"];

for(let i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i]);
}





let myInterest = ["Swimming", "Video Games", "Food", "Family time", "Movies"];

for(let i = 0; i <  myInterest.length; i++){
    console.log(`One of my interest is: ${myInterest[i]}.`)
}





for (let i = 0; i < myInterest.length; i ++) {

    if(myInterest[i] === "Swimming") {
    console.log(`My absoulte interst is : ${myInterest[i]}`)
    } else {
        console.log(`One of my interest is: ${myInterest[i]}`)
    }
}