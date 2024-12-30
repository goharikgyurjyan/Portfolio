var form = document.getElementById("form-contact");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Votre message a bien été envoyé !";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Il y a eu une erreur durant l'envoi de votre message"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Il y a eu une erreur durant l'envoi de votre message"
    });
}
form.addEventListener("submit", handleSubmit)