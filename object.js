let person = {
        firstName:"John",
        lastName:"Doe", 
        age:50, 
        eyeColor:"blue",
        friends : ["robi", "gobi", "tudu", "baten"],
        country: "Bangladesh",
    }


    for(let i = 0; i <person.friends.length; i++){
        const element = person.friends[i]
        console.log(element);
    }