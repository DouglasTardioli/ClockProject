function clock() {
  const clock = document.querySelector(".clock");

  let segundos = 0;
  let timer;
  function CreatedHourSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  function initClock() {
    timer = setInterval(() => {
      segundos++;
      clock.innerHTML = CreatedHourSeconds(segundos);
    }, 1000);
  }

  document.addEventListener("click", (ev) => {
    const el = ev.target;
    if (el.classList.contains("init")) {
      clock.classList.remove("stoped");
      clearInterval(timer);
      initClock();
    }

    if (el.classList.contains("stop")) {
      clock.classList.add("stoped");

      clearInterval(timer);
    }

    if (el.classList.contains("zero")) {
      clock.classList.remove("stoped");
      clearInterval(timer);
      clock.innerHTML = "00:00:00";
      segundos = 0;
    }
  });
}

clock();
