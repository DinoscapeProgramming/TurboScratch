let embed = document.createElement("iframe");
embed.src = `https://turbowarp.org/${location.pathname.split("/")[2]}/embed?username=${document.querySelector(".profile-name").innerText}`;
embed.allowFullscreen = true;
embed.style.cssText = `
  border: none;
  width: 485px;
  height: 410px;
`;
document.querySelector(".stage-wrapper_stage-wrapper_odn2t").replaceWith(embed);