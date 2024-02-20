"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory main starting");
    Template.transition = {
        transitionName: {
            duration: 1, //duration in s
            alpha: "", // path to the transition image b/w
            edge: 1 // how hard/soft transition is
        }
    };
    Template.sound = {
        // SFX
        soundName: "Pfad (relativ) zB Audio/sound.mp3"
    };
    Template.music = {
        musicName: "Pfad zu mp3"
    };
    Template.location = {
        moonStationInterior: {
            name: "Moon Station Interior",
            background: "Images/Backgrounds/moonStationRoom1.png"
        },
        moonStationInteriorDark: {
            name: "Dark Version of the Moon Station Room",
            background: "Images/Backgrounds/moonStationRoom-dark.png"
        },
        mirror: {
            name: "Mirror",
            background: "Images/Backgrounds/mirror.png"
        },
        cornerRobot: {
            name: "Corner with deactivated Robot",
            background: "Images/Backgrounds/cornerRobot.png"
        },
        corner: {
            name: "Corner without Robot",
            background: "Images/Backgrounds/corner.png"
        },
        storageCore: {
            name: "storage crates with Energy Core",
            background: "Images/Backgrounds/storageWithCore.png"
        },
        storage: {
            name: "storage crates after picking item up",
            background: "Images/Backgrounds/storage.png"
        },
        moonHallway: {
            name: "Mopn Station Hallway",
            background: "Images/Backgrounds/moonStationHallway.png"
        },
        blackBackground: {
            name: "Black Background",
            background: "Images/Backgrounds/blackBackground.png"
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
        system: {
            name: "SYSTEM"
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
    /*export function useItem(name: string) {
      document.getElementById(name).remove();
    }*/
    //  GAME PROGRESS DATA SAVE
    Template.dataForSave = {
        nameMC: "",
        takenOffHelmet: false,
        buddyScore: 5,
        sirMadam: "",
        momDad: ""
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
    let inventoryIsOpen = false;
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
                    console.log("Close Menu");
                    Template.gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open Menu");
                    Template.gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.I:
                if (inventoryIsOpen) {
                    console.log("Close Inventory");
                    Template.ƒS.Inventory.close();
                    inventoryIsOpen = false;
                }
                else {
                    console.log("Open Inventory");
                    Template.ƒS.Inventory.open();
                    inventoryIsOpen = true;
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
            { id: "firstScene", scene: Template.firstScene, name: "Wake up" },
            { id: "GameOver1", scene: Template.gameOver1, name: "Game Over 1" },
            { id: "Scene2", scene: Template.Scene2, name: "Find Robot" },
            { id: "Scene3", scene: Template.Scene3, name: "Meet Robot" },
            { id: "Scene4", scene: Template.Scene4, name: "Scene4" }
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
        //let energyCore: boolean = false;
        let lookCloser = {
            interactLookCloser: "Take a closer look"
        };
        let lookCloserButton;
        let clickedLookCloserButton = false;
        let leftFirst = false;
        switch (directionChoiceButtons) {
            case directionChoices.left:
                console.log("went left: find energy core first");
                leftFirst = true;
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Something is glowing in that corner!");
                await Template.ƒS.Location.show(Template.location.storageCore);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Hm, looks like some kind of mechanical component. Aren't these used to power robots? ");
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "What was the name of this thing again?");
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Ugh... my mind is still a little foggy... Anyway, I'll take this with me.");
                await Template.ƒS.Location.show(Template.location.storage);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.system, "Energy core added to your inventory.");
                Template.ƒS.Inventory.add(Template.items.energyCore);
                await Template.ƒS.update();
                await Template.ƒS.Location.show(Template.location.moonStationInterior);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Let's go over there too");
                break;
            // go to left side, find core, then go to right side
            case directionChoices.right:
                console.log("went right: find robot first");
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Oh what's that over there?");
                await Template.ƒS.Location.show(Template.location.cornerRobot);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "What's this? Looks like a robot of some sorts.");
                lookCloserButton = await Template.ƒS.Menu.getInput(lookCloser, "choicesCSSclass");
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
                    // --> go to left side and find core, then return to robot
                    await Template.ƒS.Location.show(Template.location.moonStationInterior);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Hmm... Where should I search... Oh!");
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Something is glowing in that corner!");
                    await Template.ƒS.Location.show(Template.location.storageCore);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Hm, looks like some kind of mechanical component. Maybe it's exactly what I'm looking for!");
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Ugh... I still can't remember the damn name of this thing.");
                    await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "I'll just take this with me...");
                    await Template.ƒS.Location.show(Template.location.storage);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.system, "Energy core added to your inventory.");
                    Template.ƒS.Inventory.add(Template.items.energyCore);
                    await Template.ƒS.update();
                    break;
                }
        }
        if (leftFirst == true) {
            await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Oh what's that over there?");
            await Template.ƒS.Location.show(Template.location.cornerRobot); // Background!!!
            await Template.ƒS.update(0.5);
            await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "What's this? Looks like a robot of some sorts.");
            lookCloserButton = await Template.ƒS.Menu.getInput(lookCloser, "choicesCSSclass");
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
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Maybe it's this thing I found?");
                /*await ƒS.Inventory.open();
                ƒS.Inventory.getAmount(items.energyCore) != 0;
                await ƒS.update();*/
            }
        }
        else {
            await Template.ƒS.Location.show(Template.location.cornerRobot);
            await Template.ƒS.update(0.5);
            await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Let's see if this is the right one.");
            /*await ƒS.Inventory.open();
            ƒS.Inventory.getAmount(items.energyCore) != 0;
            await ƒS.update();*/
        }
        // use/remove energy core from inventory
        await Template.ƒS.Inventory.open();
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Ha! It fits! There you go... Now how do I turn you on?");
        await Template.ƒS.Speech.tell(Template.characters.companion, "BZZ BZZZ");
        return "Scene3";
        // continue: both robot and core found? --> insert core into robot, robot wakes up --> Buddy introduction scene
        /*ƒS.Inventory.add(items.energyCore);
    
        await ƒS.Inventory.open();
        await ƒS.update();*/
    }
    Template.Scene2 = Scene2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene3() {
        console.log("Scene 3 starting");
        await Template.ƒS.Location.show(Template.location.corner);
        await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.normal, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(0.5);
        console.log("robot character img?");
        await Template.ƒS.Speech.tell(Template.characters.companion, "B... Booting complete! Hello!");
        await Template.ƒS.Speech.tell(Template.characters.companion, "I am a model 388fds9 companion bot, de-designed to help you with your everyday ta-tasks and more!");
        await Template.ƒS.Speech.tell(Template.characters.companion, "You can call me Buddy. How may I h-help you Sir... or u-uhm Madam?");
        let playerGender = ["Sir", "Madam", "Dad", "Mom"];
        let genderChoices = {
            sir: "Sir is fine",
            madam: "Madam is fine"
        };
        let genderChoiceButtons = await Template.ƒS.Menu.getInput(genderChoices, "choicesCSSclass");
        switch (genderChoiceButtons) {
            case genderChoices.sir:
                console.log("player chose male");
                Template.dataForSave.sirMadam = playerGender[0];
                Template.dataForSave.momDad = playerGender[2];
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Sir is fine.");
                break;
            case genderChoices.madam:
                console.log("player chose female");
                Template.dataForSave.sirMadam = playerGender[1];
                Template.dataForSave.momDad = playerGender[2];
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Madam is fine.");
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.companion, "C-certainly " + Template.dataForSave.sirMadam + ". I will adress you like th-this from now on. May I also know your n-name?");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "My... name?");
        await Template.ƒS.Speech.tell(Template.characters.companion, "Do not worry. I can a-assure you that I will keep all p-personal information confidential.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "I am just here to he-help you, " + Template.dataForSave.sirMadam + " ,and the more I know a-about you, the better I can be of s-service!");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Yes yes I get that, it's just that now that I think about it... I barely remember my name... What was it again?");
        Template.dataForSave.nameMC = await Template.ƒS.Speech.getInput();
        Template.characters.mainCharacter.name = Template.dataForSave.nameMC;
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "(to yourself) " + Template.characters.mainCharacter.name + " ... was that really my name?");
        await Template.ƒS.update(0.5);
        let confusedChoices = {
            iSayYes: "Yes",
            iSayMaybe: "Maybe",
            iSayNo: "No"
        };
        let confusedButtons = await Template.ƒS.Menu.getInput(confusedChoices, "choicesCSSclass");
        switch (confusedButtons) {
            case confusedChoices.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "(to yourself) Yes, I'm sure that was my name! I think...");
                break;
            case confusedChoices.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "(to yourself) No, that's definitely wrong... But no matter how hard I try, I can't seem to remember any other name. Guess I'll keep this one for now.");
                break;
            case confusedChoices.iSayMaybe:
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "(to yourself) Hmm... maybe it was?... I'm not sure...");
        }
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "I think my name is " + Template.characters.mainCharacter.name + ".");
        await Template.ƒS.Speech.tell(Template.characters.companion, "Understood. " + Template.dataForSave.sirMadam + ", how can I be of a-assistance?");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Well... I woke up here all alone not long ago. I don't know how I got here or what <i>here</i> even is...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "I still feel a little dizzy and can't remember anything from before. ");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "I've looked around a few rooms but couldn't find anyone else. Maybe you know something?");
        await Template.ƒS.Speech.tell(Template.characters.companion, "Oh m-my, perhaps you have suffered a head injury? You should go to the infirmary and see a d-doctor immediately! ");
        await Template.ƒS.Speech.tell(Template.characters.companion, "I will take you there and try to a-answer all your questions on the way. Follow m-me.");
        await Template.ƒS.Character.hide(Template.characters.companion);
        return "Scene4";
    }
    Template.Scene3 = Scene3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene4() {
        console.log("Scene 4 starting");
        await Template.ƒS.Location.show(Template.location.moonHallway);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.companion, "Are you a-able to wa-walk?");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Yeah it should be fine.");
        await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.normal, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1.5);
        await Template.ƒS.Speech.tell(Template.characters.companion, "There seems t-to be an issue with my la-language module.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "I apologize for the st-stutter. I will have this ch-checked as soon as possible.");
        let stutterChoices = {
            dontMind: "I don't mind",
            fixIt: "Fix it!"
        };
        let stutterButtons = await Template.ƒS.Menu.getInput(stutterChoices, "choicesCSSclass");
        switch (stutterButtons) {
            case stutterChoices.dontMind:
                Template.dataForSave.buddyScore += 1;
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "It's alright, I don't mind.");
                await Template.ƒS.Character.hide(Template.characters.companion);
                await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.happy, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.companion, "Oh okay!");
                console.log(Template.dataForSave.buddyScore);
                break;
            case stutterChoices.fixIt:
                Template.dataForSave.buddyScore -= 1;
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Yeah you better fix it soon. It's really annoying.");
                await Template.ƒS.Character.hide(Template.characters.companion);
                await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.sad, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.companion, "Oh okay...");
                console.log(Template.dataForSave.buddyScore);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "So where are we?");
        await Template.ƒS.Character.hide(Template.characters.companion);
        await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.normal, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.companion, "This is Moonbase Alpha-7, a c-cutting-edge research station."); // continue text
    }
    Template.Scene4 = Scene4;
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
        await Template.ƒS.Location.show(Template.location.moonStationInteriorDark); // darker version of room as bg (barely able to see something)
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
            await Template.ƒS.Location.show(Template.location.mirror); // change BG!!!
            await Template.ƒS.update(0.5);
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