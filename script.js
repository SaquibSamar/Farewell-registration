const form =
document.getElementById("farewellForm");

form.addEventListener(
  "submit",
  function(e){

    e.preventDefault();

    alert(
      "Registration Submitted 🎉"
    );

    form.reset();
  }
);

// Smooth Scroll
function scrollToForm(){

  document
  .getElementById("registration")
  .scrollIntoView({
    behavior:"smooth"
  });

}

// Scroll Reveal Animation
const hiddenElements =
document.querySelectorAll(".hidden");

window.addEventListener(
  "scroll",
  ()=>{

    hiddenElements.forEach(el=>{

      const elementTop =
      el.getBoundingClientRect().top;

      if(elementTop < window.innerHeight - 100){
        el.classList.add("show");
      }

    });

  }
);