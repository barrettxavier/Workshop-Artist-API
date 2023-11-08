const apiURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF`;


const getArtistNames = async () => {
  try {
    const response = await fetch (`${apiURL}/artists`);
    const dataPull = await response.json();
    console.log(dataPull);
  } catch (err) {
    console.log(`Error with data`);
  }
};

getArtistNames();