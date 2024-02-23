namespace Nexirium {
  export async function gameOver1(): ƒS.SceneReturn {
    console.log("Reached Game Over 1");
    await ƒS.Location.show(location.blackBackground); //design Game Over Screen
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.mother, "Is this already the end? You died so quickly!");
    await ƒS.Speech.tell(characters.mother, "Can't say I'm surprised but I am immensely disappointed.");
    await ƒS.Speech.tell(characters.mother, "No, this can't do. I'll send you back. Don't mess up this time, you hear me?");
    return "firstScene";
    // save death for later?
  }
}