const button = document.createElement("button");
button.innerText = "Click me";
button.onclick = () => import("./image_view").then(module => module.default());

document.body.appendChild(button);
