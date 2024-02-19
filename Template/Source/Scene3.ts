namespace Template {
    export async function Scene3(): ƒS.SceneReturn {
        console.log("Scene 3 starting");

        await ƒS.Speech.tell(characters.companion, "B... Booting complete! Hello!");
        await ƒS.Speech.tell(characters.companion, "I am a model 388fds9 companion bot, de-designed to help you with your everyday ta-tasks and more!");
        await ƒS.Speech.tell(characters.companion, "You can call me Buddy. How may I h-help you Sir... or u-uhm Madam?");

        let playerGender: string[] = ["Sir", "Madam", "Dad", "Mom"]

        let genderChoices = {
            sir: "Sir is fine",
            madam: "Madam is fine"
        };

        let genderChoiceButtons = await ƒS.Menu.getInput(genderChoices, "choicesCSSclass");

        switch (genderChoiceButtons) {
            case genderChoices.sir:
                console.log("player chose male");
                dataForSave.sirMadam = playerGender[0];
                dataForSave.momDad = playerGender[2]
                await ƒS.Speech.tell(characters.mainCharacter, "Sir is fine.");
                break;
            case genderChoices.madam:
                console.log("player chose female");
                dataForSave.sirMadam = playerGender[1];
                dataForSave.momDad = playerGender[2];
                await ƒS.Speech.tell(characters.mainCharacter, "Madam is fine.");
                break

        }

        await ƒS.Speech.tell(characters.companion, "C-certainly " + dataForSave.sirMadam);

    }
}