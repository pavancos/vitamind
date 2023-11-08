document.addEventListener("DOMContentLoaded", function() {
  const queryParams = new URLSearchParams(window.location.search); //gpt
  const selectedSymptoms = queryParams.getAll("symptoms"); //gpt

  const symptomToVitaminMapping = {
      night_blindness: "vitaminA",
      dry_eyes: "vitaminA",
      skin_problems: "vitaminA",
      fatigue: "vitaminB1, vitaminB5",
      fatigue: "vitaminB5",
      confusion: "vitaminB1",
      muscle_weakness: "vitaminB1",
      muscle_weakness: "vitaminD",
      cracked_lips: "vitaminB2",
      red_swollen_tongue: "vitaminB2",
      light_sensitivity: "vitaminB2",
      numbness_tingling: "vitaminB5",
      numbness_tingling: "vitaminB12",
      digestive_issues: "vitaminB3",
      skin_lesions: "vitaminB3",
      dementia: "vitaminB3",
      irritability: "vitaminB6",
      depression: "vitaminB6",
      depression: "vitaminB12",
      depression: "vitaminB9",
      depression: "vitaminB7",
      hair_loss: "vitaminB7",
      rash_around_eyes_nose_mouth: "vitaminB7",
      megaloblastic_anemia: "vitaminB9",
      megaloblastic_anemia: "vitaminB12",
      sore_tongue: "vitaminB9",
      nerve_damage: "vitaminB12",
      bleeding_gums: "vitaminC",
      slow_wound_healing: "vitaminC",
      weakened_immunity: "vitaminC",
      bone_joint_pain: "vitaminD",
      muscle_weakness_vitamin_d: "vitaminD",
      depression_vitamin_d: "vitaminD",
  };

    selectedSymptoms.forEach(symptom => {
        const vitaminDivName = symptomToVitaminMapping[symptom];
        if (vitaminDivName) {
            const vitaminDiv = document.querySelector(`[name="${vitaminDivName}"]`);
            if (vitaminDiv) {
                vitaminDiv.style.display = "flex";
            }
        }
    });
});