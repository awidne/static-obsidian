---
aliases:
  - Arterial blood gas
  - ABG
  - Venous blood gas
  - VBG
  - Blood gas analysis
---
--- 

creation date: 2026-04-24 23:31 
tags: [[Assessments]]

---
# Arterial Blood Gas
## Background
Arterial blood gas (ABG) is a diagnostic tool used to determine partial pressures of gas in blood and acid-base content.

While blood gas analysis can be done using arterial, venous, or capillary blood, the arterial blood gas remains the gold standard. However, in many settings (such as in emergency settings), venous blood gas (VBG) remains a sufficient estimation of values.

While the benefits and risks of arterial versus venous blood gases are not discussed here, the general consensus is an ABG is only necessary in intensive care settings.

The contents of this page is applicable to both ABGs and VBGs. However, it should be noted that VBGs may not correlate for:
- Severe shock
- Severe hypercapnia (PaCO2 >45 mmHg)
- Measurement of PO2
## Components
The components from blood gas analyzers included:
- pH: measured pH of blood
- PaO2: measured partial pressure of oxygen
- PaCO2: measured partial pressure of carbon dioxide
- HCO3: calculated concentration of bicarbonate
- Base excess/deficit: calculated relative excess or deficit of base (how used up bicarbonate is)
- SaO2: calculated oxygen saturation (if co-oximetry obtained, would be measured)

**Oxygenation**
PaO2 represents effectiveness of oxygenation at the lungs. A low PaO2 may be due to issue with the lungs or a hypobaric environment. SaO2 measures how saturated the hemoglobin is with oxygen and thus how much oxygen is being transported.

**Ventilation**
PaCO2 reflects effectiveness of ventilation. Increased ventilation results in more CO2 being removed from blood, and conversely, decreased ventilation results in less CO2 removed.

**Acid-base balance**
pH, HCO3, and base excess are measures of the acidity and alkalinity of the blood. HCO3 and base excess are functions of metabolic components of acid-base balance. 
## Interpretation
### Sample Validity
Confirm the calculated pH from measured PaCO2 and HCO3 values matches with measured pH. The calculated pH is:
$$pH=6.1+log(\frac{HCO3}{0.03 \times PaCO2})$$
This is typically automated by the EMR.
### pH Status
**Normal pH range is 7.35-7.45.**
- **Acidosis: pH < 7.35**
- **Alkalosis: pH > 7.45**

Note that a normal pH range does not exclude pathology. Normal pH can be caused by:
- No pathology
- Metabolic acidosis and respiratory alkalosis
- Metabolic alkalosis and respiratory acidosis
### Determining Primary Acid-Base Abnormality
The primary abnormality is the main mechanism driving the pH imbalance.
![[Arterial Blood Gas-1.png]]

Normal values:
- **PaCO2: 35-45 mmHg**
- **HCO3: 22-26 mEq/L**


| pH     | PaCO2                    | HCO3                     | Primary Abnormality | pH Status |
| ------ | ------------------------ | ------------------------ | ------------------- | --------- |
| < 7.35 | Decreased (compensation) | Decreased <br>(primary)  | Metabolic           | Acidosis  |
| < 7.35 | Elevated <br>(primary)   | Elevated (compensation)  | Respiratory         | Acidosis  |
| > 7.45 | Elevated (compensation)  | Elevated <br>(primary)   | Metabolic           | Alkalosis |
| > 7.45 | Decreased <br>(primary)  | Decreased (compensation) | Respiratory         | Alkalosis |

In cases of normal pH, a mixed disorder is present. A pH of 7.4 is used as cutoff for "primary abnormality".
### Compensation of Primary Abnormality / Mixed Process
Compensation by the bicarbonate buffer.
- Respiratory compensation (adjustment of ventilation) occurs quickly for metabolic disorders
- Metabolic compensation (production or removal of bicarbonate) occurs gradually, resulting in different levels of expected compensation for acute and chronic scenarios
#### Expected Compensation
Metabolic acidosis
- Expected PaCO2 = (1.5 x HCO3) + 8
- Shortcut: first 2 digits after decimal of pH
Metabolic alkalosis
- Expected PaCO2 = (0.75 x HCO3) + 20

Respiratory acidosis

| Compensation | PaCO2 above 40 mmHg | Expected HCO3 increase |
| ------------ | ------------------- | ---------------------- |
| Acute        | 10 mmHg             | 1 mmol/L               |
| Chronic      | 10 mmHg             | 4 mmol/L               |
Respiratory alkalosis

