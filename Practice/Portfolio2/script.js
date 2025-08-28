const title = document.querySelector(".title");
const footer = document.querySelector(".footer");
const container = document.querySelector(".icon-container");
const icons = document.querySelectorAll(".icon");
const home = document.getElementById("home");
const lightIcon = document.getElementById("light");
const curtain = document.querySelector(".curtain");
const panels = document.querySelectorAll(".panel");
// 아이콘 클릭 시
icons.forEach(icon => {
  icon.addEventListener("click", () => {
    if (icon.id === "home") {
      // 메인화면 복귀
      title.style.display = "flex";
      footer.style.display = "flex";
      home.style.display = "none";
      lightIcon.style.display = "flex";

      icons.forEach(i => i.classList.remove("active"));
      panels.forEach(panel => panel.classList.remove("active"));
      container.classList.remove("left-align");

      // 1단계: opacity 먼저 복원
      setTimeout(() => {
        container.classList.remove("hide");
        // 3단계: 제목/푸터 복원
        title.classList.remove("hide");
        footer.classList.remove("hide");

        // 커튼 다시 켜기
        if (lightOn) {
          showCurtain();
        } else {
          hideCurtain();
        }

      }, 500);

      return;
    }
    if (icon.id === "light") return;
    hideCurtain(); // 커튼 제거
    // active 표시
    icons.forEach(i => i.classList.remove("active"));
    icon.classList.add("active");

    panels.forEach(panel => {
      if (panel.id === `${icon.id}-panel`) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });

    if (container.classList.contains("left-align")) return;

    // 사라지기
    title.classList.add("hide");
    footer.classList.add("hide");
    container.classList.add("hide");

    setTimeout(() => {
      title.style.display = "none";
      footer.style.display = "none";
      // Home 아이콘 보이게
      home.style.display = "flex";
      lightIcon.style.display = "none";
      // 왼쪽 정렬로 전환 후 다시 나타남
      container.classList.remove("hide");
      container.classList.add("left-align");
    }, 300);
  });
});


// 커튼 보이기
function showCurtain() {
  curtain.style.display = "block";
  curtain.style.opacity = "1"; // 나타나게
  lightIcon.classList.add("glow");  // 전구 빛나게
}

// 커튼 숨기기
function hideCurtain() {
  curtain.style.opacity = "0"; // 투명화
  lightIcon.classList.remove("glow"); // 빛 효과 제거
}

document.addEventListener("mousemove", (e) => {
  if (!lightOn) return; // 꺼져 있으면 그림자 없음
  const x = e.clientX;
  const y = e.clientY;

  // radial-gradient의 원을 마우스 위치에 생성
  curtain.style.webkitMaskImage = `radial-gradient(circle 70vh at ${x}px ${y}px, transparent 0%, black 80%)`;
  curtain.style.maskImage = `radial-gradient(circle 70vh at ${x}px ${y}px, transparent 0%, black 80%)`;
});



let lightOn = false; // 기본값: 켜져 있음
hideCurtain();

light.addEventListener("click", () => {
  lightOn = !lightOn;

  if (lightOn) {
    showCurtain();
  } else {
    hideCurtain();
  }
});





document.addEventListener('mousemove', (e) => {
  if(!lightOn) {
    title.style.textShadow = 'none';
    return;
  }
  const rect = title.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;   // 타이틀 중심
  const cy = rect.top  + rect.height / 2;

  const dx = e.clientX - cx;
  const dy = e.clientY - cy;

  // 반대방향(빛이 마우스에 있다고 가정) -> 음수 부호
  const k = 10;                 // 값이 클수록 그림자 길이 짧아짐
  const ox = -dx / k;
  const oy = -dy / k;

  title.style.textShadow = `
    ${ox}px ${oy}px 6px rgba(0,0,0,0.7),
    ${ox*1.6}px ${oy*1.6}px 14px rgba(0,0,0,0.5),
    ${ox*2.2}px ${oy*2.2}px 22px rgba(0,0,0,0.35)
  `;
});
document.addEventListener('mouseleave', () => {
  title.style.textShadow = 'none';
});