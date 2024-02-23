namespace Nexirium {
    export async function Scene8(): ƒS.SceneReturn {
        console.log("FudgeStory Scene 8 starting");


        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.left);
        await ƒS.update(0.5);
        ƒS.Sound.fade(music.solitaryExploration, 0.1, 3, true);
        await ƒS.Speech.tell(characters.mainCharacter, "I think that worked!! Wooo, we're still alive!");
        await ƒS.Speech.tell(characters.companion, "Phew. I got really scared there for a bit...");

        let lastFriendChoices = {
            okay: "Are you okay?",
            doubt: "Doubting me?"
        };

        let friendChoiceButtons = await ƒS.Menu.getInput(lastFriendChoices, "choicesCSSclass");


        switch (friendChoiceButtons) {
            case lastFriendChoices.okay:
                dataForSave.buddyScore += 1;
                console.log("Buddy Score: " + dataForSave.buddyScore);
                await ƒS.Speech.tell(characters.mainCharacter, "Are you okay? I saw you bumping your head while I was connecting the cables.");
                await ƒS.Character.hide(characters.companion);
                await ƒS.Character.show(characters.companion, characters.companion.pose.happy, ƒS.positions.bottomleft);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.companion, "Oh you noticed that? But yeah, I'm fine, just a small dent.");
                break;
            case lastFriendChoices.doubt:
                dataForSave.buddyScore -= 1;
                console.log("Buddy Score: " + dataForSave.buddyScore);
                await ƒS.Speech.tell(characters.mainCharacter, "What, were you doubting me?");
                await ƒS.Character.hide(characters.companion);
                await ƒS.Character.show(characters.companion, characters.companion.pose.sad, ƒS.positions.bottomleft);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.companion, "No no, but I mean it was a 50 50 chance to get it wrong...");
                await ƒS.Speech.tell(characters.mainCharacter, "You <i>were</i> doubting me... At least show some gratitude for saving both of our lives. Or... do you even count as a life?");
                break;
        };


        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomleft);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.mainCharacter, "We're getting close to the space station!");

        await ƒS.Speech.tell(characters.mother, "Oh, so you really came this far... I'm impressed!");
        await ƒS.Speech.tell(characters.mainCharacter, "Who's this? How are they speaking to us?");

        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.annoyed, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Oh...");
        await ƒS.Speech.tell(characters.mainCharacter, "What? Do you know this person?");
        await ƒS.Speech.tell(characters.companion, "It's... <i>Mother</i>... She's probably using the ships communication system");

        await ƒS.Speech.tell(characters.mainCharacter, "Mother? You have a mother? But you're a robot...");
        await ƒS.Speech.tell(characters.companion, "No, she is not my mother. She is basically the big computer that manages everything at the space station. Because she manages a lot of things at the same time, people jokingly called her Mother.");
        await ƒS.Speech.tell(characters.companion, "And she really likes that name...");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Location.show(location.landing);
        await ƒS.update(1);
        characters.mother.name = dataForSave.nameMother;
        await ƒS.Speech.tell(characters.mother, "That's right my dear. I'm glad to see you back home, little Buddy. I've missed you, you know? It can get so boring here without you.");
        await ƒS.Speech.tell(characters.mother, "Now back to you " + characters.mainCharacter.name + ", I heard you are looking for your family?");
        await ƒS.Speech.tell(characters.mainCharacter, "Yes I am! I want to go back to earth to see them! But how do you know about this?");
        await ƒS.Speech.tell(characters.mother, "Oh darling, I know a great many things about you. And I also happen to know where your family is.");
        await ƒS.Speech.tell(characters.mother, "But you'll learn about it all soon enough. First, you'll have to land safely. Let's talk after that, shall we?");


        await ƒS.Speech.tell(characters.companion, "I think I know how to do the landing. Let me help you with that.");
        await ƒS.Speech.tell(characters.mainCharacter, "Buddy... What did she mean just now?");
        await ƒS.Speech.tell(characters.companion, "As she said... you'll find out soon.");
        await ƒS.Speech.tell(characters.mainCharacter, "...");

        return "Scene9";



    }
}