document.addEventListener("DOMContentLoaaded", () => {});

function createRequest(word){
  fetch(`https://wordsapiv1.p.mashape.com/words/${word}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    });
}
