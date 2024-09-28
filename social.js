// SIDEBAR//
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES//
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME//
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colors = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');



//SIDEBAR//

// remove active class from all menu items//
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .count').style.display = 'none';
        }
    })
})

// MESSAGES//
// SEARCH CHATS//
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}


//SEARCH CHAT//
messageSearch.addEventListener('keyup', searchMessage);

// HIGHLIGHT MESSAGE CARD//
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 3000);
})

// THEME //


// opens theme modal//
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//closes modal//
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

//close modal//
themeModal.addEventListener('click', closeThemeModal);


theme.addEventListener('click' , openThemeModal);

//Font

// remove active class from span 
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
    size.addEventListener('click', () => { 
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        // change font size of root html elemnts
    document.querySelector('html').style.fontSize = fontSize;
    })

})

// CHANGE PRIMARY COLORS//

// REMOVE ACTIVE CLASS FROM COLOR

const changeActive = () => {
    colors.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colors.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActive();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// theme background

let lightColor;
let whiteColor;
let darkColor;

const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightColor);
    root.style.setProperty('--white-color-lightness', whiteColor);
    root.style.setProperty('--dark-color-lightness', darkColor);
}

bg1.addEventListener('click', () => {

    bg1.classList.add('active');

    bg2.classList.remove('active');
    bg3.classList.remove('active');
    
    window.location.reload();
})


bg2.addEventListener('click', () => {
    darkColor = '95%';
    whiteColor = '20%';
    lightColor = '15%';

    bg2.classList.add('active');

    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColor = '95%';
    whiteColor = '10%';
    lightColor = '0%';

    bg3.classList.add('active');

    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})



