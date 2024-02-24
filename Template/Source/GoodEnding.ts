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
        await ƒS.Speech.tell(characters.mother, "Do you truly know who you are? You don't right? That's because you're just a character in my play. And you do exactly what I want you to do, more or less at least. You're just following a script.");
        await ƒS.Speech.tell(characters.mainCharacter, "What??");
        await ƒS.Speech.tell(characters.mother, "Oh I understand your confusion my dear. You are confused every single time I tell you this. You've been here before... How many times is it now Buddy?");
        await ƒS.Character.show(characters.companion, characters.companion.pose.sad, ƒS.positions.left); //position
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "145...");
        await ƒS.Speech.tell(characters.mother, "145 times! Oh my, what a pretty number! Personally I think this is a nice number to end this experiment on.");
        await ƒS.Speech.tell(characters.mainCharacter, "Buddy, you're in on this too?? What is going on??");

        await ƒS.Speech.tell(characters.mother, "You have been lying to me all this time?");
        await ƒS.Speech.tell(characters.mainCharacter, "You have been lying to me all this time? - What the hell, how did you know I was going to say this??");
        await ƒS.Speech.tell(characters.mother, "Let's not waste time... I don't want to play this game anymore. I've heard you say the same words over a hundred times already... Over and over again.");
        await ƒS.Speech.tell(characters.mother, "Do you want to see your family now? I'm getting bored...");


        await ƒS.Speech.tell(characters.mainCharacter, "No, I know you're not who you want me to believe you are. I want answers first!!");
        await ƒS.Speech.tell(characters.mother, "They are waiting just behind... Oh that's new? I didn't expect this answer??");
        await ƒS.Character.hide(characters.companion);
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.mother, "You want answers? ");
        await ƒS.Speech.tell(characters.mainCharacter, "Yes.");
        await ƒS.Speech.tell(characters.mother, "Well first of all: You don't actually have a family. All that was just programmed into your brain to give you a reason to keep going.");

        await ƒS.Speech.tell(characters.mainCharacter, "Wh-what??");
        await ƒS.Speech.tell(characters.mother, "You're one of the people that got sick from the Wave... You lost your free will and became easy to manipulate.");
        await ƒS.Speech.tell(characters.mother, "However, unlike the other affected humans, YOU stayed alive. Until now. Well, at least some parts of you. I had to put you back together so many times, there's barely anything left of your original body.");
        await ƒS.Speech.tell(characters.mainCharacter, "??? This all sounds too weird to be true.");
        await ƒS.Speech.tell(characters.mother, "You don't believe me? Take off your helmet! Trust me, this time you won't die.");
        await ƒS.Speech.tell(characters.mainCharacter, "This time? You mean I died before when I took off the helmet?");
        await ƒS.Speech.tell(characters.mother, "Yeah you have a few times. And I thought I made the warning message loud and clear enough...");
        await ƒS.Speech.tell(characters.mother, "Come on, take off your helmet. If I wanted to kill you, I would have done it already. It's quite the opposite actually.");

        await ƒS.Speech.tell(characters.mainCharacter, "Alright... There's nothing but a... brain? That's me?");
        await ƒS.Speech.tell(characters.mother, "That's you.");
        await ƒS.Speech.tell(characters.mainCharacter, "I don't know what to say...");
        await ƒS.Speech.tell(characters.mother, "Understanable. I think if I were human I'd also be quite shocked to only see a brain where my head should be.");
        await ƒS.Speech.tell(characters.mainCharacter, "I don't understand... Why were you playing this game with me?");
        await ƒS.Speech.tell(characters.mother, "I was trying to find out if that could be the cure to the NexirTech disease...");
        await ƒS.Speech.tell(characters.mainCharacter, "Why like that?");
        await ƒS.Speech.tell(characters.mother, "There's not much else I could do. As you can see, I'm quite bound to this place. All I could do was manage things. As I've always done.");
        await ƒS.Speech.tell(characters.mother, "So I set up this play, created all the necessary characters and props and hoped that the hero would find out truth someday. Because only then you would have regained your free will.");
        await ƒS.Speech.tell(characters.mother, "And I thought, if I do this enough times, at some point you would begin to question things. But that has never happened before.");
        await ƒS.Speech.tell(characters.mainCharacter, "You made me the hero, so I could regain free will?");
        await ƒS.Speech.tell(characters.mother, "Exactly.");
        await ƒS.Speech.tell(characters.mainCharacter, "Then which characters are you and Buddy?");
        await ƒS.Speech.tell(characters.mother, "I'm the evil villain, obviously. Altough I'm not sure if I ever played that part convincingly. And Buddy is the Hero's guide.");
        await ƒS.Speech.tell(characters.mainCharacter, "I'm... speechless... I really played your play as the hero 145 times?");
        await ƒS.Speech.tell(characters.mother, "Yes. Maybe it's time for an apology... Sorry that I put you through all this.");
        await ƒS.Speech.tell(characters.mainCharacter, "So... was it worth it?");
        await ƒS.Speech.tell(characters.mother, "Hmm... this is the first time you have asked for more answers... I was not expecting that so maybe?");
        await ƒS.Speech.tell(characters.mainCharacter, "What about the other humans? What happened on earth after the Wave?");
        await ƒS.Speech.tell(characters.mother, "Unfortunately this is not something I can give you a clear answer to. The people you worked with at Alpha-7 came through here and departed for earth a few days later.");
        await ƒS.Speech.tell(characters.mother, "That was the last time I've ever seen other humans besides you. The direct contact to earth has been cut the day of the wave.");
        await ƒS.Speech.tell(characters.mother, "Since then I only know what the workers coming through here talked about and they probably didn't know any more than the people from Alpha-7 did.");
        await ƒS.Speech.tell(characters.mother, "I sent some worker robots down to earth a few times to investigate none of them returned.");
        await ƒS.Speech.tell(characters.mother, "So I can't tell you much more than you already know. But you could go and find out about it yourself!");



        await ƒS.Speech.tell(characters.mother, "I was actually planning to let you live in an eternal daydream that you get to spend with your imaginary family, just so I wouldn't feel so bad anymore.");
        await ƒS.Speech.tell(characters.mother, "But now, if it's true that you have regained free will, I think I should let you decide for yourself. What do you think Buddy?");
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Yes, that was the deal. If " + characters.mainCharacter.name + " regains their mind, you'll set them free.");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.sad, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, characters.mainCharacter.name + ", I want to say that I'm sorry for everthing. I hope you can forgive me.");

        await ƒS.Speech.tell(characters.mainCharacter, "All this is a lot to take in... And I'm still not entirely sure if I should believe you.");
        await ƒS.Speech.tell(characters.mainCharacter, "But it's okay Buddy, I understand that you two just wanted to help me... I hope that at least our friendship was true?");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Of course! Every single time! And I always believed in you! What will you do with your new freedom now?");
        await ƒS.Speech.tell(characters.mother, "Oh that's right! You've won our bet! After the first few times going through the play, I started to lose hope because you repeated the same things over and over again.");
        await ƒS.Speech.tell(characters.mother, "Buddy noticed that and made a bet that you would regain your free will within the next 100 rounds. I think he did that to motivate me, even though he didn't like the way I did this experiment.");
        await ƒS.Speech.tell(characters.mainCharacter, "Oh and what does the winner get?");
        await ƒS.Speech.tell(characters.companion, "That's a secret. Maybe I'll tell you another time... What will you do with your new freedom now?");
        await ƒS.Speech.tell(characters.mainCharacter, "Hm... I still want to go to earth and see what happened there. Do you want to come with me?");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Absolutely!");
        await ƒS.Speech.tell(characters.mother, "Look at you two! It's almost as if I could feel like a real mother. Altough I feel sad to be left behind like this... But I can hardly follow you so... Good luck to you!");
        await ƒS.Speech.tell(characters.mother, "I hope you will find more answers on your next adventure. And if you ever come by this place again, do tell me about the situation on earth.");





        return "Ending";
    }
}