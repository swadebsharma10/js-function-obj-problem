// 

function  workOut(workName){

    const bicepWorkOut = ['cable cross','bicep', 'bicep'];
    const chestWorkOut = ['chest fly', 'chest press','chest'];
    
    if(workName === 'chest'){
        return chestWorkOut;
    }
    else if(workName ==='bicep'){
        return bicepWorkOut;
    }
    else{
        return 'I dont know';
    }
}

const workoutPlan = workOut('bicep')
console.log(workoutPlan);