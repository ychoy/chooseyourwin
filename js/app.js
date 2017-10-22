// TODO: currently setting content to empty string so it doesn't show up as "undefined" if it doesn't exist. todo - figure out optimal solution

const scenarios = {
    s1: {
        content: {
          c1: "",
          c2: ""
        },
        choices: {
            c1: {
                popupText: ""
            },
            c2: {
                popupText: ""
            }
            
        }
    },
    s2: {
        content: {
          c1: "",
          c2: ""
        },
        choices: {
            c1: {
                popupText: ""
            },
            c2: {
                popupText: ""
            }
            
        }
    },
    s3: {
        content: {
          c1: "If you meet 50% of the qualifications, do you apply or not?", 
          c2: ""
        },
        choices: {
            c1: {
                popupText: ""
            },
            c2: {
                popupText: ""
            }
            
        }
    },
    s4: {
        content: {
          c1: '"You only get in life what you have the courage to ask for." - Oprah Winfrey', 
          c2: "You got this! Apply for the job."
        },
        choices: {
            c1: {
                popupText: ""
            },
            c2: {
                popupText: ""
            }
            
        }
    },
    s5: {
        content: {
          c1: "",
          c2: ""
        }, 
        choices: {
            c1: {
                popupText: ""
            },
            c2: {
                popupText: ""
            }
            
        }
    },
    s6: {
        content: {
          c1: "Interview: Tell me about your greatest achievement at work.", 
          c2: "Do you?..."
        },
        choices: {
            c1: {
                popupText: ""
            },
            c2: {
                popupText: ""
            }
            
        }
    },
    s7: {
        content: {
          c1: "Imposter Syndrome is a common affliction. People who do not believe that they are “good enough” to belong do not easily emphasize their personal achievements.",
          c2: "When asked about your achievements, please discuss your personal (very important) achievements. If you want to discuss group work, emphasize your role in the group!"
        }, 
        choices: {
            c1: {
                popupText: ""
            },
            c2: {
                popupText: ""
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
            `<p>${story.content.c1}</p> 
             <br/>
             <p>${story.content.c2}</p>
             <br/>
             <div>${story.choices.c1.popupText}</div>
             <div>${story.choices.c2.popupText}</div> `

            
           )    
        }
    
    } 
}

function render(div, dataHTML) {
    div.innerHTML = dataHTML;
   
}




render(appDiv, scenarioHTML(scenarios));


