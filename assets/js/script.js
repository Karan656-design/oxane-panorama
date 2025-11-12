//<---------------------------- Karan --------------------------------->
const navbarElement = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const logoImg = navbarElement.querySelector(".logo img");
  const cntctBtn = navbarElement.querySelector(".cntct-btn button");
  if (window.scrollY > 50) {
    navbarElement.classList.add("navbar-scrolled");
    if (logoImg) logoImg.style.filter = "none";
    if (cntctBtn) {
      cntctBtn.style.color = "var(--text-dark-blue)";
      cntctBtn.style.background = "#f6fbfa";
    }
  } else {
    navbarElement.classList.remove("navbar-scrolled");
    if (logoImg) logoImg.style.filter = "brightness(0) invert(1)";
    if (cntctBtn) {
      cntctBtn.style.color = "white";
      cntctBtn.style.background = "";
    }
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
    },
  },
  {
    id: "detailsTwo",
    class: "details details-photoTwo",
    h2: "Leverage Management",
    p: "Comprehensive capabilities for capital markets, finance, and treasury teams to digitally manage all aspects of leverage and fund finance—bringing both borrowers and lenders onto one private credit technology platform.",
    link: {
      href: "/private-credit-software/oxane-panorama/leverage-facility-management",
    },
  },
  {
    id: "detailsThree",
    class: "details details-photoThree",
    h2: "Enterprise Data Management",
    p: "Ingest, consolidate, and validate unstructured data at scale. Break data silos, connect upstream and downstream, and build a single source of truth for all your teams.",
    link: {
      href: "/private-credit-software/oxane-panorama/enterprise-data-management",
    },
  },
  {
    id: "detailsFour",
    class: "details",
    h2: "Servicing",
    p: "Digital-first servicing and agency support including facility agent, security agent, verification agent, master servicing, and backup servicing.",
    link: {
      href: "/private-credit-software/oxane-panorama/servicing",
    },
  },
  {
    id: "detailsFive",
    class: "details",
    h2: "Valuations",
    p: "Add rigor and transparency to valuations of corporate loans, granular loan portfolios, risk transfer trades, and other illiquid or hard-to-value assets.",
    link: {
      href: "/private-credit-software/oxane-panorama/valuations",
    },
  },
  {
    id: "detailsSix",
    class: "details",
    h2: "Deal Pipeline Management",
    p: "Stay on top of your deal flow, get clear visibility into your pipeline, and centrally monitor and track progress on all your private credit deals.",
    link: {
      href: "/private-credit-software/oxane-panorama/pipeline-management",
    },
  },
  {
    id: "detailsSeven",
    class: "details",
    h2: "AI for Private Credit",
    p: "Leverage AI-powered capabilities and unlock greater productivity, higher accuracy, and deeper insights across private credit portfolios.",
    link: {
      href: "/private-credit-software/oxane-panorama/AI",
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
                                        <a href="${item.link.href}" target="_blank" class="button button__blue">Learn more</a>
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

      // Create ScrollTrigger: start when .gallery hits the top of the viewport
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",        // when the top of .gallery hits the top of the viewport
        end: "bottom bottom",
        pin: ".right",
        pinSpacing: false,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          // Calculate index, clamp to last index at the end
          const totalItems = photos.length;
          let currentIndex = Math.floor(progress * totalItems);

          if (currentIndex === totalItems || progress === 1) {
            currentIndex = totalItems - 1;
            const rightDiv = document.querySelector(".right");
            if (rightDiv) rightDiv.style.height = "fit-content";
          } else {
            const rightDiv = document.querySelector(".right");
            if (rightDiv) rightDiv.style.height = "100%";
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

      // In case layout changed during/after DOM updates
      ScrollTrigger.refresh();
    }, 5);
  }
});

// <------------------------ AKANKSHA ------------------------------->

