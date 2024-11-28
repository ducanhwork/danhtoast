// Create a style element
const style = document.createElement('style');
style.textContent = `
.toast {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 20px 0;
    border-radius: 5px;
    border-left: 4px solid;
    min-width: 100px;
    max-width: 400px;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.08);
    z-index: 99999;
}
.toast + .toast {
    margin-top: 24px;
}
.toast_icon,
.toast_close {
    padding: 0 16px;
}
.toast_icon {
    font-size: 24px;
}
.toast--success > .toast_icon {
    color: #4caf50;
}
.toast--warning > .toast_icon {
    color: #e7c541;
}
.toast--success {
    border-color: #4caf50;
}
.toast--warning {
    border-color: #e7c541;
}
.toast_body {
    flex-grow: 1;
}
.toast_title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
}
.toast_msg {
    font-size: 14px;
    color: #888;
    margin-top: 6px;
    line-height: 1.5;
}
.toast_close {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
}
`;

// Append the style element to the head
document.head.appendChild(style);
//JS Code
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
