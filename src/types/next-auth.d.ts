import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
  }

  interface Session {
    user: User & {
      id: string;
    };
  }
}

type WellnessKeys =
  | "wellness.title"
  | "wellness.subtitle"
  | "wellness.description"
  | "wellness.traditional.title"
  | "wellness.traditional.description"
  | "wellness.traditional.benefitsLabel"
  | "wellness.traditional.practices.hammam.title"
  | "wellness.traditional.practices.hammam.description"
  | "wellness.traditional.practices.hammam.benefits"
  | "wellness.traditional.practices.sandTherapy.title"
  | "wellness.traditional.practices.sandTherapy.description"
  | "wellness.traditional.practices.sandTherapy.benefits"
  | "wellness.traditional.practices.herbalism.title"
  | "wellness.traditional.practices.herbalism.description"
  | "wellness.traditional.practices.herbalism.benefits"
  | "wellness.traditional.practices.meditation.title"
  | "wellness.traditional.practices.meditation.description"
  | "wellness.traditional.practices.meditation.benefits"
  | "wellness.tips.title"
  | "wellness.tips.bestTime.title"
  | "wellness.tips.bestTime.description"
  | "wellness.tips.preparation.title"
  | "wellness.tips.preparation.description"
  | "wellness.tips.clothing.title"
  | "wellness.tips.clothing.description"
  | "wellness.unique.title"
  | "wellness.unique.experiences.nileCruise.title"
  | "wellness.unique.experiences.nileCruise.description"
  | "wellness.unique.experiences.nileCruise.features.yoga"
  | "wellness.unique.experiences.nileCruise.features.meditation"
  | "wellness.unique.experiences.nileCruise.features.massage"
  | "wellness.unique.experiences.desertRetreat.title"
  | "wellness.unique.experiences.desertRetreat.description"
  | "wellness.unique.experiences.desertRetreat.features.stargazing"
  | "wellness.unique.experiences.desertRetreat.features.meditation"
  | "wellness.unique.experiences.desertRetreat.features.healing"
  | "wellness.funFacts.title"
  | "wellness.funFacts.ancient.fact"
  | "wellness.funFacts.ancient.description"
  | "wellness.funFacts.cleopatra.fact"
  | "wellness.funFacts.cleopatra.description"
  | "wellness.funFacts.herbs.fact"
  | "wellness.funFacts.herbs.description"
  | "wellness.funFacts.modern.fact"
  | "wellness.funFacts.modern.description";

type TranslationKeys = 
  | NavKeys 
  | AuthKeys 
  | HomeKeys 
  | WellnessKeys
  // ... rest of existing types ... 