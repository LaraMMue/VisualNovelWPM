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
        // themes
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
    Template.items = {
        energyCore: {
            name: "Strange Energy Core",
            description: "An electric device used to power certain robots",
            image: "Images/Items/itemTest.png",
            static: false
        }
    };
    //  GAME PROGRESS DATA SAVE
    Template.dataForSave = {
        nameMC: "",
        takenOffHelmet: false
    };
    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Save", // erstellt eine json save datei, die heruntergeladen werden kann
        load: "Load", // man kann eine json datei öffnen (die vorher gespeichert wurde), wenn man die öffnet lädt die Szene, bei der man gespeichert hat
        close: "Close", // close the menu
        increaseVolume: "volume +",
        decreaseVolume: "volume -",
        inventory: "Inventory",
        credits: "Credits"
        //credits
    };
    let menuIsOpen = false;
    let volume = 4.0;
    function increaseSound() {
        if (volume >= 10)
            return;
        volume += 1;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.increaseSound = increaseSound;
    function decreaseVolume() {
        if (volume <= 0)
            return;
        volume -= 1;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.decreaseVolume = decreaseVolume;
    function displayCredits() {
        Template.ƒS.Text.print("Author: Lara Marie Müller " +
            "<br/>" +
            "Visual Novel WiSe 2023/24");
    }
    Template.displayCredits = displayCredits;
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
                Template.gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.inventory:
                await Template.ƒS.Inventory.open();
                break;
            case inGameMenuButtons.increaseVolume:
                increaseSound();
                console.log("increased Volume to " + volume);
                break;
            case inGameMenuButtons.decreaseVolume:
                decreaseVolume();
                console.log("decreased Volume to " + volume);
                break;
            case inGameMenuButtons.credits:
                displayCredits();
                console.log("Opened Credits");
                break;
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
                    Template.gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    Template.gameMenu.open();
                    menuIsOpen = true;
                }
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        Template.gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass"); // optionale CSS Klasse benutzen um Menü zu gestalten
        Template.gameMenu.close();
        // SCENE HIERARCHY
        let scenes = [
            { id: "tutorial", scene: Template.tutorial, name: "Tutorial" }, //id zum aufrufen der Szenen
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
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Let's just keep looking around.");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Maybe I can find some more information about this place...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Where should I go?");
        let directionChoices = {
            left: "Go left",
            right: "Go right"
        };
        let directionChoiceButtons = await Template.ƒS.Menu.getInput(directionChoices, "choicesCSSclass");
        switch (directionChoiceButtons) {
            case directionChoices.left:
                console.log("went left: find energy core first");
            // go to left side, find core, then go to right side
            case directionChoices.right:
                console.log("went right: find robot first");
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Oh what's that over there?");
                await Template.ƒS.Location.show(Template.location.blackBackground); // Background!!!
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "What's this? Looks like a robot of some sorts.");
                let lookCloser = {
                    interactLookCloser: "Take a closer look"
                };
                let lookCloserButton = await Template.ƒS.Menu.getInput(lookCloser, "choicesCSSclass");
                let clickedLookCloserButton;
                if (clickedLookCloserButton) {
                    delete lookCloser.interactLookCloser;
                }
                if (lookCloserButton) {
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Looks somewhat familiar... There should be a power button right here.");
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "AWAKEN, LITTLE ONE!!...");
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "...");
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "...");
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "...Hm... That didn't work...");
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Maybe it's missing a part? Oh yeah, right here. Seems like there's supposed to be something here.");
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "What was the name of this component again?");
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Ugh... my mind is still a little foggy...");
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Anyway, let's look for this... thing!");
                    break;
                    // --> go to left side and find core, then return to robot
                }
        }
        // continue: both robot and core found? --> insert core into robot, robot wakes up --> Buddy introduction scene
        Template.ƒS.Inventory.add(Template.items.energyCore);
        await Template.ƒS.Inventory.open();
        await Template.ƒS.update();
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
        await Template.ƒS.Location.show(Template.location.blackBackground); // darker version of room as bg (barely able to see something)
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Urgh... Where... am I?");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Owww... my head...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Why is it so dark?? I can't see anything!");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "I should try to get up...");
        await Template.ƒS.Location.show(Template.location.moonStationInterior);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Ah, it's so bright! ");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Huh?");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "What is this place?");
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
            await Template.ƒS.Location.show(Template.location.earthFromMoon); // change BG!!!
            await Template.ƒS.update(1.5);
            await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Woah I look like an astronaut! Why am I wearing this stuff? ");
            let takeOffHelmet = {
                interactTakeOffHelmet: "Try to take helmet off"
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
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "And I still feel so dizzy...");
                await Template.ƒS.Speech.tell(Template.characters.helmetVoice, "WARNING! HAZARDOUS ENVIRONMENT. DO NOT TAKE OFF YOUR HELMET!");
                let helmetChoices = {
                    takeOff: "Take helmet off",
                    leaveOn: "Leave helmet on"
                };
                let helmetChoiceButtons = await Template.ƒS.Menu.getInput(helmetChoices, "choicesCSSclass");
                switch (helmetChoiceButtons) {
                    case helmetChoices.takeOff:
                        console.log("go to game over 1");
                        Template.dataForSave.takenOffHelmet = true;
                        return "GameOver1";
                    case helmetChoices.leaveOn:
                        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Hmm... maybe I shouldn't risk it.");
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
        await Template.ƒS.Location.show(Template.location.blackBackground); //design Game Over Screen
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Is this the end?...");
        return "firstScene";
        // save death for later?
    }
    Template.gameOver1 = gameOver1;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map