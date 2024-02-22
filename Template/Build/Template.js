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
        },
        wipeLeftTopRightBottom: {
            duration: 0.5,
            alpha: "Images/Transitions/topLeftBottomRight.png",
            edge: 0.5
        }
    };
    Template.sound = {
        // SFX
        soundName: "Pfad (relativ) zB Audio/sound.mp3"
    };
    Template.music = {
        musicName: "Pfad zu mp3",
        solitaryExploration: "Sound/Music/solitaryExploration.mp3"
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
            name: "Moon Base Hallway",
            background: "Images/Backgrounds/moonStationHallway.png"
        },
        infirmary: {
            name: "Infirmary",
            background: "Images/Backgrounds/infirmary.png"
        },
        commsOff: {
            name: "Communications Center turned off",
            background: "Images/Backgrounds/commsOff.png"
        },
        comms: {
            name: "Communications Center",
            background: "Images/Backgrounds/comms.png"
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
    function characterLeaveScreen() {
        return {
            start: { translation: Template.ƒS.positionPercent(50, 100) },
            end: { translation: Template.ƒS.positionPercent(200, 100) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.characterLeaveScreen = characterLeaveScreen;
    ;
    function characterWalkIn() {
        return {
            start: { translation: Template.ƒS.positionPercent(200, 100) },
            end: { translation: Template.ƒS.positionPercent(50, 100) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.characterWalkIn = characterWalkIn;
    ;
    Template.items = {
        energyCore: {
            name: "Strange Energy Core",
            description: "An electric device used to power certain robots",
            image: "Images/Items/itemTest.png",
            static: false
        },
        novelInfirmaryNotes: {
            name: "Paper Notes",
            description: "Notes on a piece of paper you found in the infirmary",
            image: "Images/Items/novel1-infirmaryNotes.png",
            static: true
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
            { id: "Scene4", scene: Template.Scene4, name: "Scene4" },
            { id: "Scene5", scene: Template.Scene5, name: "Scene5" }
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
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Let's go over there too.");
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
        await Template.ƒS.update(0.5);
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
                await Template.ƒS.Speech.tell(Template.characters.companion, "Oh okay... Sorry about that...");
                console.log(Template.dataForSave.buddyScore);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "So where are we?");
        await Template.ƒS.Character.hide(Template.characters.companion);
        await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.normal, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.companion, "This is Moonbase Alpha-7, a c-cutting-edge research station.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "Our primary purpose is to c-contribute to the progress of humankind in understanding the cosmos.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "Our es-esteemed scientists in the different re-research stations on the moon work on a variety of pr-projects, ranging from lunar geology to astrophysics.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "Alpha-7 researchers in particular focus on advancing robotic and AI technologies for i-intergalactic travel and outer terrestrial settlement. ");
        await Template.ƒS.Speech.tell(Template.characters.companion, "From life s-support systems to...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Wait wait wait, did you just say we are on the moon?");
        await Template.ƒS.Speech.tell(Template.characters.companion, "Yes " + Template.dataForSave.sirMadam + " " + Template.characters.mainCharacter.name + ", precisely. Alpha-7 is located on the lunar surface.");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Wow...  That's crazy... But... where is everyone?");
        await Template.ƒS.Speech.tell(Template.characters.companion, "You appear m-more disoriented than I thought. Hopefully Doctor Mitchell can have a g-good look at your head, it should be her shift around this t-time.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "The medical facilities here are state-of-the-art, with some of the best doctors you could wish for and equipped to handle any he-health concerns you may have.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "I can assure you that you wi-will be in good hands.");
        await Template.ƒS.Character.hide(Template.characters.companion);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Location.show(Template.location.infirmary);
        await Template.ƒS.update(Template.transition.wipeLeftTopRightBottom.duration, Template.transition.wipeLeftTopRightBottom.alpha, Template.transition.wipeLeftTopRightBottom.edge);
        await Template.ƒS.Speech.tell(Template.characters.companion, "Here we are.");
        await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.normal, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.companion, "Please sit d-down over there while I ex-explain the situation to the Doctor.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "I'll be back in a moment.");
        await Template.ƒS.Character.hide(Template.characters.companion);
        //animate robot leaving screen and coming back
        await Template.ƒS.Character.animate(Template.characters.companion, Template.characters.companion.pose.normal, Template.characterLeaveScreen());
        await Template.ƒS.Character.animate(Template.characters.companion, Template.characters.companion.pose.normal, Template.characterWalkIn());
        await Template.ƒS.Speech.tell(Template.characters.companion, "Doctor Mitchell is not here at the moment. Please wait while I look for someone else.");
        await Template.ƒS.Character.animate(Template.characters.companion, Template.characters.companion.pose.normal, Template.characterLeaveScreen());
        await Template.ƒS.Character.hide(Template.characters.companion);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Hmm, what should I do while I wait? Maybe I could use the time to investigate a bit more...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Somehow this room looks like no one has been here for a while but all the electric devices are still running...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Is this a fridge? With... weird bags inside. AB+... O-... O+... A-... ");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Oh that must be blood for transfusions! They all have such a weird color though, it doesn't even look like blood... Or maybe it's just rotten?");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "What else... a bunch of tools, bottles and other stuff that I don't know.");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "I guess that let's me rule out the possibility of being a doctor? Judging from my outfit I could be an astronaut or something similar.");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "I mean we <i>are</i> in a research station on the moon, so... But then again, the researchers might also use spacesuits.");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Maybe I'm a researcher then? Argh, I really can't figure it out. I'll just try to find some more information.");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Like on this computer for example, I should be able to find some medical records of the people that worked here, right? If it turns on... which...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "... it doesn't, of course... great... would have been too easy...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Maybe something interesting on these papers?");
        Template.ƒS.Inventory.add(Template.items.novelInfirmaryNotes);
        await Template.ƒS.update();
        await Template.ƒS.Inventory.open();
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Hm this seems to be about some kind of disease... what are these notes on the side about chips?");
        await Template.ƒS.Character.animate(Template.characters.companion, Template.characters.companion.pose.normal, Template.characterWalkIn());
        await Template.ƒS.Speech.tell(Template.characters.companion, "I must a-apologize " + Template.dataForSave.sirMadam + ", it appears there is no me-medical staff here today.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "This is a very unusual occurrence and it seems there are some i-issues with the stations internal network as well, as I have been unable to con-contact the Alpha-7 help desk.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "I will have to visit the communications center on the other s-side of the building to ask about the situation.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "I do not want to leave y-you alone for long in your current st-state so I have to ask you to accompany me there.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "Is that o-okay with you " + Template.dataForSave.sirMadam + " " + Template.characters.mainCharacter.name + "? How are you feeling?");
        let healthChoices = {
            feelBetter: "Better!",
            justGo: "Let's just go!"
        };
        let healthChoiceButtons = await Template.ƒS.Menu.getInput(healthChoices, "choicesCSSclass");
        switch (healthChoiceButtons) {
            case healthChoices.feelBetter:
                Template.dataForSave.buddyScore += 1;
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Sure! I feel much better already. Let's go!");
                await Template.ƒS.Character.hide(Template.characters.companion);
                await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.happy, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.companion, "I'm glad to hear that!");
                console.log(Template.dataForSave.buddyScore);
                break;
            case healthChoices.justGo:
                Template.dataForSave.buddyScore -= 1;
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "As if you care how I feel, you're just a robot. Let's just go... ugh feels like all I've been doing is walking around.");
                await Template.ƒS.Character.hide(Template.characters.companion);
                await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.sad, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.companion, "I am truly s-sorry for the inconvenience...");
                await Template.ƒS.Speech.tell(Template.characters.companion, "Are you sure you will be a-alright? ");
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Yeah yeah it's fine.");
                await Template.ƒS.Speech.tell(Template.characters.companion, "If you wish, we can r-rest a bit lo...");
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "I SAID IT'S FINE.");
                await Template.ƒS.Character.hide(Template.characters.companion);
                await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.scared, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.companion, "BZZ BZZ!");
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Let's go already...");
                await Template.ƒS.Character.hide(Template.characters.companion);
                await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.sad, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.companion, "O-of course " + Template.dataForSave.sirMadam + ".");
                console.log(Template.dataForSave.buddyScore);
                break;
        }
        await Template.ƒS.Character.hide(Template.characters.companion);
        await Template.ƒS.Location.show(Template.location.moonHallway);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "What if there is no one at the communications center either?");
        await Template.ƒS.Speech.tell(Template.characters.companion, "I'm su-sure we will find someone that can give us a logical explanation to a-all this.");
        return "Scene5";
    }
    Template.Scene4 = Scene4;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene5() {
        console.log("FudgeStory Scene 5 is starting");
        await Template.ƒS.Location.show(Template.location.blackBackground);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.companion, "Ah, we're here!");
        await Template.ƒS.Location.show(Template.location.commsOff);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.companion, "Welcome to the com-communications center of Alpha-7! This place serves as our lifeline to Earth and the o-other lunar facilities.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "Coordinating supply sh-shipments, exchanging s-scientific findings and providing all k-kinds of organization services for t-those stationed on Alpha-7 - it all happens h-here.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "Our dedicated team o-of human and artificial intelligence specialists works t-tirelessly around the clock to ensure smooth o-operations and safety within the research station and they will always be there to...");
        await Template.ƒS.Speech.tell(Template.characters.companion, "...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "No one around...");
        await Template.ƒS.Speech.tell(Template.characters.companion, "...");
        await Template.ƒS.Speech.tell(Template.characters.companion, "There must be s-someone here! There is always at least one technical support worker in the center to m-make sure the computers and everything else works...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "But I don't see anyone. Nor have I seen anyone the entire way here, or on the way to the infirmary.");
        await Template.ƒS.Speech.tell(Template.characters.companion, "...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "How many people are usually stationed at Alpha-7?");
        await Template.ƒS.Speech.tell(Template.characters.companion, "329... according to my last r-record...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "329! Shouldn't we have run into a few of them by now?");
        let peopleWhereChoices = {
            how: "How can this be?",
            hiding: "Are you hiding something?"
        };
        let peopleWhereButtons = await Template.ƒS.Menu.getInput(peopleWhereChoices, "choicesCSSclass");
        switch (peopleWhereButtons) {
            case peopleWhereChoices.how:
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "How can 329 people just disappear? And how come you don't know anything about this?");
                await Template.ƒS.Speech.tell(Template.characters.companion, "");
                console.log("Buddy Score: " + Template.dataForSave.buddyScore);
                break;
            case peopleWhereChoices.hiding:
                Template.dataForSave.buddyScore -= 1;
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "How can 329 people just disappear? Are you hiding something from me?");
                await Template.ƒS.Character.hide(Template.characters.companion);
                await Template.ƒS.Character.show(Template.characters.companion, Template.characters.companion.pose.angry, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.companion, "N-no " + Template.dataForSave.sirMadam + ", why would I h-hide anything from you? I am just as c-confused as you are!");
                console.log(Template.dataForSave.buddyScore);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.companion, "");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "");
    }
    Template.Scene5 = Scene5;
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
                await Template.ƒS.Speech.tell(Template.characters.narrator, "You can access your inventory by pressing the I key on your keyboard. "); //which key???
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
        Template.ƒS.Sound.fade(Template.music.solitaryExploration, 0.1, 3, true); // (name, volume level to fade to, duration of the fading, loop track?)
        console.log(Template.music.solitaryExploration + " is playing");
        await Template.ƒS.Location.show(Template.location.moonStationInteriorDark); // darker version of room as bg (barely able to see something)
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Urgh... Where... am I?");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Owww... my head...");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Why is it so dark?? I can't see anything!");
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "I should try to get up...");
        await Template.ƒS.Location.show(Template.location.moonStationInterior);
        //await ƒS.update(0.1);
        await Template.ƒS.update(Template.transition.wipeLeftTopRightBottom.duration, Template.transition.wipeLeftTopRightBottom.alpha, Template.transition.wipeLeftTopRightBottom.edge);
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