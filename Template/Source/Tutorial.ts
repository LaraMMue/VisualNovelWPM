namespace Template {
    export async function tutorial(): ƒS.SceneReturn {
        
        let dialogue = {
            iChooseTutorial: "Tutorial",
            iSkipTutorial: "Skip to Story"
        };

        ƒS.Speech.hide();
        await ƒS.Speech.tell(characters.narrator, "Hello, Stranger. Welcome to [Title of the Game]. Click to continue.");
        await ƒS.Speech.tell(characters.narrator, "Do you wish to read the tutorial first or skip to the story?");
        
        let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSclass");
        
        switch (dialogueElement) {
            case dialogue.iChooseTutorial:
                console.log("Tutorial chosen");
                await ƒS.Speech.tell(characters.narrator, "This is a story based game. ");
                await ƒS.Speech.tell(characters.narrator, "You have already learned that by clicking anywhere on the screen you can continue reading the story. ");
                await ƒS.Speech.tell(characters.narrator, "Sometimes you'll be given a choice. Depending on your decisions, the story may have a different ending, so choose wisely!");
                await ƒS.Speech.tell(characters.narrator, "To ensure you'll be able to enjoy the full story, make sure to continue clicking until nothing happens anymore/ until you receive a browser notification telling you that you have reached the end. ");
                await ƒS.Speech.tell(characters.narrator, "Do not reload or close the window before that or your progress may be lost!");
                await ƒS.Speech.tell(characters.narrator, "You can access the menu by pressing the “M” key on your keyboard. ");
                await ƒS.Speech.tell(characters.narrator, "Here you can save your game progress. Doing so will download a .json file. ");
                await ƒS.Speech.tell(characters.narrator, "To restart the game from this save point, you'll have to load the right .json file into the game by choosing “load game” in the menu. ");
                await ƒS.Speech.tell(characters.narrator, "Note that there is no automatic saving. ");
                await ƒS.Speech.tell(characters.narrator, "Unless you have saved your progress manually within a .json file, the game will start from the very beginning after reloading or closing the browser window. ");
                await ƒS.Speech.tell(characters.narrator, "You can access your inventory by pressing the “” key on your keyboard. "); //which key???
                await ƒS.Speech.tell(characters.narrator, "Alright, now you're all set. We will meet again, Stranger…");
                break;
            case dialogue.iSkipTutorial:
                return "firstScene"; // -> Ruft erste Szene auf (mit return und dann die Szenen id als string, id wird in der szenen hierarchie vergeben!)
        }
    }
}