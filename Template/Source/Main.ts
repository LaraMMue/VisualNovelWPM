namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory main starting");

  export let transition = {
    transitionName: {
      duration: 1,
      alpha: "",
      edge: 1
    }
  };

  export let sound = {
    // SFX
    soundName: "Pfad (relativ) zB Audio/sound.mp3"

    // themes hallo

  };

  export let location = {
    moonStationInterior: {
      name: "Moon Station Interior",
      background: "Images/Backgrounds/moonStationRoom1.png"
    },
    earthFromMoon: {
      name: "Earth from the Moon",
      background: "Images/Backgrounds/earthFromMoon.png"
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    mainCharacter: {
      name: ""
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

  //  GAME PROGRESS DATA SAVE
  export let dataForSave = {
    nameMC: ""
  };

  
  //Menu shortcuts
  let inGameMenuButtons = {
    save: "Save", // erstellt eine json save datei, die heruntergeladen werden kann
    load: "Load", // man kann eine json datei öffnen (die vorher gespeichert wurde), wenn man die öffnet lädt die Szene, bei der man gespeichert hat
    close: "Close" // close the menu
    //credits
  };

  let gameMenu: ƒS.Menu;

  let menuIsOpen: boolean = false;

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
      // credits
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
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");  // optionale CSS Klasse benutzen um Menü zu gestalten
    gameMenu.close();
    
    // SCENE HIERARCHY
    let scenes: ƒS.Scenes = [
      { scene: firstScene, name: "First Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}