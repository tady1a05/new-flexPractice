function anime(htmlElement,target){
    htmlElement.timer = setInterval(function(){
        var distance = (target - htmlElement.scrollTop)/10;
        
        if(distance >0){
            distance = Math.ceil(distance);
        }else if (distance<0){
            distance = Math.floor(distance);
        }else{
            clearInterval(htmlElement.timer)
        }
    
        htmlElement.scrollTop = htmlElement.scrollTop + distance;
    },10);
}