namespace Template {
  export async function Scene2(): ƒS.SceneReturn {
    console.log("Scene 2 starting");

    await ƒS.Location.show(location.moonStationInterior);
    await ƒS.update(0.5);

    await ƒS.Speech.tell(characters.mainCharacter, "Let's just keep looking around.");
    await ƒS.Speech.tell(characters.mainCharacter, "Maybe I can find some more information about this place...");
    await ƒS.Speech.tell(characters.mainCharacter, "Where should I go?");

    let directionChoices = {
      left: "Go left",
      right: "Go right"
    };

    let directionChoiceButtons = await ƒS.Menu.getInput(directionChoices, "choicesCSSclass");

    //let energyCore: boolean = false;

    let lookCloser = {
      interactLookCloser: "Take a closer look"
    };

    let lookCloserButton;
    let clickedLookCloserButton: boolean = false;

    let leftFirst: boolean = false;


    switch (directionChoiceButtons) {
      case directionChoices.left:
        console.log("went left: find energy core first");
        leftFirst = true;
        await ƒS.Speech.tell(characters.mainCharacter, "Something is glowing in that corner!");
        await ƒS.Location.show(location.blackBackground); // Background!!!
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.mainCharacter, "Hm, looks like some kind of mechanical component. Aren't these used to power robots? ");
        await ƒS.Speech.tell(characters.mainCharacter, "What was the name of this thing again?");
        await ƒS.Speech.tell(characters.mainCharacter, "Ugh... my mind is still a little foggy... Anyway, I'll take this with me.");
        ƒS.Inventory.add(items.energyCore);

        await ƒS.update();

        await ƒS.Location.show(location.moonStationInterior);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.mainCharacter, "Let's go over there too");


        //energyCore = true;

        break;



      // go to left side, find core, then go to right side

      case directionChoices.right:
        console.log("went right: find robot first");
        await ƒS.Speech.tell(characters.mainCharacter, "Oh what's that over there?");
        await ƒS.Location.show(location.blackBackground); // Background!!!
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.mainCharacter, "What's this? Looks like a robot of some sorts.");

        lookCloserButton = await ƒS.Menu.getInput(lookCloser, "choicesCSSclass");

        if (clickedLookCloserButton) {
          delete lookCloser.interactLookCloser;
        }


        if (lookCloserButton) {
          await ƒS.Speech.tell(characters.mainCharacter, "Looks somewhat familiar... There should be a power button right here.");
          await ƒS.Speech.tell(characters.mainCharacter, "AWAKEN, LITTLE ONE!!...");
          await ƒS.Speech.tell(characters.mainCharacter, "...");
          await ƒS.Speech.tell(characters.mainCharacter, "...");
          await ƒS.Speech.tell(characters.mainCharacter, "...Hm... That didn't work...");
          await ƒS.Speech.tell(characters.mainCharacter, "Maybe it's missing a part? Oh yeah, right here. Seems like there's supposed to be something here.");
          await ƒS.Speech.tell(characters.mainCharacter, "What was the name of this component again?");
          await ƒS.Speech.tell(characters.mainCharacter, "Ugh... my mind is still a little foggy...");
          await ƒS.Speech.tell(characters.mainCharacter, "Anyway, let's look for this... thing!");
          // --> go to left side and find core, then return to robot

          await ƒS.Location.show(location.moonStationInterior);
          await ƒS.update(0.5);
          await ƒS.Speech.tell(characters.mainCharacter, "Hmm... Where should I search... Oh!");
          await ƒS.Speech.tell(characters.mainCharacter, "Something is glowing in that corner!");
          await ƒS.Location.show(location.blackBackground); // Background!!!
          await ƒS.update(0.5);
          await ƒS.Speech.tell(characters.mainCharacter, "Hm, looks like some kind of mechanical component. Maybe it's exactly what I'm looking for!");
          await ƒS.Speech.tell(characters.mainCharacter, "Ugh... I still can't remember the damn name of this thing.");
          await ƒS.Speech.tell(characters.mainCharacter, "I'll just take this with me...");

          ƒS.Inventory.add(items.energyCore);
          await ƒS.update();

          break;



        }
    }

    if (leftFirst == true) {
      await ƒS.Speech.tell(characters.mainCharacter, "Oh what's that over there?");
      await ƒS.Location.show(location.blackBackground); // Background!!!
      await ƒS.update(0.5);

      await ƒS.Speech.tell(characters.mainCharacter, "What's this? Looks like a robot of some sorts.");

      lookCloserButton = await ƒS.Menu.getInput(lookCloser, "choicesCSSclass");

      if (clickedLookCloserButton) {
        delete lookCloser.interactLookCloser;
      }


      if (lookCloserButton) {
        await ƒS.Speech.tell(characters.mainCharacter, "Looks somewhat familiar... There should be a power button right here.");
        await ƒS.Speech.tell(characters.mainCharacter, "AWAKEN, LITTLE ONE!!...");
        await ƒS.Speech.tell(characters.mainCharacter, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "...");
        await ƒS.Speech.tell(characters.mainCharacter, "...Hm... That didn't work...");
        await ƒS.Speech.tell(characters.mainCharacter, "Maybe it's missing a part? Oh yeah, right here. Seems like there's supposed to be something here.");

        await ƒS.Speech.tell(characters.mainCharacter, "Maybe it's this thing I found?");

        /*await ƒS.Inventory.open();
        ƒS.Inventory.getAmount(items.energyCore) != 0;
        await ƒS.update();*/


      }



    } else {
      await ƒS.Location.show(location.blackBackground); // Background!!!
      await ƒS.update(0.5);
      await ƒS.Speech.tell(characters.mainCharacter, "Let's see if this is the right one.");

      /*await ƒS.Inventory.open();
      ƒS.Inventory.getAmount(items.energyCore) != 0;
      await ƒS.update();*/
    }


    // use/remove energy core from inventory
    await ƒS.Inventory.open();

    await ƒS.Speech.tell(characters.mainCharacter, "Ha! It fits! There you go... Now how do I turn you on?");
    await ƒS.Speech.tell(characters.companion, "BZZ BZZZ");


    return "Scene3"


    // continue: both robot and core found? --> insert core into robot, robot wakes up --> Buddy introduction scene



    /*ƒS.Inventory.add(items.energyCore);

    await ƒS.Inventory.open();
    await ƒS.update();*/

  }
}