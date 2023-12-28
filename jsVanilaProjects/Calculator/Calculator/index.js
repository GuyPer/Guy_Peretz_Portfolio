
let monitor=document.querySelector("#monitor");
let counter=0;
let monitorUpdated;

function writeOnMonitor(value){
    
    if (counter>=15){
        monitor.value="error";
    }

    if (value==="ON"){
    monitor.value=0;
    counter=0;    
    }
    else if(value==="AC"||value==="C"){
        monitor.value="";
    }
    else if(value==="X"){
        value="*";
        monitor.value+=value;
    }
    else if(value==="="){
        if(counter<2){
            monitor.value="error"
        }
        else{
            calculate(monitorUpdated)
        }
    }
    else{
        if (counter===0){
            monitor.value=value;
            counter++;
        }
        else if(counter>=15){
            monitor.value="error";
        }
        else{
        monitor.value+=value;
        counter++;
        }
    }
    monitorUpdated=monitor.value;
}

function calculate(calculation){
monitor.value=eval(calculation);
}
