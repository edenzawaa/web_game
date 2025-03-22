
// document.getElementById('button').addEventListener('click', () => {
//   const Content = document.getElementById('input').value;
//   append1(Content);
// });

// const append1 = (Content) => {
//   const element = document.createElement('p');
//   const textNode = document.createTextNode(`${Content}`);
//   element.appendChild(textNode);
//   document.body.appendChild(element);
// };

// Define the entire conversation flow as an array
// Define the entire conversation flow with multiple options
// Define the entire conversation flow with main and sub-options
const createParagraph = (text) => {
  const p = document.createElement('p'); // Create a paragraph
  p.textContent = text; // Set the paragraph text
  document.body.appendChild(p); // Append paragraph to the body
};

const appendImg = (src) => {
  if (document.querySelector('img')) {
    document.querySelector('img').remove(); // Remove any existing image
  }

  const img = document.createElement('img'); // Create an image element
  img.src = src; // Set the image source
  img.style.width = '500px'; // Set the image width
  img.style.height = '500px'; // Set the image height
  img.style.display = 'block'; // Set the image display property
  document.body.appendChild(img); // Append image to the body
  img.style.margin = '0 auto'; // Center the image
};

document.getElementById('btn').addEventListener('click', () => {
  document.body.innerHTML = ''; // Clear the page
  createParagraph('Psst, hey come closer');
  
  const button = document.createElement('button'); // Create a button
  button.textContent = 'what is it?';
  document.body.appendChild(button);
  
  button.addEventListener('click', () => {
    document.body.innerHTML = '';
    createParagraph('I have a request I need you to do for me');
    
    const subButton2 = document.createElement('button');
    subButton2.textContent = 'I’m not interested';
    document.body.appendChild(subButton2);

    subButton2.addEventListener('click', () => {
      document.body.innerHTML = '';
      createParagraph('I promise I’ll make it worth your while');
      
      const subButton3 = document.createElement('button');
      subButton3.textContent = 'Okay then, what do you need?';
      document.body.appendChild(subButton3);
      
      subButton3.addEventListener('click', () => {
        document.body.innerHTML = '';
        createParagraph('I need you to take this ugly ass dog to the park for me');
        const subButton4 = document.createElement('button');
        subButton4.textContent = 'Okay';

        appendImg('silly ass dog.jpeg'); // Replace with your image source
        document.body.appendChild(subButton4);
        subButton4.style.display = 'block';
        subButton4.style.margin = '20px auto'

        subButton4.addEventListener('click', () => {
          document.body.innerHTML = '';
          createParagraph('Great!');
          createParagraph('Well, off you go then')
          const subButton5 = document.createElement('button');
          subButton5.textContent = 'Hmmmm';
          document.body.appendChild(subButton5);
          subButton5.addEventListener('click',() => {
            document.body.innerHTML = '';
            createParagraph('Whats the matter? were you expecting a reward?');
            const subButton6 = document.createElement('button');
            subButton6.textContent = 'yeah 😤'
            document.body.appendChild(subButton6);
            subButton6.addEventListener('click',() => {
              clearBody();
              createParagraph('Hmmm well i guess you are doing me a favor huh');
              const subButton7 = document.createElement('button');
              subButton7.textContent = 'Yes';
              document.body.appendChild(subButton7);
              subButton7.addEventListener('click',() => {
                clearBody();
                createParagraph('okay okay then, heres your reward but you gotta finish the job after this');
                appendImg('HEHEHE FOR YOU!!!.jpeg');
                const subButton8 = document.createElement('button');
                subButton8.style.margin = '20px auto';
                subButton8.textContent = 'Deal!';
                document.body.appendChild(subButton8);
                subButton8.addEventListener('click',() => {
                  displayForThree('Not too long afterwards...');
                  setTimeout(() => {
                    createParagraph('You encounter a fugly ass dinosaur at the park riding a bike');
                    appendImg('Dinossauro de bicicleta.jpeg');
                    createParagraph('And its attempting to do a cartwheel too how cool is that!');
                    const subButton9 = document.createElement('button');
                    subButton9.textContent = 'holy moly!?';
                    document.body.appendChild(subButton9);
                    subButton9.addEventListener('click',()=>{
                      clearBody();
                      createParagraph('Unfortunately it failed miserably and spotted you at the distance so now there can be no witnesses. You better start running')
                      const subButton10 = document.createElement('button');
                      subButton10.textContent = 'Uh oh';
                      document.body.appendChild(subButton10);
                      subButton10.addEventListener('click', () => {
                        clearBody();
                        createParagraph('After a little while of running you spotted a very ominous and shady looking van');
                        appendImg('1d4ccccb-97d4-4ea8-aa03-9fd9d653abfc.jpeg')
                        createButton('subButton11','Maybe they sell blindboxes :D i could snatch me some good deals');
                        subButton11.addEventListener('click', () => {
                          clearBody();
                          createParagraph('you walked up to the van as then the owner of it walked out of it to greet you');
                          appendImg('bdc238ca-e716-47e2-9902-b2899f010440.jpeg');
                          createParagraph('"ahh welcome to my humble abode."');
                          createParagraph('"what can i get you." He said as he opened the door to his van, inside you see..?')
                          createButton('subSubButton1','A block of old moldy cheese');
                          subSubButton1.addEventListener('click', () => {
                            clearBody();
                            createParagraph('You took the block of moldy cheese, unsure of what to do with it at first.');
                            createParagraph('Afterwards you decided to walk home and spotted a homeless man');
                            createParagraph('You stopped to see what he has to say and he said he will trade you something very very valuable in exchange of food ');
                            createButton('dialog1','Give him the cheese');
                            dialog1.addEventListener('click',() => {
                              clearBody();
                              createParagraph('He dies');
                              createParagraph('Who knew giving someone some old mysterious cheese could be a bad idea');
                              createButton('dialogEnd','WHAT?');
                              dialogEnd.addEventListener('click', () => {
                                clearBody();
                                createParagraph('You got arrested for manslaughter :(((');
                                createParagraph('The end');
                              })
                            });
                            createButton('dialog2','Give him a candy that you had in your pocket');
                            dialog2.addEventListener('click', () => {
                              clearBody();
                              createParagraph('He thanked you for being kind to him and he gave you a mysterious box thats also coincidentally the size of a blindbox :0 could it be?!');
                              createButton('subDialog1','No way');
                              subDialog1.addEventListener('click', () => {
                                clearBody();
                                createParagraph('It turns out to be a rusty dusty mug...well i guess homeless people are not always millionair in disguise huh');
                                createButton('subDialogEnd','Awhhh :((');
                                subDialogEnd.addEventListener('click', ()=>{
                                  clearBody();
                                  createParagraph('You came back sad and dissapointed but i already bought you a tons of gift as payment for doing the job well done');
                                  createParagraph('And ofc i even got the blindbox you liked too ;D');
                                  createParagraph('The end');
                                });
                              });
                            });
                          });
                          createButton('subSubButton4','A wig');
                          subSubButton4.addEventListener('click',()=>{
                            clearBody();
                            createParagraph('You took the wig. It has a very disturbing color, a blend of glue and sweat ');
                            createParagraph('You shook your head in disgust but took it with you anyways');
                            createParagraph('On the way back, you spotted a bald woman (idk if you can actually call that a woman) who appears to looking for something');
                            createParagraph('You decided to ask her what was going on');
                            createButton('unique1','and she responded with?');
                            unique1.addEventListener('click',() => {
                              clearBody();
                              createParagraph('"Oh goodness i was sitting here in this bench and then suddenly a gust of wind came by and took my hair with it oh... now i dont know what to do"');
                              createButton('unique2','You decided to gave her back her hair no point holding onto this');
                              unique2.addEventListener('click',() => {
                                clearBody();
                                createParagraph('She shouts in joy "OH OH MY HAIR THANK YOU THANK YOU SO MUCH YOUVE FOUND MY HAIR"');
                                createParagraph('"Thank you please take this gift as a totem of my gratitude i must return home now as its getting late ta-ta 🙋‍♀️🙋‍♀️"');
                                createParagraph('"wtf was that about" you thought to yourself and quite frankly idk either im just the narrator');
                                createParagraph('As you looked down to your hand you realized she just gave you a super limited edition of a labubu that was banned in 34 countries for just how cool it is :0000 woahhh you hit the jackpot');
                                createButton('uniqueEnd','Heh and it didnt cost me a dime *smirks*');
                                uniqueEnd.addEventListener('click', () => {
                                  clearBody();
                                  createParagraph('okay whatever weirdo');
                                  createParagraph('The end')
                                });
                              })
                            });
                          });
                          createButton('subSubButton3','my old baby clothes (wait what is it doing here 😨😨😨)' )
                          subSubButton3.addEventListener('click', () => {
                            clearBody();
                            createParagraph('You took the clothes and brought it with you home ');
                            createParagraph('As i spotted what you had on your hand i responded camly');
                            createParagraph('WHHHHHHHHHAAAAAAAAAAAAAAAAATTTTTTTTTTTTTTTTTTTTTTT');
                            createParagraph('WHY DO YOU HAVE THIS??');
                            createButton('main1','I found it in a guys van');
                            main1.addEventListener('click',()=>{
                              clearBody();
                              createParagraph('Okay thats it i will not tolerate this shit');
                              createParagraph('and then im bombed the whole city');
                              createParagraph('The end');
                              createButton('main1Sub','umm');
                              main1Sub.addEventListener('click',()=>{
                                clearBody();
                                createParagraph('What');
                                createButton('main2Sub','The hell is this ending 😭😭');
                                main2Sub.addEventListener('click',()=>{
                                  clearBody();
                                  createParagraph('Thats what happened okay stop questioning me im the narrator');
                                  createButton('main3Sub','uhhuh');
                                  main3Sub.addEventListener('click',()=> {
                                    clearBody();
                                    createParagraph(':( Okay fine');
                                    createParagraph('I went back to the same guy with the shady van at the park and asked him how he got it');
                                    createParagraph('man i saw it flying and fell on the ground, must have flew off from your balcony dude');
                                    createParagraph('and i was like "oh"');
                                    createParagraph('😔');
                                    createParagraph('The end');
                                  });
                                });
                              });
                            });
                            createButton('main2','I just had it with me all this time');
                            main2.addEventListener('click',() =>{
                              clearBody();
                              createParagraph('Oh um, well i guess you can keep it then');
                              createParagraph('dont do anything weird with it tho..');
                              createButton('mainSub1','Okayyy');
                              mainsub1.addEventListener('click',()=> {
                                clearBody();
                                createParagraph('I paid you with ton of kisses and we went inside to watch a movie');
                                createParagraph('The end');
                              });
                              createButton('mainSub2','hehe :p');
                              mainsub2.addEventListener('click',()=> {
                                clearBody();
                                createParagraph('I paid you with ton of kisses and we went inside to watch a movie');
                                createParagraph('The end');
                              });
                            });
                          });
                        });
                        createButton('subButton12','Eh seems abit too sketchy for me')
                        subButton12.addEventListener('click',() => {
                          clearBody();
                          createParagraph('You ignored the van and just walked home and i paid you with tons of kisses :D');
                          createParagraph('The end');
                        })
                        
                      });
                    });



                  },2000);



                });
              });
            });

          });
        });
      });
    });
    
    const subButton4 = document.createElement('button');
    subButton4.textContent = 'No thanks';
    document.body.appendChild(subButton4);
    
    subButton4.addEventListener('click', () => {
      document.body.innerHTML = '';
      createParagraph('Awhhh, pleaseee? 😭😭😭💔💔');
      
      const subButton5 = document.createElement('button');
      subButton5.textContent = 'No';
      document.body.appendChild(subButton5);
      
      subButton5.addEventListener('click', () => {
        document.body.innerHTML = '';
        createParagraph(':( Okay then');
      });
    });
  });
});

const clearBody = () => {
  document.body.innerHTML = '';
}
const displayForThree = (text) => {
  // Create a paragraph to display the message
  clearBody();
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  document.body.appendChild(paragraph); // Append it to the document body

  // Remove the paragraph after 5 seconds (5000 milliseconds)
  setTimeout(() => {
    paragraph.remove(); // Removes the element from the DOM
  }, 2000);
};


const createButton = (id,content) => {
  const button = document.createElement('button');
  button.id = id;
  button.textContent = content;
  document.body.appendChild(button);
} 