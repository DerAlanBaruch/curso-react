export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Species[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprites;
  cries: Cries;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: Species;
}

interface Species {
  name: string;
  url: string;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface GameIndex {
  game_index: number;
  version: Species;
}

interface HeldItem {
  item: Species;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: Species;
}

interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  version_group: Species;
  move_learn_method: Species;
}

interface PastType {
  generation: Species;
  types: Type[];
}

interface Type {
  slot: number;
  type: Species;
}



interface Versions {
  [key: string]: { [key: string]: Home };
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
  showdown: Sprites;
}

interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}


interface DreamWorld {
  front_default: string;
  front_female: null;
}


interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}
