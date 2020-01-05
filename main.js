window.addEventListener("load", () => {
  const links = document.querySelectorAll(".link");
  //   const colors = [
  //     "#60d394",
  //     "#d36060",
  //     "#c060d3",
  //     "#d3d160",
  //     "#606bd3",
  //     "#60c2d3"
  //   ];

  links.forEach((item, index) => {
    item.addEventListener("click", function(evt) {
      // sounds[index].play();
      // createBubble(index);
      evt.preventDefault();
      item.classList.add("checked");
    });
  });

  const send = document.querySelector("#send");
  send.addEventListener("click", evt => {
    let number = 0;
    links.forEach(item => {
      if (item.classList.contains("checked") == true) {
        number = number + 1;
      }
    });
    if (number === 6) {
    } else {
      evt.preventDefault();
      alert(
        "You have not completed all the tasks. Please complete them to move forward!"
      );
    }
  });
});
