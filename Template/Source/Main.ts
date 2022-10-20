namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

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

    // themes

  };

  export let location = {
    backGroundName: {
      name: "Background Name",
      background: ""
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: ""
    },
    character1Name: {
      name: "Name1",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Pfad des Bildes",
        happy: "Pfad",
        upset: ""
      }
    }
  };

  //  GAME PROGRESS DATA SAVE
  export let dataForSave = {
    nameProtagonist: ""
    };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    // SCENE HIERARCHY
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}