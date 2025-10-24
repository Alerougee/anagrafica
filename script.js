function controllaPassword() {
        const passwordCorretta = "131719";
        const passwordInserita = document.getElementById("password").value;
        const erroreElemento = document.getElementById("errore");

        if (passwordInserita === passwordCorretta) {
            window.location.href = "lavori.html";
        } else {
            erroreElemento.textContent = "Password errata. Riprova.";
            erroreElemento.style.color = "red";
        }
    }
