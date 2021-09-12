const date_input= document.querySelector("#date-input");
const btn_check = document.querySelector("#btn-check");
const outputHere = document.querySelector(".outputHere");


var ourDate={
    day:"",
    month:"",
    year:""
}
btn_check.addEventListener("click",function clickEventHandler(){
    var flag=0;
    toProperDate(date_input.value);
    var curDate =  ourDate.day+ourDate.month+ourDate.year;
    const allCurDates=allPossibleFormats(curDate);
    for(var i=0;i<allCurDates.length;i++)
    {
        if(isCurDatePalindrome(allCurDates[i]))
        {
            outputHere.innerText=("Yep it is palindrome");
            flag=1;
            break;
        }
    
    }
    if(!flag)
    {
        outputHere.innerText=("No");
    }
    
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

function nextDate()
{
    var day=parseInt(ourDate.day);
    var month=parseInt(ourDate.month);
    var year=parseInt(ourDate.year);
    var months = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(isLeapYear(year))
    { 
        months[1]=29;
    }
    if(day===months[month-1])
    {
        if(month<=11)
            month+=1;
        else{
            month=1;
            year+=1
        }
        day=1;
    }
    else
        day+=1;
    if(day<10)
        day="0"+day;
    if(month<10)
        month="0"+month;
    year=year.toString();

    ourDate.day=day;
    ourDate.month=month;
    ourDate.year=year;
    
}

function isLeapYear(year) {
    if(year%400===0)
        return true;
    if(year%100===0)
        return false;
    if(year%4===0)
        return true;
    return false;    
}

