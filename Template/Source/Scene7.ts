namespace Nexirium {
    export async function Scene7(): ƒS.SceneReturn {
        console.log("FudgeStory Scene 7 starting");

        await ƒS.Character.hide(characters.companion);
        await ƒS.Location.show(location.cockpit);
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.mainCharacter, "Phew, that worked better than I expected. Hopefully the landing will be just as easy...");
        await ƒS.Speech.tell(characters.companion, "You can engage the autopilot to the NexirTech Spacestation now.");
        await ƒS.Speech.tell(characters.mainCharacter, "Huh? Can't we go directly to earth?");
        await ƒS.Speech.tell(characters.companion, "This spaceship isn't made to fly in the Earths atmosphere. We'll have to exchange it with one that can actually land on Earth. And besides, it's really really far. The engine would run out of Nexirium before we would even reach the atmosphere.");
        await ƒS.Speech.tell(characters.mainCharacter, "Alright alright, how do I activate the autopilot?");
        await ƒS.Speech.tell(characters.companion, "Press this button here. Then choose the destination from the preset list.");
        await ƒS.Speech.tell(characters.mainCharacter, "Great! Should be smooth sailing now, right?");
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Yeah it should only take a few hours. And then we can...");

        ƒS.Sound.fade(sound.alarm, 0.1, 2, true);

        await ƒS.Speech.tell(characters.commsVoice, "WARNING! ENGINE PRESSURE BALANCING FAILED. WARNING! ENGINE PRESSURE BALANCING FAILED.");
        await ƒS.Speech.tell(characters.mainCharacter, "Oh no, what now?");
        await ƒS.Speech.tell(characters.companion, "This is bad... If we don't fix this quickly, the engine could explode!!");
        await ƒS.Speech.tell(characters.mainCharacter, "WHAT?? What do I do? How can we fix it??");
        await ƒS.Speech.tell(characters.companion, "I'll look up the manual right now. Please stay calm.");
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.scared, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "I don't understand it. Why is it written like that? This is not following standard spaceship manual guidelines! It does say something about cables behind the seat but the rest...?");
        await ƒS.Speech.tell(characters.mainCharacter, "Oh no, oh no. Give it to me, I'll try to understand it.");


        ƒS.Inventory.add(items.manual);
        await ƒS.update();
        await ƒS.Inventory.open();

        await ƒS.Speech.tell(characters.mainCharacter, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "Okay it's one of the two cables we need to connect to this third one right here. But which one?");

        await ƒS.Speech.tell(characters.companion, "Maybe you should look at the manual again?");

        let lookAgain = {
            no: "No, I know the answer",
            yes: "Look at the manual again"
        };

        let lookAgainButtons = await ƒS.Menu.getInput(lookAgain, "choicesCSSclass");


        switch (lookAgainButtons) {
            case lookAgain.no:
                await ƒS.Speech.tell(characters.mainCharacter, "No, I think I know the answer.");
                break;
            case lookAgain.yes:
                await ƒS.Speech.tell(characters.mainCharacter, "Let me have another look. Just to be sure...");
                await ƒS.Speech.tell(characters.companion, "Okay but quickly! We're running out of time!");
                await ƒS.Inventory.open();
                await ƒS.Speech.tell(characters.mainCharacter, "...");
                await ƒS.Speech.tell(characters.mainCharacter, "...");
                break;
        };

        await ƒS.Character.hide(characters.companion);

        await ƒS.Speech.tell(characters.mainCharacter, "Alright, I'm ready. I hope I'm right about this. If not, it was nice knowing you " + characters.companion.name + ".");

        let cableChoices = {
            left: "Connect Left Cable",
            right: "Connect Right Cable"
        };

        let cableButtons = await ƒS.Menu.getInput(cableChoices, "choicesCSSclass");


        switch (cableButtons) {
            case cableChoices.left:
                console.log("go to game over 2");
                dataForSave.wrongCable = true;
                ƒS.Sound.fade(sound.alarm, 0.1, 0, false);
                return "GameOver2";
            case cableChoices.right:
                console.log("survived");
                ƒS.Sound.fade(sound.alarm, 0.1, 0, false);
                return "Scene8";
        };



    }
}