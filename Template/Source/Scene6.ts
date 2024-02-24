namespace Nexirium {
    export async function Scene6(): ƒS.SceneReturn {
        console.log("FudgeStory Nexirium Scene 6 starting");

        await ƒS.Speech.tell(characters.child, "Grandpa, Grandpa, it's working!! I can talk to " + dataForSave.momDad + " now!");

        await ƒS.Speech.tell(characters.mainCharacter, "! ! !");
        await ƒS.Speech.tell(characters.mainCharacter, "I know that voice! It sounds so... familiar...");

        await ƒS.Speech.tell(characters.grandpa, "Good good! Then I'll come talk to your " + dataForSave.momDad + " too! Ugh these old bones...");

        await ƒS.Speech.tell(characters.mainCharacter, "Wait, this one too! Why do I feel sad all of a sudden??");

        await ƒS.Speech.tell(characters.child, "Hi " + dataForSave.momDad + "! Are you still on the moon? When are you coming back? You know you promised you would go on a hike with me, remember?");
        await ƒS.Speech.tell(characters.child, "I wanted to start going to school next month but the school is closed now. And I'm soooo boooored. Grandpa says I can't go outside right now.");
        await ƒS.Speech.tell(characters.child, "Can you come back soon and play with me? I miss you " + dataForSave.momDad + "...");
        await ƒS.Speech.tell(characters.child, "Grandma went to heaven too and she didn't come back! You have to come back okay?");
        await ƒS.Speech.tell(characters.grandpa, "Shh my dear, your " + dataForSave.momDad + " doesn't know that yet. Why don't you go play with the new dolls I gave you while I talk to your " + dataForSave.momDad + "? They used to be your great-greatmothers.");
        await ƒS.Speech.tell(characters.child, "Okay Grandpa, can you play with me after that?");
        await ƒS.Speech.tell(characters.grandpa, "Of course dear, now say goodbye to your " + dataForSave.momDad + "!");
        await ƒS.Speech.tell(characters.child, "Bye " + dataForSave.momDad + ", I love you! Come back soon!");
        await ƒS.Speech.tell(characters.grandpa, "Sigh... well... you probably heard her say it already but yeah... it's true... your Mother...died...");
        await ƒS.Speech.tell(characters.grandpa, "It's all thanks to this stupid technology. If it wasn't for her dementia, I would have never let these money hungry people implant those things into her brain");
        await ƒS.Speech.tell(characters.grandpa, "The kids are taking it rather well... But I don't think they understand death that well yet... And with all the chaos here after the Wave... They probably have enough to think about...");
        await ƒS.Speech.tell(characters.grandpa, "The house feels a lot more empty now... I really miss her... And I miss you too, my " + dataForSave.sonDaughter + ", I really do.");
        await ƒS.Speech.tell(characters.grandpa, "I know we haven't been on best terms when you left, but maybe we can leave all of that behind now?");
        await ƒS.Speech.tell(characters.grandpa, "The last thing they told me before cutting off communication was that you were sick. I hope you feel better now! Up there on the moon you should have been safe from the Nexirium Poisoning right?");
        await ƒS.Speech.tell(characters.grandpa, "I just wanted you to know, I am proud of you and I hope you'll come home soon. We really need you here now...");


        await ƒS.Location.show(location.comms);
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.mainCharacter, "...");
        await ƒS.Speech.tell(characters.companion, "Are you alright?");
        await ƒS.Speech.tell(characters.mainCharacter, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "I remember some things now... I have a familiy, two kids... I had a fight with my father about going to the moon to work as an engineer. But I had to leave to provide for my family...");
        await ƒS.Speech.tell(characters.mainCharacter, "And I just learned that my mother died... I...");
        await ƒS.Speech.tell(characters.companion, "Take your time. That's a lot to take in all at once.");
        await ƒS.Speech.tell(characters.mainCharacter, "... Thank you...");
        await ƒS.Speech.tell(characters.mainCharacter, "I need to go back to earth. I have to see my family.");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.annoyed, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Of course. Let's go outside to find a ship.");

        await ƒS.Character.hide(characters.companion);
        await ƒS.Location.show(location.earthFromMoon);
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.mainCharacter, "Wow. It's beautiful! That's where I should be right now.");
        await ƒS.Speech.tell(characters.companion, "I'm sure we'll get there, don't worry. You'll see your family soon.");
        await ƒS.Speech.tell(characters.companion, "Since there are no vehicles around anymore, we'll have to walk a bit. But that way you can take in the view a little longer!");
        await ƒS.Speech.tell(characters.companion, "Is there anything else you remember?");

        let rememberChoices = {
            sad: "No, not really...",
            annoyed: "Could you be quiet?"
        };

        let rememberChoiceButtons = await ƒS.Menu.getInput(rememberChoices, "choicesCSSclass");


        switch (rememberChoiceButtons) {
            case rememberChoices.sad:
                dataForSave.buddyScore += 1;
                await ƒS.Speech.tell(characters.mainCharacter, "No I think that's all for now... And I don't think I can take more information right now, after what I learned just now.");
                await ƒS.Speech.tell(characters.mainCharacter, "But I'm glad you're here now!");
                await ƒS.Character.hide(characters.companion);
                await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.companion, "Sure! If you wish to talk about it, I'll listen. Or if you want me to distract you, I can tell you more about Alpha-7!");
                await ƒS.Speech.tell(characters.mainCharacter, "Thanks, but I just need some silence now...");
                await ƒS.Speech.tell(characters.companion, "I understand that... But if you need me, I'm right beside you!");

                console.log(dataForSave.buddyScore);
                break;
            case rememberChoices.annoyed:
                dataForSave.buddyScore -= 1;
                await ƒS.Speech.tell(characters.mainCharacter, "Can you just shut up for a moment? I just learned that my mother died and you keep talking and talking...");
                await ƒS.Character.hide(characters.companion);
                await ƒS.Character.show(characters.companion, characters.companion.pose.sad, ƒS.positions.bottomcenter);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.companion, "Sorry... I thought...");
                await ƒS.Speech.tell(characters.mainCharacter, "Well you thought wrong. Now please be quiet.");
                console.log(dataForSave.buddyScore);
                break;
        };

        await ƒS.Character.hide(characters.companion);
        await ƒS.Location.show(location.shipHangar);
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Speech.tell(characters.companion, "Um... we're here.");
        await ƒS.Speech.tell(characters.mainCharacter, "Oh yeah, I didn't even notice... So there's two ships left... Which one should we take?");
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Aren't you an engineer?");
        await ƒS.Speech.tell(characters.mainCharacter, "That doesn't mean I know much about spaceships. And I still can't remember the details. Hm let's just take this one. Do you know how to start up these things?");
        //await ƒS.Speech.tell(characters.companion, "I don't know much about spaceships either. Maybe it's best if you choose.");
        await ƒS.Speech.tell(characters.companion, "I've been a on a spaceship like this one a bunch of times before, I think you need to pull on this leaver.");
        await ƒS.Speech.tell(characters.mainCharacter, "Oh yeah that worked. Let's go then. I hope I can fly this thing...");

        return "Scene7";





        await ƒS.Speech.tell(characters.grandpa, "");
        await ƒS.Speech.tell(characters.child, "");
        await ƒS.Speech.tell(characters.companion, "");
        await ƒS.Speech.tell(characters.mainCharacter, "");



    }
}