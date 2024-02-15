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
        },
        blackBackground: {
            name: "Black Background",
            background: "Images/Backgrounds/blackBackground.png"
        }
    };
    Template.characters = {
        narrator: {
            name: "???"
        },
        inGameNarrator: {
            name: "Narrator"
        },
        mainCharacter: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/charatest2.png"
            }
        },
        helmetVoice: {
            name: "Voice in Helmet",
        },
        companion: {
            name: "Buddy",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/robot_normal.png", //TO-DO!!!: alle Bilder auf richtige Größe zuschneiden!!!
                happy: "Images/Characters/robot_happy.png",
                sad: "Images/Characters/robot_sad.png",
                scared: "Images/Characters/robot_scared.png",
                angry: "Images/Characters/robot_angry.png",
                annoyed: "Images/Characters/robot_annoyed.png",
                sleep: "Images/Characters/robot_closed.png"
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
            { id: "firstScene", scene: Template.firstScene, name: "First Scene" },
            { id: "GameOver1", scene: Template.gameOver1, name: "Game Over 1" },
            { id: "Scene2", scene: Template.Scene2, name: "Second Scene" }
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
    async function Scene2() {
        console.log("Scene 2 starting");
        await Template.ƒS.Location.show(Template.location.moonStationInterior);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Oh what's this? Looks like a robot of some sorts.");
    }
    Template.Scene2 = Scene2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function tutorial() {
        let dialogue = {
            iChooseTutorial: "Tutorial",
            iSkipTutorial: "Skip to Story"
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Hello, Stranger. Welcome to [Title of the Game]. Click to continue.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Do you wish to read the tutorial first or skip to the story?");
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSclass");
        switch (dialogueElement) {
            case dialogue.iChooseTutorial:
                console.log("Tutorial chosen");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "This is a story based game. ");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "You have already learned that by clicking anywhere on the screen you can continue reading the story. ");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Sometimes you'll be given a choice. Depending on your decisions, the story may have a different ending, so choose wisely!");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "To ensure you'll be able to enjoy the full story, make sure to continue clicking until nothing happens anymore/ until you receive a browser notification telling you that you have reached the end. ");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Do not reload or close the window before that or your progress may be lost!");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "You can access the menu by pressing the “M” key on your keyboard. ");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Here you can save your game progress. Doing so will download a .json file. ");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "To restart the game from this save point, you'll have to load the right .json file into the game by choosing “load game” in the menu. ");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Note that there is no automatic saving. ");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Unless you have saved your progress manually within a .json file, the game will start from the very beginning after reloading or closing the browser window. ");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "You can access your inventory by pressing the “” key on your keyboard. "); //which key???
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Alright, now you're all set. We will meet again, Stranger…");
                break;
            case dialogue.iSkipTutorial:
                return "firstScene"; // -> Ruft erste Szene auf (mit return und dann die Szenen id als string, id wird in der szenen hierarchie vergeben!)
        }
    }
    Template.tutorial = tutorial;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstScene() {
        console.log("First Scene starting");
        Template.ƒS.Speech.hide();
        //await ƒS.Character.show(characters.mainCharacter, characters.mainCharacter.pose.normal, ƒS.positions.bottomcenter);
        //await ƒS.Character.show(characters.companion, characters.companion.pose.happy, ƒS.positions.bottomcenter);
        await Template.ƒS.Location.show(Template.location.blackBackground);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.inGameNarrator, "You wake up. Everything around you is dark.");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Owww, my head...");
        await Template.ƒS.Speech.tell(Template.characters.inGameNarrator, "You can feel the cold ground beneath you. As you try to get up, the light suddenly turns on.");
        await Template.ƒS.Location.show(Template.location.moonStationInterior);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Ah, it's so bright!... What is this place?");
        let lookAround = {
            interactLookAround: "Look around the place"
        };
        let lookAroundButton = await Template.ƒS.Menu.getInput(lookAround, "choicesCSSclass");
        let clickedLookAroundButton;
        if (clickedLookAroundButton) {
            delete lookAround.interactLookAround;
        }
        if (lookAroundButton) {
            await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Oh, there's a mirror!");
            await Template.ƒS.Location.show(Template.location.earthFromMoon);
            await Template.ƒS.update(1.5);
            await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Woah I look like an astronaut! Why am I wearing this stuff? ");
            let takeOffHelmet = {
                interactTakeOffHelmet: "Take helmet off"
            };
            let takeOffHelmetButton = await Template.ƒS.Menu.getInput(takeOffHelmet, "choicesCSSclass");
            let clickedTakeOffHelmetButton;
            if (clickedTakeOffHelmetButton) {
                delete takeOffHelmet.interactTakeOffHelmet;
            }
            if (takeOffHelmetButton) {
                await Template.ƒS.Speech.tell(Template.characters.helmetVoice, "WARNING! HAZARDOUS ENVIRONMENT. DO NOT TAKE OFF YOUR HELMET!");
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Damn that scared me. So don't take it off? But it's so weird, I can't seem to remember what my face looks like...");
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Surely taking it off for just a moment won't be that bad, right?");
                await Template.ƒS.Speech.tell(Template.characters.helmetVoice, "WARNING! HAZARDOUS ENVIRONMENT. DO NOT TAKE OFF YOUR HELMET!");
                let helmetChoices = {
                    takeOff: "Take helmet off",
                    leaveOn: "Leave helmet on"
                };
                let helmetChoiceButtons = await Template.ƒS.Menu.getInput(helmetChoices, "choicesCSSclass");
                let madeChoice;
                //let pickedNo: boolean;
                //let pickedBla: boolean;
                if (madeChoice) {
                    delete helmetChoices.takeOff;
                }
                switch (helmetChoiceButtons) {
                    case helmetChoices.takeOff:
                        console.log("go to game over 1");
                        return "GameOver1";
                    case helmetChoices.leaveOn:
                        // continue path here
                        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Hmm... maybe I shouldn't risk it.");
                        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Let's just keep looking around.");
                        return "Scene2";
                }
            }
            ;
        }
        /*dataForSave.nameMC = await ƒS.Speech.getInput();
        characters.mainCharacter.name = dataForSave.nameMC;
        await ƒS.Speech.tell(characters.mainCharacter, characters.mainCharacter.name + " ... was that really my name?");
  
        await ƒS.update(0.5);
  
  
  
  
        let dialogue = {
          iSayYes: "Yes",
          iSayMaybe: "Maybe",
          iSayNo: "No"
        };
  
        let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSclass");
  
        let pickedYes: boolean;
        //let pickedNo: boolean;
        //let pickedBla: boolean;
  
        if (pickedYes) {
          delete dialogue.iSayYes;
        }
  
        switch (dialogueElement) {
          case dialogue.iSayYes:
              await ƒS.Speech.tell(characters.mainCharacter, "Yes, I'm sure that was my name! I think...");
              // continue path here
              console.log("test");
              break; // mit break geht es nach der Entscheidung direkt raus, ansonsten würde es durch alle durchgehen
          case dialogue.iSayNo:
              // continue path here
              await ƒS.Speech.tell(characters.mainCharacter, "No, that's definitely wrong... But no matter how hard I try, I can't seem to remember any other name. Guess I'll keep this one for now.");
              //await ƒS.Speech.tell(characters.mainCharacter, text.MCtext.T0002); // oder anstatt text.etc direkt Text schreiben so: "der Text"
              break;
          case dialogue.iSayMaybe:
              await ƒS.Speech.tell(characters.mainCharacter, "Hmm... maybe it was?... I'm not sure...");
              // continue path here
              break;
        } */
        await Template.ƒS.update(1);
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function gameOver1() {
        console.log("Reached Game Over 1");
        await Template.ƒS.Location.show(Template.location.blackBackground);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Is this the end?...");
        return "firstScene";
    }
    Template.gameOver1 = gameOver1;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map