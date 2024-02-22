namespace Template {
    export async function Scene5(): ƒS.SceneReturn {
        console.log("FudgeStory Scene 5 is starting");

        await ƒS.Location.show(location.blackBackground);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.companion, "Ah, we're here!");

        await ƒS.Location.show(location.commsOff);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.companion, "Welcome to the com-communications center of Alpha-7! This place serves as our lifeline to Earth and the o-other lunar facilities.");
        await ƒS.Speech.tell(characters.companion, "Coordinating supply sh-shipments, exchanging s-scientific findings and providing all k-kinds of organization services for t-those stationed on Alpha-7 - it all happens h-here.");
        await ƒS.Speech.tell(characters.companion, "Our dedicated team o-of humand and artificial intelligence specialists works t-tirelessly around the clock to ensure smooth o-operations and safety within the research station and they will always be there...");
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "No one around...");
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Speech.tell(characters.companion, "There must be s-someone here. There is always at least one technical support worker in the center to m-make sure the computers and everything else works...");
        await ƒS.Speech.tell(characters.mainCharacter, "But I don't see anyone. Nor have I seen anyone the entire way here, or on the way to the infirmary.");
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "How many people are usually stationed at Alpha-7?");
        await ƒS.Speech.tell(characters.companion, "329... according to my last r-record...");
        await ƒS.Speech.tell(characters.mainCharacter, "329! Shouldn't we have run into a few of them by now?");


        let peopleWhereChoices = {
            how: "How can this be?",
            hiding: "Are you hiding something?"
        };

        let peopleWhereButtons = await ƒS.Menu.getInput(peopleWhereChoices, "choicesCSSclass");


        switch (peopleWhereButtons) {
            case peopleWhereChoices.how:
                await ƒS.Speech.tell(characters.mainCharacter, "How can 329 people just disappear? And how come you don't know anything about this?");
                await ƒS.Speech.tell(characters.companion, "");
                console.log("Buddy Score: " + dataForSave.buddyScore);
                break;
            case peopleWhereChoices.hiding:
                dataForSave.buddyScore -= 1;
                await ƒS.Speech.tell(characters.mainCharacter, "How can 329 people just disappear? Are you hiding something from me?");
                await ƒS.Character.hide(characters.companion);
                await ƒS.Character.show(characters.companion, characters.companion.pose.angry, ƒS.positions.bottomcenter);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.companion, "N-no " + dataForSave.sirMadam + ", why would I h-hide anything from you? I am just as c-confused as you are!");
                console.log(dataForSave.buddyScore);
                break;
        }


        await ƒS.Speech.tell(characters.companion, "");
        await ƒS.Speech.tell(characters.mainCharacter, "");

    }
}