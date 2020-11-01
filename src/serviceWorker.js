// My service worker

const serviceWorker = () => {
  let sw = `${process.env.PUBLIC_URL}/sw.js`
  navigator.serviceWorker.register(sw)
    .then((response) => console.warn("response", response))
    .catch((err) => console.error(err))
}


export default serviceWorker