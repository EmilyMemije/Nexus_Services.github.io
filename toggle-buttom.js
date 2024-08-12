const d= document;

const active=d.querySelector(".container-list");

function menu (btn,panel,menulink,btn2)
{
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn))
        {
            d.querySelector(panel).classList.toggle("is-active");
        }
        if(e.target.matches(menulink))
        {
            d.querySelector(panel).classList.remove("is-active");
        }
        if(e.target.matches(btn2))
            {
                d.querySelector(panel).classList.toggle("is-active");
            }
    })
}

menu(".abrir1",".panel","menu-link",".abrir")