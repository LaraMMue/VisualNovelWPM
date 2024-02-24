namespace Nexirium {
    export async function Ending(): ƒS.SceneReturn {
        console.log("FudgeStory Ending starting");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Location.show(location.landing);
        await ƒS.update(1);
        alert("You have reached the end of Nexirium. You can reload to replay or to load one of your save files or close the window now.")
    }
}