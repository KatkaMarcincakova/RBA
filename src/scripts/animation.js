const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let doneCount = false;

function animation(event) {
    let iteration = 0;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 36)];
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 0.1;
    }, 50);
}

function startManualAnimation(id) {
    const targetElement = document.getElementById(id);
    targetElement.innerText = targetElement.dataset.value;
    animation({ target: targetElement });
}

document.getElementById("kidsCount").onmouseover = event => {
    animation(event);
}

document.getElementById("projectsCount").onmouseover = event => {
    animation(event);
}

document.getElementById("schoolsCount").onmouseover = event => {
    animation(event);
}

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-primary');
  } else {
      navbar.classList.remove('bg-primary');
      navbar.classList.add('bg-transparent');
  }

  console.log(this.document.getElementById("statsSection").offsetTop);

  if (window.scrollY > this.document.getElementById("statsSection").offsetTop - this.window.innerHeight + 100 && !doneCount) {
      startManualAnimation("kidsCount");
      startManualAnimation("schoolsCount");
      startManualAnimation("projectsCount");
      doneCount = true;
  }
});