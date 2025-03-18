document.addEventListener("DOMContentLoaded", function() {
    console.log('custom.js loaded');
    const toggleButton = document.getElementById('sidebar-toggle');
    const navDom = document.getElementById('sidebar');
    // console.log(navDom)
    const getNavClose = () => {
        const ariaHidden = navDom.getAttribute('aria-hidden');
        return ariaHidden === 'true';
    }

    if (toggleButton) {
        if (!getNavClose()) {
            toggleButton.click();
        }
        // setTimeout(() => {
        //     if (!getNavClose()) {
        //         toggleButton.click();
        //     }
        // },0)
    }
});