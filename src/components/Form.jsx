import React from "react";
import "../App.css";
import "./Form.css";
const Form = () => {
  const symptoms = [
    { id: "night_blindness", label: "Night blindness" },
    { id: "dry_eyes", label: "Dry eyes" },
    { id: "skin_problems", label: "Acne and Rashes" },
    { id: "fatigue", label: "Fatigue" },
    { id: "confusion", label: "Confusion" },
    { id: "muscle_weakness", label: "Weakness" },
    { id: "cracked_lips", label: "Cracked lips" },
    { id: "red_swollen_tongue", label: "Swollen tongue" },
    { id: "light_sensitivity", label: "Light sensitivity" },
    { id: "numbness_tingling", label: "Numbness" },
    { id: "tingling", label: "Tingling" },
    { id: "digestive_issues", label: "Digestive issues" },
    { id: "skin_lesions", label: "Skin lesions" },
    { id: "dementia", label: "Dementia" },
    { id: "irritability", label: "Irritability" },
    { id: "depression", label: "Depression" },
    { id: "hair_loss", label: "Hair loss" },
    { id: "sore_tongue", label: "Sore tongue" },
    { id: "bleeding_gums", label: "Bleeding gums" },
    { id: "slow_wound_healing", label: "Slow Healing" },
    { id: "weakened_immunity", label: "Weak Immunity" },
    { id: "bone_joint_pain", label: "Bone/joint pain" },
  ];

  return (
    <div className="w-[100vw] md:max-w-sm overflow-x-hidden h-[87vh] flex justify-center items-start ">
      <form className="bg-gray-200 dark:bg-zinc-900 w-[85vw] overflow-x-hidden h-[79vh] mt-3 text-2xl border-gray-800 dark:border-gray-400 border-2 rounded-2xl p-2 flex flex-col items-center scroll-smooth">
        {symptoms.map((symptom) => (
          <div className="dark:bg-neutral-600 dark:text-neutral-300 w-full flex flex-row justify-between border-gray-800 dark:border-gray-200 border-[0.1px] rounded-lg mb-2" key={symptom.id}>
            <div className="pl-3 w-3/4 flex flex-row gap-x-6">
            <input
              className="w-auto checked:bg-blue-500 "
              type="checkbox"
              name="symptoms"
              id={symptom.id}
              value={symptom.id}
            />
            <label className="checkbox-label w-full" htmlFor={symptom.id}>
              {symptom.label}
            </label>
            </div>
            
          </div>
        ))}
        <button className="w-auto p-4 flex items-center justify-center h-[30px] m-2 text-gray-200  absolute bottom-[-1px] bg-cyan-700 rounded-2xl border-gray-900 border-3 hover:bg-cyan-600 hover:text-gray-300 dark:hover:bg-cyan-300 dark:hover:text-gray-700" type="submit">Find Deficiency</button>
      </form>
    </div>
  );
};

export default Form;
