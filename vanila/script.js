document.addEventListener("DOMContentLoaded", function() {
    const symptomForm = document.getElementById("symForm");
    symptomForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptoms"]:checked')).map(checkbox => checkbox.value);
        const queryParams = new URLSearchParams();
        selectedSymptoms.forEach(symptom => queryParams.append("symptoms", symptom));
        const queryString = queryParams.toString();

        window.open(`result.html?${queryString}`, "_blank");
    });
});