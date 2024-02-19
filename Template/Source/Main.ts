namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory main starting");

  export let transition = {
    transitionName: {
      duration: 1, //duration in s
      alpha: "", // path to the transition image b/w
      edge: 1 // how hard/soft transition is
    }
  };

  export let sound = {
    // SFX
    soundName: "Pfad (relativ) zB Audio/sound.mp3"

  };

  export let music = {
    musicName: "Pfad zu mp3"
  };

  export let location = {
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

  export let characters = {
    narrator: {
      name: "???"
    },

    inGameNarrator: {
      name: "Narrator"
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

  export let items = {
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
  export let dataForSave = {
    nameMC: "",
    takenOffHelmet: false,
    buddyScore: 0,
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
      { id: "Scene3", scene: Scene3, name: "Meet Robot" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}