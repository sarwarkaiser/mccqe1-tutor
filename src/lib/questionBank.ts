export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
  subcategory?: string
  difficulty: number
  tags: string[]
}

// Comprehensive MCCQE1 question bank (50+ questions)
export const sampleQuestions: Question[] = [
  // CARDIOLOGY (8 questions)
  {
    id: 'cardio-1',
    question: 'A 65-year-old male presents with acute chest pain. ECG shows ST elevation in leads II, III, and aVF. Which coronary artery is most likely occluded?',
    options: [
      'Left anterior descending artery',
      'Left circumflex artery',
      'Right coronary artery',
      'Left main coronary artery'
    ],
    correctAnswer: 2,
    explanation: 'ST elevation in leads II, III, and aVF indicates inferior wall myocardial infarction, which is most commonly caused by occlusion of the right coronary artery.',
    category: 'Medicine',
    subcategory: 'Cardiology',
    difficulty: 3,
    tags: ['cardiology', 'myocardial infarction', 'ECG']
  },
  {
    id: 'cardio-2',
    question: 'A 55-year-old female with hypertension presents with palpitations. ECG shows irregularly irregular rhythm with no P waves. What is the most likely diagnosis?',
    options: [
      'Atrial fibrillation',
      'Atrial flutter',
      'Ventricular tachycardia',
      'Sinus arrhythmia'
    ],
    correctAnswer: 0,
    explanation: 'Irregularly irregular rhythm with absent P waves is classic for atrial fibrillation, the most common sustained cardiac arrhythmia.',
    category: 'Medicine',
    subcategory: 'Cardiology',
    difficulty: 2,
    tags: ['cardiology', 'arrhythmia', 'ECG']
  },
  {
    id: 'cardio-3',
    question: 'A 45-year-old male presents with dyspnea on exertion. Physical exam shows a mid-systolic click followed by a late systolic murmur at the apex. What is the most likely valvular lesion?',
    options: [
      'Mitral regurgitation',
      'Mitral stenosis',
      'Aortic stenosis',
      'Tricuspid regurgitation'
    ],
    correctAnswer: 0,
    explanation: 'Mid-systolic click followed by late systolic murmur is characteristic of mitral valve prolapse, which causes mitral regurgitation.',
    category: 'Medicine',
    subcategory: 'Cardiology',
    difficulty: 3,
    tags: ['cardiology', 'valvular heart disease', 'murmur']
  },
  {
    id: 'cardio-4',
    question: 'A 70-year-old male presents with syncope. Physical exam shows a harsh systolic murmur at the right upper sternal border radiating to the carotids. What is the most likely diagnosis?',
    options: [
      'Aortic stenosis',
      'Mitral regurgitation',
      'Hypertrophic cardiomyopathy',
      'Pulmonary stenosis'
    ],
    correctAnswer: 0,
    explanation: 'Harsh systolic murmur at right upper sternal border radiating to carotids is classic for aortic stenosis, especially in elderly patients.',
    category: 'Medicine',
    subcategory: 'Cardiology',
    difficulty: 2,
    tags: ['cardiology', 'valvular heart disease', 'aortic stenosis']
  },
  {
    id: 'cardio-5',
    question: 'A 35-year-old female presents with chest pain. ECG shows diffuse ST elevation with PR depression. Troponin is negative. What is the most likely diagnosis?',
    options: [
      'Pericarditis',
      'Myocardial infarction',
      'Pulmonary embolism',
      'Costochondritis'
    ],
    correctAnswer: 0,
    explanation: 'Diffuse ST elevation with PR depression is classic for pericarditis. Troponin is typically negative unless there is associated myocarditis.',
    category: 'Medicine',
    subcategory: 'Cardiology',
    difficulty: 3,
    tags: ['cardiology', 'pericarditis', 'ECG']
  },
  {
    id: 'cardio-6',
    question: 'A 60-year-old male with known CAD presents with sudden onset of tearing chest pain radiating to the back. BP is 180/110 mmHg. What is the most urgent concern?',
    options: [
      'Aortic dissection',
      'Myocardial infarction',
      'Pulmonary embolism',
      'Pneumothorax'
    ],
    correctAnswer: 0,
    explanation: 'Tearing chest pain radiating to back with hypertension is classic for aortic dissection, a medical emergency requiring immediate imaging.',
    category: 'Medicine',
    subcategory: 'Cardiology',
    difficulty: 4,
    tags: ['cardiology', 'aortic dissection', 'emergency']
  },
  {
    id: 'cardio-7',
    question: 'A 25-year-old male presents with palpitations and syncope. ECG shows a wide QRS complex tachycardia with AV dissociation. What is the most likely diagnosis?',
    options: [
      'Ventricular tachycardia',
      'Supraventricular tachycardia with aberrancy',
      'Atrial fibrillation with rapid ventricular response',
      'Sinus tachycardia'
    ],
    correctAnswer: 0,
    explanation: 'Wide QRS complex tachycardia with AV dissociation is highly suggestive of ventricular tachycardia, which can be life-threatening.',
    category: 'Medicine',
    subcategory: 'Cardiology',
    difficulty: 4,
    tags: ['cardiology', 'ventricular tachycardia', 'arrhythmia']
  },
  {
    id: 'cardio-8',
    question: 'A 50-year-old female presents with fatigue, weight gain, and cold intolerance. Physical exam shows bradycardia and delayed relaxation of deep tendon reflexes. What is the most likely diagnosis?',
    options: [
      'Hypothyroidism',
      'Heart failure',
      'Anemia',
      'Depression'
    ],
    correctAnswer: 0,
    explanation: 'Fatigue, weight gain, cold intolerance, bradycardia, and delayed reflexes are classic for hypothyroidism, which can cause cardiac effects.',
    category: 'Medicine',
    subcategory: 'Cardiology',
    difficulty: 2,
    tags: ['cardiology', 'hypothyroidism', 'endocrinology']
  },

  // ENDOCRINOLOGY (7 questions)
  {
    id: 'endo-1',
    question: 'A 28-year-old female presents with polyuria, polydipsia, and weight loss. Blood glucose is 18 mmol/L. What is the most likely diagnosis?',
    options: [
      'Type 1 diabetes mellitus',
      'Type 2 diabetes mellitus',
      'Diabetes insipidus',
      'Hyperthyroidism'
    ],
    correctAnswer: 0,
    explanation: 'The classic triad of polyuria, polydipsia, and weight loss in a young adult with markedly elevated blood glucose is characteristic of Type 1 diabetes mellitus.',
    category: 'Medicine',
    subcategory: 'Endocrinology',
    difficulty: 2,
    tags: ['diabetes', 'endocrinology', 'polyuria']
  },
  {
    id: 'endo-2',
    question: 'A 45-year-old female presents with weight gain, moon facies, and purple striae. What is the most likely diagnosis?',
    options: [
      'Cushing\'s syndrome',
      'Hypothyroidism',
      'Polycystic ovary syndrome',
      'Metabolic syndrome'
    ],
    correctAnswer: 0,
    explanation: 'Weight gain with central obesity, moon facies, and purple striae are classic features of Cushing\'s syndrome due to cortisol excess.',
    category: 'Medicine',
    subcategory: 'Endocrinology',
    difficulty: 3,
    tags: ['endocrinology', 'Cushing\'s', 'cortisol']
  },
  {
    id: 'endo-3',
    question: 'A 30-year-old female presents with fatigue, weight loss, and palpitations. Physical exam shows exophthalmos and diffuse thyroid enlargement. What is the most likely diagnosis?',
    options: [
      'Graves\' disease',
      'Hashimoto\'s thyroiditis',
      'Toxic multinodular goiter',
      'Subacute thyroiditis'
    ],
    correctAnswer: 0,
    explanation: 'Hyperthyroidism with exophthalmos and diffuse goiter is classic for Graves\' disease, the most common cause of hyperthyroidism.',
    category: 'Medicine',
    subcategory: 'Endocrinology',
    difficulty: 2,
    tags: ['endocrinology', 'thyroid', 'Graves\' disease']
  },
  {
    id: 'endo-4',
    question: 'A 50-year-old male presents with recurrent kidney stones and bone pain. Labs show hypercalcemia and hypophosphatemia. What is the most likely diagnosis?',
    options: [
      'Primary hyperparathyroidism',
      'Hyperthyroidism',
      'Vitamin D toxicity',
      'Multiple myeloma'
    ],
    correctAnswer: 0,
    explanation: 'Hypercalcemia with hypophosphatemia and recurrent kidney stones is classic for primary hyperparathyroidism.',
    category: 'Medicine',
    subcategory: 'Endocrinology',
    difficulty: 3,
    tags: ['endocrinology', 'parathyroid', 'hypercalcemia']
  },
  {
    id: 'endo-5',
    question: 'A 40-year-old female presents with hypotension, hyperpigmentation, and hyponatremia. What is the most likely diagnosis?',
    options: [
      'Addison\'s disease',
      'Cushing\'s syndrome',
      'Pheochromocytoma',
      'Conn\'s syndrome'
    ],
    correctAnswer: 0,
    explanation: 'Hypotension, hyperpigmentation, and hyponatremia are classic for Addison\'s disease (primary adrenal insufficiency).',
    category: 'Medicine',
    subcategory: 'Endocrinology',
    difficulty: 3,
    tags: ['endocrinology', 'adrenal', 'Addison\'s']
  },
  {
    id: 'endo-6',
    question: 'A 35-year-old male presents with headaches, sweating, and palpitations. BP is 180/120 mmHg. What is the most likely diagnosis?',
    options: [
      'Pheochromocytoma',
      'Essential hypertension',
      'Hyperthyroidism',
      'Cushing\'s syndrome'
    ],
    correctAnswer: 0,
    explanation: 'Episodic headaches, sweating, palpitations, and severe hypertension are classic for pheochromocytoma, a catecholamine-secreting tumor.',
    category: 'Medicine',
    subcategory: 'Endocrinology',
    difficulty: 3,
    tags: ['endocrinology', 'adrenal', 'pheochromocytoma']
  },
  {
    id: 'endo-7',
    question: 'A 60-year-old male presents with polyuria, polydipsia, and confusion. Serum sodium is 175 mEq/L. What is the most likely diagnosis?',
    options: [
      'Hyperosmolar hyperglycemic state',
      'Diabetic ketoacidosis',
      'Diabetes insipidus',
      'SIADH'
    ],
    correctAnswer: 0,
    explanation: 'Severe hyperglycemia with hypernatremia and altered mental status in an older adult is classic for hyperosmolar hyperglycemic state.',
    category: 'Medicine',
    subcategory: 'Endocrinology',
    difficulty: 4,
    tags: ['endocrinology', 'diabetes', 'emergency']
  },

  // RESPIRATORY (6 questions)
  {
    id: 'resp-1',
    question: 'A 65-year-old male with COPD presents with increased sputum production and worsening dyspnea. What is the most appropriate initial antibiotic choice?',
    options: [
      'Amoxicillin',
      'Azithromycin',
      'Ciprofloxacin',
      'Vancomycin'
    ],
    correctAnswer: 0,
    explanation: 'For acute exacerbations of COPD, amoxicillin is the first-line antibiotic choice for community-acquired infections.',
    category: 'Medicine',
    subcategory: 'Respiratory',
    difficulty: 3,
    tags: ['respiratory', 'COPD', 'antibiotics']
  },
  {
    id: 'resp-2',
    question: 'A 25-year-old male presents with sudden onset of pleuritic chest pain and dyspnea. Physical exam shows decreased breath sounds on the right. What is the most likely diagnosis?',
    options: [
      'Spontaneous pneumothorax',
      'Pulmonary embolism',
      'Pneumonia',
      'Pleurisy'
    ],
    correctAnswer: 0,
    explanation: 'Sudden onset pleuritic pain with decreased breath sounds in a young male is classic for spontaneous pneumothorax.',
    category: 'Medicine',
    subcategory: 'Respiratory',
    difficulty: 2,
    tags: ['respiratory', 'pneumothorax', 'emergency']
  },
  {
    id: 'resp-3',
    question: 'A 45-year-old female presents with dry cough, fever, and dyspnea. Chest X-ray shows bilateral interstitial infiltrates. What is the most likely diagnosis?',
    options: [
      'Atypical pneumonia',
      'Bacterial pneumonia',
      'Tuberculosis',
      'Heart failure'
    ],
    correctAnswer: 0,
    explanation: 'Dry cough with bilateral interstitial infiltrates is classic for atypical pneumonia (e.g., Mycoplasma, Chlamydia).',
    category: 'Medicine',
    subcategory: 'Respiratory',
    difficulty: 2,
    tags: ['respiratory', 'pneumonia', 'atypical']
  },
  {
    id: 'resp-4',
    question: 'A 55-year-old male smoker presents with hemoptysis and weight loss. Chest CT shows a spiculated mass in the right upper lobe. What is the most likely diagnosis?',
    options: [
      'Lung cancer',
      'Tuberculosis',
      'Pneumonia',
      'Lung abscess'
    ],
    correctAnswer: 0,
    explanation: 'Spiculated mass in a smoker with hemoptysis and weight loss is highly suggestive of lung cancer.',
    category: 'Medicine',
    subcategory: 'Respiratory',
    difficulty: 3,
    tags: ['respiratory', 'lung cancer', 'oncology']
  },
  {
    id: 'resp-5',
    question: 'A 30-year-old female presents with dyspnea, chest pain, and leg swelling. Physical exam shows elevated JVP and paradoxical pulse. What is the most likely diagnosis?',
    options: [
      'Pulmonary embolism',
      'Pneumonia',
      'Asthma',
      'COPD'
    ],
    correctAnswer: 0,
    explanation: 'Dyspnea, chest pain, leg swelling, elevated JVP, and paradoxical pulse suggest pulmonary embolism with right heart strain.',
    category: 'Medicine',
    subcategory: 'Respiratory',
    difficulty: 4,
    tags: ['respiratory', 'pulmonary embolism', 'emergency']
  },
  {
    id: 'resp-6',
    question: 'A 20-year-old male presents with wheezing and dyspnea. He has a history of atopy. What is the most likely diagnosis?',
    options: [
      'Asthma',
      'COPD',
      'Bronchitis',
      'Pneumonia'
    ],
    correctAnswer: 0,
    explanation: 'Wheezing, dyspnea, and atopy in a young adult are classic for asthma.',
    category: 'Medicine',
    subcategory: 'Respiratory',
    difficulty: 1,
    tags: ['respiratory', 'asthma', 'atopy']
  },

  // GASTROENTEROLOGY (6 questions)
  {
    id: 'gi-1',
    question: 'A 55-year-old male presents with epigastric pain that worsens after meals. Endoscopy shows a duodenal ulcer. What is the most common cause?',
    options: [
      'H. pylori infection',
      'NSAID use',
      'Stress',
      'Zollinger-Ellison syndrome'
    ],
    correctAnswer: 0,
    explanation: 'H. pylori infection is the most common cause of duodenal ulcers, accounting for approximately 90% of cases.',
    category: 'Medicine',
    subcategory: 'Gastroenterology',
    difficulty: 2,
    tags: ['gastroenterology', 'ulcer', 'H. pylori']
  },
  {
    id: 'gi-2',
    question: 'A 40-year-old female presents with right upper quadrant pain, fever, and jaundice. What is the most likely diagnosis?',
    options: [
      'Cholangitis',
      'Cholecystitis',
      'Hepatitis',
      'Pancreatitis'
    ],
    correctAnswer: 0,
    explanation: 'Right upper quadrant pain, fever, and jaundice (Charcot\'s triad) is classic for cholangitis, a medical emergency.',
    category: 'Medicine',
    subcategory: 'Gastroenterology',
    difficulty: 3,
    tags: ['gastroenterology', 'cholangitis', 'biliary']
  },
  {
    id: 'gi-3',
    question: 'A 35-year-old male presents with bloody diarrhea and abdominal pain. Stool culture shows Shigella. What is the most likely complication?',
    options: [
      'Hemolytic uremic syndrome',
      'Toxic megacolon',
      'Perforation',
      'Sepsis'
    ],
    correctAnswer: 0,
    explanation: 'Shigella infection can cause hemolytic uremic syndrome (HUS), especially in children, characterized by hemolytic anemia, thrombocytopenia, and renal failure.',
    category: 'Medicine',
    subcategory: 'Gastroenterology',
    difficulty: 4,
    tags: ['gastroenterology', 'infectious', 'HUS']
  },
  {
    id: 'gi-4',
    question: 'A 60-year-old male presents with painless jaundice and weight loss. Physical exam shows a palpable gallbladder. What is the most likely diagnosis?',
    options: [
      'Pancreatic cancer',
      'Cholangiocarcinoma',
      'Hepatocellular carcinoma',
      'Gallstones'
    ],
    correctAnswer: 0,
    explanation: 'Painless jaundice with weight loss and palpable gallbladder (Courvoisier\'s sign) is classic for pancreatic cancer.',
    category: 'Medicine',
    subcategory: 'Gastroenterology',
    difficulty: 3,
    tags: ['gastroenterology', 'pancreatic cancer', 'oncology']
  },
  {
    id: 'gi-5',
    question: 'A 25-year-old female presents with chronic diarrhea, abdominal pain, and weight loss. Colonoscopy shows skip lesions and cobblestone appearance. What is the most likely diagnosis?',
    options: [
      'Crohn\'s disease',
      'Ulcerative colitis',
      'Irritable bowel syndrome',
      'Celiac disease'
    ],
    correctAnswer: 0,
    explanation: 'Skip lesions and cobblestone appearance on colonoscopy are classic for Crohn\'s disease, which can affect any part of the GI tract.',
    category: 'Medicine',
    subcategory: 'Gastroenterology',
    difficulty: 3,
    tags: ['gastroenterology', 'Crohn\'s disease', 'IBD']
  },
  {
    id: 'gi-6',
    question: 'A 45-year-old male presents with hematemesis. Endoscopy shows bleeding esophageal varices. What is the most common underlying cause?',
    options: [
      'Alcoholic liver disease',
      'Hepatitis B',
      'Hepatitis C',
      'Autoimmune hepatitis'
    ],
    correctAnswer: 0,
    explanation: 'Esophageal varices are most commonly caused by portal hypertension secondary to alcoholic liver disease.',
    category: 'Medicine',
    subcategory: 'Gastroenterology',
    difficulty: 2,
    tags: ['gastroenterology', 'varices', 'liver disease']
  },

  // NEUROLOGY (6 questions)
  {
    id: 'neuro-1',
    question: 'A 70-year-old male presents with sudden onset of unilateral facial droop, arm weakness, and slurred speech. CT head is negative for hemorrhage. What is the most appropriate next step?',
    options: [
      'Start aspirin',
      'Administer IV tPA if within 4.5 hours',
      'Order MRI brain',
      'Refer to physiotherapy'
    ],
    correctAnswer: 1,
    explanation: 'For acute ischemic stroke within 4.5 hours of onset, IV tPA (alteplase) is the standard of care if no contraindications exist. CT is primarily to rule out hemorrhage.',
    category: 'Medicine',
    subcategory: 'Neurology',
    difficulty: 4,
    tags: ['neurology', 'stroke', 'emergency']
  },
  {
    id: 'neuro-2',
    question: 'A 30-year-old female presents with unilateral vision loss and limb weakness. MRI shows multiple white matter lesions. What is the most likely diagnosis?',
    options: [
      'Multiple sclerosis',
      'Stroke',
      'Brain tumor',
      'Migraine'
    ],
    correctAnswer: 0,
    explanation: 'Young female with relapsing-remitting neurological symptoms and white matter lesions on MRI is classic for multiple sclerosis.',
    category: 'Medicine',
    subcategory: 'Neurology',
    difficulty: 3,
    tags: ['neurology', 'multiple sclerosis', 'demyelinating']
  },
  {
    id: 'neuro-3',
    question: 'A 65-year-old male presents with resting tremor, rigidity, and bradykinesia. What is the most likely diagnosis?',
    options: [
      'Parkinson\'s disease',
      'Essential tremor',
      'Huntington\'s disease',
      'Alzheimer\'s disease'
    ],
    correctAnswer: 0,
    explanation: 'Resting tremor, rigidity, and bradykinesia are the cardinal features of Parkinson\'s disease.',
    category: 'Medicine',
    subcategory: 'Neurology',
    difficulty: 2,
    tags: ['neurology', 'Parkinson\'s disease', 'movement disorder']
  },
  {
    id: 'neuro-4',
    question: 'A 25-year-old female presents with severe headache, photophobia, and neck stiffness. What is the most urgent concern?',
    options: [
      'Meningitis',
      'Migraine',
      'Subarachnoid hemorrhage',
      'Tension headache'
    ],
    correctAnswer: 0,
    explanation: 'Headache with photophobia and neck stiffness suggests meningitis, which requires immediate lumbar puncture and antibiotic treatment.',
    category: 'Medicine',
    subcategory: 'Neurology',
    difficulty: 3,
    tags: ['neurology', 'meningitis', 'infectious']
  },
  {
    id: 'neuro-5',
    question: 'A 40-year-old male presents with unilateral facial weakness, inability to close eye, and loss of taste on anterior 2/3 of tongue. What is the most likely diagnosis?',
    options: [
      'Bell\'s palsy',
      'Stroke',
      'Ramsay Hunt syndrome',
      'Brainstem tumor'
    ],
    correctAnswer: 0,
    explanation: 'Unilateral facial weakness with inability to close eye and loss of taste is classic for Bell\'s palsy (facial nerve palsy).',
    category: 'Medicine',
    subcategory: 'Neurology',
    difficulty: 2,
    tags: ['neurology', 'Bell\'s palsy', 'facial nerve']
  },
  {
    id: 'neuro-6',
    question: 'A 55-year-old male presents with sudden onset of vertigo, dysarthria, and ataxia. What is the most likely diagnosis?',
    options: [
      'Vertebrobasilar stroke',
      'Vestibular neuritis',
      'Ménière\'s disease',
      'Migraine'
    ],
    correctAnswer: 0,
    explanation: 'Vertigo with dysarthria and ataxia suggests brainstem involvement, most commonly vertebrobasilar stroke.',
    category: 'Medicine',
    subcategory: 'Neurology',
    difficulty: 3,
    tags: ['neurology', 'stroke', 'vertebrobasilar']
  },

  // SURGERY (6 questions)
  {
    id: 'surgery-1',
    question: 'A 32-year-old female presents with right lower quadrant pain, nausea, and fever. Physical exam shows rebound tenderness. What is the most likely diagnosis?',
    options: [
      'Ovarian torsion',
      'Appendicitis',
      'Diverticulitis',
      'Gastroenteritis'
    ],
    correctAnswer: 1,
    explanation: 'Right lower quadrant pain with rebound tenderness in a young adult is classic for appendicitis.',
    category: 'Surgery',
    subcategory: 'General Surgery',
    difficulty: 2,
    tags: ['surgery', 'appendicitis', 'abdominal pain']
  },
  {
    id: 'surgery-2',
    question: 'A 70-year-old male presents with sudden onset of abdominal pain and vomiting. Physical exam shows a pulsatile abdominal mass. What is the most likely diagnosis?',
    options: [
      'Abdominal aortic aneurysm rupture',
      'Bowel obstruction',
      'Acute pancreatitis',
      'Mesenteric ischemia'
    ],
    correctAnswer: 0,
    explanation: 'Sudden abdominal pain with vomiting and pulsatile mass suggests ruptured abdominal aortic aneurysm, a surgical emergency.',
    category: 'Surgery',
    subcategory: 'Vascular Surgery',
    difficulty: 4,
    tags: ['surgery', 'AAA', 'vascular', 'emergency']
  },
  {
    id: 'surgery-3',
    question: 'A 35-year-old male presents with unilateral testicular pain and swelling. Physical exam shows tenderness and elevation of the testicle. What is the most urgent concern?',
    options: [
      'Testicular torsion',
      'Epididymitis',
      'Testicular cancer',
      'Hydrocele'
    ],
    correctAnswer: 0,
    explanation: 'Testicular torsion is a surgical emergency. The classic presentation is acute unilateral testicular pain with tenderness and elevation of the testicle.',
    category: 'Surgery',
    subcategory: 'Urology',
    difficulty: 3,
    tags: ['surgery', 'urology', 'testicular torsion', 'emergency']
  },
  {
    id: 'surgery-4',
    question: 'A 45-year-old male presents with right upper quadrant pain after eating fatty meals. Ultrasound shows gallstones. What is the most appropriate initial treatment?',
    options: [
      'Laparoscopic cholecystectomy',
      'Open cholecystectomy',
      'Antibiotics',
      'Observation'
    ],
    correctAnswer: 0,
    explanation: 'Symptomatic gallstones with biliary colic are best treated with laparoscopic cholecystectomy, the gold standard treatment.',
    category: 'Surgery',
    subcategory: 'General Surgery',
    difficulty: 2,
    tags: ['surgery', 'gallstones', 'cholecystectomy']
  },
  {
    id: 'surgery-5',
    question: 'A 60-year-old male presents with a lump in the groin that becomes painful and irreducible. What is the most likely diagnosis?',
    options: [
      'Incarcerated hernia',
      'Lymphadenitis',
      'Abscess',
      'Lipoma'
    ],
    correctAnswer: 0,
    explanation: 'A painful, irreducible groin lump suggests an incarcerated hernia, which can progress to strangulation if not treated urgently.',
    category: 'Surgery',
    subcategory: 'General Surgery',
    difficulty: 2,
    tags: ['surgery', 'hernia', 'emergency']
  },
  {
    id: 'surgery-6',
    question: 'A 50-year-old female presents with a breast lump. Mammogram shows a spiculated mass with microcalcifications. What is the most appropriate next step?',
    options: [
      'Core needle biopsy',
      'Excisional biopsy',
      'Fine needle aspiration',
      'MRI breast'
    ],
    correctAnswer: 0,
    explanation: 'Spiculated mass with microcalcifications is highly suspicious for breast cancer. Core needle biopsy is the standard for histological diagnosis.',
    category: 'Surgery',
    subcategory: 'Breast Surgery',
    difficulty: 3,
    tags: ['surgery', 'breast cancer', 'oncology']
  },

  // PEDIATRICS (6 questions)
  {
    id: 'peds-1',
    question: 'A 5-year-old child presents with fever, sore throat, and cervical lymphadenopathy. Rapid strep test is positive. What is the most appropriate treatment?',
    options: [
      'Observation only',
      'Amoxicillin for 10 days',
      'Azithromycin for 3 days',
      'Ceftriaxone IM'
    ],
    correctAnswer: 1,
    explanation: 'For confirmed streptococcal pharyngitis, penicillin or amoxicillin for 10 days is the first-line treatment to prevent rheumatic fever.',
    category: 'Pediatrics',
    subcategory: 'Infectious Diseases',
    difficulty: 2,
    tags: ['pediatrics', 'strep throat', 'antibiotics']
  },
  {
    id: 'peds-2',
    question: 'A 2-year-old child presents with barking cough and stridor. The child is afebrile and appears well. What is the most likely diagnosis?',
    options: [
      'Croup',
      'Epiglottitis',
      'Asthma',
      'Foreign body aspiration'
    ],
    correctAnswer: 0,
    explanation: 'Barking cough and stridor in a young child, often worse at night, is classic for croup (laryngotracheobronchitis).',
    category: 'Pediatrics',
    subcategory: 'Respiratory',
    difficulty: 2,
    tags: ['pediatrics', 'croup', 'respiratory']
  },
  {
    id: 'peds-3',
    question: 'A 6-month-old infant presents with watery diarrhea and vomiting. Stool test shows rotavirus. What is the most important management?',
    options: [
      'Oral rehydration therapy',
      'Antibiotics',
      'Antivirals',
      'Hospital admission'
    ],
    correctAnswer: 0,
    explanation: 'Rotavirus gastroenteritis is managed with oral rehydration therapy. Antibiotics are not indicated for viral infections.',
    category: 'Pediatrics',
    subcategory: 'Gastroenterology',
    difficulty: 1,
    tags: ['pediatrics', 'rotavirus', 'gastroenteritis']
  },
  {
    id: 'peds-4',
    question: 'A 10-year-old boy presents with periorbital edema, proteinuria, and hypertension. What is the most likely diagnosis?',
    options: [
      'Nephrotic syndrome',
      'Nephritic syndrome',
      'Acute glomerulonephritis',
      'UTI'
    ],
    correctAnswer: 0,
    explanation: 'Periorbital edema, proteinuria, and hypertension in a child suggest nephrotic syndrome, the most common being minimal change disease.',
    category: 'Pediatrics',
    subcategory: 'Nephrology',
    difficulty: 3,
    tags: ['pediatrics', 'nephrotic syndrome', 'kidney']
  },
  {
    id: 'peds-5',
    question: 'A 3-year-old child presents with fever, rash, and swollen hands and feet. What is the most likely diagnosis?',
    options: [
      'Kawasaki disease',
      'Scarlet fever',
      'Measles',
      'Rubella'
    ],
    correctAnswer: 0,
    explanation: 'Fever, rash, and extremity swelling are classic for Kawasaki disease, which can cause coronary artery aneurysms if untreated.',
    category: 'Pediatrics',
    subcategory: 'Cardiology',
    difficulty: 3,
    tags: ['pediatrics', 'Kawasaki disease', 'cardiology']
  },
  {
    id: 'peds-6',
    question: 'A newborn presents with bilious vomiting and abdominal distension. What is the most likely diagnosis?',
    options: [
      'Intestinal malrotation with volvulus',
      'Hypertrophic pyloric stenosis',
      'Intussusception',
      'Hirschsprung\'s disease'
    ],
    correctAnswer: 0,
    explanation: 'Bilious vomiting in a newborn is a surgical emergency, most commonly due to intestinal malrotation with volvulus.',
    category: 'Pediatrics',
    subcategory: 'Surgery',
    difficulty: 4,
    tags: ['pediatrics', 'surgery', 'emergency', 'bilious vomiting']
  },

  // PSYCHIATRY (5 questions)
  {
    id: 'psych-1',
    question: 'A 25-year-old female presents with a 2-week history of low mood, anhedonia, and insomnia. She has no suicidal ideation. What is the most appropriate initial management?',
    options: [
      'Start SSRIs immediately',
      'Refer for cognitive behavioral therapy',
      'Prescribe benzodiazepines',
      'Admit to psychiatric ward'
    ],
    correctAnswer: 1,
    explanation: 'For mild to moderate depression without suicidal ideation, cognitive behavioral therapy is recommended as first-line treatment.',
    category: 'Medicine',
    subcategory: 'Psychiatry',
    difficulty: 3,
    tags: ['psychiatry', 'depression', 'CBT']
  },
  {
    id: 'psych-2',
    question: 'A 30-year-old male presents with grandiose delusions, decreased need for sleep, and pressured speech. What is the most likely diagnosis?',
    options: [
      'Bipolar I disorder',
      'Schizophrenia',
      'Major depressive disorder',
      'Generalized anxiety disorder'
    ],
    correctAnswer: 0,
    explanation: 'Grandiose delusions, decreased need for sleep, and pressured speech are classic for manic episode in bipolar I disorder.',
    category: 'Medicine',
    subcategory: 'Psychiatry',
    difficulty: 3,
    tags: ['psychiatry', 'bipolar disorder', 'mania']
  },
  {
    id: 'psych-3',
    question: 'A 40-year-old female presents with intrusive thoughts and repetitive hand washing. What is the most likely diagnosis?',
    options: [
      'Obsessive-compulsive disorder',
      'Generalized anxiety disorder',
      'Panic disorder',
      'Social anxiety disorder'
    ],
    correctAnswer: 0,
    explanation: 'Intrusive thoughts (obsessions) and repetitive behaviors (compulsions) are characteristic of obsessive-compulsive disorder.',
    category: 'Medicine',
    subcategory: 'Psychiatry',
    difficulty: 2,
    tags: ['psychiatry', 'OCD', 'anxiety']
  },
  {
    id: 'psych-4',
    question: 'A 20-year-old male presents with social withdrawal, flat affect, and paranoid delusions. What is the most likely diagnosis?',
    options: [
      'Schizophrenia',
      'Schizoaffective disorder',
      'Major depression with psychotic features',
      'Bipolar disorder'
    ],
    correctAnswer: 0,
    explanation: 'Social withdrawal, flat affect, and paranoid delusions are classic for schizophrenia, especially in young males.',
    category: 'Medicine',
    subcategory: 'Psychiatry',
    difficulty: 3,
    tags: ['psychiatry', 'schizophrenia', 'psychosis']
  },
  {
    id: 'psych-5',
    question: 'A 35-year-old female presents with panic attacks, palpitations, and fear of leaving her home. What is the most likely diagnosis?',
    options: [
      'Panic disorder with agoraphobia',
      'Generalized anxiety disorder',
      'Social anxiety disorder',
      'PTSD'
    ],
    correctAnswer: 0,
    explanation: 'Recurrent panic attacks with fear of leaving home (agoraphobia) is classic for panic disorder with agoraphobia.',
    category: 'Medicine',
    subcategory: 'Psychiatry',
    difficulty: 2,
    tags: ['psychiatry', 'panic disorder', 'anxiety']
  },

  // INFECTIOUS DISEASES (6 questions)
  {
    id: 'id-1',
    question: 'A 45-year-old male presents with high fever, chills, and productive cough. Chest X-ray shows right lower lobe consolidation. What is the most likely organism?',
    options: [
      'Streptococcus pneumoniae',
      'Haemophilus influenzae',
      'Legionella pneumophila',
      'Mycoplasma pneumoniae'
    ],
    correctAnswer: 0,
    explanation: 'Lobar consolidation on chest X-ray with acute symptoms is classic for Streptococcus pneumoniae pneumonia.',
    category: 'Medicine',
    subcategory: 'Infectious Diseases',
    difficulty: 2,
    tags: ['infectious', 'pneumonia', 'bacteria']
  },
  {
    id: 'id-2',
    question: 'A 30-year-old male presents with urethral discharge and dysuria. What is the most likely organism?',
    options: [
      'Neisseria gonorrhoeae',
      'Chlamydia trachomatis',
      'Trichomonas vaginalis',
      'Ureaplasma urealyticum'
    ],
    correctAnswer: 0,
    explanation: 'Purulent urethral discharge is classic for gonococcal urethritis caused by Neisseria gonorrhoeae.',
    category: 'Medicine',
    subcategory: 'Infectious Diseases',
    difficulty: 2,
    tags: ['infectious', 'STI', 'gonorrhea']
  },
  {
    id: 'id-3',
    question: 'A 50-year-old female presents with fever, headache, and neck stiffness. CSF shows lymphocytic pleocytosis. What is the most likely diagnosis?',
    options: [
      'Viral meningitis',
      'Bacterial meningitis',
      'Tuberculous meningitis',
      'Fungal meningitis'
    ],
    correctAnswer: 0,
    explanation: 'Lymphocytic pleocytosis in CSF suggests viral meningitis, which is more common and less severe than bacterial meningitis.',
    category: 'Medicine',
    subcategory: 'Infectious Diseases',
    difficulty: 3,
    tags: ['infectious', 'meningitis', 'viral']
  },
  {
    id: 'id-4',
    question: 'A 25-year-old traveler returns from Southeast Asia with fever, rash, and joint pain. What is the most likely diagnosis?',
    options: [
      'Dengue fever',
      'Malaria',
      'Typhoid fever',
      'Chikungunya'
    ],
    correctAnswer: 0,
    explanation: 'Fever, rash, and joint pain in a traveler from Southeast Asia is classic for dengue fever.',
    category: 'Medicine',
    subcategory: 'Infectious Diseases',
    difficulty: 3,
    tags: ['infectious', 'dengue', 'travel medicine']
  },
  {
    id: 'id-5',
    question: 'A 60-year-old male with diabetes presents with fever and a painful, swollen leg. Physical exam shows crepitus. What is the most likely diagnosis?',
    options: [
      'Necrotizing fasciitis',
      'Cellulitis',
      'Deep vein thrombosis',
      'Osteomyelitis'
    ],
    correctAnswer: 0,
    explanation: 'Crepitus (gas in tissues) with severe pain and swelling is classic for necrotizing fasciitis, a surgical emergency.',
    category: 'Medicine',
    subcategory: 'Infectious Diseases',
    difficulty: 4,
    tags: ['infectious', 'necrotizing fasciitis', 'emergency']
  },
  {
    id: 'id-6',
    question: 'A 40-year-old female presents with diarrhea, abdominal cramps, and fever after eating contaminated food. What is the most likely organism?',
    options: [
      'Salmonella',
      'E. coli O157:H7',
      'Campylobacter',
      'Listeria'
    ],
    correctAnswer: 0,
    explanation: 'Acute gastroenteritis with fever after contaminated food is commonly caused by Salmonella species.',
    category: 'Medicine',
    subcategory: 'Infectious Diseases',
    difficulty: 2,
    tags: ['infectious', 'food poisoning', 'Salmonella']
  },

  // OBSTETRICS & GYNECOLOGY (6 questions)
  {
    id: 'obgyn-1',
    question: 'A 28-year-old female at 32 weeks gestation presents with vaginal bleeding and abdominal pain. What is the most likely diagnosis?',
    options: [
      'Placental abruption',
      'Placenta previa',
      'Preterm labor',
      'Cervical incompetence'
    ],
    correctAnswer: 0,
    explanation: 'Vaginal bleeding with abdominal pain in the third trimester is classic for placental abruption, especially if painful.',
    category: 'Medicine',
    subcategory: 'Obstetrics',
    difficulty: 3,
    tags: ['obstetrics', 'abruption', 'emergency']
  },
  {
    id: 'obgyn-2',
    question: 'A 35-year-old female presents with irregular vaginal bleeding and pelvic pain. Ultrasound shows a thickened endometrium. What is the most likely diagnosis?',
    options: [
      'Endometrial cancer',
      'Fibroids',
      'Endometriosis',
      'Polycystic ovary syndrome'
    ],
    correctAnswer: 0,
    explanation: 'Irregular bleeding with thickened endometrium in a perimenopausal woman is highly suspicious for endometrial cancer.',
    category: 'Medicine',
    subcategory: 'Gynecology',
    difficulty: 3,
    tags: ['gynecology', 'endometrial cancer', 'oncology']
  },
  {
    id: 'obgyn-3',
    question: 'A 25-year-old female presents with severe dysmenorrhea and infertility. Physical exam shows fixed uterus with nodules. What is the most likely diagnosis?',
    options: [
      'Endometriosis',
      'Adenomyosis',
      'Pelvic inflammatory disease',
      'Fibroids'
    ],
    correctAnswer: 0,
    explanation: 'Dysmenorrhea, infertility, and fixed uterus with nodules are classic for endometriosis.',
    category: 'Medicine',
    subcategory: 'Gynecology',
    difficulty: 3,
    tags: ['gynecology', 'endometriosis', 'infertility']
  },
  {
    id: 'obgyn-4',
    question: 'A 30-year-old female at 38 weeks gestation presents with headache, visual disturbances, and hypertension. What is the most likely diagnosis?',
    options: [
      'Preeclampsia',
      'Eclampsia',
      'Gestational hypertension',
      'HELLP syndrome'
    ],
    correctAnswer: 0,
    explanation: 'Hypertension with headache and visual disturbances after 20 weeks gestation is classic for preeclampsia.',
    category: 'Medicine',
    subcategory: 'Obstetrics',
    difficulty: 2,
    tags: ['obstetrics', 'preeclampsia', 'hypertension']
  },
  {
    id: 'obgyn-5',
    question: 'A 40-year-old female presents with breast lump. Mammogram shows suspicious calcifications. What is the most appropriate next step?',
    options: [
      'Core needle biopsy',
      'Excisional biopsy',
      'Fine needle aspiration',
      'MRI breast'
    ],
    correctAnswer: 0,
    explanation: 'Suspicious mammographic findings require core needle biopsy for histological diagnosis before treatment.',
    category: 'Medicine',
    subcategory: 'Gynecology',
    difficulty: 2,
    tags: ['gynecology', 'breast cancer', 'oncology']
  },
  {
    id: 'obgyn-6',
    question: 'A 22-year-old female presents with pelvic pain and fever. Physical exam shows cervical motion tenderness. What is the most likely diagnosis?',
    options: [
      'Pelvic inflammatory disease',
      'Ectopic pregnancy',
      'Ovarian torsion',
      'Appendicitis'
    ],
    correctAnswer: 0,
    explanation: 'Pelvic pain, fever, and cervical motion tenderness are classic for pelvic inflammatory disease (PID).',
    category: 'Medicine',
    subcategory: 'Gynecology',
    difficulty: 2,
    tags: ['gynecology', 'PID', 'infectious']
  },

  // DERMATOLOGY (4 questions)
  {
    id: 'derm-1',
    question: 'A 30-year-old male presents with a circular, scaly rash with central clearing on his arm. What is the most likely diagnosis?',
    options: [
      'Tinea corporis',
      'Eczema',
      'Psoriasis',
      'Contact dermatitis'
    ],
    correctAnswer: 0,
    explanation: 'Circular, scaly rash with central clearing is classic for tinea corporis (ringworm).',
    category: 'Medicine',
    subcategory: 'Dermatology',
    difficulty: 1,
    tags: ['dermatology', 'fungal infection', 'tinea']
  },
  {
    id: 'derm-2',
    question: 'A 50-year-old male presents with a pearly, dome-shaped lesion with telangiectasias on his face. What is the most likely diagnosis?',
    options: [
      'Basal cell carcinoma',
      'Squamous cell carcinoma',
      'Melanoma',
      'Seborrheic keratosis'
    ],
    correctAnswer: 0,
    explanation: 'Pearly, dome-shaped lesion with telangiectasias is classic for basal cell carcinoma, the most common skin cancer.',
    category: 'Medicine',
    subcategory: 'Dermatology',
    difficulty: 2,
    tags: ['dermatology', 'skin cancer', 'oncology']
  },
  {
    id: 'derm-3',
    question: 'A 25-year-old female presents with malar rash and photosensitivity. What is the most likely diagnosis?',
    options: [
      'Systemic lupus erythematosus',
      'Rosacea',
      'Acne',
      'Dermatitis'
    ],
    correctAnswer: 0,
    explanation: 'Malar rash and photosensitivity are classic cutaneous manifestations of systemic lupus erythematosus.',
    category: 'Medicine',
    subcategory: 'Dermatology',
    difficulty: 3,
    tags: ['dermatology', 'lupus', 'autoimmune']
  },
  {
    id: 'derm-4',
    question: 'A 40-year-old male presents with itchy, red patches on elbows and knees with silvery scales. What is the most likely diagnosis?',
    options: [
      'Psoriasis',
      'Eczema',
      'Tinea',
      'Lichen planus'
    ],
    correctAnswer: 0,
    explanation: 'Red plaques with silvery scales on extensor surfaces (elbows, knees) is classic for psoriasis.',
    category: 'Medicine',
    subcategory: 'Dermatology',
    difficulty: 2,
    tags: ['dermatology', 'psoriasis', 'autoimmune']
  },

  // OPHTHALMOLOGY (3 questions)
  {
    id: 'ophth-1',
    question: 'A 60-year-old male presents with sudden, painless vision loss. Fundoscopy shows cherry-red spot at macula. What is the most likely diagnosis?',
    options: [
      'Central retinal artery occlusion',
      'Central retinal vein occlusion',
      'Glaucoma',
      'Retinal detachment'
    ],
    correctAnswer: 0,
    explanation: 'Sudden, painless vision loss with cherry-red spot at macula is classic for central retinal artery occlusion.',
    category: 'Medicine',
    subcategory: 'Ophthalmology',
    difficulty: 3,
    tags: ['ophthalmology', 'CRAO', 'emergency']
  },
  {
    id: 'ophth-2',
    question: 'A 55-year-old female presents with eye pain, headache, nausea, and blurred vision with halos. What is the most likely diagnosis?',
    options: [
      'Acute angle-closure glaucoma',
      'Migraine',
      'Conjunctivitis',
      'Cataract'
    ],
    correctAnswer: 0,
    explanation: 'Eye pain, headache, nausea, blurred vision with halos is classic for acute angle-closure glaucoma, an ophthalmologic emergency.',
    category: 'Medicine',
    subcategory: 'Ophthalmology',
    difficulty: 3,
    tags: ['ophthalmology', 'glaucoma', 'emergency']
  },
  {
    id: 'ophth-3',
    question: 'A 20-year-old male presents with sudden onset of floaters and flashes. Fundoscopy shows retinal tear. What is the most appropriate treatment?',
    options: [
      'Laser photocoagulation',
      'Observation',
      'Oral steroids',
      'Antibiotics'
    ],
    correctAnswer: 0,
    explanation: 'Retinal tear requires immediate laser photocoagulation to prevent progression to retinal detachment.',
    category: 'Medicine',
    subcategory: 'Ophthalmology',
    difficulty: 3,
    tags: ['ophthalmology', 'retinal tear', 'emergency']
  },

  // OTOLARYNGOLOGY (3 questions)
  {
    id: 'ent-1',
    question: 'A 45-year-old male presents with unilateral hearing loss, tinnitus, and vertigo. What is the most likely diagnosis?',
    options: [
      'Acoustic neuroma',
      'Otitis media',
      'Meniere\'s disease',
      'Sensorineural hearing loss'
    ],
    correctAnswer: 0,
    explanation: 'Unilateral hearing loss with tinnitus and vertigo is classic for acoustic neuroma (vestibular schwannoma).',
    category: 'Medicine',
    subcategory: 'Otolaryngology',
    difficulty: 3,
    tags: ['ENT', 'acoustic neuroma', 'neurology']
  },
  {
    id: 'ent-2',
    question: 'A 30-year-old male presents with sore throat, fever, and difficulty swallowing. Physical exam shows peritonsillar swelling and uvular deviation. What is the most likely diagnosis?',
    options: [
      'Peritonsillar abscess',
      'Tonsillitis',
      'Epiglottitis',
      'Pharyngitis'
    ],
    correctAnswer: 0,
    explanation: 'Peritonsillar swelling with uvular deviation is classic for peritonsillar abscess, requiring drainage.',
    category: 'Medicine',
    subcategory: 'Otolaryngology',
    difficulty: 2,
    tags: ['ENT', 'peritonsillar abscess', 'infectious']
  },
  {
    id: 'ent-3',
    question: 'A 50-year-old male smoker presents with hoarseness lasting >6 weeks. What is the most urgent concern?',
    options: [
      'Laryngeal cancer',
      'Vocal cord polyp',
      'Laryngitis',
      'GERD'
    ],
    correctAnswer: 0,
    explanation: 'Hoarseness >6 weeks in a smoker is highly suspicious for laryngeal cancer and requires urgent ENT evaluation.',
    category: 'Medicine',
    subcategory: 'Otolaryngology',
    difficulty: 3,
    tags: ['ENT', 'laryngeal cancer', 'oncology']
  },

  // RHEUMATOLOGY (3 questions)
  {
    id: 'rheum-1',
    question: 'A 65-year-old female presents with symmetric polyarthritis of small joints, morning stiffness >1 hour, and rheumatoid factor positive. What is the most likely diagnosis?',
    options: [
      'Rheumatoid arthritis',
      'Osteoarthritis',
      'Systemic lupus erythematosus',
      'Psoriatic arthritis'
    ],
    correctAnswer: 0,
    explanation: 'Symmetric small joint polyarthritis with morning stiffness and positive RF is classic for rheumatoid arthritis.',
    category: 'Medicine',
    subcategory: 'Rheumatology',
    difficulty: 2,
    tags: ['rheumatology', 'rheumatoid arthritis', 'autoimmune']
  },
  {
    id: 'rheum-2',
    question: 'A 40-year-old male presents with acute monoarthritis of the big toe. What is the most likely diagnosis?',
    options: [
      'Gout',
      'Pseudogout',
      'Septic arthritis',
      'Osteoarthritis'
    ],
    correctAnswer: 0,
    explanation: 'Acute monoarthritis of the big toe (podagra) is classic for gout.',
    category: 'Medicine',
    subcategory: 'Rheumatology',
    difficulty: 2,
    tags: ['rheumatology', 'gout', 'arthritis']
  },
  {
    id: 'rheum-3',
    question: 'A 35-year-old female presents with dry eyes, dry mouth, and parotid enlargement. What is the most likely diagnosis?',
    options: [
      'Sjögren\'s syndrome',
      'Systemic lupus erythematosus',
      'Rheumatoid arthritis',
      'Sarcoidosis'
    ],
    correctAnswer: 0,
    explanation: 'Dry eyes and dry mouth (sicca syndrome) with parotid enlargement is classic for Sjögren\'s syndrome.',
    category: 'Medicine',
    subcategory: 'Rheumatology',
    difficulty: 3,
    tags: ['rheumatology', 'Sjögren\'s', 'autoimmune']
  },

  // HEMATOLOGY (3 questions)
  {
    id: 'heme-1',
    question: 'A 60-year-old male presents with fatigue, weight loss, and splenomegaly. CBC shows leukocytosis with many immature cells. What is the most likely diagnosis?',
    options: [
      'Chronic myeloid leukemia',
      'Acute myeloid leukemia',
      'Chronic lymphocytic leukemia',
      'Lymphoma'
    ],
    correctAnswer: 0,
    explanation: 'Splenomegaly with leukocytosis in an older adult is classic for chronic myeloid leukemia.',
    category: 'Medicine',
    subcategory: 'Hematology',
    difficulty: 3,
    tags: ['hematology', 'leukemia', 'oncology']
  },
  {
    id: 'heme-2',
    question: 'A 25-year-old female presents with fatigue, pallor, and jaundice. CBC shows hemolytic anemia. What is the most likely diagnosis?',
    options: [
      'Autoimmune hemolytic anemia',
      'Iron deficiency anemia',
      'Sickle cell disease',
      'Thalassemia'
    ],
    correctAnswer: 0,
    explanation: 'Hemolytic anemia with jaundice in a young adult suggests autoimmune hemolytic anemia.',
    category: 'Medicine',
    subcategory: 'Hematology',
    difficulty: 3,
    tags: ['hematology', 'anemia', 'autoimmune']
  },
  {
    id: 'heme-3',
    question: 'A 70-year-old male presents with fatigue, recurrent infections, and lymphadenopathy. CBC shows lymphocytosis. What is the most likely diagnosis?',
    options: [
      'Chronic lymphocytic leukemia',
      'Acute lymphoblastic leukemia',
      'Lymphoma',
      'Multiple myeloma'
    ],
    correctAnswer: 0,
    explanation: 'Lymphocytosis with lymphadenopathy in an older adult is classic for chronic lymphocytic leukemia.',
    category: 'Medicine',
    subcategory: 'Hematology',
    difficulty: 3,
    tags: ['hematology', 'leukemia', 'oncology']
  },

  // NEPHROLOGY (3 questions)
  {
    id: 'neph-1',
    question: 'A 45-year-old male presents with hypertension, hematuria, and proteinuria. Urinalysis shows red blood cell casts. What is the most likely diagnosis?',
    options: [
      'Glomerulonephritis',
      'Pyelonephritis',
      'Nephrotic syndrome',
      'Kidney stones'
    ],
    correctAnswer: 0,
    explanation: 'Red blood cell casts in urine are pathognomonic for glomerulonephritis.',
    category: 'Medicine',
    subcategory: 'Nephrology',
    difficulty: 3,
    tags: ['nephrology', 'glomerulonephritis', 'hematuria']
  },
  {
    id: 'neph-2',
    question: 'A 30-year-old male presents with frothy urine and edema. Urinalysis shows proteinuria >3.5g/day. What is the most likely diagnosis?',
    options: [
      'Nephrotic syndrome',
      'Nephritic syndrome',
      'Acute kidney injury',
      'Chronic kidney disease'
    ],
    correctAnswer: 0,
    explanation: 'Massive proteinuria (>3.5g/day) with edema is classic for nephrotic syndrome.',
    category: 'Medicine',
    subcategory: 'Nephrology',
    difficulty: 2,
    tags: ['nephrology', 'nephrotic syndrome', 'proteinuria']
  },
  {
    id: 'neph-3',
    question: 'A 65-year-old male with diabetes and hypertension presents with fatigue and nausea. Creatinine is elevated. What is the most likely diagnosis?',
    options: [
      'Chronic kidney disease',
      'Acute kidney injury',
      'Glomerulonephritis',
      'Pyelonephritis'
    ],
    correctAnswer: 0,
    explanation: 'Elevated creatinine with diabetes and hypertension in an older adult suggests chronic kidney disease.',
    category: 'Medicine',
    subcategory: 'Nephrology',
    difficulty: 2,
    tags: ['nephrology', 'CKD', 'diabetes']
  },

  // ENDOCRINOLOGY - ADDITIONAL (3 questions)
  {
    id: 'endo-8',
    question: 'A 40-year-old female presents with weight gain, hirsutism, and irregular periods. What is the most likely diagnosis?',
    options: [
      'Polycystic ovary syndrome',
      'Cushing\'s syndrome',
      'Hypothyroidism',
      'Addison\'s disease'
    ],
    correctAnswer: 0,
    explanation: 'Weight gain, hirsutism, and irregular periods in a reproductive-age female is classic for polycystic ovary syndrome.',
    category: 'Medicine',
    subcategory: 'Endocrinology',
    difficulty: 2,
    tags: ['endocrinology', 'PCOS', 'reproductive']
  },
  {
    id: 'endo-9',
    question: 'A 50-year-old male presents with polyuria, polydipsia, and polyphagia. What is the classic triad for?',
    options: [
      'Diabetes mellitus',
      'Hyperthyroidism',
      'Cushing\'s syndrome',
      'Acromegaly'
    ],
    correctAnswer: 0,
    explanation: 'Polyuria, polydipsia, and polyphagia is the classic triad for diabetes mellitus.',
    category: 'Medicine',
    subcategory: 'Endocrinology',
    difficulty: 1,
    tags: ['endocrinology', 'diabetes', 'triad']
  },
  {
    id: 'endo-10',
    question: 'A 35-year-old male presents with enlarged hands and jaw, and headaches. What is the most likely diagnosis?',
    options: [
      'Acromegaly',
      'Cushing\'s syndrome',
      'Hypothyroidism',
      'Pituitary tumor'
    ],
    correctAnswer: 0,
    explanation: 'Enlarged hands and jaw with headaches suggests acromegaly due to growth hormone excess.',
    category: 'Medicine',
    subcategory: 'Endocrinology',
    difficulty: 3,
    tags: ['endocrinology', 'acromegaly', 'growth hormone']
  }
]

