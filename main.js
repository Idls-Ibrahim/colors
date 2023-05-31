const navClick = document.querySelector('.click');
const listBar = document.querySelector('.nav-bar');
const btnImg = document.querySelector('.btn');
const btnValue = document.querySelector('.btn a');
const imgHidden =  document.querySelectorAll('.hidden');
const projectImg = document.querySelector(".project-img");
const closebtn = document.querySelector('.fa-close');
const list = document.querySelectorAll('.ulLis li');
const lista = document.querySelectorAll('.ulLis li a');
const body = document.querySelector('body');
const moon = document.querySelector('.fa-moon');
const sun = document.querySelector('.fa-sun');
const listbars = document.querySelector('.fa-bars');
const lights = document.querySelectorAll('.light');
const listcontact = document.querySelectorAll(".liscontact li i");

moon.onclick = ()=>{
    sun.classList.remove("display");
    sun.style.cssText = "transition: 1s ease; color:#252525";
    moon.classList.add("display");
    moon.style.cssText = "transition: 1s ease;";
    body.classList.add("dark");
    body.style.cssText = "transition: 1s ease;";
    listbars.style.cssText = "color:#252525";
    lights.forEach((e)=>{
        e.classList.remove("light");
        e.classList.add("darks");
    });
    lista.forEach((e)=>{
        e.style.cssText = "color:#ffffff";
    });
    listcontact.forEach((e)=>{
        e.style.cssText = "color:#ffffff";
    });
}
sun.onclick = ()=>{
    sun.style.cssText = "transition: 1s ease;";
    moon.style.cssText = "transition: 1s ease;";
    body.style.cssText = "transition: 1s ease;";
    sun.classList.add("display");
    moon.classList.remove("display");
    body.classList.remove("dark");
    lights.forEach((e)=>{
        e.classList.add("light");
        e.classList.remove("darks");
    })
    lista.forEach((e)=>{
        e.style.cssText = "color:#252525";
    });
    listcontact.forEach((e)=>{
        e.style.cssText = "color:#252525";
    });
}

list.forEach((ele)=>{
    ele.onclick = ()=>{
        list.forEach(ele=>{
            ele.classList.remove("active");
         })
         ele.classList.add("active");
    }
})

navClick.addEventListener('click', ()=>{
    listBar.classList.add('open');
    listBar.style.cssText = "transition: 1s ease;";
});
closebtn.addEventListener('click', ()=>{
    listBar.classList.toggle('open');
    listBar.style.cssText = "transition: 1s ease;";
});
window.onscroll = ()=>{
    listBar.classList.remove('open');
    navClick.classList.remove("move");
}

btnImg.addEventListener('click', ()=>{
    imgHidden.forEach((img)=>{
        img.classList.toggle('hidden');
        img.style.cssText = "transition: 1s ease;";
    });
    projectImg.classList.toggle('grid-tempelat');
    if(btnValue.textContent === "عرض المزيد"){
    btnValue.innerHTML = 'عرض اقل';
    }
    else{
    btnValue.innerHTML = 'عرض المزيد';
    }
});


