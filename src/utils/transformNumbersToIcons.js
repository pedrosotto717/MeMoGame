import {
  GiCrossShield,
  GiCrossbow,
  GiCrossedAxes,
  GiCrowDive,
  GiCrossedPistols,
  GiCrossedSwords,
  GiCrown,
  GiCube,
  GiCubes,
  GiCursedStar,
  GiCutDiamond,
  GiDeerHead,
  GiDoubleDragon,
  GiDjinn,
  GiDolphin,
  GiEagleEmblem,
  GiFire,
  GiFedora,
  GiHoodedFigure,
  GiHornedHelm,
  GiHorseHead,
  GiHummingbird,
  GiIceGolem,
  GiKangaroo,
  GiMaceHead,
  GiMailedFist,
  GiMusicalNotes,
  GiNuclear,
  GiOmega,
  GiOpenChest,
  GiOppositeHearts,
  GiPadlock,
  GiPalm,
  GiParachute,
  GiPawn,
  GiPeaceDove,
  GiPegasus,
  GiPeaks,
  GiParasaurolophus,
} from 'react-icons/gi'

const ICONS = [
  GiCrossShield,
  GiCrossbow,
  GiCrossedAxes,
  GiCrowDive,
  GiCrossedPistols,
  GiCrossedSwords,
  GiCrown,
  GiCube,
  GiCubes,
  GiCursedStar,
  GiCutDiamond,
  GiDeerHead,
  GiDoubleDragon,
  GiDjinn,
  GiDolphin,
  GiEagleEmblem,
  GiFire,
  GiFedora,
  GiHoodedFigure,
  GiHornedHelm,
  GiHorseHead,
  GiHummingbird,
  GiIceGolem,
  GiKangaroo,
  GiMaceHead,
  GiMailedFist,
  GiMusicalNotes,
  GiNuclear,
  GiOmega,
  GiOpenChest,
  GiOppositeHearts,
  GiPadlock,
  GiPalm,
  GiParachute,
  GiPawn,
  GiPeaceDove,
  GiPegasus,
  GiPeaks,
  GiParasaurolophus,
]

export const transformNumbersToIcons = (arrayObject) => {
  return arrayObject.map(({ index }, i) => {
    return { index, value: ICONS[index] }
  })
}