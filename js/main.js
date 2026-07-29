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
