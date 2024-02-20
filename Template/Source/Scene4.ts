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
        await ƒS.Speech.tell(characters.companion, "Our primary purpose is to c-contribute to the progress of humankind in understanding the cosmos.");
        await ƒS.Speech.tell(characters.companion, "Our es-esteemed scientists in the different re-research stations on the moon work on a variety of pr-projects, ranging from lunar geology to astrophysics.");
        await ƒS.Speech.tell(characters.companion, "Alpha-7 researchers in particular focus on advancing robotic and AI technologies for i-intergalactic travel and outer terrestrial settlement. ");
        await ƒS.Speech.tell(characters.companion, "From life s-support systems to...");
        await ƒS.Speech.tell(characters.mainCharacter, "Wait wait wait, did you just say we are on the moon?");
        await ƒS.Speech.tell(characters.companion, "Yes " + dataForSave.sirMadam + " " + characters.mainCharacter.name + ", precisely. Alpha-7 is located on the lunar surface.");
        await ƒS.Speech.tell(characters.mainCharacter, "Wow...  That's crazy... But... where is everyone?");
        await ƒS.Speech.tell(characters.companion, "You appear m-more disoriented than I thought. Hopefully Doctor Mitchell can have a g-good look at your head, it should be her shift around this t-time.");
        await ƒS.Speech.tell(characters.companion, "The medical facilities here are state-of-the-art, with some of the best doctors you could wish for and equipped to handle any he-health concerns you may have.");
        await ƒS.Speech.tell(characters.companion, "I can assure you that you wi-will be in good hands.");
        await ƒS.Character.hide(characters.companion);
        await ƒS.update(0.5);





        await ƒS.Location.show(location.infirmary);
        await ƒS.update(transition.wipeLeftTopRightBottom.duration, transition.wipeLeftTopRightBottom.alpha, transition.wipeLeftTopRightBottom.edge);
        await ƒS.Speech.tell(characters.companion, "Here we are.");
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.companion, "Please sit d-down over there while I ex-explain the situation to the Doctor.");
        await ƒS.Speech.tell(characters.companion, "I'll be back in a moment.");

        await ƒS.Character.hide(characters.companion);
        //animate robot leaving screen and coming back
        await ƒS.Character.animate(characters.companion, characters.companion.pose.normal, characterLeaveScreen());
        await ƒS.Character.animate(characters.companion, characters.companion.pose.normal, characterWalkIn());
        await ƒS.Speech.tell(characters.companion, "Doctor Mitchell is not here at the moment. Please wait while I look for someone else.");
        await ƒS.Character.animate(characters.companion, characters.companion.pose.normal, characterLeaveScreen());
        await ƒS.Character.hide(characters.companion);

        await ƒS.Speech.tell(characters.mainCharacter, "Hmm, what should I do while I wait? Maybe I could use the time to investigate a bit more...");
        await ƒS.Speech.tell(characters.mainCharacter, "Somehow this room looks like no one has been here for a while but all the electric devices are still running...");
        await ƒS.Speech.tell(characters.mainCharacter, "Is this a fridge? With... weird bags inside. AB+... O-... O+... A-... ");
        await ƒS.Speech.tell(characters.mainCharacter, "Oh that must be blood for transfusions! They all have such a weird color though, it doesn't even look like blood... Or maybe it's just rotten?");
        await ƒS.Speech.tell(characters.mainCharacter, "What else... a bunch of tools, bottles and other stuff that I don't know.");
        await ƒS.Speech.tell(characters.mainCharacter, "I guess that let's me rule out the possibility of being a doctor? Judging from my outfit I could be an astronaut or something similar.");
        await ƒS.Speech.tell(characters.mainCharacter, "I mean we <i>are</i> in a research station on the moon, so... But then again, the researchers might also use spacesuits.");
        await ƒS.Speech.tell(characters.mainCharacter, "Maybe I'm a researcher then? Argh, I really can't figure it out. I'll just try to find some more information.");
        await ƒS.Speech.tell(characters.mainCharacter, "Like on this computer for example, I should be able to find some medical records of the people that worked here right? If it turns on... which...");
        await ƒS.Speech.tell(characters.mainCharacter, "... it doesn't, of course... great... would have been too easy...");
        await ƒS.Speech.tell(characters.mainCharacter, "Maybe something interesting on these papers?");

        ƒS.Inventory.add(items.novelInfirmaryNotes);
        await ƒS.update();
        await ƒS.Inventory.open();




    }
}