| Compensation | PaCO2 below 40 mmHg | Expected HCO3 decrease |
| ------------ | ------------------- | ---------------------- |
| Acute        | 10 mmHg             | 2 mmol/L               |
| Chronic      | 10 mmHg             | 5 mmol/L               |
#### Mixed Blood Gas Disorder
In cases where both the PaCO2 and HCO3 pushes/pulls the equilibrium in the same direction (eg. elevated PaCO2 and decreased HCO3), the disorder is said to be mixed.
### Metabolic Acidosis: Anion Gap (+ Osmolar Gap)
The anion gap represents the unmeasured anions in the blood. The ions of the blood is largely made up of (other ions have much lower in concentration):
- Cations: Na+
- Anions: Cl-, HCO3-, albumin

As Na, Cl, and HCO3 are measured, the anion gap normally represents the concentration of albumin.
- **Anion gap = Na - (Cl + HCO3)**
- **Normal anion gap = 12 mmol/L** 

Note that normal albumin is 40 g/L. A drop in 10 g/L requires an adjustment of the expected anion gap by 2.5 mmol/L (eg. if albumin = 20 g/L, then expected anion gap is 7 mmol/L).

An elevated anion gap is determined by comparing calculated anion gap from measured electrolytes and expected anion gap.
#### Osmolar Gap
The osmolar gap is similar to the anion gap but is used to detect hidden osmoles.
- **Osmolar gap = osmolality (measured) - osmolarity (calculated)**
- **Calculated osmolarity = (2 x Na) + Glucose + Urea**
- **Normal osmolar gap < 10**

An elevated osmolar gap represents an excess of low molecular weight substance. In the majority of cases, this is ethanol. However, if ethanol level is normal, it is highly suspicious for other toxic alcohols.
### Elevated Anion Gap: Mixed Process
Even with an elevated anion gap, it is important to still consider non-anion gap causes of metabolic acidosis. 
- **ΔAG = calculated AG - expected AG**
- **ΔHCO3 = 25 - measured HCO3**
- **Delta-delta = ΔAG/ΔHCO3**

A delta-delta < 1 suggests a non-anion gap process is present in addition to the anion gap process. 
## Differential Diagnoses
### Metabolic Acidosis
Low HCO3 levels may be due to:
- Failure to produce bicarbonate
- Excessive loss of bicarbonate
- Intake/production of acid
#### Anion Gap
Causes of elevated anion gap metabolic acidosis is classically summarized by the mnemonic "MUDPILES". However, "KULT IMPACT" better groups causes:
- Ketones (DKA, alcoholic ketoacidosis, starvation ketoacidosis)
- Uremia
- Lactate
- Toxins
- Iron, Isoniazid (INH)
- Metformin
- Phenformin, Paraldehyde
- Aspirin, Acetaminophen, Alcohols (toxic)
- Cyanide. Carbon monoxide
- Toluene

KULT denotes the most common organic causes, and IMPACT denotes toxicological cause which may be less common.
#### Non-Anion Gap
Failure to make new bicarbonate
- Renal failure
- Mineralocorticoid deficiency
Loss of bicarbonate
- Renal tubular acidosis
- Diarrhea
- Carbonic anhydrase inhibitor (acetazolamide)
Excessive chloride intake
- Non-balanced IV fluids (“normal” saline)
### Respiratory Acidosis
Elevated PaCO2 can be due to increased CO2 production and/or poor CO2 elimination.
- Hypermetabolic state (fever/sepsis, hyperthyroidism, excessive carbohydrate intake)
- Inadequate CO2 ventilation
	- Low respiratory rate (drugs, neurological issues)
	- Low tidal volume (stiff/wet lungs, chest wall issues, neuromuscular weakness)
### Metabolic Alkalosis
- Loss of acid (vomiting, chloride-secreting colon villous adenoma, renal hydrogen loss)
- Severe hypokalemia causing intracellular hydrogen ion shift
- Excessive intake of alkali (PO or IV bicarbonate with poor kidney function, calcium-alkali syndrome)
- Contraction alkalosis (volume depletion with high mineralocorticoid levels)
### Respiratory Alkalosis
Low PaCO2 levels can be due to excessive alveolar ventilation overriding feedback mechanisms.
- Neurologic (head injury, stroke, ICH, anxiety)
- Respiratory (pulmonary edema, pneumonia, pleural effusions, pulmonary embolism, asthma, hypoxemia)
- Drugs (eg. salicylates)
- Pregnancy
- Sepsis, liver failure, organ failure
## References
### Tools / Guidelines
### Additional Reading