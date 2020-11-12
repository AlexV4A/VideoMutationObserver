
class VideoObserver {

    constructor() {
        this.detectVideo()
    }

    detectVideo() {
        const bodyObject = document.getElementsByTagName("BODY")[0]
        if (bodyObject) {
            // Options for the observer (which mutations to observe)
            const config = { attributes: true, childList: true, subtree: true };

            // Callback function to execute when mutations are observed
            const callback = ((mutationsList, observer) => {
                // Use traditional 'for loops' for IE 11
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        if (mutation.addedNodes[0].nodeName === "VIDEO") {
                            mutation.addedNodes[0].onerror = function() {
                                console.log("Error! Something went wrong");
                            };
                            mutation.addedNodes[0].onloadstart = function() {
                                console.log("Played! Something worked well");
                            };
                        }
                    }
                    else if (mutation.type === 'attributes') {
                        console.log('The ' + mutation.attributeName + ' attribute was modified.');
                    }
                }
            });

            // Create an observer instance linked to the callback function
            const observer = new MutationObserver(callback);

            // Start observing the target node for configured mutations
            observer.observe(bodyObject, config);
        }
    }

}

export default new VideoObserver()
