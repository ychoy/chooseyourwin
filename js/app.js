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
    },
    s8: {
        content: {
          c1: "Interviewer: Do you have any children?",
          c2: "How do you respond?"
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
    s9: {
        content: {
          c1: 'You: "It sounds like you’re asking if I will be committed to the company and my job. I can assure you that I highly prioritize and value my work."',
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
    s10: {
        content: {
          c1: 'You: "I’m surprised to be asked that question, because I’ve not been asked that before. I don’t think it is relevant to the position I’m interviewing for."',
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
    s11: {
        content: {
          c1: 'If you have chosen to answer the question directly, please consider this:',
          c2: '"This question is illegal and irrelevant. Employers sometimes use this question to pigeonhole women as less-valuable employees. Do not feel compelled to answer this question directly."'
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
    s12: {
        content: {
          c1: 'Inteviewer: Do you have any questions for me? ',
          c2: ''},
        choices: {
            c1: {
                popupText: ""
            },
            c2: {
                popupText: ""
            }

        }
    },
  s13: {
        content: {
          c1: 'You: What is diversity, inclusion and culture like?',
          c2: ''
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
  s14: {
        content: {
          c1: 'Interviewer: Oh, yes! We are so diverse. We welcome everyone. We have so much diversity on our team.',
          c2: ''
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
  s15: {
        content: {
          c1: 'You: What is the ratio of women to men on my potential team?',
          c2: ''
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
  s16: {
        content: {
          c1: 'Interviewer: How would you feel if you were the first women on our engineering team?',
          c2: ''
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
  s17: {
        content: {
          c1: 'You: “I have worked in many diverse groups. I’m confident I will be able to succeed in a variety of team settings.”',
          c2: ''
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
   s18: {
        content: {
          c1: 'You: I’m surprised to be asked that question, because I’ve not been asked that before. I don’t think it is relevant to the position I’m interviewing for.',
          c2: ''
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
   s19: {
        content: {
          c1: 'If you have chosen to answer directly, please reconsider.',
          c2: 'This question is a red flag because it implies that the employer sees your gender as something that could get in the way of your work. It is an irrelevant and inappropriate question, and you should not feel compelled to answer directly.'
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
   s20: {
        content: {
          c1: 'Interviewer: What was your previous salary?',
          c2: ''
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
   s21: {
        content: {
          c1: "You: Let's talk about the salary range for this position.",
          c2: ''
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
   s22: {
        content: {
          c1: 'Interviewer: The salary range for this position is $65,000 to 75,000',
          c2: ''
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
   s23: {
        content: {
          c1: 'You: Wow, that surprises me. Based on my research of comparable positions, I would have expected the range to be $90,000 to $115,000. Is your range negotiable?',
          c2: ''
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
   s24: {
        content: {
          c1: 'Interviewer: No, the salary range is non-negotiable.',
          c2: ''
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
   s25: {
        content: {
          c1: 'You: I think this salary range is too low for the position, based on my research and experience. I have some other opportunities on the table.',
          c2: ''
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
   s26: {
        content: {
          c1: "You: I’m willing to work with that range if we can discuss benefits.",
          c2: 'Benefits to discuss: paid travel time, family leave, flextime, telework, health insurance, retirement (401k), stock options'
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
   s27: {
        content: {
          c1: 'Interviewer: No, the range is not negotiable',
          c2: ''
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
   s28: {
        content: {
          c1: 'You: That is dissappointing. Take care.',
          c2: 'Return to the job search and find a job that pays you what you are worth!'
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
   s29: {
        content: {
          c1: 'Interviewer: Yes, the range is negotiable.',
          c2: ''
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
   s30: {
        content: {
          c1: 'You: I know that your company is concerned about so-and-so challenges. I am confident that I can help you with that. At my previous job, I successfully delivered on so-and-so projects with my skills in such and such areas. Because of that, I think $110,000 is an appropriate starting salary.',
          c2: ''
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
   s31: {
        content: {
          c1: 'Interview: We can work with that salary.',
          c2: ''
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
   s32: {
        content: {
          c1: 'Congratulations! You have a job offer with pay and benefits that you are comfortable with.',
          c2: ''
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


