const displayElement = document.getElementById('display');
const resultElement = document.getElementById('result');

function appendValue(value) {
    displayElement.innerHTML = displayElement.innerHTML + value;
}

function calculateValue() {
    resultElement.innerHTML = eval(displayElement.innerHTML);
}
function clearValue() {
    document.getElementById("display").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}


function mukeshAddEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        typeofEvent: "keypress",
        key: "p",
        durationOfKeypress: 2
    }
    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }

}
mukeshAddEventListener("keypress", function (e) {
    console.log(e);
});