document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#searchButton");
  button.addEventListener("click", (e) => {
    let searchInput = document.querySelector("#search");
    let word = searchInput.value;
    console.log(word);
    wordSearch(word);
  });
});

function wordSearch(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      let result = document.querySelector("#wordDescription");
      result.innerHTML = `
      <p class="return"> 
      ${word} ${data[0].phonetic} <br>
      ${data[0].meanings[0].partOfSpeech} : ${data[0].meanings[0].definitions[0].definition}</p>
      <p id=synonym class="return"></p>
      `;
      if(data[0].meanings[1].definitions[0].definition == undefined){
        console.log("undefined")
      } else{
        let meaning = document.querySelector("#synonym");
        console.log(meaning)
        meaning.textContent = `${data[0].meanings[1].partOfSpeech} : ${data[0].meanings[1].definitions[0].definition}`
      }
      // console.log(data[0].meanings[1].definitions[0].definition)
      // console.log(data[0].meanings[1].partOfSpeech)
    });
}
