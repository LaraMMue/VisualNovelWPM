namespace Nexirium {
    export async function GameOver2(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene starting");
        console.log("Reached Game Over 2");
        await ƒS.Location.show(location.blackBackground);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.mother, "You died... How disappointing...");
        await ƒS.Speech.tell(characters.mother, "Alright, let me give you one more chance. Otherwise, I'll just be bored...");
        return "firstScene";
    }
}