document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('ratingValue');
    const submitBtn = document.getElementById('submitBtn');
    const commentaire = document.getElementById('commentaire');

    let selectedRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener('mouseover', function() {
            resetStars();
            stars.forEach((s, idx) => {
                if (idx <= index) {
                    s.classList.add('active');
                }
            });
        });

        star.addEventListener('click', function() {
            selectedRating = index + 1;
            ratingValue.value = selectedRating; // Si vous souhaitez envoyer la valeur de notation à un serveur
        });

        star.addEventListener('mouseout', resetStars);
    });

    submitBtn.addEventListener('click', function() {
        const rating = selectedRating;
        const comment = commentaire.value;

        // Vous pouvez envoyer ces données à un serveur pour enregistrement
        console.log('Rating:', rating);
        console.log('Commentaire:', comment);

        alert('Évaluation envoyée avec succès !');
        resetForm();
    });

    function resetStars() {
        stars.forEach(star => star.classList.remove('active'));
    }

    function resetForm() {
        resetStars();
        commentaire.value = '';
    }
});
