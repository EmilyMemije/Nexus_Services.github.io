let monthName = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
    "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

let now = new Date();
let day = now.getDate();
let month = now.getMonth();
let currentMonth = month;
let year = now.getFullYear();

initCalender();
console.log(startDay());

function initCalender(){
    $("#text-day").text(day);
    $("#text-month").text(monthName[currentMonth]);

    $("#text-month-02").text(monthName[month]);
    $("#text-year").text(year);

    $(".item--day").remove();

    for(let i = startDay(); i>0; i--){
        $(".container--days").append
    (`<span class="week--days--item item--day prev_days">${getTotalDays(month-1)-(i-1)}</span>`);
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i==day && month==currentMonth){
            $(".container--days").append
        (`<span class="wee--day--item item--day today">${i}</span>`);
        }else{
        $(".container--days").append
        (`<span class="week--days--item item--day">${i}</span>`);
        }
    }
}

function getNextMonth(){
    if(month !== 11){
        month++;
    }else{
        year++;
        month = 0;
}
initCalender();
}

function getPrevMonth(){
    if(month !== 0){
        month--;
    }else{
        year--;
        month = 11;
}
initCalender();
}

function startDay(){
    let start = new Date(year, month, 1);
    return((start.getDate()-1)===-1) ? 6 : start.getDay();
}

function leapMonth(){
    return((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0));
}

function getTotalDays(){
    if(month === -1) month = 11;

    let numMonthReal = month +1;

    if(numMonthReal == 3 || numMonthReal == 5 || numMonthReal == 8 || numMonthReal == 10){
    return 31;
    }else if(numMonthReal == 0 || numMonthReal == 2 || numMonthReal == 4 || numMonthReal == 6 || numMonthReal == 7 || numMonthReal == 9 || numMonthReal == 10){
    return 30;
    }else{
    return leapMonth() ? 29:28;
    }
}

$("#next-month").click(function(){
    getNextMonth();
});

$("#last-month").click(function(){
    getPrevMonth();
});
