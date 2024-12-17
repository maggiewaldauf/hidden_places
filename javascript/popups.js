// Ensure the DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded. Popup scripts are ready!");

    // Select elements for Krampus Popup
    const popupOverlay = document.getElementById("popupOverlay");
    const krampusPopup = document.getElementById("krampusPopup");
    const closePopupBtn = document.getElementById("closePopup");
    const openPopupBtn = document.getElementById("openPopupBtn");

    // Select elements for Newsletter Popup
    const newsletterPopupOverlay = document.getElementById("newsletterPopupOverlay");
    const newsletterConfirmationPopup = document.getElementById("newsletterConfirmationPopup");
    const openNewsletterConfirmationBtn = document.getElementById("openNewsletterConfirmationBtn");
    const closeNewsletterConfirmationBtn = document.getElementById("closeNewsletterConfirmationPopup");

    // Shared function to show a popup
    function showPopup(overlay, popup) {
        if (overlay && popup) {
            overlay.style.display = "block";
            popup.style.display = "block";
        }
    }

    // Shared function to hide a popup
    function hidePopup(overlay, popup) {
        if (overlay && popup) {
            overlay.style.display = "none";
            popup.style.display = "none";
        }
    }

    // Krampus Popup logic
    if (openPopupBtn && closePopupBtn && popupOverlay && krampusPopup) {
        openPopupBtn.addEventListener("click", function () {
            showPopup(popupOverlay, krampusPopup);
        });

        closePopupBtn.addEventListener("click", function () {
            hidePopup(popupOverlay, krampusPopup);
        });

        // Close Krampus popup if clicking outside
        popupOverlay.addEventListener("click", function (event) {
            if (event.target === popupOverlay) {
                hidePopup(popupOverlay, krampusPopup);
            }
        });
    } else {
        console.error("Krampus popup elements are missing!");
    }

    // Newsletter Popup logic
    if (openNewsletterConfirmationBtn && closeNewsletterConfirmationBtn && newsletterPopupOverlay && newsletterConfirmationPopup) {
        openNewsletterConfirmationBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default form submission
            showPopup(newsletterPopupOverlay, newsletterConfirmationPopup);
        });

        closeNewsletterConfirmationBtn.addEventListener("click", function () {
            hidePopup(newsletterPopupOverlay, newsletterConfirmationPopup);
        });

        // Close Newsletter popup if clicking outside
        newsletterPopupOverlay.addEventListener("click", function (event) {
            if (event.target === newsletterPopupOverlay) {
                hidePopup(newsletterPopupOverlay, newsletterConfirmationPopup);
            }
        });
    } else {
        console.error("Newsletter popup elements are missing!");
    }
});