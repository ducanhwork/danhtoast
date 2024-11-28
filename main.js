function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-bell",
      error: "fas fa-times-circle",
    };
    const icon = icons[type];
    const toast = document.createElement("div");
    //auto remove toast
    const autoRemoveID = setTimeout(() => {
      main.removeChild(toast);
    }, duration + 1000);
    //remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast_close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveID);
      }
    };
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${duration}s forwards;`;
    toast.innerHTML = `
    <div class="toast_icon">
          <i class="${icon}"></i>
        </div>
        <div class="toast_body">
          <h3 class="toast_title">${title}</h3>
          <p class="toast_msg">${message}</p>
        </div>
        <div class="toast_close">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
    `;
    main.appendChild(toast);
  }
}
toast({
  title: "Warning",
  message: "This is a warning toast message",
  type: "warning",
  duration: 3000,
});
const scs_btn = document.querySelector(".btn--success");
scs_btn.addEventListener("click", () => {
  toast({
    title: "Success",
    message: "This is a success toast message",
    type: "success",
    duration: 3000,
  });
});
const wrn_btn = document.querySelector(".btn--warn");
wrn_btn.addEventListener("click", () => {
  toast({
    title: "Warning",
    message: "This is a warning toast message",
    type: "warning",
    duration: 3000,
  });
  console.log("sd", document.querySelector(".toast").style.animation);
});
