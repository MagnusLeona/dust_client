export const alert = function (params) {
  return new Promise((resolve) => {
    window.addEventListener("alert-call-back", ({ detail }) => {
      resolve(detail.operation);
    })
    let event = new CustomEvent("alert", { detail: { ...params } });
    window.dispatchEvent(event);
  })
}

export const confirm = function (params) {
  return new Promise((resolve) => {
    window.addEventListener("confirm-call-back", ({ detail }) => {
      resolve(detail.operation)
    })
    let event = new CustomEvent("confirm", { detail: { ...params } });
    window.dispatchEvent(event);
  })
}

export const goLogin = function (params) {
  return new Promise((resolve) => {
    window.addEventListener("login-call-back", ({ detail }) => {
      resolve(detail.status)
    })
    let event = new CustomEvent("login", { detail: { ...params } });
    window.dispatchEvent(event);
  })
}

export const toast = function (params) {
  let event = new CustomEvent("toast", { detail: { ...params } });
  window.dispatchEvent(event);
}

export const dustDispatch = function ({ name, params }) {
  let event = new CustomEvent(name, { detail: { ...params } })
  window.dispatchEvent(event);
}
