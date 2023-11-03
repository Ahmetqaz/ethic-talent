let tabContainer = document.querySelectorAll(".tabContainer");
tabContainer.forEach((item) => {
  const tabBtn = item.querySelectorAll(".tabBtn");
  const tabEvent = item.querySelectorAll(".tabEvent");
  tabBtn.forEach((e) => {
    onTabClick(tabBtn, tabEvent, e);
  });
  function onTabClick(tabBtns, tabItems, item) {
    item.addEventListener("click", function (e) {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);
      if (currentBtn.classList.contains("active")) {
        const faq = currentBtn.parentElement.querySelector(".tabEvent");
        if (faq) {
          faq.classList.remove("active");
          currentBtn.classList.remove("active");
        }
      } else if (!currentBtn.classList.contains("active")) {
        tabBtns.forEach(function (item) {
          item.classList.remove("active");
        });

        tabItems.forEach(function (item) {
          item.classList.remove("active");
        });
        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      }
    });
  }
});

const tabs = document.querySelectorAll('[data-event="tab"]');

function forEachTabFromEvents(tabEvents, callback) {
  tabEvents.forEach((tabEvent) => {
    const tabSelector = tabEvent.dataset?.tab;
    const tab = tabSelector ? document.querySelector(tabSelector) : null;
    if (!tab) return;
    callback(tab, tabEvent);
  });
}
function tabClickHandler(tabEvent) {
  const group = tabEvent.dataset?.group;
  const groupTabEvents = group
    ? document.querySelectorAll(`[data-event="tab"][data-group="${group}"]`)
    : tabs;
  forEachTabFromEvents(groupTabEvents, (tab, eventButton) => {
    tab.classList.toggle("active", eventButton === tabEvent);
  });
}

tabs.forEach((tabEvent) => {
  tabEvent.onclick = function () {
    tabClickHandler(tabEvent);
  };
});
