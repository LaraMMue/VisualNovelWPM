namespace Template {
    export async function tutorial(): ƒS.SceneReturn {
        
        let dialogue = {
            iChooseTutorial: "Tutorial",
            iSkipTutorial: "Skip to Story"
        };
        
        let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSclass");
        
        switch (dialogueElement) {
            case dialogue.iChooseTutorial:
                console.log("Tutorial chosen");
                break;
            case dialogue.iSkipTutorial:
                return "firstScene"; // -> Ruft erste Szene auf (hoffentlich...)
        }
    }
}