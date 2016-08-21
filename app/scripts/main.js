$(function() {
  var vacationStart = moment('2016 7 1', 'YYYY MM DD');
  var vacationEnd = moment('2016 9 4', 'YYYY MM DD');
  var vacationTime = moment.range(vacationStart, vacationEnd);
  var outputTarget = $('#output');
  var now = moment();

  function setOutput(output) {
    outputTarget.html(output);
  }

  function isSaharaOpen() {
    if (now.day() === 0) { // return no if today is sunday
      return setOutput('NO');
    } else if (now.within(vacationTime)) {
      return setOutput('Maybe.<br>They might be closed for vacation.');
    } else {
      // check if within normal working hours
      if (_.inRange(now.hour(), 11, 19)) {
        if (now.holiday()) {
          var holidays = now.holidays();
          return setOutput('MAYBE.<br>It might be <br>' + holidays + '.');
        } else {
          return setOutput('YES');
        }
      } else {
        return setOutput('NO');
      }
    }
  }

  isSaharaOpen();
});
