namespace Template {
    export async function Scene2(): ƒS.SceneReturn {
      console.log("Scene 2 starting");

      await ƒS.Location.show(location.moonStationInterior);
      await ƒS.update(0.5);

      await ƒS.Speech.tell(characters.mainCharacter, "Let's just keep looking around."); // hier noch kurz weiter Text?

      await ƒS.Location.show(location.blackBackground);
      await ƒS.update(0.5);

      await ƒS.Speech.tell(characters.mainCharacter, "Oh what's this? Looks like a robot of some sorts.");


      let lookCloser = {
        interactLookCloser: "Look closer at the robot"
      };

      let lookCloserButton = await ƒS.Menu.getInput(lookCloser, "choicesCSSclass");
      let clickedLookCloserButton: boolean;

      if(clickedLookCloserButton) {
        delete lookCloser.interactLookCloser;
      }


      if (lookCloserButton) {
        await ƒS.Speech.tell(characters.mainCharacter, "Doesn't seem to work... Maybe it's missing a part?");


        ƒS.Inventory.add(items.energyCore);

        await ƒS.Inventory.open();
        await ƒS.update();
      }
    }
  }