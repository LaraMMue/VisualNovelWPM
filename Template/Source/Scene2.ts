namespace Template {
    export async function Scene2(): ƒS.SceneReturn {
      console.log("Scene 2 starting");

      await ƒS.Location.show(location.moonStationInterior);
      await ƒS.update(0.5);

      await ƒS.Speech.tell(characters.mainCharacter, "Oh what's this? Looks like a robot of some sorts.");
    }
  }