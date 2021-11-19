//create element factory function
//append automatically to the body
const createEl = (type, text, className) => {
    const el = document.createElement(type);
    el.innerText = text;
    el.classList.add(className);
    document.body.prepend(el);
    return{
        el
    }
};

//on click over search
const search = (() => {
    const inputSearch = document.querySelector('#search');
    inputSearch.addEventListener('search', inputSearch.onkeyup = (e) => {
        const searchValue = inputSearch.value;
        if(e.keyCode == 13 && searchValue != ''){
            searchFunc(searchValue);
        }
    });
})();

//on click add card
const addCard = (() => {
    const addC = document.querySelector('.add-card');
    addC.addEventListener('click',   () => {
        createEl('div', '', 'book-form');
        const form = document.querySelector('#add-book-form');
        document.querySelector('.book-form').append(form);
        form.style.display = 'flex';
        formBtn();
    })

})(); 

//the form to add card buttons
const formBtn = () => {
        const cancelBtn = document.querySelector('.cancel-to-form');
                cancelBtn.onclick = () =>{
                    document.querySelector('.book-form').style.display = 'none';
    };
        const addBtn = document.querySelector('.add-to-form');
                addBtn.onclick = () => {
                let bookTitle = document.querySelector('#add-book-form input[name = name]').value;
                const bookAuthor = document.querySelector('#add-book-form input[name = author]').value;
                const bookPages = document.querySelector('#add-book-form input[name = pages]').value;
                const bookReadingStatus = document.querySelector('#add-book-form input[name = reading-status]').value;
                const book = new AddBook(bookTitle, bookAuthor, bookPages, bookReadingStatus);
                book.makeCard();
                document.querySelector('.book-form').style.display = 'none';
    };
}

