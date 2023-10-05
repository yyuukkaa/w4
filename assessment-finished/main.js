const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
 
const storyText = '気温 華氏40度で外は寒かった。:insertx: は出かけた。:inserty: についた。:insertz:。 体重110ポンドの :insertx: は驚いたが、　Bobは驚かなかった。　- :inserty:　ではよくあることだった。';
const insertX = ['スヌーピー', 'ミッキーマウス', 'サンタクロース'];
const insertY = ['津田塾大学', 'ディズニーランド', '千駄ヶ谷'];
const insertZ = ['雪が降っていた', '混雑していた', '晴れていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("日本").checked) {
    const weight = `${Math.round(110*0.454)} キロ`;
    const temperature =  `摂氏${Math.round((94-32) * 5 / 9)} 度`;
    newStory = newStory.replace('華氏40度', temperature);
    newStory = newStory.replace('110ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
