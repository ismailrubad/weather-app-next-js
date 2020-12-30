export default function dayName(givenTimestamp) {
   var timestamp = givenTimestamp;
   var a = new Date(timestamp * 1000);
   var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   return days[a.getDay()]
}
