const date_input= document.querySelector("#date-input");
const btn_check = document.querySelector("#btn-check");

var ourDate={
    day:"",
    month:"",
    year:""
}
btn_check.addEventListener("click",function clickEventHandler(){
    toProperDate(date_input.value);
    var curDate =  ourDate.day+ourDate.month+ourDate.year;
    console.log(allPossibleFormats(curDate));
    
});

function toProperDate(date){
    ourDate.day = date.slice(-2);
    ourDate.month = date.slice(5,7);
    ourDate.year = date.slice(0,4);
}

function isCurDatePalindrome(date)
{
    var flag=true;
    var length = date.length;
    for(var i=0;i<Math.trunc(length/2);i++)
    {
        if(date[i]!=date[length-i-1])
            flag=false;
    }
    return flag;
}

function allPossibleFormats(date){
    
    var mmddyyyy=ourDate.month+ourDate.day+ourDate.year;
    var yyyymmdd=ourDate.year+ourDate.month+ourDate.day;
    
    var ddmmyy=ourDate.day+ourDate.month+ourDate.year.slice(-2);
    var mmddyy=ourDate.month+ourDate.day+ourDate.year.slice(-2);
    var yymmdd=ourDate.year.slice(-2)+ourDate.month+ourDate.day;

    return [date,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}