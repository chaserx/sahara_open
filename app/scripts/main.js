$(function() {
  var vacationStart = moment('2015 7 1', 'YYYY MM DD');
  var vacationEnd = moment('2015 9 4', 'YYYY MM DD');
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
      return setOutput('NO');
    } else {
      // check if within normal working hours
      if (_.inRange(now.hour(), 11, 19)) {
        if (now.holiday()) {
          return setOutput('MAYBE.<br>It might be a holiday.');
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
