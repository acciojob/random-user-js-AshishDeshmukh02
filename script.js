//your code here
<!----acciojob/mini-scrabble---->
 
<body>
 
	<h1>&gt;Letter & Words Counter&lt;</h1>
  <div id="container">
    <textarea id="evaluatedText" rows="10" placeholder="Type your words here..."></textarea>
    <span>Letters : <h3 id="letterCount">0</h3></span>
    <span>Words : <h3 id="wordCount">0</h3></span>
  </div>
 
    <script type="text/javascript" src="./script.js"></script>
 
</body>
 
 
 
<!---- C S S ---->
 
body {
    box-sizing: border-box;
    background: black;
  }
  
  h1,
  h3,
  footer {
    text-align: center;
    color: #fff;
  }
  h3{
      display: inline;
  }
  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 18em;
  }
  
  textarea {
    height: 50vh;
    min-width: 80%;
    padding: 1em;
  }
  
  #container span {
    color: white;
    font-weight: bold;
    margin: 15px;
  }
 
 
<!---- JAVASCRIPT ---->
 
 
function renderText(domElt, text) {
    domElt.innerText = text;
  }
  
  function handleWord(text) {
    const textArr = text.split(" ");
    let wordCount = 0;
  
    for (word of textArr) {
      if (/[a-zA-Z0-9]/.test(word)) {
        wordCount += 1;
      }
    }
  
    return wordCount;
  }
  
  function handleChar(text) {
    return text.length;
  }
  
  function init() {
    const textArea = document.querySelector("textarea");
    const charDOM = document.querySelector("#letterCount");
    const wordDOM = document.querySelector("#wordCount");
  
    textArea.addEventListener("input", (event) => {
      const text = event.target.value.trim();
  
      renderText(wordDOM, handleWord(text));
      renderText(charDOM, handleChar(text));
    });
  }
  
  init();
