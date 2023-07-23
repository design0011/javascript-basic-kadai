// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const text =document.getElementById('text');

// ボタンをクリックしたら、イベントを処理する
btn.addEventListener('click', () => {
  // 2秒後に文章を書き換える(非同期処理）
  setTimeout( () => {
    text.textContent = 'ボタンをクリックしました';
  },2000);
});