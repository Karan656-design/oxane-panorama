//<---------------------------- Karan --------------------------------->
const navbarElement = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const logoImg = navbarElement.querySelector(".logo img");
  const cntctBtn = navbarElement.querySelector(".cntct-btn button:hover");
  if (window.scrollY > 100) {
    navbarElement.classList.add("navbar-scrolled");
    logoImg.style.filter = "none";
    cntctBtn.style.color = "var(--text-dark-blue)";
  } else {
    navbarElement.classList.remove("navbar-scrolled");
    logoImg.style.filter = "brightness(0) invert(1)";
    cntctBtn.style.color = "white";
  }
});

const detailsData = [
  {
    id: "detailsZero",
    class: "details details-photoZero",
    h2: "Oxane Panorama Suite of Solutions",
    p: "Oxane Panorama’s modular architecture makes it a versatile private credit software platform that adapts to your investment process.",
    link: null,
  },
  {
    id: "detailsOne",
    class: "details details-photoOne",
    h2: "Portfolio Management",
    p: "Comprehensive data management, risk monitoring, reporting, and analytics to streamline portfolio management for all private credit investments on one single solution.",
    link: {
      href: "/private-credit-software/oxane-panorama/portfolio-management",
      text: "Learn more",
    },
  },
  {
    id: "detailsTwo",
    class: "details details-photoTwo",
    h2: "Leverage Management",
    p: "Comprehensive capabilities for capital markets, finance, and treasury teams to digitally manage all aspects of leverage and fund finance—bringing both borrowers and lenders onto one private credit technology platform.",
    link: {
      href: "/private-credit-software/oxane-panorama/leverage-facility-management",
      text: "Learn more",
    },
  },
  {
    id: "detailsThree",
    class: "details details-photoThree",
    h2: "Enterprise Data Management",
    p: "Ingest, consolidate, and validate unstructured data at scale. Break data silos, connect upstream and downstream, and build a single source of truth for all your teams.",
    link: {
      href: "/private-credit-software/oxane-panorama/enterprise-data-management",
      text: "Learn more",
    },
  },
  {
    id: "detailsFour",
    class: "details",
    h2: "Servicing",
    p: "Digital-first servicing and agency support including facility agent, security agent, verification agent, master servicing, and backup servicing.",
    link: {
      href: "/private-credit-software/oxane-panorama/servicing",
      text: "Learn more",
    },
  },
  {
    id: "detailsFive",
    class: "details",
    h2: "Valuations",
    p: "Add rigor and transparency to valuations of corporate loans, granular loan portfolios, risk transfer trades, and other illiquid or hard-to-value assets.",
    link: {
      href: "/private-credit-software/oxane-panorama/valuations",
      text: "Learn more",
    },
  },
  {
    id: "detailsSix",
    class: "details",
    h2: "Deal Pipeline Management",
    p: "Stay on top of your deal flow, get clear visibility into your pipeline, and centrally monitor and track progress on all your private credit deals.",
    link: {
      href: "/private-credit-software/oxane-panorama/pipeline-management",
      text: "Learn more",
    },
  },
  {
    id: "detailsSeven",
    class: "details",
    h2: "AI for Private Credit",
    p: "Leverage AI-powered capabilities and unlock greater productivity, higher accuracy, and deeper insights across private credit portfolios.",
    link: {
      href: "/private-credit-software/oxane-panorama/AI",
      text: "Learn more",
    },
  },
];

