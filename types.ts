
export interface EvictionData {
  tenantName: string;
  sinLevel: string;
  circleOfHell: string;
  propertyAddress: string;
  evictionReason: string;
  contractDate: string;
}

export enum HellCircle {
  LIMBO = "Limbo (Apartamento de Lujo sin Vista)",
  LUST = "Lujuria (Suite de Terciopelo)",
  GLUTTONY = "Gula (Comedor Eterno)",
  GREED = "Avaricia (Caja Fuerte Residencial)",
  WRATH = "Ira (Pantano del Estigia)",
  HERESY = "Herejía (Sarcófago de Fuego)",
  VIOLENCE = "Violencia (Río de Sangre)",
  FRAUD = "Fraude (Fosa de Malbolge)",
  TREACHERY = "Traición (Lago de Hielo)",
}
