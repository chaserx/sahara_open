$(function(){function n(n){o.html(n)}function t(){if(0===m.day())return n("NO");if(m.within(i))return n("Maybe.<br>They might be closed for vacation.");if(_.inRange(m.hour(),11,19)){if(m.holiday()){var t=m.holidays();return n("MAYBE.<br>It might be <br>"+t+".")}return n("YES")}return n("NO")}var r=moment("2016 7 1","YYYY MM DD"),e=moment("2016 9 4","YYYY MM DD"),i=moment.range(r,e),o=$("#output"),m=moment();t()});