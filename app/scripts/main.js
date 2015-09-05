$(function() {
  var vacation_start = moment("2015-7-1", "YYYY MM DD");
  var vacation_end = moment("2015-9-4", "YYYY MM DD");
  var vacation_time = moment.range(vacation_start, vacation_end);
  var output_target = $('#output');
  var now = moment();

  function setOutput(output) {
    output_target.html(output);
  }

  function isSaharaOpen() {
    if (now.day() === 0) { // return no if today is sunday
      return setOutput('NO');
    } else if (now.within(vacation_time) === true) {
      return setOutput('NO');
    } else {
      // check if within normal working hours
      if (_.inRange(now.hour(), 11, 19)) {
        return setOutput('YES');
      } else {
        return setOutput('NO');
      }
    }
  }

  isSaharaOpen();
});