class AddBook {
    constructor(title, author, pages, readingStatus){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readingStatus = readingStatus;
    }
    makeCard(){
        switch (this.title){
            case '':
                alert('The Book title is empty !');
                break;
            default:
                break;
        }
        switch (this.author){
            case '':
                alert('The Author name field is empty !');
                break;
            default:
                break;
        }
        switch(Boolean(Number(this.readingStatus) > Number(this.pages))){
            case  true:
                alert('you can not read more pages than the book pages!!!')
                break;
            default:
                break;
        }

        const titleString = this.title[0].toUpperCase() + this.title.slice(1);
        const authorString = this.author[0].toUpperCase() + this.author.slice(1);
        
        createEl('div', '', 'card');
        createEl('h1', `${titleString + '\n by \n' + authorString}`, 'h1-card');
        createEl('div', '', 'card-book-btn');
        createEl('button', 'EDIT', 'edit-card-book');
        createEl('button', 'REMOVE', 'remove-card-book');

        const cardContainer = document.querySelector('.card-container');
        const card = document.querySelector('.card');
        const allCard = document.querySelectorAll('.card');
        const cardText = document.querySelector('.h1-card');
        const addCard = document.querySelector('.add-card');
        const cardBtn = document.querySelector('.card-book-btn');
        const editBtn = document.querySelector('.edit-card-book');
        const removeBtn = document.querySelector('.remove-card-book');

        
        cardContainer.prepend(card);
        card.prepend(cardText);
        cardContainer.prepend(addCard);
        
        //add book card style
        if(!card.classList.contains('add-card')){
            card.classList.toggle('new-card-style');
        }
        
        //loop to add auto column
        let auto = '';
        if(allCard.length < 6){
        for(let i = 0; i < allCard.length; i++ ){
            auto = auto + 'auto ';
            cardContainer.style. gridTemplateColumns = auto;
        }
    }

     // make card button
     card.append(cardBtn);
     cardBtn.append(editBtn);
     cardBtn.append(removeBtn);
     card.style.display = 'flex';
     card.style.flexDirection = 'column';
     
     //book card button event
     const editCardArray = [cardText, editBtn];
     editCardArray.forEach(el => el.addEventListener('editcard', el.onclick =() => {
         this.showBook(card);
     }));
     removeBtn.addEventListener('remove', removeBtn.onclick = () =>{
        card.remove();
     });
   
    }
    //show the book info function
    showBook(card){
        createEl('div', '', 'show-form');
        createEl('h1', 'EDIT', 'edit-show-h1');
        createEl('div', '', 'show-input');
        createEl('input', '', 'book-name-show');
        createEl('input', '', 'author-name-show');
        createEl('input', '', 'pages-book-show');
        createEl('input', '', 'reading-status-show');
        createEl('div', '', 'show-form-button');
        createEl('button', 'EDIT', 'edit-button-div');
        createEl('button', 'DELETE', 'delete-button-div');
    
        const showDiv = document.querySelector('.show-form');
        const editTitle = document.querySelector('.edit-show-h1');
        const inputDiv = document.querySelector('.show-input');
        const bookName = document.querySelector('.book-name-show');
        const bookAuthor = document.querySelector('.author-name-show');
        const bookPages = document.querySelector('.pages-book-show');
        const bookReadingStatus = document.querySelector('.reading-status-show'); 
        const buttonDiv = document.querySelector('.show-form-button');
        const editButton = document.querySelector('.edit-button-div');
        const deleteButton = document.querySelector('.delete-button-div');
        
        showDiv.append(editTitle);
        showDiv.append(inputDiv);
        showDiv.append(buttonDiv);
        inputDiv.append(bookName);
        inputDiv.append(bookAuthor);
        inputDiv.append(bookPages);
        inputDiv.append(bookReadingStatus);
        buttonDiv.append(editButton);
        buttonDiv.append(deleteButton);

        bookName.setAttribute('type', 'text');
        bookAuthor.setAttribute('type', 'text');
        bookPages.setAttribute('type', 'text');
        bookReadingStatus.setAttribute('type', 'text');

        showDiv.style.flexDirection = 'column';
        showDiv.style.alignItems = 'center';
        showDiv.style.gap = '40px';

        buttonDiv.style.display = 'flex';
        buttonDiv.style.gap = '60px';
        buttonDiv.style.alignItems = 'center';


        editTitle.style.marginTop = '3%'; 
        editTitle.style.marginBottom = '3%'; 
        editTitle.style.fontWeight = '900'; 
        editTitle.style.fontSize = '50px'; 
        editTitle.style.textDecoration = 'underline yellow 5px'; 
        editTitle.style.borderStyle = 'double'; 
        editTitle.style.color = 'brown';
        editTitle.style.textShadow = 'black 1px 4px 1px';

        inputDiv.style.display = 'flex';
        inputDiv.style.flexDirection = 'column';
        inputDiv.style.alignItems = 'center';
        inputDiv.style.gap = '50px';

        editButton.style.padding = '10px 50px';
        editButton.style.fontSize = '30px';
        editButton.style.fontWeight = '900';
        editButton.style.fontFamily = 'fantasy';
        editButton.style.borderRadius = '10px';
        editButton.style.backgroundColor = 'rgba(165, 42, 42, 0.7)';
        editButton.style.border = 'solid 0.2px yellow';
        editButton.style.color = 'black';

        deleteButton.style.padding = '10px 50px';
        deleteButton.style.fontSize = '30px';
        deleteButton.style.fontWeight = '900';
        deleteButton.style.fontFamily = 'fantasy';
        deleteButton.style.borderRadius = '10px';
        deleteButton.style.backgroundColor = 'rgba(165, 42, 42, 0.7)';
        deleteButton.style.border = 'solid 0.2px red';
        deleteButton.style.color = 'black';
        
        deleteButton.addEventListener('hover-deletw', deleteButton.onmouseover = () => {
            deleteButton.style.transform = 'scale(1.1)';
            deleteButton.style.border = 'solid 2px black';
            deleteButton.style.backgroundColor = 'rgba(165, 42, 42, 1)';
            deleteButton.style.cursor = 'pointer';
            deleteButton.onmouseout = () => {
                deleteButton.style.transform = 'scale(1)';
                deleteButton.style.borderColor = 'red';

            }

        })

        editButton.addEventListener('hover', editButton.onmouseover = () => {
            editButton.style.transform = 'scale(1.1)';
            editButton.style.border = 'solid 2px black';
            editButton.style.backgroundColor = 'rgba(165, 42, 42, 1)';
            editButton.style.cursor = 'pointer';
            editButton.onmouseout = () => {
                editButton.style.transform = 'scale(1)';
                editButton.style.border = 'solid 0.2px yellow';
                editButton.style.backgroundColor = 'rgba(165, 42, 42, 0.7)';
                
            }
        });


        const allInputDiv = document.querySelectorAll('.show-input input');

        allInputDiv.forEach(i  => { 
            i.style.border = 'solid 2px brown';
            i.style.borderRadius = '5px';
            i.style.width = '500px';
            i.style.height = '45px';
            i.style.fontSize = '35px';
            i.style.fontWeight = '900';
            i.style.backgroundColor = 'rgba(255, 255, 0, 0.1)';
            i.style.color = 'white';
            i.style.textAlign = 'center';
            i.style.textShadow = 'brown 2px 2px 2px';
        });
        bookReadingStatus.style.color = 'yellowgreen';
        bookReadingStatus.style.textShadow = 'black 2px 2px 2px';


        bookName.value = 'Book Name : ' + this.title;
        bookAuthor.value = 'Book Author : ' + this.author;
        bookPages.value = 'Book Pages : ' + this.pages;
        bookReadingStatus.value = 'You Have Read : ' + this.readingStatus + ' pages';
       allInputDiv.forEach(i => i.addEventListener('focus', i.onfocus  = () => {
           switch(i.classList.value){
               case 'book-name-show':
                   i.value = this.title;
                   break;
                case 'author-name-show':
                    i.value = this.author;
                    break;
                case 'pages-book-show':
                    i.setAttribute('type', 'number');
                    i.value = this.pages;
                    break;
                case 'reading-status-show':
                    i.setAttribute('type', 'number');
                    i.value = this.readingStatus;
                    break;
                default:
                    break;
           }
       }));
       //the show info button
       deleteButton.addEventListener('deletCard', deleteButton.onclick = () => {
           card.remove();
           showDiv.remove();
       });
       //the edit info logic
       editButton.addEventListener('editCard', editButton.onclick = () => {
           if(bookName.value.slice(0, 12) == 'Book Name : '){
            this.title = bookName.value.slice(12);
           }else{
               this.title = bookName.value;
           };

           if(bookAuthor.value.slice(0, 14) == 'Book Author : '){
               this.author = bookAuthor.value.slice(14);
           }else{
                this.author = bookAuthor.value;
           };

           if(bookPages.value.slice(0, 13) == 'Book Pages : '){
               this.pages = bookPages.value.slice(13);
           }else{
               this.pages = bookPages.value;
           };

           if(bookReadingStatus.value.slice(0, 16) == 'You Have Read : '){
               this.readingStatus = bookReadingStatus.value.slice(16, -6); 
           }else{
               this.readingStatus = bookReadingStatus.value;
           };
           card.remove();
           new AddBook(this.title, this.author, this.pages, this.readingStatus).makeCard();
           showDiv.remove();
       });
    }   
}

