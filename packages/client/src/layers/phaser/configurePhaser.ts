import Phaser from "phaser";
import {
  defineSceneConfig,
  AssetType,
  defineScaleConfig,
  defineMapConfig,
  defineCameraConfig,
} from "@latticexyz/phaserx";
import worldTileset from "../../../public/assets/tilesets/world.png";
import { TileAnimations, Tileset } from "../../artTypes/world";
import { Assets, Maps, Scenes, TILE_HEIGHT, TILE_WIDTH, Animations } from "./constants";

const ANIMATION_INTERVAL = 200;

const mainMap = defineMapConfig({
  chunkSize: TILE_WIDTH * 64, // tile size * tile amount
  tileWidth: TILE_WIDTH,
  tileHeight: TILE_HEIGHT,
  backgroundTile: [Tileset.Grass],
  animationInterval: ANIMATION_INTERVAL,
  tileAnimations: TileAnimations,
  layers: {
    layers: {
      Background: { tilesets: ["Default"] },
      Foreground: { tilesets: ["Default"] },
    },
    defaultLayer: "Background",
  },
});

export const phaserConfig = {
  sceneConfig: {
    [Scenes.Main]: defineSceneConfig({
      assets: {
        [Assets.Tileset]: {
          type: AssetType.Image,
          key: Assets.Tileset,
          path: worldTileset,
        },
        [Assets.MainAtlas]: {
          type: AssetType.MultiAtlas,
          key: Assets.MainAtlas,
          // Add a timestamp to the end of the path to prevent caching
          path: `/assets/atlases/atlas.json?timestamp=${Date.now()}`,
          options: {
            imagePath: "/assets/atlases/",
          },
        },
      },
      maps: {
        [Maps.Main]: mainMap,
      },
      sprites: {
      },
      animations: [
        {
          key: Animations.Player,
          assetKey: Assets.MainAtlas,
          startFrame: 1,
          endFrame: 2,
          frameRate: 3,
          repeat: -1,
          prefix: "sprites/player/",
          suffix: ".png",
        },
        {
          key: Animations.Dead,
          assetKey: Assets.MainAtlas,
          startFrame: 1,
          endFrame: 1,
          frameRate: 12,
          repeat: -1,
          prefix: "sprites/dead/",
          suffix: ".png",
        },
        {
          key: Animations.Bomb,
          assetKey: Assets.MainAtlas,
          startFrame: 1,
          endFrame: 1,
          frameRate: 12,
          repeat: -1,
          prefix: "sprites/bomb/",
          suffix: ".png",
        },
      ],
      tilesets: {
        Default: {
          assetKey: Assets.Tileset,
          tileWidth: TILE_WIDTH,
          tileHeight: TILE_HEIGHT,
        },
      },
    }),
  },
  scale: defineScaleConfig({
    parent: "phaser-game",
    zoom: 1,
    mode: Phaser.Scale.NONE,
  }),
  cameraConfig: defineCameraConfig({
    pinchSpeed: 1,
    wheelSpeed: 1,
    maxZoom: 3,
    minZoom: 1,
  }),
  cullingChunkSize: TILE_HEIGHT * 16,
};
