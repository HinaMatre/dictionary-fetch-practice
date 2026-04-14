document.getElementById("getWord").addEventListener("click", () => {
    const wordInput = document.getElementById("inputWord").value.trim();
    if (wordInput === "") {
        alert("Please enter a word.");
        return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Word not found");
            }
            return response.json();
        })
        .then(data => {
            // Display word and first definition
            // const word = data[0].word;
            // const definition = data[0].meanings[0].definitions[0].definition;
            // const examples = data[0].meanings[0].definitions[0].definition[0].example;

            // document.getElementById("word").innerText = word;
            // document.getElementById("definition").innerText = definition;
            // document.getElementById("example").innerText=examples


            const word = data[0].word;
            const definitionObj = data[0].meanings[0].definitions[0];
            const definition = definitionObj.definition;
            // const example = definitionObj.example || "No example available.";

            document.getElementById("word").innerText = word;
            document.getElementById("definition").innerText = definition;
            
            
        })

        
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("word").innerText = "";
            document.getElementById("definition").innerText = "Definition not found.";
        });
});
