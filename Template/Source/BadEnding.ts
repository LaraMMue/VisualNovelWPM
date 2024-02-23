namespace Nexirium {
    export async function BadEnding(): ƒS.SceneReturn {
        console.log("FudgeStory Bad Ending starting");

        await ƒS.Character.hide(characters.companion);
        await ƒS.Location.show(location.finalRoom);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.mother, "Welcome! I'm glad to finally see you again!");
        await ƒS.Speech.tell(characters.mainCharacter, "Again? I'm not sure we've ever met?");
        await ƒS.Speech.tell(characters.mother, "Oh, we have! Countless times...");
        await ƒS.Speech.tell(characters.mother, "You see, your family is here with me! And you have come here countless times to save them. Oh what a great hero you are!");
        await ƒS.Speech.tell(characters.mainCharacter, "My family is here? Where?");
        await ƒS.Speech.tell(characters.mother, "Oh I will let you see them this time. You know, this is the last time you helped me play this roleplay. It's starting to get boring now...");
        await ƒS.Speech.tell(characters.mainCharacter, "Roleplay? What roleplay? What the hell are you talking about? Let me see my family!");
        await ƒS.Speech.tell(characters.mother, "Do you truly know who you are? You don't right? That's because you're just a character in my game. And you do exactly what I want you to do, more or less at least.");
        await ƒS.Speech.tell(characters.mainCharacter, "What??");
        await ƒS.Speech.tell(characters.mother, "Oh I understand your confusion my dear. You are confused every single time I tell you this. You've been here before... How many times is it now Buddy?");
        await ƒS.Character.show(characters.companion, characters.companion.pose.sad, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "145...");
        await ƒS.Speech.tell(characters.mother, "145 times! What a pretty number! Personally I think this is a nice number to end this game on.");
        await ƒS.Speech.tell(characters.mainCharacter, "Buddy, you're in on this too?? What is going on??");

        await ƒS.Speech.tell(characters.mother, "You have been lying to me all this time?");
        await ƒS.Speech.tell(characters.mainCharacter, "You have been lying to me all this time? - What the hell, how did you know I was going to say this??");
        await ƒS.Speech.tell(characters.mother, "Let's not waste time... I don't want to play this game anymore. I've heard you say the same words over a hundred times already... ");
        await ƒS.Speech.tell(characters.mother, "Do you want to see your family now? I'm getting bored...");

        await ƒS.Speech.tell(characters.mainCharacter, "YES THAT'S WHY I'M HERE. Gosh what's with you robots...");
        await ƒS.Speech.tell(characters.mother, "They are waiting just behind this door. All you need to do is go through.");
        await ƒS.Speech.tell(characters.mainCharacter, "Buddy, is this a trap?");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.annoyed, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Go see your family... that's what you wanted right?...");
        await ƒS.Character.hide(characters.companion);

        await ƒS.Speech.tell(characters.mainCharacter, "Alright then...");

        await ƒS.Location.show(location.whiteBG);
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.child, dataForSave.momDad + "!!! You're back!!");

        await ƒS.Speech.tell(characters.mother, "It's a really disappointing result, isn't it?");
        await ƒS.Speech.tell(characters.companion, "Yeah... I was sure this time " + characters.mainCharacter.name + " would regain free will. But in the end, our experiment failed...");



        return "Ending";
    }
}