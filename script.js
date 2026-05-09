const form =
document.getElementById("farewellForm");

form.addEventListener(
  "submit",
  async function(e){

    e.preventDefault();

    const inputs =
    form.querySelectorAll("input");

    const name = inputs[0].value;
    const phone = inputs[1].value;
    const course = inputs[2].value;

    const file =
    inputs[3].files[0];

    // Loading
    const button =
    form.querySelector("button");

    button.innerText =
    "Uploading...";

    // Upload To Cloudinary
    const data =
    new FormData();

    data.append(
      "file",
      file
    );

    data.append(
      "upload_preset",
      "farewell_upload"
    );

    const cloudinaryResponse =
    await fetch(
      "https://api.cloudinary.com/v1_1/dsbougenq/image/upload",
      {
        method:"POST",
        body:data
      }
    );

    const cloudinaryData =
    await cloudinaryResponse.json();

    // Send To Google Sheet
    await fetch(
      "https://script.google.com/macros/s/AKfycbzsZ0xsBjPrcfpzE-QjEX3jwY7GZVFdhCm8pBBrrMQZb4zXGCg8KrNMdLPPWha1lqK5zQ/exec",
      {
        method:"POST",

        body:JSON.stringify({
          name:name,
          phone:phone,
          course:course,
          screenshot:
          cloudinaryData.secure_url
        })
      }
    );

    button.innerText =
    "Confirm Registration";

    alert(
      "Registration Successful 🎉"
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

// Scroll Reveal
const hiddenElements =
document.querySelectorAll(".hidden");

window.addEventListener(
  "scroll",
  ()=>{

    hiddenElements.forEach(el=>{

      const elementTop =
      el.getBoundingClientRect().top;

      if(
        elementTop <
        window.innerHeight - 100
      ){
        el.classList.add("show");
      }

    });

  }
);
