let toast = document.getElementById("toast");
let toastText = document.getElementById("toast-text");

function showToast(message) {
    toastText.textContent = message;
    toast.style.display = "flex";
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

document.querySelectorAll("a[download]").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        let url = this.getAttribute("href");
        let fileName = this.getAttribute("download");
        
        showToast("Downloading: " + fileName);
        
        setTimeout(() => {
            window.location.href = url; 
        }, 1000);
    });
});

function searchSubjects() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let details = document.querySelectorAll("details");

    details.forEach(detail => {
        let subject = detail.querySelector("summary").innerText.toLowerCase();
        if (subject.includes(input)) {
            detail.style.display = "block"; // Show if matched
        } else {
            detail.style.display = "none"; // Hide if not matched
        }
    });
}