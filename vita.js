const symptomForm = document.getElementById("symptomForm");
const findDeficiencyBtn = document.getElementById("findDeficiency");
const resultDiv = document.getElementById("result");
const deficiencyList = document.getElementById("deficiencyList");

findDeficiencyBtn.addEventListener("click", () => {
    const selectedSymptoms = document.querySelectorAll('input[name="symptoms"]:checked');
    const deficiencies = [];

    selectedSymptoms.forEach(symptom => {
        const symptomValue = symptom.value;
        const relatedDeficiency = symptomDeficiencyMap[symptomValue] || "Unknown deficiency";
        deficiencies.push(relatedDeficiency);
    });

    if (deficiencies.length === 0) {
        alert("Please select at least one symptom.");
        return;
    }

    deficiencyList.textContent = "Possible deficiencies: " + deficiencies.join(", ");
    resultDiv.style.display = "block";
});

const symptomDeficiencyMap = {
    night_blindness: "Vitamin A deficiency",
    dry_eyes: "Vitamin A deficiency",
    acne_rashes: "Vitamin A deficiency",
    fatigue: "Vitamin B1, B5 deficiency",
    confusion: "Vitamin B1 deficiency",
    muscle_weakness: "Vitamin B1, Vitamin D deficiency",
    cracked_lips: "Vitamin B2 deficiency",
    red_swollen_tongue: "Vitamin B2 deficiency",
    light_sensitivity: "Vitamin B2 deficiency",
    numbness_tingling: "Vitamin B5, B12 deficiency",
    digestive_issues: "Vitamin B3 deficiency",
    skin_lesions: "Vitamin B3 deficiency",
    dementia: "Vitamin B3 deficiency",
    irritability: "Vitamin B6 deficiency",
    depression: "Vitamin B6, B7, B9, B12 deficiency",
    hair_loss: "Vitamin B7 deficiency",
    rash_around_eyes_nose_mouth: "Vitamin B7 deficiency",
    megaloblastic_anemia: "Vitamin B9, B12 deficiency",
    sore_tongue: "Vitamin B9 deficiency",
    nerve_damage: "Vitamin B12 deficiency",
    bleeding_gums: "Vitamin C deficiency",
    slow_wound_healing: "Vitamin C deficiency",
    weakened_immunity: "Vitamin C deficiency",
    bone_joint_pain: "Vitamin D deficiency",
    muscle_weakness_vitamin_d: "Vitamin D deficiency",
    depression_vitamin_d: "Vitamin D deficiency",
};