// const img = document.createElement("img");
const dynamicArrO = [
  {
    title: "Everything in one place",
    description: "Manage all your assets and liabilities across the investment lifecycle on one platform. Centralize all data management and investment management processes.",
    image: "/assets/images/Product/oxane-panorama/illustrations/1.svg",
    progress: 0,
    started: false,
    inView: true
  },
  {
    title: "Unlock scalability and control",
    description: "Accelerate your growth with confidence on an operational infrastructure that scales seamlessly with your portfolio while maintaining rigorous risk controls",
    image: "/assets/images/Product/oxane-panorama/illustrations/2.svg",
    progress: 0,
    started: false,
    inView: true
  },
  {
    title: "Proactively manage risk",
    description: "Get complete visibility on relevant risk metrics at portfolio and transaction levels. Identify risk early so you can address it proactively.",
    image: "/assets/images/Product/oxane-panorama/illustrations/4.svg",
    progress: 0,
    started: false,
    inView: true
  },
  {
    title: "Improve rigor and transparency",
    description: "Improve efficiency, rigor, and transparency across all processes with a digital-first approach to valuations, servicing, and pipeline management.",
    image: "/assets/images/Product/oxane-panorama/illustrations/5.svg",
    progress: 0,
    started: false,
    inView: true
  },
  {
    title: "Minimize operational risk",
    description: "Replace disconnected systems and manual workflows with centralized data, reporting, and monitoring. Oxane Panorama provides a single source of truth, minimizing operational risk for all private credit strategies.",
    image: "/assets/images/Product/oxane-panorama/illustrations/6.svg",
    progress: 0,
    started: false,
    inView: true
  },
  {
    title: "Empower your team",
    description: "Simplify, digitalize, and transform investment management processes so your team can focus on driving investment outcomes.",
    image: "/assets/images/Product/oxane-panorama/illustrations/7.svg",
    progress: 0,
    started: false,
    inView: true
  }
];

const dynamicData = document.getElementById("leftContent2");
let activeIndex = 0;
let autoProgressInterval = null;


function updateDynamicInfo(index) {
  const item = dynamicArrO[index];
  document.querySelector(".dynamicHeading").textContent = item.title;
  document.querySelector(".description").textContent = item.description;
  document.getElementById("imageDisplay").innerHTML = `<img src="${item.image}" alt="${item.title}" class="dynamic-rgt-img">`;
}

function handleSectionClick(index) {
   if (autoProgressInterval) {
    clearInterval(autoProgressInterval);
    autoProgressInterval = null;
  }


  dynamicArrO.forEach((section, i) => {
    section.progress = i === index ? 100 : 0;
    section.started = false;

    const progressBar = document.querySelectorAll(".progress-bar")[i];
    const titleSpan = document.querySelectorAll(".section-title")[i];

    progressBar.style.width = section.progress + "%";
    titleSpan.style.color = section.progress === 100 ? "#8EFECC" : "#e7f8f4";
  });

  activeIndex = index;
  updateDynamicInfo(index);
}

function autoFillProgress(index) {
  if (index >= dynamicArrO.length) return;

  const section = dynamicArrO[index];
  if (section.started || !section.inView) return;

  section.started = true;
  updateDynamicInfo(index);

  const progressBar = document.querySelectorAll(".progress-bar")[index];
  const titleSpan = document.querySelectorAll(".section-title")[index];

  autoProgressInterval = setInterval(() => {
    if (section.progress < 100) {
      section.progress += 1;
      progressBar.style.width = section.progress + "%";
    } else {
      clearInterval(autoProgressInterval);
      autoProgressInterval = null;
      titleSpan.style.color = "#8EFECC";
      autoFillProgress(index + 1);
    }
  }, 50);
}


function dynamicLoad() {
  dynamicArrO.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "section";
    wrapper.dataset.index = index;

    const progressBarWrapper = document.createElement("div");
    progressBarWrapper.className = "progress-bar-wrapper";
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style.width = item.progress + "%";
    progressBarWrapper.appendChild(progressBar);

    const sectionHeader = document.createElement("div");
    sectionHeader.className = "section-header";
    const titleSpan = document.createElement("span");
    titleSpan.className = "section-title";
    titleSpan.textContent = item.title;
    titleSpan.style.color = item.progress === 100 ? "#8EFECC" : "#e7f8f4";
    sectionHeader.appendChild(titleSpan);

    wrapper.appendChild(progressBarWrapper);
    wrapper.appendChild(sectionHeader);
    dynamicData.appendChild(wrapper);

   
    wrapper.addEventListener("click", () => handleSectionClick(index));
  });

  updateDynamicInfo(0);
  setTimeout(() => autoFillProgress(0), 1000);
}
dynamicLoad()

// window.addEventListener("load", dynamicLoad);
