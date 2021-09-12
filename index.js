const date_input= document.querySelector("#date-input");
const btn_check = document.querySelector("#btn-check");
const outputHere = document.querySelector(".outputHere");



btn_check.addEventListener("click",function clickEventHandler(){
    var flag=0;
    var objDate=toProperDate(date_input.value);
    var curDate =  objDate.day+objDate.month+objDate.year;
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
        const objDate2=toProperDate(date_input.value);
        var a1=closestNextPalindrome(objDate);
        var a2=closestPrevPalindrome(objDate2);
        if(a1<a2)
        {
            outputHere.innerText=("Oh no! Unfortunately, your birthday isn't a palindrome. The closest palindrome is "+a1+" days after your birthday, on: "+objDate.day+"-"+objDate.month+"-"+objDate.year);
        }
        else
            outputHere.innerText=("Oh no! Unfortunately, your birthday isn't a palindrome. The closest palindrome is "+a2+" days before your birthday, on: "+objDate2.day+"-"+objDate2.month+"-"+objDate2.year);
    }

    
    
});

function toProperDate(date){
    var ourDate={
        day:"",
        month:"",
        year:""
    }
    ourDate.day = date.slice(-2);
    ourDate.month = date.slice(5,7);
    ourDate.year = date.slice(0,4);
    return ourDate;
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
    date.slice(0,2);
    date.slice(2,4);
    date.slice(-4);
    date.slice(-2);
    var mmddyyyy=date.slice(2,4)+date.slice(0,2)+date.slice(-4);
    var yyyymmdd=date.slice(-4)+date.slice(2,4)+date.slice(0,2);
    
    var ddmmyy=date.slice(0,2)+date.slice(2,4)+date.slice(-2);
    var mmddyy=date.slice(2,4)+date.slice(0,2)+date.slice(-2);
    var yymmdd=date.slice(-2)+date.slice(2,4)+date.slice(0,2);

    return [date,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}

function nextDate(givenDate)
{
    var day=parseInt(givenDate.day);
    var month=parseInt(givenDate.month);
    var year=parseInt(givenDate.year);
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
        
    givenDate.day=day.toString();
    givenDate.month=month.toString();
    givenDate.year=year.toString();
    return givenDate;
    
}

function prevDate(givenDate)
{
    var day=parseInt(givenDate.day);
    var month=parseInt(givenDate.month);
    var year=parseInt(givenDate.year);
    var months = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(isLeapYear(year))
    { 
        months[1]=29;
    }
    if(day===1)
    {
        if(month===1)
        {
            year=year-1;
            month=12;
        }
        else{
            month=month-1;
        }
        day=months[month-1];
    }
    else{
        day=day-1;
    }
    if(day<10)
        day="0"+day;
    if(month<10)
        month="0"+month;

    givenDate.day=day.toString();
    givenDate.month=month.toString();
    givenDate.year=year.toString();
    return givenDate;
    
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

function closestNextPalindrome(givenDate)
{
    var flag=0, difference=0;
    while(flag===0)
    {
        givenDate=nextDate(givenDate);
        difference++;
        var newDate =  givenDate.day+givenDate.month+givenDate.year;
        var newCurDates=allPossibleFormats(newDate);

        for(var i=0;i<newCurDates.length;i++)
        {
            if(isCurDatePalindrome(newCurDates[i]))
            {
                flag=1;
                break;
            }
    
        }
    
    }
    return difference;
}

function closestPrevPalindrome(givenDate)
{
    var flag=0;
    var difference=0;
    while(flag===0)
    {
        givenDate=prevDate(givenDate);
        difference++;
        var newDate =  givenDate.day+givenDate.month+givenDate.year;
        var newCurDates=allPossibleFormats(newDate);

        for(var i=0;i<newCurDates.length;i++)
        {
            if(isCurDatePalindrome(newCurDates[i]))
            {
                flag=1;
                break;
            }
    
        }
    
    }
    return difference;
}