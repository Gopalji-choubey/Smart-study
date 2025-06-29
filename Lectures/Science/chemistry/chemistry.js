// Select hamburger and menu
const toggle = document.getElementById('toggle');
const menu   = document.getElementById('menu');
const links  = menu.querySelectorAll('a');

// Open / close on hamburger click
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  menu.classList.toggle('open');
});

// Auto-close menu after clicking a nav link (mobile UX)
links.forEach(link =>
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    menu.classList.remove('open');
  })
);



const chapters = [
  "Acid base and salts lect 1",
  "Acid base and salts lect 2",
  "Acid base and salts lect 3",
  "Acid base and salts lect 4",
  "Acid base and salts lect 5 (part-1)",
  "Acid base and salts lect 5 (part-2)",
  "Acid base and salts lect 6",
  "Metal and non metal",
  "Carbon and its compound",
  "Periodic classification of elements"
];

const searchInput  = document.getElementById("searchInput");
const suggestionBox= document.getElementById("suggestionBox");
const cards        = Array.from(document.querySelectorAll(".chapter-card"));

/* ---------- live suggestions ---------- */
searchInput.addEventListener("input", handleSearch);
searchInput.addEventListener("keydown", e=>{
  if(e.key==="Enter"){e.preventDefault(); applyFilter(searchInput.value);}
});

function handleSearch(){
  const q = searchInput.value.toLowerCase();
  suggestionBox.innerHTML="";
  applyFilter(q);

  if(!q){return;}

  chapters.filter(c=>c.toLowerCase().includes(q)).forEach(ch=>{
    const li=document.createElement("li");
    li.textContent=ch;
    li.onclick=()=>{searchInput.value=ch;applyFilter(ch);suggestionBox.innerHTML="";};
    suggestionBox.appendChild(li);
  });
}

/* ---------- show only matching card(s) ---------- */
function applyFilter(query){
  const q=query.toLowerCase();
  cards.forEach(card=>{
    const match=card.dataset.chapter.toLowerCase().includes(q);
    card.classList.toggle("hidden", q && !match);
  });
}

/* click outside to close suggestions */
document.addEventListener("click",e=>{
  if(!document.querySelector(".search-wrapper").contains(e.target)){
    suggestionBox.innerHTML="";
  }
});
