const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const accessKey ="aYVBhudIfy1HZgZW1Vapv2TQC3f70s8yI-wktoE0PZU";
let keyword="";
let page=1;

async function SearchImages() {
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response= await fetch(url);
    const data= await response.json();
    if (page===1) {
        searchResult.innerHTML="";
        
    }
    const results =data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imgeLink=document.createElement("a");
        imgeLink.href=result.links.html;
        imgeLink.target="_blank";
        imgeLink.appendChild(image);
        searchResult.appendChild(imgeLink);
    })
    showMoreBtn.style.display="block";
    
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    SearchImages();
})
showMoreBtn.addEventListener("click",()=>{
    page++;
    SearchImages();
})