function createDetailsHTML(item) {
  return `
                            <div id="${item.id}" class="${item.class}">
                                <p class="small text-teal-green">Grow with Confidence</p>
                                <h2>${item.h2}</h2>
                                <p>${item.p}</p>
                                ${
                                  item.link
                                    ? `
                                    <div class="btn-group">
                                        <a href="${item.link.href}" target="_blank" class="button button__blue">${item.link.text}</a>
                                    </div>
                                `
                                    : ""
                                }
                            </div>
                        `;
}

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("detailsWrapper");
  wrapper.innerHTML = detailsData.map(createDetailsHTML).join("");

  gsap.registerPlugin(ScrollTrigger);
  if (window.innerWidth >= 768) {
    // Ensure DOM is updated before running GSAP logic
    setTimeout(() => {
      // Set initial states
      gsap.set(".photo:not(:first-child)", { autoAlpha: 0, scale: 0.9 });
      gsap.set(".details:not(:first-child)", { autoAlpha: 0 });

      // Cache arrays for efficiency
      const photos = gsap.utils.toArray(".photo");
      const detailsArr = gsap.utils.toArray(".details");

      // Create ScrollTrigger
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          console.log("Scroll Progress:", progress);

          // Calculate index, but clamp to last index at the end
          const totalItems = photos.length;
          console.log("Total Items:", totalItems);

          let currentIndex = Math.floor(progress * totalItems);
          console.log("Calculated Index:", currentIndex);

          if (currentIndex === totalItems || progress === 1) {
            currentIndex = totalItems - 1;
            // Set .right height to fit-content at the end
            const rightDiv = document.querySelector(".right");
            if (rightDiv) {
              rightDiv.style.height = "fit-content";
            }
          } else {
            // Reset .right height to 100% during scroll
            const rightDiv = document.querySelector(".right");
            if (rightDiv) {
              rightDiv.style.height = "6605px";
            }
          }

          // Synchronize Photos
          photos.forEach((photo, index) => {
            gsap.to(photo, {
              autoAlpha: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 0.9,
              duration: 0.5,
            });
          });

          // Synchronize Details
          detailsArr.forEach((details, index) => {
            gsap.to(details, {
              autoAlpha: index === currentIndex ? 1 : 0,
              duration: 0.5,
            });
          });
        },
      });
    }, 5);
  }
});

// <------------------------ AKANKSHA ------------------------------->

const dynamicArr = [
  "Everything in one place",
  "Unlock scalability and control",
  "Proactively manage risk",
  "Improve rigor and transparency",
  "Minimize operational risk",
  "Empower your team",
];
const img = document.createElement("img");
const dynamicArrO = [
  {
    h2: "Everything in one place",
    description:
      "Manage all your assets and liabilities across the investment lifecycle on one platform. Centralize all data management and investment management processes.",
    link: {
      href: "/assets/images/Product/oxane-panorama/illustrations/x01.svg",
      text: "Everything in one place",
    },
    // 'img':'D:\workspace-akanksha'
  },
  {
    h2: "Unlock scalability and control",
    description:
      "Manage all your assets and liabilities across the investment lifecycle on one platform. Centralize all data management and investment management processes.",
    img: "D:workspace-akankshaassetsimagesProductoxane-panoramaillustrations\x01.svg",
  },
  {
    h2: "Proactively manage risk",
    description:
      "Manage all your assets and liabilities across the investment lifecycle on one platform. Centralize all data management and investment management processes.",
    img: "D:workspace-akankshaassetsimagesProductoxane-panoramaillustrations\x01.svg",
  },
  {
    h2: "Improve rigor and transparency",
    description:
      "Manage all your assets and liabilities across the investment lifecycle on one platform. Centralize all data management and investment management processes.",
    img: "D:workspace-akankshaassetsimagesProductoxane-panoramaillustrations\x01.svg",
  },
  {
    h2: "Minimize operational risk",
    description:
      "Manage all your assets and liabilities across the investment lifecycle on one platform. Centralize all data management and investment management processes.",
    img: "D:workspace-akankshaassetsimagesProductoxane-panoramaillustrations\x01.svg",
  },
  {
    h2: "Empower your team",
    description:
      "Manage all your assets and liabilities across the investment lifecycle on one platform. Centralize all data management and investment management processes.",
    img: "D:workspace-akankshaassetsimagesProductoxane-panoramaillustrations\x01.svg",
  },
];
// console.log(dynamicArrO[img]);
const imageUrl = [""];
const dynamicData = document.getElementById("leftContent2");
const dynamicDisplay = document.getElementById("innerContainerR");
// dynamicDisplay.className = "noDisplay";

// Function to create left side content
function leftSide(item) {
  const progressDiv = document.createElement("div");
  progressDiv.className = "progressBar";
  dynamicData.appendChild(progressDiv);

  const contentDiv = document.createElement("div");
  contentDiv.className = "dynamicContent";
  contentDiv.textContent = item;
  dynamicData.appendChild(contentDiv);

  return contentDiv; // Return for use in event listener
}

dynamicArr.forEach((item) => {
  //<------------ left side conetent ---------------->
  const contentDiv = leftSide(item);

  //<------------ right side display ---------------->
  contentDiv.addEventListener("click", () => {
    //  dynamicDisplay.className = "display";

    // Select the heading element correctly
    const headingDynamic = document.querySelector(".dynamicHeading");
    headingDynamic.textContent = item;

    // Select the image display container
    const imageDisplay = document.getElementById("imageDisplay");
    imageDisplay.innerHTML = `<img src="${dynamicArrO[img]}" alt="${item}" style="max-width:100%; height:auto;">`;
  });
});
