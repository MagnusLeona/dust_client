export const alert = function (params) {

  return new Promise((resolve, reject) => {
    let event = new CustomEvent("alert", { detail: { ...params } });
    window.addEventListener("alert-call-back", ({ detail }) => {
      console.log("alert function get callback", detail)
      resolve(detail);
    })
    window.dispatchEvent(event);
  })
}

export const dustDispatch = function ({ name, params }) {
  let event = new CustomEvent(name, { detail: { ...params } })
  window.dispatchEvent(event);
}
