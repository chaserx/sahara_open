(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))d(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function $(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(c){if(c.ep)return;c.ep=!0;const f=$(c);fetch(c.href,f)}})();var tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},et={exports:{}};(function(s,y){(function($,d){s.exports=d()})(tt,function(){var $=1e3,d=6e4,c=36e5,f="millisecond",g="second",O="minute",h="hour",T="day",P="week",S="month",q="quarter",H="year",x="date",a="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],t=i%100;return"["+i+(n[(t-20)%10]||n[t]||n[0])+"]"}},b=function(i,n,t){var r=String(i);return!r||r.length>=n?i:""+Array(n+1-r.length).join(t)+i},B={s:b,z:function(i){var n=-i.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+b(r,2,"0")+":"+b(e,2,"0")},m:function i(n,t){if(n.date()<t.date())return-i(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,S),u=t-e<0,o=n.clone().add(r+(u?-1:1),S);return+(-(r+(t-e)/(u?e-o:o-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:S,y:H,w:P,d:T,D:x,h,m:O,s:g,ms:f,Q:q}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},L="en",C={};C[L]=U;var V="$isDayjsObject",z=function(i){return i instanceof K||!(!i||!i[V])},A=function i(n,t,r){var e;if(!n)return L;if(typeof n=="string"){var u=n.toLowerCase();C[u]&&(e=u),t&&(C[u]=t,e=u);var o=n.split("-");if(!e&&o.length>1)return i(o[0])}else{var m=n.name;C[m]=n,e=m}return!r&&e&&(L=e),e||!r&&L},p=function(i,n){if(z(i))return i.clone();var t=typeof n=="object"?n:{};return t.date=i,t.args=arguments,new K(t)},l=B;l.l=A,l.i=z,l.w=function(i,n){return p(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var K=function(){function i(t){this.$L=A(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[V]=!0}var n=i.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,u=r.utc;if(e===null)return new Date(NaN);if(l.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var o=e.match(w);if(o){var m=o[2]-1||0,D=(o[7]||"0").substring(0,3);return u?new Date(Date.UTC(o[1],m,o[3]||1,o[4]||0,o[5]||0,o[6]||0,D)):new Date(o[1],m,o[3]||1,o[4]||0,o[5]||0,o[6]||0,D)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return l},n.isValid=function(){return this.$d.toString()!==a},n.isSame=function(t,r){var e=p(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return p(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<p(t)},n.$g=function(t,r,e){return l.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,u=!!l.u(r)||r,o=l.p(t),m=function(W,Y){var I=l.w(e.$u?Date.UTC(e.$y,Y,W):new Date(e.$y,Y,W),e);return u?I:I.endOf(T)},D=function(W,Y){return l.w(e.toDate()[W].apply(e.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(Y)),e)},v=this.$W,M=this.$M,_=this.$D,J="set"+(this.$u?"UTC":"");switch(o){case H:return u?m(1,0):m(31,11);case S:return u?m(1,M):m(0,M+1);case P:var k=this.$locale().weekStart||0,Z=(v<k?v+7:v)-k;return m(u?_-Z:_+(6-Z),M);case T:case x:return D(J+"Hours",0);case h:return D(J+"Minutes",1);case O:return D(J+"Seconds",2);case g:return D(J+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,u=l.p(t),o="set"+(this.$u?"UTC":""),m=(e={},e[T]=o+"Date",e[x]=o+"Date",e[S]=o+"Month",e[H]=o+"FullYear",e[h]=o+"Hours",e[O]=o+"Minutes",e[g]=o+"Seconds",e[f]=o+"Milliseconds",e)[u],D=u===T?this.$D+(r-this.$W):r;if(u===S||u===H){var v=this.clone().set(x,1);v.$d[m](D),v.init(),this.$d=v.set(x,Math.min(this.$D,v.daysInMonth())).$d}else m&&this.$d[m](D);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[l.p(t)]()},n.add=function(t,r){var e,u=this;t=Number(t);var o=l.p(r),m=function(M){var _=p(u);return l.w(_.date(_.date()+Math.round(M*t)),u)};if(o===S)return this.set(S,this.$M+t);if(o===H)return this.set(H,this.$y+t);if(o===T)return m(1);if(o===P)return m(7);var D=(e={},e[O]=d,e[h]=c,e[g]=$,e)[o]||1,v=this.$d.getTime()+t*D;return l.w(v,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||a;var u=t||"YYYY-MM-DDTHH:mm:ssZ",o=l.z(this),m=this.$H,D=this.$m,v=this.$M,M=e.weekdays,_=e.months,J=e.meridiem,k=function(Y,I,E,G){return Y&&(Y[I]||Y(r,u))||E[I].slice(0,G)},Z=function(Y){return l.s(m%12||12,Y,"0")},W=J||function(Y,I,E){var G=Y<12?"AM":"PM";return E?G.toLowerCase():G};return u.replace(N,function(Y,I){return I||function(E){switch(E){case"YY":return String(r.$y).slice(-2);case"YYYY":return l.s(r.$y,4,"0");case"M":return v+1;case"MM":return l.s(v+1,2,"0");case"MMM":return k(e.monthsShort,v,_,3);case"MMMM":return k(_,v);case"D":return r.$D;case"DD":return l.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return k(e.weekdaysMin,r.$W,M,2);case"ddd":return k(e.weekdaysShort,r.$W,M,3);case"dddd":return M[r.$W];case"H":return String(m);case"HH":return l.s(m,2,"0");case"h":return Z(1);case"hh":return Z(2);case"a":return W(m,D,!0);case"A":return W(m,D,!1);case"m":return String(D);case"mm":return l.s(D,2,"0");case"s":return String(r.$s);case"ss":return l.s(r.$s,2,"0");case"SSS":return l.s(r.$ms,3,"0");case"Z":return o}return null}(Y)||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var u,o=this,m=l.p(r),D=p(t),v=(D.utcOffset()-this.utcOffset())*d,M=this-D,_=function(){return l.m(o,D)};switch(m){case H:u=_()/12;break;case S:u=_();break;case q:u=_()/3;break;case P:u=(M-v)/6048e5;break;case T:u=(M-v)/864e5;break;case h:u=M/c;break;case O:u=M/d;break;case g:u=M/$;break;default:u=M}return e?u:l.a(u)},n.daysInMonth=function(){return this.endOf(S).$D},n.$locale=function(){return C[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),u=A(t,r,!0);return u&&(e.$L=u),e},n.clone=function(){return l.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),X=K.prototype;return p.prototype=X,[["$ms",f],["$s",g],["$m",O],["$H",h],["$W",T],["$M",S],["$y",H],["$D",x]].forEach(function(i){X[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),p.extend=function(i,n){return i.$i||(i(n,K,p),i.$i=!0),p},p.locale=A,p.isDayjs=z,p.unix=function(i){return p(1e3*i)},p.en=C[L],p.Ls=C,p.p={},p})})(et);var st=et.exports,nt={exports:{}};(function(s,y){(function($,d){s.exports=d()})(tt,function(){var $="minute",d=/[+-]\d\d(?::?\d\d)?/g,c=/([+-]|\d\d)/g;return function(f,g,O){var h=g.prototype;O.utc=function(a){var w={date:a,utc:!0,args:arguments};return new g(w)},h.utc=function(a){var w=O(this.toDate(),{locale:this.$L,utc:!0});return a?w.add(this.utcOffset(),$):w},h.local=function(){return O(this.toDate(),{locale:this.$L,utc:!1})};var T=h.parse;h.parse=function(a){a.utc&&(this.$u=!0),this.$utils().u(a.$offset)||(this.$offset=a.$offset),T.call(this,a)};var P=h.init;h.init=function(){if(this.$u){var a=this.$d;this.$y=a.getUTCFullYear(),this.$M=a.getUTCMonth(),this.$D=a.getUTCDate(),this.$W=a.getUTCDay(),this.$H=a.getUTCHours(),this.$m=a.getUTCMinutes(),this.$s=a.getUTCSeconds(),this.$ms=a.getUTCMilliseconds()}else P.call(this)};var S=h.utcOffset;h.utcOffset=function(a,w){var N=this.$utils().u;if(N(a))return this.$u?0:N(this.$offset)?S.call(this):this.$offset;if(typeof a=="string"&&(a=function(L){L===void 0&&(L="");var C=L.match(d);if(!C)return null;var V=(""+C[0]).match(c)||["-",0,0],z=V[0],A=60*+V[1]+ +V[2];return A===0?0:z==="+"?A:-A}(a),a===null))return this;var U=Math.abs(a)<=16?60*a:a,b=this;if(w)return b.$offset=U,b.$u=a===0,b;if(a!==0){var B=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(b=this.local().add(U+B,$)).$offset=U,b.$x.$localOffset=B}else b=this.utc();return b};var q=h.format;h.format=function(a){var w=a||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return q.call(this,w)},h.valueOf=function(){var a=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*a},h.isUTC=function(){return!!this.$u},h.toISOString=function(){return this.toDate().toISOString()},h.toString=function(){return this.toDate().toUTCString()};var H=h.toDate;h.toDate=function(a){return a==="s"&&this.$offset?O(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():H.call(this)};var x=h.diff;h.diff=function(a,w,N){if(a&&this.$u===a.$u)return x.call(this,a,w,N);var U=this.local(),b=O(a).local();return x.call(U,b,w,N)}}})})(nt);var it=nt.exports;const F=st,at=it;F.extend(at);const j=({day:s=1,month:y,year:$})=>F(`${$}-${y}-${s}`,"YYYY-M-D"),R=(s,y,$,d)=>{let c=F(j({month:$,year:d})).day(y);return c.month()!==$-1&&(c=c.add(1,"week")),c=c.add(s-1,"week"),c},ut=(s,y,$)=>{const d=F(j({month:y,year:$})).daysInMonth();let f=F(`${$}-${y}-${d}`,"YYYY-M-D").day(s);return f.month()!==y-1&&(f=f.subtract(1,"week")),f},Q=(s=new Date().getFullYear(),{shiftSaturdayHolidays:y=!0,shiftSundayHolidays:$=!0}={})=>{const d=[];return d.push({name:"New Year's Day",date:j({day:1,month:1,year:s})}),d.push({name:"Birthday of Martin Luther King, Jr.",date:R(3,1,1,s)}),d.push({name:"Washington's Birthday",alsoObservedAs:"Presidents' Day",date:R(3,1,2,s)}),d.push({name:"Memorial Day",date:ut(1,5,s)}),s>2020&&d.push({name:"Juneteenth National Independence Day",date:j({day:19,month:6,year:s})}),d.push({name:"Independence Day",date:j({day:4,month:7,year:s})}),d.push({name:"Labor Day",date:R(1,1,9,s)}),d.push({name:"Columbus Day",alsoObservedAs:"Indigenous Peoples' Day",date:R(2,1,10,s)}),d.push({name:"Veterans Day",date:j({day:11,month:11,year:s})}),d.push({name:"Thanksgiving Day",date:R(4,4,11,s)}),d.push({name:"Christmas Day",date:j({day:25,month:12,year:s})}),d.map(c=>{let f=F(c.date);return f.day()===0&&$&&(f=f.add(1,"day")),f.day()===6&&y&&(f=f.subtract(1,"day")),{name:c.name,alsoObservedAs:c.alsoObservedAs,date:f.toDate(),dateString:f.format("YYYY-MM-DD")}})},ot=(s=new Date,{shiftSaturdayHolidays:y=!0,shiftSundayHolidays:$=!0,utc:d=!1}={})=>{const c=d?F.utc(s):F(s),f=c.year(),g={shiftSaturdayHolidays:y,shiftSundayHolidays:$},O=Q(f,g),h=Q(f+1,g);return O.push(h[0]),O.some(T=>T.dateString===c.format("YYYY-MM-DD"))},ct=()=>{const s=new Date;return s.setUTCFullYear(s.getUTCFullYear()+1),s},ft=(s=new Date,y=ct(),$=void 0)=>{const d=s.getFullYear(),c=y.getFullYear(),f=[];for(let g=d;g<=c;g+=1)f.push(...Q(g,$));return f.filter(g=>g.date>=s&&g.date<=y)};var dt={isAHoliday:ot,allForYear:Q,inRange:ft};const lt=new Date("2024-06-10"),ht=new Date("2024-09-04"),$t={utc:!1};function mt(s){s.innerHTML=`${yt()}`}function yt(){const s=new Date;return gt(s)?"No.":Dt(s)?"Maybe.<br />They might be closed for vacation.":pt(s)?dt.isAHoliday(s,$t)?"Maybe.<br />Today might be a holiday.":"Yes.":"No."}function gt(s){return s.getDay()===0}function Dt(s){return rt(s,lt,ht)}function pt(s){return rt(s.getHours(),11,19)}function rt(s,y=0,$=1){return y<s&&s<$||$<s&&s<y}mt(document.querySelector("#app"));
