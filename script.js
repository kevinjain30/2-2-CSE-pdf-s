let toast = document.getElementById("toast");
let toastText = document.getElementById("toast-text");

function showToast(message) {
    toastText.textContent = message;
    toast.style.display = "flex";
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    // toast.style.background = "lightgrey";
    // toast.style.color = "white";
    // toast.style.padding = "10px 20px";
    // toast.style.borderRadius = "20px";
    // toast.style.boxShadow = "0px 0px 10px rgba(164, 164, 164, 0.2)";
    
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

document.querySelectorAll("a[download]").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent immediate download
        let url = this.getAttribute("href");
        let fileName = this.getAttribute("download");
        
        showToast("Downloading: " + fileName);
        
        setTimeout(() => {
            window.location.href = url; // Trigger download after toast
        }, 1000);
    });
});
