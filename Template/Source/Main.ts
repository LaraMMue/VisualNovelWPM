namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory main starting");

  export let transition = {
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

  export let sound = {
    // SFX
    soundName: "Pfad (relativ) zB Audio/sound.mp3"


  };

  export let music = {
    musicName: "Pfad zu mp3",
    solitaryExploration: "Sound/Music/solitaryExploration.mp3"
  };

  export let location = {
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
      background: "Images/Background/spaceship_cockpit.png"
    },

    landing: {
      name: "Successful Landing",
      background: "Images/Background/landing.png"
    },

    finalRoom: {
      name: "Mother's home",
      background: "Images/Backgrounds/finalRoom_mother.png"
    }
  };

  export let characters = {
    narrator: {
      name: "???"
    },

    system: {
      name: "SYSTEM"
    },

    mainCharacter: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/charatest2.png"

      }
    },

    helmetVoice: {
      name: "Voice in Helmet",
    },

    companion: {
      name: "Buddy",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/charatest2.png",
        angry: "Pfad des Bildes",
        happy: "",
        upset: ""
      }
    }
  };

  export function characterLeaveScreen(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }
  };

  export function characterWalkIn(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(200, 100) },
      end: { translation: ƒS.positionPercent(50, 100) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }
  };

  export let items = {
    energyCore: {
      name: "Strange Energy Core",
      description: "An electric device used to power certain robots",
      image: "Images/Items/energyCore.png",
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
  export let dataForSave = {
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

  export let gameMenu: ƒS.Menu;

  let menuIsOpen: boolean = false;
  let inventoryIsOpen: boolean = false;

  let volume: number = 4.0;

  export function increaseSound(): void {
    if (volume >= 10) return;
    volume += 1;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function decreaseVolume(): void {
    if (volume <= 0) return;
    volume -= 1;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function displayCredits(): void {
    ƒS.Text.print(
      "Author: Lara Marie Müller " +
      "<br/>" +
      "Visual Novel WiSe 2023/24"
    );
  }

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.inventory:
        await ƒS.Inventory.open();
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
  async function handleKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8: // englisches Keyboard Layout wird verwendet!!
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Close Menu");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Open Menu");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
      case ƒ.KEYBOARD_CODE.I:
        if (inventoryIsOpen) {
          console.log("Close Inventory");
          ƒS.Inventory.close();
          inventoryIsOpen = false;
        }
        else {
          console.log("Open Inventory");
          ƒS.Inventory.open();
          inventoryIsOpen = true;

        }


    }
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");  // optionale CSS Klasse benutzen um Menü zu gestalten
    gameMenu.close();

    // SCENE HIERARCHY
    let scenes: ƒS.Scenes = [
      { id: "tutorial", scene: tutorial, name: "Tutorial" }, //id zum aufrufen der Szenen
      { id: "firstScene", scene: firstScene, name: "Wake up" },
      { id: "GameOver1", scene: gameOver1, name: "Game Over 1" },
      { id: "Scene2", scene: Scene2, name: "Find Robot" },
      { id: "Scene3", scene: Scene3, name: "Meet Robot" },
      { id: "Scene4", scene: Scene4, name: "Scene4" },
      { id: "Scene5", scene: Scene5, name: "Scene5" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}