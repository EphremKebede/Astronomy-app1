window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 0);

    for (let i = 0; i < anchors.length; i++){
        const anchor = anchors[i];

        anchor.addEventListener('.click', e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('ia-active');

            setTimeout(() => {
                window.location.href = target;
            }, 0);
        })
    }
}










//change background for the nav bar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('black_background', window.scrollY > 200);
})

//side bar toggle


document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".side_bar");
    const bodycancler = document.querySelector('.canlcer');
    const listofsearch = document.querySelector('.listofsearchitems');
    const search_cancler = document.querySelector('.search_overlay');


    document.querySelector(".icon_of_bar").addEventListener("click", () => {
        nav.classList.add("active");
        bodycancler.classList.add("canlceractivated");
        search_cancler.style.display = "none";
        listofsearch.style.display = "none";
    });


    document.querySelector(".canlcer").addEventListener("click", () => {
        nav.classList.remove("active");
        bodycancler.classList.remove("canlceractivated");
    });

    document.querySelector(".search_bar").addEventListener("click", () => {
        listofsearch.style.display = "inline-block";
        search_cancler.style.display = "inline-block";
    });
    // window.onscroll = () => {
    //     listcancel.style.display = "none";
    //     }

    search_cancler.addEventListener("click", () => {
        listofsearch.style.display = "none";
        search_cancler.style.display = "none";

    });

});






    // let navbar = document.querySelector('.side_bar');
    // let bodycancler = document.querySelector('.canlcer');


    // document.querySelector('.icon_of_bar').onclick = () => {
    //     navbar.classList.toggle('active');
    // }

    // document.querySelector('.icon_of_bar').onclick = () => {
    //     bodycancler.classList.add('canlceractivated');
    // }
    // document.querySelector('.icon_of_bar').onclick = () => {
    //     navbar.classList.toggle('active');
    // }


    // //togle with click
    // document.querySelector('.canlcer').onclick = () => {
    //     navbar.classList.remove('active');
    // }
    // //toggle with scroll
    // window.onscroll = () => {
    //     navbar.classList.remove('active');
    // }

    // search function pro

    // function displayFunction() {
    //     //Declare Variables

    //     var tobepressed, tobetoggled, bodyclass;
    //     tobepressed = document.querySelector('.search_bar');
    //     tobetoggled = document.querySelector('.listofsearchitems');
    //     bodyclass = document.querySelector('.main');

    //     if (tobetoggled.style.display = "none") {
    //         tobepressed.onclick = () => {
    //             tobetoggled.style.display = "inline-block";
    //         }

    //     } else {
    //         tobepressed.onclick = () => {
    //             tobetoggled.style.display = "none";
    //         }

    //         window.onscroll= () => {
    //             tobetoggled.style.display = "none";
    //         }

    //     }

    //     return tobepressed;
    // }
    //search








    function myFunction() {
        // Declare variables
        const listofsearch = document.querySelector('.listofsearchitems');
        var input, filter, ul, li, a, i, txtValue, errormsg;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName('li');
        errormsg = document.querySelector('.errormsg');

        // Loop through all list items, and hide those who don't match the search query

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                listofsearch.style.display = "inline-block";
                errormsg.style.display = "none";
            }
            else {
                li[i].style.display = "none";
                // listofsearch.style.display = "none";
                // errormsg.style.display = "block";


            }
        }
    }

//trying to figure out