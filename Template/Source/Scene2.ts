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



    switch (directionChoiceButtons) {
      case directionChoices.left:
        console.log("went left: find energy core first");

      // go to left side, find core, then go to right side

      case directionChoices.right:
        console.log("went right: find robot first");
        await ƒS.Speech.tell(characters.mainCharacter, "Oh what's that over there?");
        await ƒS.Location.show(location.blackBackground); // Background!!!
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.mainCharacter, "What's this? Looks like a robot of some sorts.");
        let lookCloser = {
          interactLookCloser: "Take a closer look"
        };

        let lookCloserButton = await ƒS.Menu.getInput(lookCloser, "choicesCSSclass");
        let clickedLookCloserButton: boolean;

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
          break;

          // --> go to left side and find core, then return to robot


        }
    }

    // continue: both robot and core found? --> insert core into robot, robot wakes up --> Buddy introduction scene



    ƒS.Inventory.add(items.energyCore);

    await ƒS.Inventory.open();
    await ƒS.update();

  }
}