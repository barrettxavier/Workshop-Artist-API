const apiURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF`;
const main = document.querySelector(`main`);

// mainContainer.setAttribute(`style`, 
// `width:100vw; height:fit-content; background-color:red; display:flex; 
// flex-wrap:wrap; margin:0px; padding:2rem;`);

// const artist1 = document.createElement(`div`);
// artist1.setAttribute(`style`, `background-color:white; width:400px; height:500px; margin:1rem;`);
// mainContainer.appendChild(artist1);


const getArtistNames = async () => {
  
  const response = await fetch (`${apiURL}/artists`);
  const dataPull = await response.json();
  console.log(dataPull.data);
  
  const artistArray = dataPull.data;
  const nameOfArtist = artistArray.map((singleArtist) => {
    return singleArtist.name;
  });
  console.log(nameOfArtist);

  const ol = document.createElement(`ol`);
  main.appendChild(ol);

  artistArray.forEach((singleArtist) => {
    const li = document.createElement(`li`);
    li.innerText = singleArtist.name;
    ol.appendChild(li);
  });



};


getArtistNames();