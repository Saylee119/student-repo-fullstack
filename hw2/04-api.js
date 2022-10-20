/** Exercise 04 - API **/

const url = "https://restcountries.com/v2/all";

const getData = () => {

    const cList = document.getElementById("results"); //get the item id from html
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        cList.innerHTML = "";
        const countryList = data;

        countryList.forEach((item) => {
        
          const element = document.createElement("li");
          const text = `${item.name} - ${parseInt(item.population).toLocaleString()}`;
          element.innerText = text;
          cList.appendChild(element);

        });
      })
      .catch((e) => { // checking for errors
        console.log("error", e);
        cList.innerHTML = "There in an error";
      });
  };

  getData(url);