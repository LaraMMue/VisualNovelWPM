namespace Nexirium {
    export async function Scene5(): ƒS.SceneReturn {
        console.log("FudgeStory Scene 5 is starting");

        await ƒS.Location.show(location.blackBackground);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.companion, "Ah, we're here!");

        await ƒS.Location.show(location.commsOff);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.companion, "Welcome to the com-communications center of Alpha-7! This place serves as our lifeline to Earth and the o-other lunar facilities.");
        await ƒS.Speech.tell(characters.companion, "Coordinating supply sh-shipments, exchanging s-scientific findings and providing all k-kinds of organization services for t-those stationed on Alpha-7 - it all happens h-here.");
        await ƒS.Speech.tell(characters.companion, "Our dedicated team o-of human and artificial intelligence specialists works t-tirelessly around the clock to ensure smooth o-operations and safety within the research station and they will always be there to...");
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "No one around...");
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Speech.tell(characters.companion, "There must be s-someone here! There is always at least one technical support worker in the center to m-make sure the computers and everything else works...");
        await ƒS.Speech.tell(characters.mainCharacter, "But I don't see anyone. Nor have I seen anyone the entire way here, or on the way to the infirmary.");
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "How many people are usually stationed at Alpha-7?");
        await ƒS.Speech.tell(characters.companion, "According to my last r-record...329");
        await ƒS.Speech.tell(characters.mainCharacter, "329! Shouldn't we have run into a few of them by now?");


        let peopleWhereChoices = {
            how: "How can this be?",
            hiding: "Are you hiding something?"
        };

        let peopleWhereButtons = await ƒS.Menu.getInput(peopleWhereChoices, "choicesCSSclass");


        switch (peopleWhereButtons) {
            case peopleWhereChoices.how:
                await ƒS.Speech.tell(characters.mainCharacter, "How can 329 people just disappear? And how come you don't know anything about this?");
                await ƒS.Speech.tell(characters.companion, "W-well... I don't know how long I s-slept in the s-storage room until y-you found me... " + dataForSave.sirMadam + ". Could have b-been a while...");
                await ƒS.Speech.tell(characters.mainCharacter, "Hm that's true...");
                await ƒS.Speech.tell(characters.companion, "A-anyhow, since we're in the same b-boat, we should work t-together, right " + dataForSave.sirMadam + " " + characters.mainCharacter.name + "?");
                await ƒS.Speech.tell(characters.mainCharacter, "Of course! And " + characters.companion.name + ", you don't have to call me " + dataForSave.sirMadam + " anymore. My name is enough :)");
                await ƒS.Character.hide(characters.companion);
                await ƒS.Character.show(characters.companion, characters.companion.pose.happy, ƒS.positions.bottomcenter);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.companion, "Oh! I will update the way I adress you then, " + characters.mainCharacter.name + "! D-does this mean we are f-friends?");
                await ƒS.Speech.tell(characters.mainCharacter, "Sure! We only have each other right now, so why not?");
                await ƒS.Speech.tell(characters.companion, "<i> BZZ BZZ </i> , that makes me very h-happy!");
                dataForSave.buddyScore += 1;
                console.log("Buddy Score: " + dataForSave.buddyScore);
                break;
            case peopleWhereChoices.hiding:
                dataForSave.buddyScore -= 1;
                console.log("Buddy Score: " + dataForSave.buddyScore);
                await ƒS.Speech.tell(characters.mainCharacter, "How can 329 people just disappear? Are you hiding something from me?");
                await ƒS.Character.hide(characters.companion);
                await ƒS.Character.show(characters.companion, characters.companion.pose.angry, ƒS.positions.bottomcenter);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.companion, "N-no " + dataForSave.sirMadam + ", why would I h-hide anything from you? I am just as c-confused as you are!");
                await ƒS.Character.hide(characters.companion);
                await ƒS.Character.show(characters.companion, characters.companion.pose.annoyed, ƒS.positions.bottomcenter);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.companion, "Look, I'm sure we w-will find out the truth soon. I u-understand your confusion and f-frustration. But w-we are in the same boat, " + dataForSave.sirMadam + ", so we sh-should work together!");
                await ƒS.Speech.tell(characters.mainCharacter, "Fine. But stop calling me " + dataForSave.sirMadam + "! Just my name is enough");
                await ƒS.Speech.tell(characters.companion, "I was just being polite... But if you wish I will stop.");
                await ƒS.Speech.tell(characters.mainCharacter, "Of course you will. You're a service robot, you're supposed to do what I tell you. But don't think that me allowing you to speak more casually makes us friends! I just want you to say less words.");
                await ƒS.Character.hide(characters.companion);
                await ƒS.Character.show(characters.companion, characters.companion.pose.sad, ƒS.positions.bottomcenter);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.companion, "I... I understand...");
                break;


        };

        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Now let's see w-what we can find here... Hm it s-seems the co-communication network has been shut off. This explains why I couldn't contact a-anyone.");
        await ƒS.Speech.tell(characters.mainCharacter, "Or maybe there is no one <i>to</i> contact...");
        await ƒS.Speech.tell(characters.companion, "P-perhaps something happened that l-led the people here to evacuate to one of the o-other research stations. We should restart the comms and s-see if we can contact A-Alpha-3. That's the closest o-one from here.");
        await ƒS.Speech.tell(characters.companion, "To r-restart the system, we need to press two buttons at the s-same time. " + characters.mainCharacter.name + ", could I trouble you to press this button h-here while I press the one o-over there?");
        await ƒS.Speech.tell(characters.mainCharacter, "Sure, let's do it!");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.animate(characters.companion, characters.companion.pose.normal, characterLeaveScreen());
        await ƒS.Speech.tell(characters.companion, "Okay on three! O-one, two, three!");



        let pressCommsButton = {
            interactCommsButton: "Press the button"
        };

        let CommsButton = await ƒS.Menu.getInput(pressCommsButton, "choicesCSSclass");


        if (CommsButton) {
            await ƒS.Location.show(location.comms);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.commsVoice, "RESTART SUCCESSFUL");


        };

        await ƒS.Speech.tell(characters.mainCharacter, "It worked! Woah that's a lot of screens!");
        await ƒS.Character.animate(characters.companion, characters.companion.pose.normal, characterWalkIn());
        await ƒS.Speech.tell(characters.companion, "Great! Now w-we should be able to u-use the system.");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.sleep, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "<i>Bzzz Bzzz</i>");
        await ƒS.Speech.tell(characters.companion, "<i>Update in progress...</i>");
        await ƒS.Speech.tell(characters.mainCharacter, "What's going on with you now?");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "Sorry if that scared you. I auto-connected to the system and was able to fix the error in my language module! There should be no more issues with it now!");
        await ƒS.Speech.tell(characters.mainCharacter, "That's great!");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.commsVoice, "INCOMING MESSAGES: 42389. MESSAGE ONE: ALPHA-4 RESEARCHERS REQUESTING ALPHA-7 ACCESS. MESSAGE TWO: TWO APPLE TREES ALREADY DIED. WE NEED MORE FERTILIZER IF YOU WANT TO CONTINUE EATING APPLES!");
        await ƒS.Speech.tell(characters.commsVoice, "MESSAGE THREE: COMMUNICATOR NOT CONNECTING TO NEXIRNET, PLEASE HELP! MESSAGE FOUR: MALFUNCTIONING WORKER BOT IN SECTOR TWO. ENGINEER NEEDED. MESSAGE FIVE: WHY ARE THERE NO MORE APPLES IN THE CAFETERIA? I WANT APPLES!");
        await ƒS.Speech.tell(characters.commsVoice, "MESSAGE SIX: HOW DO I BOOK AN APPOINTMENT WITH DOCTOR MITCHELL? AND DO YOU KNOW IF SHE LIKES ARTIFICIAL FLOWERS? JUST TO THANK HER OF COURSE, I AM OBVIOUSLY SICK AND IN NEED OF MEDICAL ATTENTION. MESSAGE SEVEN: ...");

        await ƒS.Speech.tell(characters.mainCharacter, "Oh gosh that's going to take a while... Do we have to wait around for hours now to hear something useful?");
        await ƒS.Speech.tell(characters.companion, "No no of course not. Since I have access to the system now, I can sift through all the information and find anything relevant quickly. Just give me a moment");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.sleep, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.sad, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "What is it?");
        await ƒS.Speech.tell(characters.companion, "Something... horrible happened... I don't know how to explain this. Maybe just look at it yourself...");

        await ƒS.Speech.tell(characters.system, "Text files added to your inventory. Scroll to read everything.");
        ƒS.Inventory.add(items.notice);
        ƒS.Inventory.add(items.attackNotice);
        ƒS.Inventory.add(items.petition);
        ƒS.Inventory.add(items.shutdown);
        ƒS.Inventory.add(items.governmentNotice);
        await ƒS.update();
        await ƒS.Inventory.open();

        await ƒS.Speech.tell(characters.mainCharacter, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "...");

        await ƒS.Speech.tell(characters.mainCharacter, "Oh wow this really does sound horrible...");
        await ƒS.Speech.tell(characters.mainCharacter, "So basically, robots started to disobey, NexirTech wanted to shut them down, then the robots defended themselves until the government decided to basically nuke everything? Did I get that right?");
        await ƒS.Speech.tell(characters.mainCharacter, "Even though that would also kill a lot of humans?");
        await ƒS.Speech.tell(characters.companion, "Yes... unfortunately this is correct...");
        await ƒS.Speech.tell(characters.mainCharacter, "I can't believe something like that happened... But where did the humans here go?");
        await ƒS.Speech.tell(characters.companion, "I also found an evacuation notice from a few weeks after the data wipe. Everyone here was ordered to come back to earth to help.");
        await ƒS.Speech.tell(characters.mainCharacter, "Oh so that's why... Why was I left behind though?");
        await ƒS.Speech.tell(characters.mainCharacter, "So everyone who potentially knows me is back on earth? Then we should try to find a way to get there too!");
        await ƒS.Speech.tell(characters.companion, "There is a spaceship hangar right outside. We could try to get one started...");
        await ƒS.Speech.tell(characters.mainCharacter, "Perfect! I don't know if I know how to fly one of these things but what's there to loose right?");
        await ƒS.Character.hide(characters.companion);
        await ƒS.Character.show(characters.companion, characters.companion.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.companion, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "Is there something else?");
        await ƒS.Speech.tell(characters.companion, "Yes... I found something... I thought maybe you would want to see this... ");
        await ƒS.Speech.tell(characters.companion, "I noticed a number on the side of your helmet earlier and I found a message with the exact same number...");
        await ƒS.Speech.tell(characters.mainCharacter, "Oh what is it? Show me!");
        await ƒS.Speech.tell(characters.companion, "Of course... I... want to warn you though... You might not take it well... ");
        await ƒS.Speech.tell(characters.mainCharacter, "I don't even know who I am, I don't remember anything or anyone, so it probably won't affect me much. Besides, every information about myself counts.");
        await ƒS.Speech.tell(characters.companion, "I just hope you will do the right thing in the end.");
        await ƒS.Speech.tell(characters.mainCharacter, "Hm? Why are you saying something like that all of a sudden? Anyway, I'm ready.");

        let listenToMessage = {
            interactMessageButton: "Listen to the voice message"
        };

        let messageButton = await ƒS.Menu.getInput(listenToMessage, "choicesCSSclass");


        if (messageButton) {
            await ƒS.Character.hide(characters.companion);
            await ƒS.Location.show(location.blackBackground);
            await ƒS.update(0.5);
            ƒS.Sound.fade(music.solitaryExploration, 0.1, 0, false);
            return "Scene6";


        };


    }
}