// Spaced repetition algorithm (SM-2 variant)
export function calculateNextReview(
  currentInterval: number,
  easeFactor: number,
  repetitions: number,
  quality: number // 0-5 (0=complete blackout, 5=perfect recall)
): { nextInterval: number; newEaseFactor: number; newRepetitions: number } {
  let newInterval = currentInterval
  let newEaseFactor = easeFactor
  let newRepetitions = repetitions

  if (quality < 3) {
    // Failed - reset
    newRepetitions = 0
    newInterval = 1
  } else {
    // Success
    if (repetitions === 0) {
      newInterval = 1
    } else if (repetitions === 1) {
      newInterval = 6
    } else {
      newInterval = Math.round(currentInterval * easeFactor)
    }
    newRepetitions = repetitions + 1
  }

  // Update ease factor
  newEaseFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))

  return {
    nextInterval: newInterval,
    newEaseFactor: newEaseFactor,
    newRepetitions: newRepetitions,
  }
}

// Get questions for a study session
export async function getQuestionsForSession(
  userId: string,
  count: number = 20,
  type: 'practice' | 'review' | 'exam' = 'practice'
): Promise<Question[]> {
  // In production, this would query the database
  // For now, return sample questions
  return sampleQuestions.slice(0, count)
}

// Calculate weak areas based on user performance
export function calculateWeakAreas(
  performanceByCategory: Record<string, { correct: number; total: number }>
): string[] {
  const weakAreas: string[] = []

  for (const [category, stats] of Object.entries(performanceByCategory)) {
    const accuracy = stats.correct / stats.total
    if (accuracy < 0.6) {
      weakAreas.push(category)
    }
  }

  return weakAreas
}

// Get questions by category
export function getQuestionsByCategory(category: string): Question[] {
  return sampleQuestions.filter((q) => q.category === category || q.subcategory === category)
}

// Get questions by difficulty
export function getQuestionsByDifficulty(difficulty: number): Question[] {
  return sampleQuestions.filter((q) => q.difficulty === difficulty)
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = new Set<string>()
  sampleQuestions.forEach((q) => {
    categories.add(q.category)
    if (q.subcategory) {
      categories.add(`${q.category} - ${q.subcategory}`)
    }
  })
  return Array.from(categories)
}
