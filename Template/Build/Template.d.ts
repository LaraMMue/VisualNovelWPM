declare namespace Nexirium {
    function BadEnding(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function Ending(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function GoodEnding(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        transitionName: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wipeLeftTopRightBottom: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        soundName: string;
        alarm: string;
    };
    let music: {
        musicName: string;
        solitaryExploration: string;
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
        infirmary: {
            name: string;
            background: string;
        };
        commsOff: {
            name: string;
            background: string;
        };
        comms: {
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
        shipHangar: {
            name: string;
            background: string;
        };
        cockpit: {
            name: string;
            background: string;
        };
        landing: {
            name: string;
            background: string;
        };
        finalRoom: {
            name: string;
            background: string;
        };
        whiteBG: {
            name: string;
            background: string;
        };
    };
    let characters: {
        mother: {
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
        commsVoice: {
            name: string;
        };
        child: {
            name: string;
        };
        grandpa: {
            name: string;
        };
    };
    function characterLeaveScreen(): ƒS.AnimationDefinition;
    function characterWalkIn(): ƒS.AnimationDefinition;
    let items: {
        energyCore: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        novelInfirmaryNotes: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        notice: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        attackNotice: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        petition: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        shutdown: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        governmentNotice: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        diary1: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        diary2: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        diary3: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        manual: {
            name: string;
            description: string;
            image: string;
        };
    };
    let dataForSave: {
        nameMC: string;
        takenOffHelmet: boolean;
        buddyScore: number;
        sirMadam: string;
        momDad: string;
        sonDaughter: string;
        wrongCable: boolean;
        nameMother: string;
    };
    let gameMenu: ƒS.Menu;
    function increaseSound(): void;
    function decreaseVolume(): void;
    function displayCredits(): void;
}
declare namespace Nexirium {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function Scene2(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function Scene3(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function Scene4(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function Scene5(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function Scene6(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function Scene7(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function Scene8(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function Scene9(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function tutorial(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function firstScene(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function gameOver1(): ƒS.SceneReturn;
}
declare namespace Nexirium {
    function GameOver2(): ƒS.SceneReturn;
}
