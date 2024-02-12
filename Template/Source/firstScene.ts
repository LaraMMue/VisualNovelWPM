namespace Template {
    export async function firstScene(): ƒS.SceneReturn {
      console.log("First Scene starting");

      let text = {
            MCtext: {
                T0001: "''mhm.. where… am I ?''",
                T0002: "''No wait... WHO even am I???",
                T0003: "Anyway, what is this place?"
            }
      };

      ƒS.Speech.hide();
      await ƒS.Location.show(location.moonStationInterior);
      await ƒS.update(1);
      //await ƒS.Character.show(characters.Astronaut, characters.Astronaut.pose.normal, ƒS.positions.bottomcenter);
      await ƒS.Speech.tell(characters.mainCharacter, text.MCtext.T0001);
      await ƒS.Speech.tell(characters.mainCharacter, text.MCtext.T0002);
      dataForSave.nameMC = await ƒS.Speech.getInput();
      characters.mainCharacter.name = dataForSave.nameMC;
      await ƒS.Speech.tell(characters.mainCharacter, characters.mainCharacter.name + " ... was that really my name?");

      await ƒS.update(0.5);




      let dialogue = {
        iSayYes: "Yes",
        iSayMaybe: "Maybe",
        iSayNo: "No"
      };

      let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSclass");

      let pickedYes: boolean;
      //let pickedNo: boolean;
      //let pickedBla: boolean;

      if (pickedYes) {
        delete dialogue.iSayYes;
      }

      switch (dialogueElement) {
        case dialogue.iSayYes:
            await ƒS.Speech.tell(characters.mainCharacter, "Yes, I'm sure that was my name! I think...");
            // continue path here
            console.log("test");
            break; // mit break geht es nach der Entscheidung direkt raus, ansonsten würde es durch alle durchgehen
        case dialogue.iSayNo:
            // continue path here
            await ƒS.Speech.tell(characters.mainCharacter, "No, that's definitely wrong... But no matter how hard I try, I can't seem to remember any other name. Guess I'll keep this one for now.");
            //await ƒS.Speech.tell(characters.mainCharacter, text.MCtext.T0002); // oder anstatt text.etc direkt Text schreiben so: "der Text"
            break;
        case dialogue.iSayMaybe:
            await ƒS.Speech.tell(characters.mainCharacter, "Hmm... maybe it was?... I'm not sure...");
            // continue path here
            break;
      }
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.mainCharacter, text.MCtext.T0003);

    }
  }