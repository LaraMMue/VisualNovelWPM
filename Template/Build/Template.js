"use strict";
var Nexirium;
(function (Nexirium) {
    async function BadEnding() {
        console.log("FudgeStory Bad Ending starting");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Location.show(Nexirium.location.finalRoom);
        await Nexirium.ƒS.update(1);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Welcome! I'm glad to finally see you again!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Again? I'm not sure we've ever met?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Oh, we have! Countless times...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "You see, your family is here with me! And you have come here countless times to save them. Oh what a great hero you are!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "My family is here? Where?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Oh I will let you see them this time. You know, this is the last time you helped me play this roleplay. It's starting to get boring now...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Roleplay? What roleplay? What the hell are you talking about? Let me see my family!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Do you truly know who you are? You don't right? That's because you're just a character in my game. And you do exactly what I want you to do, more or less at least.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What??");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Oh I understand your confusion my dear. You are confused every single time I tell you this. You've been here before... How many times is it now Buddy?");
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sad, Nexirium.ƒS.positions.bottomleft);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "145...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "145 times! What a pretty number! Personally I think this is a nice number to end this game on.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Buddy, you're in on this too?? What is going on??");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "You have been lying to me all this time?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "You have been lying to me all this time? - What the hell, how did you know I was going to say this??");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Let's not waste time... I don't want to play this game anymore. I've heard you say the same words over a hundred times already... ");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Do you want to see your family now? I'm getting bored...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "YES THAT'S WHY I'M HERE. Gosh what's with you robots...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "They are waiting just behind this door. All you need to do is go through.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Buddy, is this a trap?");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.annoyed, Nexirium.ƒS.positions.bottomleft);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Go see your family... that's what you wanted right?...");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Alright then...");
        await Nexirium.ƒS.Location.show(Nexirium.location.whiteBG);
        await Nexirium.ƒS.update(1);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.child, Nexirium.dataForSave.momDad + "!!! You're back!!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "It's a really disappointing result, isn't it?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Yeah... I was sure this time " + Nexirium.characters.mainCharacter.name + " would regain free will. But in the end, our experiment failed...");
        return "Ending";
    }
    Nexirium.BadEnding = BadEnding;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function Ending() {
        console.log("FudgeStory Ending starting");
        alert("You have reached the end of Nexirium. You can reload to replay or to load one of your save files or close the window now.");
    }
    Nexirium.Ending = Ending;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function GoodEnding() {
        console.log("FudgeStory Scene Good Ending starting");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Location.show(Nexirium.location.finalRoom);
        await Nexirium.ƒS.update(1);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Welcome! I'm glad to finally see you again!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Again? I'm not sure we've ever met?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Oh, we have! Countless times...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "You see, your family is here with me! And you have come here countless times to save them. Oh what a great hero you are!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "My family is here? Where?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Oh I will let you see them this time. You know, this is the last time you helped me play this roleplay. It's starting to get boring now...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Roleplay? What roleplay? What the hell are you talking about? Let me see my family!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Do you truly know who you are? You don't right? That's because you're just a character in my game. And you do exactly what I want you to do, more or less at least.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What??");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Oh I understand your confusion my dear. You are confused every single time I tell you this. You've been here before... How many times is it now Buddy?");
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sad, Nexirium.ƒS.positions.bottomleft);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "145...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "145 times! What a pretty number! Personally I think this is a nice number to end this game on.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Buddy, you're in on this too?? What is going on??");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "You have been lying to me all this time?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "You have been lying to me all this time? - What the hell, how did you know I was going to say this??");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Let's not waste time... I don't want to play this game anymore. I've heard you say the same words over a hundred times already... ");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Do you want to see your family now? I'm getting bored...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "No, I know you're not who you want me to believe you are. I want answers first!!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "They are waiting just behind... Oh that's new? I didn't expect this answer??");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "You want answers? Well you don't have a family. All that was just programmed into your brain to give you a reason to keep going.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Wh-what??");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "You're one of the people that got sick from the Wave... You lost your free will and became easy to manipulate.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "However, unlike the other affected humans, YOU stayed alive. Until now. Well, at least some parts of you. I had to put you back together so many times, there's barely anything left of your original body.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "You don't believe me? Take off your helmet!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "There's nothing but a... brain? That's me?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "That's you.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Why were you playing this game with me?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "I was trying to find out if that could be the cure to the NexirTech disease...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "You made me the hero, so I could regain free will?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Exactly.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Then who are you? And Buddy?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "I'm the evil villain, obviously. And Buddy is the Hero's guide.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I'm... speechless... I really played your game 145 times?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Yes. Maybe it's time for an apology... Sorry that I put you through all this.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "So... was it worth it?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Hmm... this is the first time you have asked for more answers... I was not expecting that so maybe?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "I was actually planning to let you live in an eternal daydream that you get to spend with your imaginary family, just so I wouldn't feel so bad anymore.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "But if you have regained free will, I think I should let you decide. What do you think Buddy?");
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomleft);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Yes, that was the deal. If " + Nexirium.characters.mainCharacter.name + " regains their mind, you'll set them free.");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sad, Nexirium.ƒS.positions.bottomleft);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, Nexirium.characters.mainCharacter.name + " I'm sorry for everthing. I hope you can forgive me.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "It's okay Buddy, I understand that you two just wanted to help me... I hope that at least our friendship was true?");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomleft);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Of course! Every single time. What will you do with your new freedom now?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Hm... I still want to go to earth and see what happened there. Do you want to come with me?");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.happy, Nexirium.ƒS.positions.bottomleft);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Absolutely!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Look at you two! It's almost as if I could feel like a real mother. Good luck to you two!");
        return "Ending";
    }
    Nexirium.GoodEnding = GoodEnding;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    Nexirium.ƒ = FudgeCore;
    Nexirium.ƒS = FudgeStory;
    console.log("FudgeStory main starting");
    Nexirium.transition = {
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
    Nexirium.sound = {
        // SFX
        soundName: "Pfad (relativ) zB Audio/sound.mp3",
        alarm: "Sound/SFX/SpaceshipAlarm.mp3"
    };
    Nexirium.music = {
        musicName: "Pfad zu mp3",
        solitaryExploration: "Sound/Music/solitaryExploration.mp3"
    };
    Nexirium.location = {
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
        },
        shipHangar: {
            name: "Spaceship Parking Spot",
            background: "Images/Backgrounds/shipHangar.png"
        },
        cockpit: {
            name: "Spaceship Cockpit",
            background: "Images/Backgrounds/spaceship_cockpit.png"
        },
        landing: {
            name: "Successful Landing",
            background: "Images/Background/landing.png"
        },
        finalRoom: {
            name: "Mother's home",
            background: "Images/Backgrounds/finalRoom_mother.png"
        },
        whiteBG: {
            name: "white",
            background: "Images/Backgrounds/whiteBackground.png"
        }
    };
    Nexirium.characters = {
        mother: {
            name: "???"
        },
        system: {
            name: "SYSTEM"
        },
        mainCharacter: {
            name: "",
            origin: Nexirium.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/charatest2.png"
            }
        },
        helmetVoice: {
            name: "Voice in Helmet",
        },
        companion: {
            name: "Buddy",
            origin: Nexirium.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Nexirium.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/charatest2.png",
                angry: "Pfad des Bildes",
                happy: "",
                upset: ""
            }
        },
        commsVoice: {
            name: "Robotic Voice"
        },
        child: {
            name: "A child's Voice"
        },
        grandpa: {
            name: "Old Man"
        }
    };
    function characterLeaveScreen() {
        return {
            start: { translation: Nexirium.ƒS.positionPercent(50, 100) },
            end: { translation: Nexirium.ƒS.positionPercent(200, 100) },
            duration: 2,
            playmode: Nexirium.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Nexirium.characterLeaveScreen = characterLeaveScreen;
    ;
    function characterWalkIn() {
        return {
            start: { translation: Nexirium.ƒS.positionPercent(200, 100) },
            end: { translation: Nexirium.ƒS.positionPercent(50, 100) },
            duration: 2,
            playmode: Nexirium.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Nexirium.characterWalkIn = characterWalkIn;
    ;
    Nexirium.items = {
        energyCore: {
            name: "Strange Energy Core",
            description: " An electric device used to power certain robots",
            image: "Images/Items/energyCore.png",
            static: false
        },
        novelInfirmaryNotes: {
            name: "Paper Notes",
            description: " A piece of paper with a patient list and scribbled notes",
            image: "Images/Items/novel1-infirmaryNotes.png",
            static: true
        },
        notice: {
            name: "NexirTech Notice",
            description: " A NexirTech notice about robot malfunctions",
            image: "Images/Items/novel2-notice.png",
            static: true
        },
        attackNotice: {
            name: "NexirTech Attack Notice",
            description: " A NexirTech notice about robot attacks",
            image: "Images/Items/novel3-attacks.png",
            static: true
        },
        petition: {
            name: "Petition",
            description: " A petition against NexirTech",
            image: "Images/Items/novel4-petition.png",
            static: true
        },
        shutdown: {
            name: "Shutdown Notice",
            description: " A notice about the NexirNet Shutdown",
            image: "Images/Items/novel5-shutdown.png",
            static: true
        },
        governmentNotice: {
            name: "Government Notice",
            description: " A government notice about the data wipe",
            image: "Images/Items/novel6-dataWipe.png",
            static: true
        },
        diary1: {
            name: "Diary File 1",
            description: " A diary written by an Alpha-7 worker - Part 1",
            image: "Images/Items/novel7-diary1.png",
            static: true
        },
        diary2: {
            name: "Diary File 2",
            description: " A diary written by an Alpha-7 worker - Part 2",
            image: "Images/Items/novel8-diary2.png",
            static: true
        },
        diary3: {
            name: "Diary File 3",
            description: " A diary written by an Alpha-7 worker - Part 3",
            image: "Images/Items/novel9-diary3.png",
            static: true
        },
        manual: {
            name: "Spaceship Manual",
            description: " A manual written like a riddle",
            image: "Images/Items/manual.png"
        }
    };
    /*export function useItem(name: string) {
      document.getElementById(name).remove();
    }*/
    //  GAME PROGRESS DATA SAVE
    Nexirium.dataForSave = {
        nameMC: "",
        takenOffHelmet: false,
        buddyScore: 5,
        sirMadam: "",
        momDad: "",
        sonDaughter: "",
        wrongCable: false,
        nameMother: "",
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
        Nexirium.ƒS.Sound.setMasterVolume(volume);
    }
    Nexirium.increaseSound = increaseSound;
    function decreaseVolume() {
        if (volume <= 0)
            return;
        volume -= 1;
        Nexirium.ƒS.Sound.setMasterVolume(volume);
    }
    Nexirium.decreaseVolume = decreaseVolume;
    function displayCredits() {
        Nexirium.ƒS.Text.print("Author: Lara Marie Müller " +
            "<br/>" +
            "Visual Novel WiSe 2023/24");
    }
    Nexirium.displayCredits = displayCredits;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Nexirium.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Nexirium.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                Nexirium.gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.inventory:
                await Nexirium.ƒS.Inventory.open();
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
            case Nexirium.ƒ.KEYBOARD_CODE.F8: // englisches Keyboard Layout wird verwendet!!
                console.log("Save");
                await Nexirium.ƒS.Progress.save();
                break;
            case Nexirium.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Nexirium.ƒS.Progress.load();
                break;
            case Nexirium.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close Menu");
                    Nexirium.gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open Menu");
                    Nexirium.gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case Nexirium.ƒ.KEYBOARD_CODE.I:
                if (inventoryIsOpen) {
                    console.log("Close Inventory");
                    Nexirium.ƒS.Inventory.close();
                    inventoryIsOpen = false;
                }
                else {
                    console.log("Open Inventory");
                    Nexirium.ƒS.Inventory.open();
                    inventoryIsOpen = true;
                }
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        Nexirium.gameMenu = Nexirium.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass"); // optionale CSS Klasse benutzen um Menü zu gestalten
        Nexirium.gameMenu.close();
        // SCENE HIERARCHY
        let scenes = [
            { id: "tutorial", scene: Nexirium.tutorial, name: "Tutorial" }, //id zum aufrufen der Szenen
            { id: "firstScene", scene: Nexirium.firstScene, name: "Wake up" },
            { id: "GameOver1", scene: Nexirium.gameOver1, name: "Game Over 1" },
            { id: "Scene2", scene: Nexirium.Scene2, name: "Find Robot" },
            { id: "Scene3", scene: Nexirium.Scene3, name: "Meet Robot" },
            { id: "Scene4", scene: Nexirium.Scene4, name: "Scene4" },
            { id: "Scene5", scene: Nexirium.Scene5, name: "Scene5" },
            { id: "Scene6", scene: Nexirium.Scene6, name: "Scene6" },
            { id: "Scene7", scene: Nexirium.Scene7, name: "Scene7" },
            { id: "GameOver2", scene: Nexirium.GameOver2, name: "GameOver2" },
            { id: "Scene8", scene: Nexirium.Scene8, name: "Scene8" },
            { id: "Scene9", scene: Nexirium.Scene9, name: "Scene9" },
            { id: "GoodEnding", scene: Nexirium.GoodEnding, name: "Good Ending" },
            { id: "BadEnding", scene: Nexirium.BadEnding, name: "Bad Ending" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Nexirium.dataForSave = Nexirium.ƒS.Progress.setData(Nexirium.dataForSave, uiElement);
        // start the sequence
        Nexirium.ƒS.Progress.go(scenes);
    }
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Nexirium.Scene = Scene;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function Scene2() {
        console.log("Scene 2 starting");
        await Nexirium.ƒS.Location.show(Nexirium.location.moonStationInterior);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Let's just keep looking around.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Maybe I can find some more information about this place...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Where should I go?");
        let directionChoices = {
            left: "Go left",
            right: "Go right"
        };
        let directionChoiceButtons = await Nexirium.ƒS.Menu.getInput(directionChoices, "choicesCSSclass");
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
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Something is glowing in that corner!");
                await Nexirium.ƒS.Location.show(Nexirium.location.storageCore);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Hm, looks like some kind of mechanical component. Aren't these used to power robots? ");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What was the name of this thing again?");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Ugh... my mind is still a little foggy... Anyway, I'll take this with me.");
                await Nexirium.ƒS.Location.show(Nexirium.location.storage);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.system, "Energy core added to your inventory.");
                Nexirium.ƒS.Inventory.add(Nexirium.items.energyCore);
                await Nexirium.ƒS.update();
                await Nexirium.ƒS.Location.show(Nexirium.location.moonStationInterior);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Let's go over there too.");
                break;
            // go to left side, find core, then go to right side
            case directionChoices.right:
                console.log("went right: find robot first");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh what's that over there?");
                await Nexirium.ƒS.Location.show(Nexirium.location.cornerRobot);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What's this? Looks like a robot of some sorts.");
                lookCloserButton = await Nexirium.ƒS.Menu.getInput(lookCloser, "choicesCSSclass");
                if (clickedLookCloserButton) {
                    delete lookCloser.interactLookCloser;
                }
                if (lookCloserButton) {
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Looks somewhat familiar... There should be a power button right here.");
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "AWAKEN, LITTLE ONE!!...");
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...Hm... That didn't work...");
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Maybe it's missing a part? Oh yeah, right here. Seems like there's supposed to be something here.");
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What was the name of this component again?");
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Ugh... my mind is still a little foggy...");
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Anyway, let's look for this... thing!");
                    // --> go to left side and find core, then return to robot
                    await Nexirium.ƒS.Location.show(Nexirium.location.moonStationInterior);
                    await Nexirium.ƒS.update(0.5);
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Hmm... Where should I search... Oh!");
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Something is glowing in that corner!");
                    await Nexirium.ƒS.Location.show(Nexirium.location.storageCore);
                    await Nexirium.ƒS.update(0.5);
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Hm, looks like some kind of mechanical component. Maybe it's exactly what I'm looking for!");
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Ugh... I still can't remember the damn name of this thing.");
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I'll just take this with me...");
                    await Nexirium.ƒS.Location.show(Nexirium.location.storage);
                    await Nexirium.ƒS.update(0.5);
                    await Nexirium.ƒS.Speech.tell(Nexirium.characters.system, "Energy core added to your inventory.");
                    Nexirium.ƒS.Inventory.add(Nexirium.items.energyCore);
                    await Nexirium.ƒS.update();
                    break;
                }
        }
        if (leftFirst == true) {
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh what's that over there?");
            await Nexirium.ƒS.Location.show(Nexirium.location.cornerRobot); // Background!!!
            await Nexirium.ƒS.update(0.5);
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What's this? Looks like a robot of some sorts.");
            lookCloserButton = await Nexirium.ƒS.Menu.getInput(lookCloser, "choicesCSSclass");
            if (clickedLookCloserButton) {
                delete lookCloser.interactLookCloser;
            }
            if (lookCloserButton) {
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Looks somewhat familiar... There should be a power button right here.");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "AWAKEN, LITTLE ONE!!...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...Hm... That didn't work...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Maybe it's missing a part? Oh yeah, right here. Seems like there's supposed to be something here.");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Maybe it's this thing I found?");
                /*await ƒS.Inventory.open();
                ƒS.Inventory.getAmount(items.energyCore) != 0;
                await ƒS.update();*/
            }
        }
        else {
            await Nexirium.ƒS.Location.show(Nexirium.location.cornerRobot);
            await Nexirium.ƒS.update(0.5);
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Let's see if this is the right one.");
            /*await ƒS.Inventory.open();
            ƒS.Inventory.getAmount(items.energyCore) != 0;
            await ƒS.update();*/
        }
        // use/remove energy core from inventory
        await Nexirium.ƒS.Inventory.open();
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Ha! It fits! There you go... Now how do I turn you on?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "BZZ BZZZ");
        return "Scene3";
        // continue: both robot and core found? --> insert core into robot, robot wakes up --> Buddy introduction scene
        /*ƒS.Inventory.add(items.energyCore);
    
        await ƒS.Inventory.open();
        await ƒS.update();*/
    }
    Nexirium.Scene2 = Scene2;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function Scene3() {
        console.log("Scene 3 starting");
        await Nexirium.ƒS.Location.show(Nexirium.location.corner);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        console.log("robot character img?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "B... Booting complete! Hello!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I am a model NEXA-365 companion bot, de-designed by NEXIRTECH to help you with your everyday ta-tasks and more!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "You can call me Buddy. How may I h-help you Sir... or u-uhm Madam?");
        let playerGender = ["Sir", "Madam", "Dad", "Mom", "Son", "Daughter"];
        let genderChoices = {
            sir: "Sir is fine",
            madam: "Madam is fine"
        };
        let genderChoiceButtons = await Nexirium.ƒS.Menu.getInput(genderChoices, "choicesCSSclass");
        switch (genderChoiceButtons) {
            case genderChoices.sir:
                console.log("player chose male");
                Nexirium.dataForSave.sirMadam = playerGender[0];
                Nexirium.dataForSave.momDad = playerGender[2];
                Nexirium.dataForSave.sonDaughter = playerGender[4];
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Sir is fine.");
                break;
            case genderChoices.madam:
                console.log("player chose female");
                Nexirium.dataForSave.sirMadam = playerGender[1];
                Nexirium.dataForSave.momDad = playerGender[3];
                Nexirium.dataForSave.sonDaughter = playerGender[5];
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Madam is fine.");
                break;
        }
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "C-certainly " + Nexirium.dataForSave.sirMadam + ". I will adress you like th-this from now on. May I also know your n-name?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "My... name?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Do not worry. I can a-assure you that I will keep all p-personal information confidential.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I am just here to he-help you, " + Nexirium.dataForSave.sirMadam + ", and the more I know a-about you, the better I can be of s-service!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Yes yes I get that, it's just that now that I think about it... I barely remember my name... What was it again?");
        Nexirium.dataForSave.nameMC = await Nexirium.ƒS.Speech.getInput();
        Nexirium.characters.mainCharacter.name = Nexirium.dataForSave.nameMC;
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "(to yourself) " + Nexirium.characters.mainCharacter.name + " ... was that really my name?");
        await Nexirium.ƒS.update(0.5);
        let confusedChoices = {
            iSayYes: "Yes",
            iSayMaybe: "Maybe",
            iSayNo: "No"
        };
        let confusedButtons = await Nexirium.ƒS.Menu.getInput(confusedChoices, "choicesCSSclass");
        switch (confusedButtons) {
            case confusedChoices.iSayYes:
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "(to yourself) Yes, I'm sure that was my name! I think...");
                break;
            case confusedChoices.iSayNo:
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "(to yourself) No, that's definitely wrong... But no matter how hard I try, I can't seem to remember any other name. Guess I'll keep this one for now.");
                break;
            case confusedChoices.iSayMaybe:
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "(to yourself) Hmm... maybe it was?... I'm not sure...");
        }
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "My name is " + Nexirium.characters.mainCharacter.name + ".");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Understood. " + Nexirium.dataForSave.sirMadam + " " + Nexirium.characters.mainCharacter.name + ", how can I be of a-assistance?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Well... I woke up here all alone not long ago. I don't know how I got here or what <i>here</i> even is...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I still feel a little dizzy and can't remember anything from before. ");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I've looked around a few rooms but couldn't find anyone else. Maybe you know something?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Oh m-my, perhaps you have suffered a head injury? You should go to the infirmary and see a d-doctor immediately! ");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I will take you there and try to a-answer all your questions on the way. Follow m-me.");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        return "Scene4";
    }
    Nexirium.Scene3 = Scene3;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function Scene4() {
        console.log("Scene 4 starting");
        await Nexirium.ƒS.Location.show(Nexirium.location.moonHallway);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Are you a-able to wa-walk?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Yeah it should be fine.");
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "There seems t-to be an issue with my la-language module.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I apologize for the st-stutter. I will have this ch-checked as soon as possible.");
        let stutterChoices = {
            dontMind: "I don't mind",
            fixIt: "Fix it!"
        };
        let stutterButtons = await Nexirium.ƒS.Menu.getInput(stutterChoices, "choicesCSSclass");
        switch (stutterButtons) {
            case stutterChoices.dontMind:
                Nexirium.dataForSave.buddyScore += 1;
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "It's alright, I don't mind.");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.happy, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Oh okay!");
                console.log(Nexirium.dataForSave.buddyScore);
                break;
            case stutterChoices.fixIt:
                Nexirium.dataForSave.buddyScore -= 1;
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Yeah you better fix it soon. It's really annoying.");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sad, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Oh okay... Sorry about that...");
                console.log(Nexirium.dataForSave.buddyScore);
                break;
        }
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "So where are we?");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "This is Moonbase Alpha-7, a c-cutting-edge research station founded by NEXIRTECH.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Our primary purpose is to c-contribute to the progress of humankind in understanding the cosmos.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Our es-esteemed scientists in the different re-research stations on the moon work on a variety of pr-projects, ranging from lunar geology to astrophysics.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Alpha-7 researchers in particular focus on advancing robotic and AI technologies for i-intergalactic travel and outer terrestrial settlement. ");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "From life s-support systems to...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Wait wait wait, did you just say we are on the moon?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Yes " + Nexirium.dataForSave.sirMadam + " " + Nexirium.characters.mainCharacter.name + ", precisely. Alpha-7 is located on the lunar surface.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Wow...  That's crazy... But... where is everyone?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "You appear m-more disoriented than I thought. Hopefully Doctor Mitchell can have a g-good look at your head, it should be her shift around this t-time.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "The medical facilities here are state-of-the-art, with some of the best doctors you could wish for and equipped to handle any he-health concerns you may have.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I can assure you that you wi-will be in good hands.");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Location.show(Nexirium.location.infirmary);
        await Nexirium.ƒS.update(Nexirium.transition.wipeLeftTopRightBottom.duration, Nexirium.transition.wipeLeftTopRightBottom.alpha, Nexirium.transition.wipeLeftTopRightBottom.edge);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Here we are.");
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Please sit d-down over there while I ex-explain the situation to the Doctor.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I'll be back in a moment.");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        //animate robot leaving screen and coming back
        await Nexirium.ƒS.Character.animate(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.characterLeaveScreen());
        await Nexirium.ƒS.Character.animate(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.characterWalkIn());
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Doctor Mitchell is not here at the moment. Please wait while I look for someone else.");
        await Nexirium.ƒS.Character.animate(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.characterLeaveScreen());
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Hmm, what should I do while I wait? Maybe I could use the time to investigate a bit more...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Somehow this room looks like no one has been here for a while but all the electric devices are still running...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Is this a fridge? With... weird bags inside. AB+... O-... O+... A-... ");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh that must be blood for transfusions! They all have such a weird color though, it doesn't even look like blood... Or maybe it's just rotten?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What else... a bunch of tools, bottles and other stuff that I don't know.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I guess that let's me rule out the possibility of being a doctor? Judging from my outfit I could be an astronaut or something similar.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I mean we <i>are</i> in a research station on the moon after all... But then again, the researchers might also use spacesuits.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Maybe I'm a researcher then? Argh, I really can't figure it out. I'll just try to find some more information.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Like on this computer for example, I should be able to find some medical records of the people that worked here, right? If it turns on... which...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "... it doesn't, of course... great... would have been too easy...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Maybe something interesting on these papers?");
        Nexirium.ƒS.Inventory.add(Nexirium.items.novelInfirmaryNotes);
        await Nexirium.ƒS.update();
        await Nexirium.ƒS.Inventory.open();
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Hm this seems to be about some kind of disease... what are these notes on the side about chips?");
        await Nexirium.ƒS.Character.animate(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.characterWalkIn());
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I must a-apologize " + Nexirium.dataForSave.sirMadam + ", it appears there is no me-medical staff here today.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "This is a very unusual occurrence and it seems there are some i-issues with the stations internal network as well, as I have been unable to con-contact the Alpha-7 help desk.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I will have to visit the communications center on the other s-side of the building to ask about the situation.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I do not want to leave y-you alone for long in your current st-state so I have to ask you to accompany me there.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Is that o-okay with you " + Nexirium.dataForSave.sirMadam + " " + Nexirium.characters.mainCharacter.name + "? How are you feeling?");
        let healthChoices = {
            feelBetter: "Better!",
            justGo: "Let's just go!"
        };
        let healthChoiceButtons = await Nexirium.ƒS.Menu.getInput(healthChoices, "choicesCSSclass");
        switch (healthChoiceButtons) {
            case healthChoices.feelBetter:
                Nexirium.dataForSave.buddyScore += 1;
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Sure! I feel much better already. Let's go!");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.happy, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I'm glad to hear that!");
                console.log(Nexirium.dataForSave.buddyScore);
                break;
            case healthChoices.justGo:
                Nexirium.dataForSave.buddyScore -= 1;
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "As if you care how I feel, you're just a robot. Let's just go... ugh feels like all I've been doing is walking around.");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sad, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I am truly s-sorry for the inconvenience...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Are you sure you will be a-alright? ");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Yeah yeah it's fine.");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "If you wish, we can r-rest a bit lo...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I SAID IT'S FINE.");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.scared, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "<i>BZZ BZZ!</i>");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Let's go already...");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sad, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "O-of course " + Nexirium.dataForSave.sirMadam + ".");
                console.log(Nexirium.dataForSave.buddyScore);
                break;
        }
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Location.show(Nexirium.location.moonHallway);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What if there is no one at the communications center either?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I'm su-sure we will find someone that can give us a logical explanation to a-all this.");
        return "Scene5";
    }
    Nexirium.Scene4 = Scene4;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function Scene5() {
        console.log("FudgeStory Scene 5 is starting");
        await Nexirium.ƒS.Location.show(Nexirium.location.blackBackground);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Ah, we're here!");
        await Nexirium.ƒS.Location.show(Nexirium.location.commsOff);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Welcome to the com-communications center of Alpha-7! This place serves as our lifeline to Earth and the o-other lunar facilities.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Coordinating supply sh-shipments, exchanging s-scientific findings and providing all k-kinds of organization services for t-those stationed on Alpha-7 - it all happens h-here.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Our dedicated team o-of human and artificial intelligence specialists works t-tirelessly around the clock to ensure smooth o-operations and safety within the research station and they will always be there to...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "No one around...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "There must be s-someone here! There is always at least one technical support worker in the center to m-make sure the computers and everything else works...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "But I don't see anyone. Nor have I seen anyone the entire way here, or on the way to the infirmary.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "How many people are usually stationed at Alpha-7?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "According to my last r-record...329");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "329! Shouldn't we have run into a few of them by now?");
        let peopleWhereChoices = {
            how: "How can this be?",
            hiding: "Are you hiding something?"
        };
        let peopleWhereButtons = await Nexirium.ƒS.Menu.getInput(peopleWhereChoices, "choicesCSSclass");
        switch (peopleWhereButtons) {
            case peopleWhereChoices.how:
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "How can 329 people just disappear? And how come you don't know anything about this?");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "W-well... I don't know how long I s-slept in the s-storage room until y-you found me... " + Nexirium.dataForSave.sirMadam + ". Could have b-been a while...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Hm that's true...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "A-anyhow, since we're in the same b-boat, we should work t-together, right " + Nexirium.dataForSave.sirMadam + " " + Nexirium.characters.mainCharacter.name + "?");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Of course! And " + Nexirium.characters.companion.name + ", you don't have to call me " + Nexirium.dataForSave.sirMadam + " anymore. My name is enough :)");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.happy, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Oh! I will update the way I adress you then, " + Nexirium.characters.mainCharacter.name + "! D-does this mean we are f-friends?");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Sure! We only have each other right now, so why not?");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "<i> BZZ BZZ </i> , that makes me very h-happy!");
                Nexirium.dataForSave.buddyScore += 1;
                console.log("Buddy Score: " + Nexirium.dataForSave.buddyScore);
                break;
            case peopleWhereChoices.hiding:
                Nexirium.dataForSave.buddyScore -= 1;
                console.log("Buddy Score: " + Nexirium.dataForSave.buddyScore);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "How can 329 people just disappear? Are you hiding something from me?");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.angry, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "N-no " + Nexirium.dataForSave.sirMadam + ", why would I h-hide anything from you? I am just as c-confused as you are!");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.annoyed, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Look, I'm sure we w-will find out the truth soon. I u-understand your confusion and f-frustration. But w-we are in the same boat, " + Nexirium.dataForSave.sirMadam + ", so we sh-should work together!");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Fine. But stop calling me " + Nexirium.dataForSave.sirMadam + "! Just my name is enough");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I was just being polite... But if you wish I will stop.");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Of course you will. You're a service robot, you're supposed to do what I tell you. But don't think that me allowing you to speak more casually makes us friends! I just want you to say less words.");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sad, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I... I understand...");
                break;
        }
        ;
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Now let's see w-what we can find here... Hm it s-seems the co-communication network has been shut off. This explains why I couldn't contact a-anyone.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Or maybe there is no one <i>to</i> contact...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "P-perhaps something happened that l-led the people here to evacuate to one of the o-other research stations. We should restart the comms and s-see if we can contact A-Alpha-3. That's the closest o-one from here.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "To r-restart the system, we need to press two buttons at the s-same time. " + Nexirium.characters.mainCharacter.name + ", could I trouble you to press this button h-here while I press the one o-over there?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Sure, let's do it!");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.animate(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.characterLeaveScreen());
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Okay on three! O-one, two, three!");
        let pressCommsButton = {
            interactCommsButton: "Press the button"
        };
        let CommsButton = await Nexirium.ƒS.Menu.getInput(pressCommsButton, "choicesCSSclass");
        if (CommsButton) {
            await Nexirium.ƒS.Location.show(Nexirium.location.comms);
            await Nexirium.ƒS.update(0.5);
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.commsVoice, "RESTART SUCCESSFUL");
        }
        ;
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "It worked! Woah that's a lot of screens!");
        await Nexirium.ƒS.Character.animate(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.characterWalkIn());
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Great! Now w-we should be able to u-use the system.");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sleep, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "<i>Bzzz Bzzz</i>");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "<i>Update in progress...</i>");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What's going on with you now?");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "...");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.happy, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Sorry if that scared you. I auto-connected to the system and was able to fix the error in my language module! There should be no more issues with it now!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "That's great!");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.commsVoice, "INCOMING MESSAGES: 42389. MESSAGE ONE: ALPHA-4 RESEARCHERS REQUESTING ALPHA-7 ACCESS. MESSAGE TWO: TWO APPLE TREES ALREADY DIED. WE NEED MORE FERTILIZER IF YOU WANT TO CONTINUE EATING APPLES!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.commsVoice, "MESSAGE THREE: COMMUNICATOR NOT CONNECTING TO NEXIRNET, PLEASE HELP! MESSAGE FOUR: MALFUNCTIONING WORKER BOT IN SECTOR TWO. ENGINEER NEEDED. MESSAGE FIVE: WHY ARE THERE NO MORE APPLES IN THE CAFETERIA? I WANT APPLES!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.commsVoice, "MESSAGE SIX: HOW DO I BOOK AN APPOINTMENT WITH DOCTOR MITCHELL? AND DO YOU KNOW IF SHE LIKES ARTIFICIAL FLOWERS? JUST TO THANK HER OF COURSE, I AM OBVIOUSLY SICK AND IN NEED OF MEDICAL ATTENTION. MESSAGE SEVEN: ...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh gosh that's going to take a while... Do we have to wait around for hours now to hear something useful?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "No no of course not. Since I have access to the system now, I can sift through all the information and find anything relevant quickly. Just give me a moment");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sleep, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "...");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sad, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What is it?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Something... horrible happened... I don't know how to explain this. Maybe just look at it yourself...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.system, "Text files added to your inventory. Scroll to read everything.");
        Nexirium.ƒS.Inventory.add(Nexirium.items.notice);
        Nexirium.ƒS.Inventory.add(Nexirium.items.attackNotice);
        Nexirium.ƒS.Inventory.add(Nexirium.items.petition);
        Nexirium.ƒS.Inventory.add(Nexirium.items.shutdown);
        Nexirium.ƒS.Inventory.add(Nexirium.items.governmentNotice);
        await Nexirium.ƒS.update();
        await Nexirium.ƒS.Inventory.open();
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh wow this really does sound horrible...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "So basically, robots started to disobey, NexirTech wanted to shut them down, then the robots defended themselves until the government decided to basically nuke everything? Did I get that right?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Even though that would also kill a lot of humans?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Yes... unfortunately this is correct...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I can't believe something like that happened... But where did the humans here go?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I also found an evacuation notice from a few weeks after the data wipe. Everyone here was ordered to come back to earth to help.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh so that's why... Why was I left behind though?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "So everyone who potentially knows me is back on earth? Then we should try to find a way to get there too!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "There is a spaceship hangar right outside. We could try to get one started...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Perfect! I don't know if I know how to fly one of these things but what's there to loose right?");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Is there something else?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Yes... I found something... I thought maybe you would want to see this... ");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I noticed a number on the side of your helmet earlier and I found a message with the exact same number...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh what is it? Show me!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Of course... I... want to warn you though... You might not take it well... ");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I don't even know who I am, I don't remember anything or anyone, so it probably won't affect me much. Besides, every information about myself counts.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I just hope you will do the right thing in the end.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Hm? Why are you saying something like that all of a sudden? Anyway, I'm ready.");
        let listenToMessage = {
            interactMessageButton: "Listen to the voice message"
        };
        let messageButton = await Nexirium.ƒS.Menu.getInput(listenToMessage, "choicesCSSclass");
        if (messageButton) {
            await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
            await Nexirium.ƒS.Location.show(Nexirium.location.blackBackground);
            await Nexirium.ƒS.update(0.5);
            Nexirium.ƒS.Sound.fade(Nexirium.music.solitaryExploration, 0.1, 0, false);
            return "Scene6";
        }
        ;
    }
    Nexirium.Scene5 = Scene5;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function Scene6() {
        console.log("FudgeStory Nexirium Scene 6 starting");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.child, "Grandpa, Grandpa, it's working!! I can talk to " + Nexirium.dataForSave.momDad + " now!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "! ! !");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I know that voice! It sounds so... familiar...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.grandpa, "Good good! Then I'll come talk to your " + Nexirium.dataForSave.momDad + " too! Ugh these old bones...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Wait, this one too! Why do I feel sad all of a sudden??");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.child, "Hi " + Nexirium.dataForSave.momDad + "! Are you still on the moon? When are you coming back? You know you promised you would go on a hike with me, remember?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.child, "I wanted to start going to school next month but the school is closed now. And I'm soooo boooored. Grandpa says I can't go outside right now.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.child, "Can you come back soon and play with me? I miss you " + Nexirium.dataForSave.momDad + "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.child, "Grandma went to heaven too and she didn't come back! You have to come back okay?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.grandpa, "Shh my dear, your " + Nexirium.dataForSave.momDad + " doesn't know that yet. Why don't you go play with the new dolls I gave you while I talk to your " + Nexirium.dataForSave.momDad + "? They used to be your great-greatmothers.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.child, "Okay Grandpa, can you play with me after that?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.grandpa, "Of course dear, now say goodbye to your " + Nexirium.dataForSave.momDad + "!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.child, "Bye " + Nexirium.dataForSave.momDad + ", I love you! Come back soon!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.grandpa, "Sigh... well... you probably heard her say it already but yeah... it's true... your Mother...died...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.grandpa, "It's all thanks to this stupid technology. If it wasn't for her dementia, I would have never let these money hungry people implant those things into her brain");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.grandpa, "The kids are taking it rather well... But I don't think they understand death that well yet... And with all the chaos here after the Wave... They probably have enough to think about...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.grandpa, "The house feels a lot more empty now... I really miss her... And I miss you too, my " + Nexirium.dataForSave.sonDaughter + ", I really do.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.grandpa, "I know we haven't been on best terms when you left, but maybe we can leave all of that behind now?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.grandpa, "The last thing they told me before cutting off communication was that you were sick. I hope you feel better now! Up there on the moon you should have been safe from the Nexirium Poisoning right?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.grandpa, "I just wanted you to know, I am proud of you and I hope you'll come home soon. We really need you here now...");
        await Nexirium.ƒS.Location.show(Nexirium.location.comms);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Are you alright?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I remember some things now... I have a familiy, two kids... I had a fight with my father about going to the moon to work as an engineer. But I had to leave to provide for my family...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "And I just learned that my mother died... I...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Take your time. That's a lot to take in all at once.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "... Thank you...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I need to go back to earth. I have to see my family.");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.annoyed, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Of course. Let's go outside to find a ship.");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Location.show(Nexirium.location.earthFromMoon);
        await Nexirium.ƒS.update(1);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Wow. It's beautiful! That's where I should be right now.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I'm sure we'll get there, don't worry. You'll see your family soon.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Since there are no vehicles around anymore, we'll have to walk a bit. But that way you can take in the view a little longer!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Is there anything else you remember?");
        let rememberChoices = {
            sad: "No, not really...",
            annoyed: "Could you be quiet?"
        };
        let rememberChoiceButtons = await Nexirium.ƒS.Menu.getInput(rememberChoices, "choicesCSSclass");
        switch (rememberChoiceButtons) {
            case rememberChoices.sad:
                Nexirium.dataForSave.buddyScore += 1;
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "No I think that's all for now... And I don't think I can take more information right now, after what I learned just now.");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "But I'm glad you're here now!");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Sure! If you wish to talk about it, I'll listen. Or if you want me to distract you, I can tell you more about Alpha-7!");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Thanks, but I just need some silence now...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I understand that... But if you need me, I'm right beside you!");
                console.log(Nexirium.dataForSave.buddyScore);
                break;
            case rememberChoices.annoyed:
                Nexirium.dataForSave.buddyScore -= 1;
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Can you just shut up for a moment? I just learned that my mother died and you keep talking and talking...");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sad, Nexirium.ƒS.positions.bottomcenter);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Sorry... I thought...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Well you thought wrong. Now please be quiet.");
                console.log(Nexirium.dataForSave.buddyScore);
                break;
        }
        ;
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Location.show(Nexirium.location.shipHangar);
        await Nexirium.ƒS.update(1);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Um... we're here.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh yeah, I didn't even notice... So there's two ships left... Which one should we take?");
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomcenter);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Aren't you an engineer?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "That doesn't mean I know much about spaceships. And I still can't remember the details. Hm let's just take this one. Do you know how to start up these things?");
        //await ƒS.Speech.tell(characters.companion, "I don't know much about spaceships either. Maybe it's best if you choose.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I've been a on a spaceship like this one a bunch of times before, I think you need to pull on this leaver.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh yeah that worked. Let's go then. I hope I can fly this thing...");
        return "Scene7";
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.grandpa, "");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.child, "");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "");
    }
    Nexirium.Scene6 = Scene6;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function Scene7() {
        console.log("FudgeStory Scene 7 starting");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Location.show(Nexirium.location.cockpit);
        await Nexirium.ƒS.update(1);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Phew, that worked better than I expected. Hopefully the landing will be just as easy...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "You can engage the autopilot to the NexirTech Spacestation now.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Huh? Can't we go directly to earth?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "This spaceship isn't made to fly in the Earths atmosphere. We'll have to exchange it with one that can actually land on Earth. And besides, it's really really far. The engine would run out of Nexirium before we would even reach the atmosphere.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Alright alright, how do I activate the autopilot?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Press this button here. Then choose the destination from the preset list.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Great! Should be smooth sailing now, right?");
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomleft);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Yeah it should only take a few hours. And then we can...");
        Nexirium.ƒS.Sound.fade(Nexirium.sound.alarm, 0.1, 2, true);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.commsVoice, "WARNING! ENGINE PRESSURE BALANCING FAILED. WARNING! ENGINE PRESSURE BALANCING FAILED.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh no, what now?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "This is bad... If we don't fix this quickly, the engine could explode!!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "WHAT?? What do I do? How can we fix it??");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I'll look up the manual right now. Please stay calm.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "...");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.scared, Nexirium.ƒS.positions.bottomleft);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I don't understand it. Why is it written like that? This is not following standard spaceship manual guidelines! It does say something about cables behind the seat but the rest...?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh no, oh no. Give it to me, I'll try to understand it.");
        Nexirium.ƒS.Inventory.add(Nexirium.items.manual);
        await Nexirium.ƒS.update();
        await Nexirium.ƒS.Inventory.open();
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Okay it's one of the two cables we need to connect to this third one right here. But which one?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Maybe you should look at the manual again?");
        let lookAgain = {
            no: "No, I know the answer",
            yes: "Look at the manual again"
        };
        let lookAgainButtons = await Nexirium.ƒS.Menu.getInput(lookAgain, "choicesCSSclass");
        switch (lookAgainButtons) {
            case lookAgain.no:
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "No, I think I know the answer.");
                break;
            case lookAgain.yes:
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Let me have another look. Just to be sure...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Okay but quickly! We're running out of time!");
                await Nexirium.ƒS.Inventory.open();
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
                break;
        }
        ;
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Alright, I'm ready. I hope I'm right about this. If not, it was nice knowing you " + Nexirium.characters.companion.name + ".");
        let cableChoices = {
            left: "Connect Left Cable",
            right: "Connect Right Cable"
        };
        let cableButtons = await Nexirium.ƒS.Menu.getInput(cableChoices, "choicesCSSclass");
        switch (cableButtons) {
            case cableChoices.left:
                console.log("go to game over 2");
                Nexirium.dataForSave.wrongCable = true;
                Nexirium.ƒS.Sound.fade(Nexirium.sound.alarm, 0.1, 0, false);
                return "GameOver2";
            case cableChoices.right:
                console.log("survived");
                Nexirium.ƒS.Sound.fade(Nexirium.sound.alarm, 0.1, 0, false);
                return "Scene8";
        }
        ;
    }
    Nexirium.Scene7 = Scene7;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function Scene8() {
        console.log("FudgeStory Scene 8 starting");
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.left);
        await Nexirium.ƒS.update(0.5);
        Nexirium.ƒS.Sound.fade(Nexirium.music.solitaryExploration, 0.1, 3, true);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I think that worked!! Wooo, we're still alive!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Phew. I got really scared there for a bit...");
        let lastFriendChoices = {
            okay: "Are you okay?",
            doubt: "Doubting me?"
        };
        let friendChoiceButtons = await Nexirium.ƒS.Menu.getInput(lastFriendChoices, "choicesCSSclass");
        switch (friendChoiceButtons) {
            case lastFriendChoices.okay:
                Nexirium.dataForSave.buddyScore += 1;
                console.log("Buddy Score: " + Nexirium.dataForSave.buddyScore);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Are you okay? I saw you bumping your head while I was connecting the cables.");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.happy, Nexirium.ƒS.positions.bottomleft);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Oh you noticed that? But yeah, I'm fine, just a small dent.");
                break;
            case lastFriendChoices.doubt:
                Nexirium.dataForSave.buddyScore -= 1;
                console.log("Buddy Score: " + Nexirium.dataForSave.buddyScore);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What, were you doubting me?");
                await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
                await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.sad, Nexirium.ƒS.positions.bottomleft);
                await Nexirium.ƒS.update(0.5);
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "No no, but I mean it was a 50 50 chance to get it wrong...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "You <i>were</i> doubting me... At least show some gratitude for saving both of our lives. Or... do you even count as a life?");
                break;
        }
        ;
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.normal, Nexirium.ƒS.positions.bottomleft);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "We're getting close to the space station!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Oh, so you really came this far... I'm impressed!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Who's this? How are they speaking to us?");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Character.show(Nexirium.characters.companion, Nexirium.characters.companion.pose.annoyed, Nexirium.ƒS.positions.bottomleft);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Oh...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What? Do you know this person?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "It's... <i>Mother</i>... She's probably using the ships communication system");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Mother? You have a mother? But you're a robot...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "No, she is not my mother. She is basically the big computer that manages everything at the space station. Because she manages a lot of things at the same time, people jokingly called her Mother.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "And she really likes that name...");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Location.show(Nexirium.location.landing);
        await Nexirium.ƒS.update(1);
        Nexirium.characters.mother.name = Nexirium.dataForSave.nameMother;
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "That's right my dear. I'm glad to see you back home, little Buddy. I've missed you, you know? It can get so boring here without you.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Now back to you " + Nexirium.characters.mainCharacter.name + ", I heard you are looking for your family?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Yes I am! I want to go back to earth to see them! But how do you know about this?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Oh darling, I know a great many things about you. And I also happen to know where your family is.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "But you'll learn about it all soon enough. First, you'll have to land safely. Let's talk after that, shall we?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I think I know how to do the landing. Let me help you with that.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Buddy... What did she mean just now?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "As she said... you'll find out soon.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "...");
        return "Scene9";
    }
    Nexirium.Scene8 = Scene8;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function Scene9() {
        console.log("FudgeStory Scene 9 starting");
        await Nexirium.ƒS.Character.hide(Nexirium.characters.companion);
        await Nexirium.ƒS.Location.show(Nexirium.location.blackBackground);
        await Nexirium.ƒS.update(1);
        if (Nexirium.dataForSave.buddyScore >= 5) {
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "Before we go inside, I have to tell you something.");
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Sure, go ahead!");
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "I do not like the way Mother does things, her methods are a bit... extreme... But you should know that she only has good intentions.");
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "And she is not who she wants you to think she is.");
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oookay? What does that mean?");
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.companion, "You'll see...");
            return "GoodEnding";
        }
        else if (Nexirium.dataForSave.buddyScore <= 5) {
            return "BadEnding";
        }
    }
    Nexirium.Scene9 = Scene9;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function tutorial() {
        let dialogue = {
            iChooseTutorial: "Tutorial",
            iSkipTutorial: "Skip to Story"
        };
        Nexirium.ƒS.Speech.hide();
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Hello, Stranger. Welcome to Nexirium. Click to continue.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Do you wish to read the tutorial first or skip to the story?");
        let dialogueElement = await Nexirium.ƒS.Menu.getInput(dialogue, "choicesCSSclass");
        switch (dialogueElement) {
            case dialogue.iChooseTutorial:
                console.log("Tutorial chosen");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "This is a story based game. ");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "You have already learned that by clicking anywhere on the screen you can continue reading the story. ");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Sometimes you'll be given a choice. Depending on your decisions, the story may have a different ending, so choose wisely!");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "To ensure you'll be able to enjoy the full story, make sure to continue clicking until nothing happens anymore/ until you receive a browser notification telling you that you have reached the end. ");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Do not reload or close the window before that or your progress may be lost!");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "You can access the menu by pressing the “M” key on your keyboard. ");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Here you can save your game progress. Doing so will download a .json file. ");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "To restart the game from this save point, you'll have to load the right .json file into the game by choosing “load game” in the menu. ");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Note that there is no automatic saving. ");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Unless you have saved your progress manually within a .json file, the game will start from the very beginning after reloading or closing the browser window. ");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "You can access your inventory by pressing the I key on your keyboard. "); //which key???
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Alright, now you're all set. We will meet again, Stranger…");
                break;
            case dialogue.iSkipTutorial:
                return "firstScene"; // -> Ruft erste Szene auf (mit return und dann die Szenen id als string, id wird in der szenen hierarchie vergeben!)
        }
    }
    Nexirium.tutorial = tutorial;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function firstScene() {
        console.log("First Scene starting");
        Nexirium.ƒS.Speech.hide();
        //await ƒS.Character.show(characters.mainCharacter, characters.mainCharacter.pose.normal, ƒS.positions.bottomcenter);
        //await ƒS.Character.show(characters.companion, characters.companion.pose.happy, ƒS.positions.bottomcenter);
        Nexirium.ƒS.Sound.fade(Nexirium.music.solitaryExploration, 0.1, 3, true); // (name, volume level to fade to, duration of the fading, loop track?)
        console.log(Nexirium.music.solitaryExploration + " is playing");
        await Nexirium.ƒS.Location.show(Nexirium.location.moonStationInteriorDark); // darker version of room as bg (barely able to see something)
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Urgh... Where... am I?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Owww... my head...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Why is it so dark?? I can't see anything!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "I should try to get up...");
        await Nexirium.ƒS.Location.show(Nexirium.location.moonStationInterior);
        //await ƒS.update(0.1);
        await Nexirium.ƒS.update(Nexirium.transition.wipeLeftTopRightBottom.duration, Nexirium.transition.wipeLeftTopRightBottom.alpha, Nexirium.transition.wipeLeftTopRightBottom.edge);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Ah, it's so bright! ");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Huh?");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "What is this place?");
        let lookAround = {
            interactLookAround: "Look around the place"
        };
        let lookAroundButton = await Nexirium.ƒS.Menu.getInput(lookAround, "choicesCSSclass");
        if (lookAroundButton) {
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Oh, there's a mirror!");
            await Nexirium.ƒS.Location.show(Nexirium.location.mirror); // change BG!!!
            await Nexirium.ƒS.update(0.5);
            await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Woah I look like an astronaut! Why am I wearing this stuff? ");
            let takeOffHelmet = {
                interactTakeOffHelmet: "Try to take helmet off"
            };
            let takeOffHelmetButton = await Nexirium.ƒS.Menu.getInput(takeOffHelmet, "choicesCSSclass");
            let clickedTakeOffHelmetButton;
            if (clickedTakeOffHelmetButton) {
                delete takeOffHelmet.interactTakeOffHelmet;
            }
            if (takeOffHelmetButton) {
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.helmetVoice, "WARNING! HAZARDOUS ENVIRONMENT. DO NOT TAKE OFF YOUR HELMET!");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Damn that scared me. So don't take it off? But it's so weird, I can't seem to remember what my face looks like...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Surely taking it off for just a moment won't be that bad, right?");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "And I still feel so dizzy...");
                await Nexirium.ƒS.Speech.tell(Nexirium.characters.helmetVoice, "WARNING! HAZARDOUS ENVIRONMENT. DO NOT TAKE OFF YOUR HELMET!");
                let helmetChoices = {
                    takeOff: "Take helmet off",
                    leaveOn: "Leave helmet on"
                };
                let helmetChoiceButtons = await Nexirium.ƒS.Menu.getInput(helmetChoices, "choicesCSSclass");
                switch (helmetChoiceButtons) {
                    case helmetChoices.takeOff:
                        console.log("go to game over 1");
                        Nexirium.dataForSave.takenOffHelmet = true;
                        return "GameOver1";
                    case helmetChoices.leaveOn:
                        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mainCharacter, "Hmm... maybe I shouldn't risk it.");
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
        await Nexirium.ƒS.update(1);
    }
    Nexirium.firstScene = firstScene;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function gameOver1() {
        console.log("Reached Game Over 1");
        await Nexirium.ƒS.Location.show(Nexirium.location.blackBackground); //design Game Over Screen
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Is this already the end? You died so quickly!");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Can't say I'm surprised but I am immensely disappointed.");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "No, this can't do. I'll send you back. Don't mess up this time, you hear me?");
        return "firstScene";
        // save death for later?
    }
    Nexirium.gameOver1 = gameOver1;
})(Nexirium || (Nexirium = {}));
var Nexirium;
(function (Nexirium) {
    async function GameOver2() {
        console.log("FudgeStory Template Scene starting");
        console.log("Reached Game Over 2");
        await Nexirium.ƒS.Location.show(Nexirium.location.blackBackground);
        await Nexirium.ƒS.update(0.5);
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "You died... How disappointing...");
        await Nexirium.ƒS.Speech.tell(Nexirium.characters.mother, "Alright, let me give you one more chance. Otherwise, I'll just be bored...");
        return "firstScene";
    }
    Nexirium.GameOver2 = GameOver2;
})(Nexirium || (Nexirium = {}));
//# sourceMappingURL=Template.js.map