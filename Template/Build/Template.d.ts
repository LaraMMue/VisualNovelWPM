declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        transitionName: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        soundName: string;
    };
    let location: {
        moonStationInterior: {
            name: string;
            background: string;
        };
        earthFromMoon: {
            name: string;
            background: string;
        };
        blackBackground: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        inGameNarrator: {
            name: string;
        };
        mainCharacter: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        helmetVoice: {
            name: string;
        };
        companion: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                sad: string;
                scared: string;
                angry: string;
                annoyed: string;
                sleep: string;
            };
        };
        bob: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let dataForSave: {
        nameMC: string;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene2(): ƒS.SceneReturn;
}
declare namespace Template {
    function tutorial(): ƒS.SceneReturn;
}
declare namespace Template {
    function firstScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function gameOver1(): ƒS.SceneReturn;
}
