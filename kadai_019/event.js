// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidをもつHTML要素を取得し、定数に代入する
const changeText = document.getElementById('text');

// ボタンをクリックしたらイベント処理をする
btn.addEventListener('click', () => {
  changeText.textContent = 'ボタンをクリックしました';
});