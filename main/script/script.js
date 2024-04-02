let pageCount = 3;
let currentPage = 0;
let pages;

initializePages(); 

function initializePages() {
    pages = document.getElementsByClassName('page');
}

function nextPage() {
    if(currentPage + 1 >= pageCount)
        return;

    pages[currentPage].classList.toggle('hidden');
    
    currentPage++;
    
    pages[currentPage].classList.toggle('hidden');

    currPage = document.getElementById('current-page');
    currPageNum = parseInt(currPage.innerHTML) + 1;
    currPage.innerHTML = currPageNum;
}

function prevPage() {
    if(currentPage - 1 < 0)
        return;

    pages[currentPage].classList.toggle('hidden');
    
    currentPage--;
    
    pages[currentPage].classList.toggle('hidden');

    let currPage = document.getElementById('current-page');
    let currPageNum = parseInt(currPage.innerHTML) - 1;
    currPage.innerHTML = currPageNum;
}

function toggleNav() {
    let sidebar = document.getElementById('sidebar-nav');
    sidebar.classList.toggle('hidden');
    console.log("button clicked");
}


