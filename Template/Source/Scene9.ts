namespace Nexirium {
    export async function Scene9(): ƒS.SceneReturn {
        console.log("FudgeStory Scene 9 starting");

        await ƒS.Character.hide(characters.companion);
        await ƒS.Location.show(location.blackBackground);
        await ƒS.update(1);

        if (dataForSave.buddyScore >= 5) {
            await ƒS.Speech.tell(characters.companion, "Before we go inside, I have to tell you something.");
            await ƒS.Speech.tell(characters.mainCharacter, "Sure, go ahead!");
            await ƒS.Speech.tell(characters.companion, "I do not like the way Mother does things, her methods are a bit... extreme... But you should know that she only has good intentions.");
            await ƒS.Speech.tell(characters.companion, "And she is not who she wants you to think she is.");
            await ƒS.Speech.tell(characters.mainCharacter, "Oookay? What does that mean?");
            await ƒS.Speech.tell(characters.companion, "You'll see...");
            return "GoodEnding";
        }
        else if (dataForSave.buddyScore <= 5) {
            return "BadEnding";
        }


    }
}