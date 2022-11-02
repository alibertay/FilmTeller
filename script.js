async function fetchData() {
    const res = await fetch("https://k2maan-moviehut.herokuapp.com/api/random");
    const record = await res.json();
    
    document.getElementById("film").innerHTML = record["name"];
    document.getElementById("genre").innerHTML = record["genre"];
    document.getElementById("year").innerHTML = record["releaseYear"];
    document.getElementById("director").innerHTML = record["director"];
}
fetchData();