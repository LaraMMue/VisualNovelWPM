namespace Template {
    export async function Scene3(): ƒS.SceneReturn {
        console.log("Scene 3 starting");

        await ƒS.Location.show(location.corner);

        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        console.log("robot character img?");

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

        await ƒS.Speech.tell(characters.companion, "C-certainly " + dataForSave.sirMadam + ". I will adress you like th-this from now on. May I also know your n-name?");
        await ƒS.Speech.tell(characters.mainCharacter, "My... name?");
        await ƒS.Speech.tell(characters.companion, "Do not worry. I can a-assure you that I will keep all p-personal information confidential.");
        await ƒS.Speech.tell(characters.companion, "I am just here to he-help you, " + dataForSave.sirMadam + " ,and the more I know a-about you, the better I can be of s-service!");
        await ƒS.Speech.tell(characters.mainCharacter, "Yes yes I get that, it's just that now that I think about it... I barely remember my name... What was it again?");

        dataForSave.nameMC = await ƒS.Speech.getInput();
        characters.mainCharacter.name = dataForSave.nameMC;
        await ƒS.Speech.tell(characters.mainCharacter, "(to yourself) " + characters.mainCharacter.name + " ... was that really my name?");

        await ƒS.update(0.5);


        let confusedChoices = {
            iSayYes: "Yes",
            iSayMaybe: "Maybe",
            iSayNo: "No"
        };

        let confusedButtons = await ƒS.Menu.getInput(confusedChoices, "choicesCSSclass");


        switch (confusedButtons) {
            case confusedChoices.iSayYes:
                await ƒS.Speech.tell(characters.mainCharacter, "(to yourself) Yes, I'm sure that was my name! I think...");
                break;
            case confusedChoices.iSayNo:
                await ƒS.Speech.tell(characters.mainCharacter, "(to yourself) No, that's definitely wrong... But no matter how hard I try, I can't seem to remember any other name. Guess I'll keep this one for now.");
                break;
            case confusedChoices.iSayMaybe:
                await ƒS.Speech.tell(characters.mainCharacter, "(to yourself) Hmm... maybe it was?... I'm not sure...");
        }

        await ƒS.Speech.tell(characters.mainCharacter, "I think my name is " + characters.mainCharacter.name + ".");
        await ƒS.Speech.tell(characters.companion, "Understood. " + dataForSave.sirMadam + ", how can I be of a-assistance?");
        await ƒS.Speech.tell(characters.mainCharacter, "Well... I woke up here all alone not long ago. I don't know how I got here or what <i>here</i> even is...");
        await ƒS.Speech.tell(characters.mainCharacter, "I still feel a little dizzy and can't remember anything from before. ");
        await ƒS.Speech.tell(characters.mainCharacter, "I've looked around a few rooms but couldn't find anyone else. Maybe you know something?");
        await ƒS.Speech.tell(characters.companion, "Oh m-my, perhaps you have suffered a head injury? You should go to the infirmary and see a d-doctor immediately! ");
        await ƒS.Speech.tell(characters.companion, "I will take you there and try to a-answer all your questions on the way. Follow m-me.");

        return "Scene4";



    }
}