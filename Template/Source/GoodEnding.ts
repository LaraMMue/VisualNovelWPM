namespace Nexirium {
    export async function GoodEnding(): ƒS.SceneReturn {
        console.log("FudgeStory Scene Good Ending starting");

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


        await ƒS.Speech.tell(characters.mainCharacter, "No, I know you're not who you want me to believe you are. I want answers first!!");
        await ƒS.Speech.tell(characters.mother, "They are waiting just behind... Oh that's new? I didn't expect this answer??");
        await ƒS.Character.hide(characters.companion);

        await ƒS.Speech.tell(characters.mother, "You want answers? Well you don't have a family. All that was just programmed into your brain to give you a reason to keep going.");

        await ƒS.Speech.tell(characters.mainCharacter, "Wh-what??");
        await ƒS.Speech.tell(characters.mother, "You're one of the people that got sick from the Wave... You lost your free will and became easy to manipulate.");
        await ƒS.Speech.tell(characters.mother, "However, unlike the other affected humans, YOU stayed alive. Until now. Well, at least some parts of you. I had to put you back together so many times, there's barely anything left of your original body.");
        await ƒS.Speech.tell(characters.mother, "You don't believe me? Take off your helmet!");

        await ƒS.Speech.tell(characters.mainCharacter, "There's nothing but a... brain? That's me?");
        await ƒS.Speech.tell(characters.mother, "That's you.");
        await ƒS.Speech.tell(characters.mainCharacter, "Why were you playing this game with me?");
        await ƒS.Speech.tell(characters.mother, "I was trying to find out if that could be the cure to the NexirTech disease...");
        await ƒS.Speech.tell(characters.mainCharacter, "You made me the hero, so I could regain free will?");
        await ƒS.Speech.tell(characters.mother, "Exactly.");
        await ƒS.Speech.tell(characters.mainCharacter, "Then who are you? And Buddy?");
        await ƒS.Speech.tell(characters.mother, "I'm the evil villain, obviously. And Buddy is the Hero's guide.");
        await ƒS.Speech.tell(characters.mainCharacter, "I'm... speechless... I really played your game 145 times?");
        await ƒS.Speech.tell(characters.mother, "Yes. Maybe it's time for an apology... Sorry that I put you through all this.");
        await ƒS.Speech.tell(characters.mainCharacter, "So... was it worth it?");
        await ƒS.Speech.tell(characters.mother, "Hmm... this is the first time you have asked for more answers... I was not expecting that so maybe?");
        await ƒS.Speech.tell(characters.mother, "I was actually planning to let you live in an eternal daydream that you get to spend with your imaginary family, just so I wouldn't feel so bad anymore.");
        await ƒS.Speech.tell(characters.mother, "But if you have regained free will, I think I should let you decide. What do you think Buddy?");
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Yes, that was the deal. If " + characters.mainCharacter.name + " regains their mind, you'll set them free.");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.sad, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, characters.mainCharacter.name + " I'm sorry for everthing. I hope you can forgive me.");

        await ƒS.Speech.tell(characters.mainCharacter, "It's okay Buddy, I understand that you two just wanted to help me... I hope that at least our friendship was true?");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Of course! Every single time. What will you do with your new freedom now?");
        await ƒS.Speech.tell(characters.mainCharacter, "Hm... I still want to go to earth and see what happened there. Do you want to come with me?");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.happy, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Absolutely!");
        await ƒS.Speech.tell(characters.mother, "Look at you two! It's almost as if I could feel like a real mother. Good luck to you two!");





        return "Ending";
    }
}