//search function
function searchFunc(searchValue){
    //make the search result div 
    createEl('div', '', 'search-div');
    createEl('h1', 'Your search result:', 'search-text');
    createEl('div', '', 'search-found-card');
    createEl('div', '', 'search-back-btn');
    createEl('button', 'Back', 'back-btn')
   
    const searchDiv = document.querySelector('.search-div');
    const sTxt = document.querySelector('.search-text');
    const foundCard = document.querySelector('.search-found-card');
    const backDiv = document.querySelector('.search-back-btn');
    const backBtn = document.querySelector('.back-btn');
    
    backDiv.append(backBtn);
    searchDiv.prepend(sTxt);
    searchDiv.append(foundCard);
    searchDiv.append(backDiv);
    
    searchDiv.classList.toggle('book-form');

    searchDiv.style.display = 'flex';
    searchDiv.style.flexDirection = 'column';

    sTxt.style.display = 'flex';
    sTxt.style.color = 'white';
    sTxt.style.justifyContent = 'center';
    sTxt.style.alignItems = 'center';
    sTxt.style.height = '15%';
    sTxt.style.fontSize = '25px';
    sTxt.style.fontFamily = 'cursive';
    sTxt.style.textDecoration = 'underline yellow 2px';

    foundCard.style.flex = '1';
    foundCard.style.display ='grid';
    foundCard.style.gridTemplateColumns ='auto auto auto auto';
    foundCard.style.justifyItems ='center';
    foundCard.style.overflowY = 'auto';

    backDiv.style.display = 'flex';
    backDiv.style.justifyContent = 'center';
    backDiv.style.alignItems = 'center';
    backDiv.style.padding = '10px';

    //see the text to found card
    const checkP = () => {
        if(foundCard.firstChild == null){
            sTxt.innerText = 'sorry No Card found.';
            sTxt.style.color = 'rgb(255 0 0 / 70%)';
        }
    };

    const cardsStyle = () => {
        let searchCards = [...foundCard.querySelectorAll('.card')];
        if(searchCards.length != 1){
        searchCards.map(item => item.classList.add('card-on-search'));
        }else{
        foundCard.firstChild.classList.add('card-on-search');
        }
    };


    //back btn funcion
    function backFunc(){
        const mainContainer = document.querySelector('.card-container');
        const cardInSearch = [...document.querySelectorAll('.search-found-card .card')];
        
        if(cardInSearch.length == 1){
            foundCard.firstChild.classList.toggle('card-on-search');
            mainContainer.append(foundCard.firstChild);
        }else if(cardInSearch.length > 1){
            cardInSearch.map(c => {
                c.classList.toggle('card-on-search');
                mainContainer.append(c);
           
            });
        }
        searchDiv.remove();


    }

    //listen to back btn
    searchDiv.addEventListener('click', backFunc);

    //the search logic
    const cards = document.querySelectorAll('.card');
    const searchArrayNu = [];
    const cardArrayNu = [];
    let cInner;
    cards.forEach(card => {
        if(!card.classList.contains('add-card')){
            cInner = card.innerText.toLowerCase();
            searchValue = searchValue.toLowerCase();
            for(let i = 0; i <= searchValue.length - 1; i++){
                for(let j = 0; j <= cInner.length -1; j++){
                    if(searchValue[i] == cInner[j]){
                        searchArrayNu.push(i);
                        cardArrayNu.push(j);
                       foundCard.append(card);  
                                           
                    }
                }
            }
        }
        
    });
    checkP();
    cardsStyle();
}