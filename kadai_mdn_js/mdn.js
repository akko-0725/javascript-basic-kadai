// 今日の日付取得
const today = new Date ();

// 年月日を取得
const year = today.getFullYear();
const month = today. getMonth() + 1;
const date = today.getDate();

// 出力
const formattedDate = `${year}年${month}月${date}日`;

console.log(formattedDate);
