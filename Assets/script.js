// Time Block in jQuery
let myClock = $("#currentDay");
    myClock.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    setInterval(function () {
    myClock.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
let time = moment();
$(".saveBtn").click(function () {
    const time = $(this).parent().attr("id");
    const schedule = $(this).siblings(".schedule").val()
    localStorage.setItem(time, schedule);
})
function startPage() {
    $(".time-block").each(function () {
        const lsData = localStorage.getItem($(this).attr("id"));

        if (lsData) {
            $(this).children(".schedule").val(lsData);
        }
        setCalendarColors($(this).attr("id"), this);
    })
}
function setCalendarColors(savedTime, element) {
    hour = time.hours();
    if (parseInt(savedTime) > hour) {
        $(element).addClass("future");
    }
    else if (parseInt(savedTime) < hour) {
        $(element).addClass("past");
    }
    else {
        $(element).addClass("present");
    }
}
startPage();