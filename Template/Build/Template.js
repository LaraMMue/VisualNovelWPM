"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory main starting");
    Template.transition = {
        transitionName: {
            duration: 1,
            alpha: "",
            edge: 1
        }
    };
    Template.sound = {
        // SFX
        soundName: "Pfad (relativ) zB Audio/sound.mp3"
        // themes hallo
    };
    Template.location = {
        moonStationInterior: {
            name: "Moon Station Interior",
            background: "Images/Backgrounds/moonStationRoom1.png"
        },
        earthFromMoon: {
            name: "Earth from the Moon",
            background: "Images/Backgrounds/earthFromMoon.png"
        }
    };
    Template.characters = {
        narrator: {
            name: "???"
        },
        mainCharacter: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/charatest2.png"
            }
        },
        bob: {
            name: "Bob",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/charatest2.png",
                angry: "Pfad des Bildes",
                happy: "",
                upset: ""
            }
        }
    };
    //  GAME PROGRESS DATA SAVE
    Template.dataForSave = {
        nameMC: ""
    };
    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Save", // erstellt eine json save datei, die heruntergeladen werden kann
        load: "Load", // man kann eine json datei öffnen (die vorher gespeichert wurde), wenn man die öffnet lädt die Szene, bei der man gespeichert hat
        close: "Close" // close the menu
        //credits
    };
    let gameMenu;
    let menuIsOpen = false;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            // credits
        }
    }
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8: // englisches Keyboard Layout wird verwendet!!
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass"); // optionale CSS Klasse benutzen um Menü zu gestalten
        gameMenu.close();
        // SCENE HIERARCHY
        let scenes = [
            // Tutorial hier hin mit id
            { id: "tutorial", scene: Template.tutorial, name: "Tutorial" },
            { id: "firstScene", scene: Template.firstScene, name: "First Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function tutorial() {
        let dialogue = {
            iChooseTutorial: "Tutorial",
            iSkipTutorial: "Skip to Story"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSclass");
        switch (dialogueElement) {
            case dialogue.iChooseTutorial:
                console.log("Tutorial chosen");
                break;
            case dialogue.iSkipTutorial:
                return "firstScene"; // -> Ruft erste Szene auf (hoffentlich...)
        }
    }
    Template.tutorial = tutorial;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstScene() {
        console.log("First Scene starting");
        let text = {
            MCtext: {
                T0001: "''mhm.. where… am I ?''",
                T0002: "''No wait... WHO even am I???",
                T0003: "Anyway, what is this place?"
            }
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.location.moonStationInterior);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.mainCharacter, Template.characters.mainCharacter.pose.normal, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, text.MCtext.T0001);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, text.MCtext.T0002);
        Template.dataForSave.nameMC = await Template.ƒS.Speech.getInput();
        Template.characters.mainCharacter.name = Template.dataForSave.nameMC;
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, Template.characters.mainCharacter.name + " ... was that really my name?");
        await Template.ƒS.update(0.5);
        let dialogue = {
            iSayYes: "Yes",
            iSayMaybe: "Maybe",
            iSayNo: "No"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSclass");
        let pickedYes;
        //let pickedNo: boolean;
        //let pickedBla: boolean;
        if (pickedYes) {
            delete dialogue.iSayYes;
        }
        switch (dialogueElement) {
            case dialogue.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Yes, I'm sure that was my name! I think...");
                // continue path here
                console.log("test");
                break; // mit break geht es nach der Entscheidung direkt raus, ansonsten würde es durch alle durchgehen
            case dialogue.iSayNo:
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "No, that's definitely wrong... But no matter how hard I try, I can't seem to remember any other name. Guess I'll keep this one for now.");
                //await ƒS.Speech.tell(characters.mainCharacter, text.MCtext.T0002); // oder anstatt text.etc direkt Text schreiben so: "der Text"
                break;
            case dialogue.iSayMaybe:
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Hmm... maybe it was?... I'm not sure...");
                // continue path here
                break;
        }
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, text.MCtext.T0003);
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map