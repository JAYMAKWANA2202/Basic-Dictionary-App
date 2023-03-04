// searchinput
// searchbtn

const dictionary = (word) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d78a971a04msh0bd6dcb0a2bf163p1a6d39jsn8a5e4d1f4051",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=" +
      word,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      wordheading.innerHTML = response.word;
      definition.innerHTML = response.definition;
    })
    .catch((err) => console.error(err));
};

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  dictionary(searchinput.value);
});
