import '@picocss/pico';
import './style.css';
import './styles/header.css';
import { optionsBuilder } from './utils/dropdownBuilder';

const categoriesDropdownData = {
  options: [
    { id: 'categ_mmorpg', nodeLabel: 'mmorpg' },
    { id: 'categ_shooter', nodeLabel: 'shooter' },
    { id: 'categ_strategy', nodeLabel: 'strategy' },
    { id: 'categ_moba', nodeLabel: 'moba' },
    { id: 'categ_racing', nodeLabel: 'racing' },
    { id: 'categ_sports', nodeLabel: 'sports' },
    { id: 'categ_social', nodeLabel: 'social' },
    { id: 'categ_sandbox', nodeLabel: 'sandbox' },
    { id: 'categ_open-world', nodeLabel: 'open' },
    { id: 'categ_survival', nodeLabel: 'survival' },
    { id: 'categ_pvp', nodeLabel: 'pvp' },
    { id: 'categ_pve', nodeLabel: 'pve' },
    { id: 'categ_pixel', nodeLabel: 'pixel' },
    { id: 'categ_voxel', nodeLabel: 'voxel' },
    { id: 'categ_zombie', nodeLabel: 'zombie' },
    { id: 'categ_turn-based', nodeLabel: 'turn-based' },
    { id: 'categ_first-person', nodeLabel: 'first-person' },
    { id: 'categ_third-person', nodeLabel: 'third-person' },
    { id: 'categ_top-down', nodeLabel: 'top-down' },
    { id: 'categ_tank', nodeLabel: 'tank' },
    { id: 'categ_space', nodeLabel: 'space' },
    { id: 'categ_sailing', nodeLabel: 'sailing' },
    { id: 'categ_side-scroller', nodeLabel: 'side-scroller' },
    { id: 'categ_superhero', nodeLabel: 'superhero' },
    { id: 'categ_permadeath', nodeLabel: 'permadeath' },
    { id: 'categ_card', nodeLabel: 'card' },
    { id: 'categ_battle-royale', nodeLabel: 'battle-royale' },
    { id: 'categ_mmo', nodeLabel: 'mmo' },
    { id: 'categ_mmofps', nodeLabel: 'mmofps' },
    { id: 'categ_mmotps', nodeLabel: 'mmotps' },
    { id: 'categ_3d', nodeLabel: '3d' },
    { id: 'categ_2d', nodeLabel: '2d' },
    { id: 'categ_anime', nodeLabel: 'anime' },
    { id: 'categ_fantasy', nodeLabel: 'fantasy' },
    { id: 'categ_sci-fi', nodeLabel: 'sci-fi' },
    { id: 'categ_fighting', nodeLabel: 'fighting' },
    { id: 'categ_action-rpg', nodeLabel: 'action-rpg' },
    { id: 'categ_action', nodeLabel: 'action' },
    { id: 'categ_military', nodeLabel: 'military' },
    { id: 'categ_martial-arts', nodeLabel: 'martial-arts' },
    { id: 'categ_flight', nodeLabel: 'flight' },
    { id: 'categ_low-spec', nodeLabel: 'low-spec' },
    { id: 'categ_tower-defense', nodeLabel: 'tower-defense' },
    { id: 'categ_horror', nodeLabel: 'horror' },
    { id: 'categ_mmorts', nodeLabel: 'mmorts' },
  ],
};

window.addEventListener('load', () => {
  const categoriesContainer = document.querySelector(
    '#game-search__categories-dropdown'
  );
  categoriesContainer.appendChild(optionsBuilder(categoriesDropdownData));
});
