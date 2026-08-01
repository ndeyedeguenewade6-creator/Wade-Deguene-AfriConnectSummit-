document.addEventListener("DOMContentLoaded", () => {
    
    const targetDate = new Date("October 15, 2026 09:00:00").getTime();

    // Sélectionner les éléments HTML du compte à rebours
    const daysEl = document.getElementById("countdown-jours");
    const hoursEl = document.getElementById("countdown-heures");
    const minsEl = document.getElementById("countdown-minutes");
    const secsEl = document.getElementById("countdown-secondes");

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        
        if (difference <= 0) {
            clearInterval(countdownInterval);
            if(daysEl) daysEl.innerText = "00";
            if(hoursEl) hoursEl.innerText = "00";
            if(minsEl) minsEl.innerText = "00";
            if(secsEl) secsEl.innerText = "00";
            return;
        }

        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

       
        if(daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
        if(hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
        if(minsEl) minsEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        if(secsEl) secsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    // Lancer le compte à rebours immédiatement 
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
    
    
    function lancerCompteur(element) {
        // On récupère la cible 
        const cible = parseInt(element.getAttribute("data-target"));
        let depart = 0;
        
       
        const vitesse = Math.ceil(cible / 50); 

        const intervalle = setInterval(() => {
            depart = depart + vitesse;
            
            if (depart >= cible) {
                element.innerText = cible; 
                clearInterval(intervalle); 
            } else {
                element.innerText = depart; 
            }
        }, 30); 
    }

   
    const options = {
        threshold: 0.2 
    };

    const monObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                
                entry.target.classList.add("visible");

                
                const tousLesCompteurs = entry.target.querySelectorAll(".compteur");
                
                
                tousLesCompteurs.forEach(compteur => {
                    lancerCompteur(compteur);
                });

                 scroll
                monObserver.unobserve(entry.target);
            }
        });
    }, options);

    
    const sectionChiffres = document.getElementById("chiffres");
    if (sectionChiffres) {
        monObserver.observe(sectionChiffres);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    
    
    const optionsPourPourquoi = {
        threshold: 0.15 
    };

    //  Création de l'observer
    const monObserverPourquoi = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            
            if (entry.isIntersecting) {
                
                const cartes = entry.target.querySelectorAll(".argument-card");
                
                
                cartes.forEach((carte, index) => {
                    setTimeout(() => {
                        carte.classList.add("apparaitre");
                    }, index * 200); 
                });

                // On arrête d'observer la section
                monObserverPourquoi.unobserve(entry.target);
            }
        });
    }, optionsPourPourquoi);

    
    const sectionPourquoi = document.getElementById("pourquoi");
    if (sectionPourquoi) {
        monObserverPourquoi.observe(sectionPourquoi);
    }
});

//  GESTION DE L'ANNÉE DYNAMIQUE POUR LE COPYRIGHT 
const baliseAnnee = document.getElementById("anneeDynamique");

if (baliseAnnee) {
   
    const anneeActuelle = new Date().getFullYear(); 
    
    
    baliseAnnee.innerText = anneeActuelle;
}

    // --- ANIMATION DES THÉMATIQUES AU SCROLL ---
    const observerThematiques = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                const cartesThemes = entry.target.querySelectorAll(".theme-card");
                
                
                cartesThemes.forEach((carte, index) => {
                    setTimeout(() => {
                        carte.classList.add("affiche");
                    }, index * 150); 
                });

                
                observerThematiques.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 }); 

    
    const sectionThematiques = document.getElementById("thematiques");
    if (sectionThematiques) {
        observerThematiques.observe(sectionThematiques);
    }

            // PLANNIG   
   document.addEventListener("DOMContentLoaded", () => {
    const boutonsPlanning = document.querySelectorAll(".onglet-btn");
    const plannings = document.querySelectorAll(".planning-contenu");

    function basculerPlanning(bouton) {
        
        boutonsPlanning.forEach(b => b.classList.remove("actif"));
        bouton.classList.add("actif");

        
        const cible = bouton.getAttribute("data-target");

        
        plannings.forEach(p => {
            if (p.id === cible) {
                p.style.setProperty("display", "block", "important");
            } else {
                p.style.setProperty("display", "none", "important");
            }
        });
    }

    if (boutonsPlanning.length > 0) {
        boutonsPlanning.forEach(bouton => {
            
            bouton.addEventListener("click", (e) => {
                basculerPlanning(bouton);
            });

            
            bouton.addEventListener("touchend", (e) => {
                
                basculerPlanning(bouton);
            });
        });
    }
});



        // Filtrage intervenant
