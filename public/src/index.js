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
      if (data.message == undefined){
        console.log("none")
      } else {
        let result = document.querySelector("#wordDescription");
       result.innerHTML = `<p class = "return">${data.message}<p>`
      }
      let result = document.querySelector("#wordDescription");
      result.innerHTML = `
      <div class="defined">
        <p class="return"> 
        ${word} ${data[0].phonetic} <br>
        ${data[0].meanings[0].partOfSpeech} : ${data[0].meanings[0].definitions[0].definition}</p>
        <p id=synonym class="return"></p>
      </div>
      `;
      if(data[0].meanings[1].definitions[0].definition == undefined){
        console.log("undefined")
      } else{
        let meaning = document.querySelector("#synonym");
        console.log(meaning)
        meaning.textContent = `${data[0].meanings[1].partOfSpeech} : ${data[0].meanings[1].definitions[0].definition}`
      }
      // let rmkBtn = document.querySelector("#rmkButton");
      // rmkBtn.addEventListener("click",(e)=>{
      //   let comment = document.querySelector("#remark");
      //   let remark = comment.value;
      //   console.log(word);
      // })
      // console.log(data[0].meanings[1].definitions[0].definition)
      // console.log(data[0].meanings[1].partOfSpeech)
    });
  const synonym =`https://www.stands4.com/services/v2/syno.php`
  fetch(synonym)
  .then((resp)=> resp.json())
  .then((data)=>{
    console.log(data)
  })
}
