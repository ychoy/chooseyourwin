const scenarios = {
    s1: {
        choices: {
            c1: {
                buttonText: "First Choice",
                popupText: "This is the first popup."
            },
            c2: {
                buttonText: "Second Choice",
                popupText: "This is the second popup."
            }
            
        }
    },
    s2: {
        choices: {
            c1: {
                buttonText: "First Choice",
                popupText: "We're on page two now."
            },
            c2: {
                buttonText: "Second Choice",
                popupText: "This is the second popup."
            }
            
        }
    },
    s3: {
        choices: {
            c1: {
                buttonText: "First Choice",
                popupText: "We're on page three now."
            },
            c2: {
                buttonText: "Second Choice",
                popupText: "This is the second popup."
            }
            
        }
    }
}

const appDiv = document.getElementById("app");

const scenarioHTML = function (dataObject) {
    
    for (let scene in dataObject ) {
        // Zero length will be falsy
        if (document.getElementsByClassName(`${scene}`).length) {
            console.log(scene);
            let story = dataObject[scene];

           return (
            `<div>${story.choices.c1.popupText}</div>`
           )    
        }
        
    } 
}

function render(div, dataHTML) {
    div.innerHTML = dataHTML;
}




render(appDiv, scenarioHTML(scenarios));