document.addEventListener("DOMContentLoaded", () => {
    const boutons = document.querySelectorAll(".filtre-btn");
    const cartes = document.querySelectorAll(".intervenants-section > div");

    if (boutons.length > 0 && cartes.length > 0) {
        boutons.forEach(bouton => {
            bouton.addEventListener("click", () => {
                
                boutons.forEach(b => b.classList.remove("actif"));
                bouton.classList.add("actif");

                
                const filtreCible = bouton.getAttribute("data-filter");

                
                cartes.forEach(carte => {
                    const categorieCarte = carte.getAttribute("data-category");

                    if (filtreCible === "tous" || categorieCarte === filtreCible) {
                        carte.style.display = ""; 
                    } else {
                        carte.style.display = "none"; 
                    }
                });
            });
        });
    }
});

            // Menu burger
document.addEventListener("DOMContentLoaded", () => {
    
    const bouton = document.querySelector(".burger-menu");

    if (bouton) {
        
        bouton.addEventListener("click", () => {
            
            
            const menu = bouton.nextElementSibling;

            
            bouton.classList.toggle("ouvert");
            menu.classList.toggle("ouvert");
        });
    }
});

        // Formulaire de contact
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".inscription-form-col form");
    if (!form) return;

    
    function valider(champ, condition, message) {
        const parent = champ.parentElement;
        const span = champ.nextElementSibling;

        if (condition) {
            parent.classList.add("erreur");
            parent.classList.remove("succes");
            span.textContent = message;
        } else {
            parent.classList.remove("erreur");
            parent.classList.add("succes");
            span.textContent = "";
        }
    }

    //  VERIFICATION EN TEMPS RÉEL 
    form.addEventListener("input", (e) => {
        const el = e.target;
        if (el.id === "nom-complet") valider(el, el.value.trim() === "" || /\d/.test(el.value), "Nom obligatoire sans chiffres");
        if (el.id === "email") valider(el, !el.value.includes("@") || !el.value.includes("."), "Email invalide");
        if (el.id === "telephone") valider(el, el.value.length < 8 || isNaN(el.value.replace(/\s/g, "")), "Chiffres uniquement (min 8)");
        if (el.id === "motivation") valider(el, el.value.trim().length < 20, "Minimum 20 caractères");
        if (el.id === "participation" || el.id === "pays") valider(el, el.value === "", "Sélection obligatoire");
    });

    //  VERIFICATION AU CLIC DU BOUTON 
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        
        valider(document.getElementById("nom-complet"), document.getElementById("nom-complet").value.trim() === "" || /\d/.test(document.getElementById("nom-complet").value), "Nom obligatoire sans chiffres");
        valider(document.getElementById("email"), !document.getElementById("email").value.includes("@") || !document.getElementById("email").value.includes("."), "Email invalide");
        valider(document.getElementById("telephone"), document.getElementById("telephone").value.length < 8 || isNaN(document.getElementById("telephone").value.replace(/\s/g, "")), "Chiffres uniquement (min 8)");
        valider(document.getElementById("motivation"), document.getElementById("motivation").value.trim().length < 20, "Minimum 20 caractères");
        valider(document.getElementById("participation"), document.getElementById("participation").value === "", "Sélection obligatoire");
        valider(document.getElementById("pays"), document.getElementById("pays").value === "", "Sélection obligatoire");

        
        if (form.querySelectorAll(".form-group.erreur").length === 0) {
            form.querySelector("div:last-of-type").innerHTML = '<p style="color: #00cc66 !important; text-align: center; font-weight: bold; font-size: 16px; margin-top: 15px;"> Message envoyé avec succès</p>';
            form.reset();
            form.querySelectorAll(".form-group").forEach(g => g.classList.remove("succes")); 
        } else {
            form.querySelector("div:last-of-type").innerHTML = ""; 
        }
    });
});

        // DARK/LIGHT
document.addEventListener("DOMContentLoaded", () => {
    
    const boutonTheme = document.getElementById("theme-toggle");
    const iconeCircle = boutonTheme ? boutonTheme.querySelector(".theme-switch-circle") : null;

    
    if (iconeCircle) {
        const themeActuel = document.documentElement.getAttribute("data-theme");
        
        iconeCircle.textContent = themeActuel === "light" ? "☀️" : "🌙";
    }

    
    if (boutonTheme) {
        boutonTheme.addEventListener("click", () => {
           
            const themeActuel = document.documentElement.getAttribute("data-theme");

            if (themeActuel === "light") {
                
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark"); 
                if (iconeCircle) iconeCircle.textContent = "🌙";
            } else {
                
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light"); 
                if (iconeCircle) iconeCircle.textContent = "☀️";
            }
        });
    }
});
        // Back to top
document.addEventListener("DOMContentLoaded", () => {
    const btnRetour = document.getElementById("back-to-top");

    if (btnRetour) {
        
        window.addEventListener("scroll", () => {
            
            if (window.scrollY > 300) {
                btnRetour.classList.add("visible"); 
            } else {
                btnRetour.classList.remove("visible"); 
            }
        });

        
        btnRetour.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth" 
            });
        });
    }
});
