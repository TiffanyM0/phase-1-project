document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#searchButton");
  button.addEventListener("click", (e) => {
    let searchInput = document.querySelector("#search");
    let word = searchInput.value;
    console.log(word);
    wordSearch(word);
    // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     console.log(data);

    //     let result = document.querySelector("#wordDescription");
    //     result.innerHTML = `<p>${data[0].meanings[0].definitions[0].definition}`;
    //     console.log(result)

    //     // let output = data;
    //     // console.log(output);
    //   });
    /* link searchInut text to fetch request = print result */
    // const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright`;
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "c6079870camsh1a56f6e78d1aed1p1df6e4jsn0ba2ff61ebfe",
    //     "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    //   },
    // };
    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.text();
    //   // console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }
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
      ${data[0].phonetic} <br>
      ${data[0].meanings[0].partOfSpeech} <br>
        Definition: <br> ${data[0].meanings[0].definitions[0].definition}
      `;
      console.log(data[0].meanings[1].definitions[0].definition)
      console.log(data[0].meanings[1].partOfSpeech)
      for (let i = 0; i < 3, i++; ) {}
      console.log(result);

      // let output = data;
      // console.log(output);
    });
}
