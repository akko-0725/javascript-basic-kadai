let num = 15;

console.log (num);

// 3の倍数と5の倍数の場合「3と5の倍数です」と出力
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

// 3の倍数の場合は「3の倍数です」と出力
else if (num % 3 === 0) {
  console.log('3の倍数です'); 
}

// 5の倍数の場合は「5の倍数です」と出力
else if (num % 5 === 0) {
  console.log('5の倍数です');
}