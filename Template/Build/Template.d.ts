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
    let music: {
        musicName: string;
    };
    let location: {
        moonStationInterior: {
            name: string;
            background: string;
        };
        moonStationInteriorDark: {
            name: string;
            background: string;
        };
        mirror: {
            name: string;
            background: string;
        };
        cornerRobot: {
            name: string;
            background: string;
        };
        corner: {
            name: string;
            background: string;
        };
        storageCore: {
            name: string;
            background: string;
        };
        storage: {
            name: string;
            background: string;
        };
        moonHallway: {
            name: string;
            background: string;
        };
        blackBackground: {
            name: string;
            background: string;
        };
        earthFromMoon: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        system: {
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
    let items: {
        energyCore: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    let dataForSave: {
        nameMC: string;
        takenOffHelmet: boolean;
        buddyScore: number;
        sirMadam: string;
        momDad: string;
    };
    let gameMenu: ƒS.Menu;
    function increaseSound(): void;
    function decreaseVolume(): void;
    function displayCredits(): void;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene3(): ƒS.SceneReturn;
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
