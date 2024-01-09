const ul = document.getElementById("country");
const button = document.getElementById("button");

const getCountry = async () => {
 const res = await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.map((item) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.setAttribute("src", item.flags.png);
        img.setAttribute("alt", item.flags.alt);
        li.innerText = item.name.official;
        console.log(li.innerText);
        ul.append(li);
        li.append(img);
        ul.style.display ="grid"
        ul.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr"
        ul.style.alignItems ="center"
        li.style.display = "flex"
        li.style.flexDirection ="column-reverse"   
        li.style.alignItems = "center"
        ul.style.justifyContent = "start"
        img.style.width = "6rem"
        li.style.gap = "1rem"
      });
      console.log("Processed Data:", data);
    })
    .catch((err) => console.log("there was an error fetching the data", err));

    return res
};

button.addEventListener("click", (e) => {
  getCountry();
  button.setAttribute("disabled", "true");
});
