$(function() {
  var vacationStart = moment('2018 6 12', 'YYYY MM DD');
  var vacationEnd = moment('2018 6 30', 'YYYY MM DD');
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
        now.holiday(
          function(result){
            console.log(result); // true
            if (result == true) {
              now.holidays(
                function(result){
                  console.log(result); // ["Christmas"]
                  var holidays = result[0];
                  return setOutput('MAYBE.<br>It might be <br>' + holidays + '.');
                },
                function(error){
                  console.log(error); // IO error, JSON parse error...
                }
              );
            } else {
              return setOutput('YES');
            }
          },
          function(error){
            console.log(error); // IO error, JSON parse error...
          }
        );
      } else {
        return setOutput('NO');
      }
    }
  }

  isSaharaOpen();
});
