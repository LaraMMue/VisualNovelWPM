namespace Template {
    export async function firstScene(): ƒS.SceneReturn {
      console.log("First Scene starting");

      ƒS.Speech.hide();
      
      //await ƒS.Character.show(characters.mainCharacter, characters.mainCharacter.pose.normal, ƒS.positions.bottomcenter);
      //await ƒS.Character.show(characters.companion, characters.companion.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.Location.show(location.blackBackground);
      await ƒS.update(0.5);
      await ƒS.Speech.tell(characters.inGameNarrator, "You wake up. Everything around you is dark.");
      await ƒS.Speech.tell(characters.mainCharacter, "Owww, my head...");
      await ƒS.Speech.tell(characters.inGameNarrator, "You can feel the cold ground beneath you. As you try to get up, the light suddenly turns on.");
      await ƒS.Location.show(location.moonStationInterior);
      await ƒS.update(0.5);
      await ƒS.Speech.tell(characters.mainCharacter, "Ah, it's so bright!... What is this place?");
      
      let lookAround = {
        interactLookAround: "Look around the place"
      };

      let lookAroundButton = await ƒS.Menu.getInput(lookAround, "choicesCSSclass");
      let clickedLookAroundButton: boolean;

      if(clickedLookAroundButton) {
        delete lookAround.interactLookAround;
      }


      if (lookAroundButton) {
        await ƒS.Speech.tell(characters.mainCharacter, "Oh, there's a mirror!");
        await ƒS.Location.show(location.earthFromMoon); // change BG!!!
        await ƒS.update(1.5);
        await ƒS.Speech.tell(characters.mainCharacter, "Woah I look like an astronaut! Why am I wearing this stuff? ");

        let takeOffHelmet = {
          interactTakeOffHelmet: "Try to take helmet off"
        };

        let takeOffHelmetButton = await ƒS.Menu.getInput(takeOffHelmet, "choicesCSSclass");
        let clickedTakeOffHelmetButton: boolean;

        if (clickedTakeOffHelmetButton) {
          delete takeOffHelmet.interactTakeOffHelmet;
        }

        if (takeOffHelmetButton) {
          await ƒS.Speech.tell(characters.helmetVoice, "WARNING! HAZARDOUS ENVIRONMENT. DO NOT TAKE OFF YOUR HELMET!");
          await ƒS.Speech.tell(characters.mainCharacter, "Damn that scared me. So don't take it off? But it's so weird, I can't seem to remember what my face looks like...");
          await ƒS.Speech.tell(characters.mainCharacter, "Surely taking it off for just a moment won't be that bad, right?");
          await ƒS.Speech.tell(characters.helmetVoice, "WARNING! HAZARDOUS ENVIRONMENT. DO NOT TAKE OFF YOUR HELMET!");

          let helmetChoices = {
            takeOff: "Take helmet off",
            leaveOn: "Leave helmet on"
          };
    
          let helmetChoiceButtons = await ƒS.Menu.getInput(helmetChoices, "choicesCSSclass");
    
          let madeChoice: boolean;
          //let pickedNo: boolean;
          //let pickedBla: boolean;
    
          if (madeChoice) {
            delete helmetChoices.takeOff;
          }
    
          switch (helmetChoiceButtons) {
            case helmetChoices.takeOff:
                console.log("go to game over 1");
                return "GameOver1";
            case helmetChoices.leaveOn:
                // continue path here
                await ƒS.Speech.tell(characters.mainCharacter, "Hmm... maybe I shouldn't risk it.");
                return "Scene2"
            
          }

        };



      }


      /*dataForSave.nameMC = await ƒS.Speech.getInput();
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
      } */
      await ƒS.update(1);

    }
  }