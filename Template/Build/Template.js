"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
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
        backGroundName: {
            name: "Background Name",
            background: ""
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        character1Name: {
            name: "Name1",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Pfad des Bildes",
                happy: "Pfad",
                upset: ""
            }
        }
    };
    //  GAME PROGRESS DATA SAVE
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        // SCENE HIERARCHY
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
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
//# sourceMappingURL=Template.js.map