let pass_reason_field_id = null;
let org_type_field_id = null;
let url_page_domain = null;
(async function () {
  window.addEventListener("message", async function (e) {
    try {
      let name = e.data.name;
      let meta = e.data.meta;
      let data = e.data.data;
      if (name === "close_button_click") {
        window.close();
      } else if (name === "handle_change") {
        chrome.storage.local.set(data.storage);
      } else if (name === "open_home") {
        chrome.tabs.create({
          active: true,
          url: "https://opaque.app/",
        });
      } else if (name === "open_email") {
        chrome.tabs.create({
          active: true,
          url: "mailto:info@opaque.app",
        });
      }
    } catch (e) {
      throw e;
    }
  });

  // !Async Api function-------------------------------------------------------------------------

  // !Help function----------------------------------------------------------------------------------------------------------
  function send_message_to_iframe(body) {
    const iframe = document.querySelector("iframe");
    if (!iframe) return;
    iframe.contentWindow.postMessage(body, "*");
  }

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // !---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  let config = await fetch("/config.json");

  config = await config.json();

  let storage = await chrome.storage.local.get(null);
  let manifest = chrome.runtime.getManifest();
  iframe = document.createElement("iframe");
  iframe.name = JSON.stringify({
    context: "iframe",
    config,
    manifest,
    storage,
  });
  iframe.src = config.popup_urls[config.mode];

  document.body.append(iframe);
})();
