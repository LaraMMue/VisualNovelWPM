namespace Template {
    export async function Scene4(): ƒS.SceneReturn {
        console.log("Scene 4 starting");

        await ƒS.Location.show(location.moonHallway);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.companion, "Are you a-able to wa-walk?");
        await ƒS.Speech.tell(characters.mainCharacter, "Yeah it should be fine.");
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "There seems t-to be an issue with my la-language module.");
        await ƒS.Speech.tell(characters.companion, "I apologize for the st-stutter. I will have this ch-checked as soon as possible.");

        let stutterChoices = {
            dontMind: "I don't mind",
            fixIt: "Fix it!"
        };

        let stutterButtons = await ƒS.Menu.getInput(stutterChoices, "choicesCSSclass");


        switch (stutterButtons) {
            case stutterChoices.dontMind:
                dataForSave.buddyScore += 1;
                await ƒS.Speech.tell(characters.mainCharacter, "It's alright, I don't mind.");
                await ƒS.Character.hide(characters.companion);
                await ƒS.Character.show(characters.companion, characters.companion.pose.happy, ƒS.positions.bottomcenter);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.companion, "Oh okay!");
                console.log(dataForSave.buddyScore);
                break;
            case stutterChoices.fixIt:
                dataForSave.buddyScore -= 1;
                await ƒS.Speech.tell(characters.mainCharacter, "Yeah you better fix it soon. It's really annoying.");
                await ƒS.Character.hide(characters.companion);
                await ƒS.Character.show(characters.companion, characters.companion.pose.sad, ƒS.positions.bottomcenter);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.companion, "Oh okay...");
                console.log(dataForSave.buddyScore);
                break;
        }

        await ƒS.Speech.tell(characters.mainCharacter, "So where are we?");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "This is Moonbase Alpha-7, a c-cutting-edge research station.");
        // continue text
        await ƒS.Character.hide(characters.companion);
        await ƒS.update(0.5);





        await ƒS.Location.show(location.infirmary);
        await ƒS.update(transition.wipeLeftTopRightBottom.duration, transition.wipeLeftTopRightBottom.alpha, transition.wipeLeftTopRightBottom.edge);
        await ƒS.Speech.tell(characters.companion, "Here we are.");
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.companion, "Please sit d-down over there while I ex-explain the situation to the Doctor.");
        await ƒS.Speech.tell(characters.companion, "I'll be back in a moment.");
        //animate robot leaving screen!

        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.animate(characters.companion, characters.companion.pose.normal, characterLeaveScreen());
        await ƒS.Character.animate(characters.companion, characters.companion.pose.normal, characterWalkIn());
        await ƒS.Speech.tell(characters.companion, "Doctor Mitchell is not here at the moment. Please wait while I look for someone else.");
        await ƒS.Character.animate(characters.companion, characters.companion.pose.normal, characterLeaveScreen());
        await ƒS.Character.hide(characters.companion);




    }
}