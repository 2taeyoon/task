if ("serviceWorker" in navigator) {
    //서브스워커가 있을 때(서비스워커 지원여부)
    navigator.serviceWorker.register('service-worker.js')
        .then((success) => {
            console.log("serviceWorker install success", success)
        })
        .catch((error) => {
            console.log("serviceWorker install error", error)
        })
}