var form = document.getElementById("form-contact");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    status.className = "";
    status.innerHTML = "";
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.classList.add("mx-auto", "text-center", "alert", "alert-success");
            status.innerHTML = "Votre message a bien été envoyé !";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.classList.add("mx-auto", "text-center", "alert", "alert-danger");
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.classList.add("mx-auto", "text-center", "alert", "alert-danger");
                    status.innerHTML = "Il y a eu une erreur durant l'envoi de votre message"
                }
            })
        }
    }).catch(error => {
        status.classList.add("mx-auto", "text-center", "alert", "alert-danger");
        status.innerHTML = "Il y a eu une erreur durant l'envoi de votre message"
    });
}
form.addEventListener("submit", handleSubmit)