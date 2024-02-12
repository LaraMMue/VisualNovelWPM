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
    };
    let characters: {
        narrator: {
            name: string;
        };
        mainCharacter: {
            name: string;
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
    function firstScene(): ƒS.SceneReturn;
}
