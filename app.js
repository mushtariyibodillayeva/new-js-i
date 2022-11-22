//yoqtirgan mevam olma, qulupnay,uzum,bananni qaytar
var f1 = "Men yoqtirgan mevalar: ";
var f2 = "nok olma behi qulupnay uzum kivi banan";
var f3 = f2.slice(4, 9);
var f4 = f2.slice(14, 23);
var f5 = f2.slice(23, 28);
var f6 = f2.slice(33, 40);
var all = f1 + f3 + f4 + f5 + f6;
console.log(all);

//holiday
var n = 7 + 1;
var b = "her-marthgdz";
var z = " xalqaro xotin - qizlar bayrami muborak bo'lsin!";
var s = b.slice(3, 8);
var bs = s.toUpperCase();
console.log(n + bs + z);

//qiymatni kvadrat ildizini topib, uni 1 sutkaga ko'paytiring
var num = 9;
var kv = Math.sqrt(num);
console.log(kv * "24");

//sonni yaxlitlab berilgan misolni yeching h+u/l+6 h=12.343 u=4.34 l=1.76
var h = Math.round(12.343);
var u = Math.round(4.34);
var l = Math.round(1.76);
console.log((h + u) / (l + 6));

//hozir necha yoshdaligingizni hisoblang
var year = 2022;
var year2 = 1976;
console.log(year - year2);
