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
        backGroundName: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        character1Name: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
