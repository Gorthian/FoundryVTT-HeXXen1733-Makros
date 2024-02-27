new Dialog({
    title:'Probe anfordern',
    content:`
        <form>
            <div class="form-group">
                <label>Fertigkeit</label>
                <select name="fertigkeit" id="fertigkeit">
                    <option value="Akrobatik">Akrobatik</option>
                    <option value="Aufmerksamkeit">Aufmerksamkeit</option>
                    <option value="Ausweichen">Ausweichen</option>
                    <option value="Erkennen">Erkennen</option>
                    <option value="Erste Hilfe">Erste Hilfe</option>
                    <option value="Fingerfertigkeit">Fingerfertigkeit</option>
                    <option value="Geistesstärke">Geistesstärke</option>
                    <option value="Handwerken">Handwerken</option>
                    <option value="Heimlichkeit">Heimlichkeit</option>
                    <option value="Land und Leute">Land und Leute</option>
                    <option value="Muskelspiel">Muskelspiel</option>
                    <option value="Redekunst">Redekunst</option>
                    <option value="Reflexe">Reflexe</option>
                    <option value="Reiten">Reiten</option>
                    <option value="Unempfindlichkeit">Unempfindlichkeit</option>
                    <option value="Wissensgebiete">Wissensgebiete</option>
                </select>
            </div>
            <div class="form-group">
                <label>Modifikator</label>
                <input type="number" name="mod" id="mod" value="0">
            </div>
      </form>`,
    buttons:{
        yes: {
            icon: "<i class='fas fa-check'></i>",
            label: `Probe anfordern`,
            callback: () => {
                let chat = "";
                let result = document.getElementById('fertigkeit');
                if (result.value!== '') {chat = "[[/hex "+result.value}
                let result2 = document.getElementById('mod');
                if (result2.value!== "0") {chat = chat+"|"+result2.value}
                chat=chat+"]]"
           
                let chatData = {
                    user: game.user._id,
                    speaker: ChatMessage.getSpeaker(),
                    content: chat
                };
                ChatMessage.create(chatData, {});
            }
        }},
    default:'yes',
  }).render(true);