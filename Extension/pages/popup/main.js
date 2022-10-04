(async ()=>{
  window.addEventListener("message", async function (e) {
    console.log(e)
    // try {
    //   let name = e.data.name;
    //   let meta = e.data.meta;
    //   let data = e.data.data;
    //   console.log(e.data)
      
    //   if (name === "close_button_click") {
    //     window.close();
    //   } else if (name === "handle_change") {
    //     chrome.storage.local.set(data.storage);
    //   } else if (name === "open_home") {
    //     chrome.tabs.create({
    //       active: true,
    //       url: "https://opaque.app/",
    //     });
    //   } else if (name === "open_email") {
    //     chrome.tabs.create({
    //       active: true,
    //       url: "mailto:info@opaque.app",
    //     });
    //   }
    // } catch (e) {
    //   throw e;
    // }
  });
})();

// window.top.postMessage({
//   name: "handle_change",
//   data: {
//     storage: "test"
//   }
// }, "*")

