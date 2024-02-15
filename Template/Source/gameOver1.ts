namespace Template {
    export async function gameOver1(): ƒS.SceneReturn {
      console.log("Reached Game Over 1");
      await ƒS.Location.show(location.blackBackground);
      await ƒS.update(0.5);
      await ƒS.Speech.tell(characters.narrator, "Is this the end?...");
      return "firstScene";
    }
  }