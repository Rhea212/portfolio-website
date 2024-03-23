
const mql = window.matchMedia("(max-width: 600px)");

window.onload = init;


/**
Initializes the terminal and sets the initial position of the cursor.
*/
function init() {
  cursor.style.left = "0px";
  renderBanner();
}

let comandHistory = []; //Array containing the command history.
let commandIndex = 0  //Index for command history handling.


/**
 * Processes a command entered in the terminal and executes the corresponding action.
 *
 * @param {string} command - The command to process.
 */

function processCommand(command) {

  const args = formatCommand(command);

  renderLine(BASE_ROOT + command, "no-animation", 0);

  switch (args[0]) {
    case "help":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(COMMAND_LIST, 80);
      break;
    case "whois":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(WHOIS, 80);
      break;
    case "whoami":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(WHOAMI, 80);
      break;
    case "profiles":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(PROFILES, 80);
      break;
    case "projects":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(PROJECTS, 80);
      break;
    case "email":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(EMAIL_INFO, 80);
      break;
    case "banner": 
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderBanner();
      break;
    case "resume":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderLine("<br>Opening my resume in a new tab..<br><br>");
      newTab("https://drive.google.com/file/d/1U1QX9Kb2Uh7NQnaF5wRV-rp5Zx-m1x-S/view?usp=sharing");
      break;
    case "clear":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      setTimeout( () =>
      contentHook = clearTerminal(terminal, contentHook), 1)
      break;
    case "sudo":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(SUDO, 80);
      break;
    case "pwd":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderLine("<br>/home/rhea212/projects/cliPortfolio<br><br>");
      break
    case "echo":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      const printCommands = args.slice(1).join(" ");
      renderLine("<br>" + printCommands + "<br></br>", 80);
      break;
      case "history":
        renderLine("<br>");
        comandHistory.push("<br>");
        renderMultipleLines(comandHistory, 80);
        comandHistory.pop()
        break;
      case "shibe":
        commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
        fetchRandomShibaPic();
        break;
    default:
      if (mql.matches) {
        renderLine("<br>Command not found");
        renderLine("type <span class=\"command\">'help'</span> for all commands<br><br>");
      } else {
        renderLine("Command not found. For a list of commands, type <span class=\"command\">'help'</span>.", "error", 100);
      }
      break;
  } 
}

textAreaInput.addEventListener("keydown", handleEnterKeyPress);
textAreaInput.addEventListener("keydown", handleArrowUpKeyPress);
textAreaInput.addEventListener("keydown", handleArrowDownKeyPress);
mobileInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    processCommand(event.target.value);
    clearInput(mobileInput);
  } 
});



/**
 * Adds a new line to the terminal output.
 * @param {string} text - The text to add.
 * @param {string} style - The CSS class to apply to the line.
 * @param {number} time - The delay in milliseconds before adding the line.
 */
function renderLine(text, style, time, asciiArt=false) {
  let formattedText = text;
  if (asciiArt) {
    formattedText = formatASCIIArt(text);
  } else {
    formattedText = formatText(text);
  }
  setTimeout(() => {
    const next = createLine(formattedText, style);
    insertLine(next, contentHook);
    scrollToBottom();
  }, time);
}

/**
 * Replaces multiple spaces in a string with double non-breaking spaces.
 * @param {string} text - The text to format.
 * @returns {string} The formatted text.
 */
function formatASCIIArt(text) {
  const space = " ";
  const noBreakingSpace = "&nbsp";

  return text.replaceAll(space, noBreakingSpace);
}

function formatText(text) {
  const doubleSpace = "  ";
  const doubleNoBreakingSpace = "&nbsp;&nbsp";
  return text.replaceAll(doubleSpace, doubleNoBreakingSpace);
}

/**
 * Creates a new line element with the given text and style.
 * @param {string} text - The text of the line.
 * @param {string} style - The CSS class to apply to the line.
 * @returns {HTMLElement} The new line element.
 */
function createLine(text, style) {
  const line = document.createElement("p");
  line.className = style;
  line.innerHTML = `<span class="${style}">${text}</span>`;
  return line;
}

/**
 * Inserts an element before a reference element.
 * @param {HTMLElement} element - The element to insert.
 * @param {HTMLElement} referenceElement - The element to insert the new element before.
 */
function insertLine(element, referenceElement) {
  referenceElement?.parentNode?.insertBefore(element, referenceElement);
}

// /**
//  * Scrolls the window to the bottom of the page.
//  */
// function scrollToBottom() {
//   window.scrollTo(0, document.body.offsetHeight);
// }

function scrollToBottom() {
  window.scrollTo({
    top: document.body.offsetHeight,
    behavior: "smooth"
  });
}


/**
 * Clears the input of the textarea
 */
function clearInput(inputElement) {
  inputElement.value = "";
}


/**
 * Renders multiple lines with a delay between each one.
 * @param {Array} lines - Array of strings to render as separate lines.
 * @param {string} style - The CSS class to apply to the lines.
 * @param {number} delay - The delay in milliseconds between rendering each line.
 */
function renderMultipleLines(lines, delay=0, style="", asciiArt=false) {
  lines.forEach((line, index) => {
      renderLine(line, style, index * delay, asciiArt);
  })

}

/**
Renders a banner based on the screen width.
@function
@returns {void}
*/

function renderBanner() {
    if (mql.matches) {
      renderMultipleLines(MOBILE_BANNER, 80, "", true);
      setTimeout( () => {
        renderMultipleLines(TERMINAL_INFO_MOBILE,  80, "highlightColor");
      }, 1200);
    } else {
      renderMultipleLines(BANNER, 80, "", true);
      setTimeout( () => {
        renderMultipleLines(TERMINAL_INFO,  80, "highlightColor");
      }, 1200);
    }
}

/**
Clears the terminal.
@function
@param {HTMLElement} root - The root element of the terminal.
@param {HTMLElement} hook - The hook that contains all the previous content.
@returns {HTMLElement} A cleared hook.
*/

function clearTerminal(root, hook) {
  const id = hook.id
  root.innerHTML = '<a id="' + id + '"></a>';
  hook = document.getElementById(id);
  return hook;
}

/**
Opens a link in a new tab.
@function
@param {string} link - The link to be opened.
@returns {void}
*/

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

/**

Adds a command to the command history array.
@function
@param {string[]} commands - The commands to be added.
@param {string[]} historyArray - The array that stores the command history.
@param {number} currentIndex - The index of the current command in the history.
@returns {number} The index of the new command in the history.
*/

function addCommandToHistory(commands, historyArray, currentIndex) {
  const commandString = commands.join(" ");
  historyArray.push(commandString);
  return currentIndex + 1;
}


/**

Formats a command by converting it to lower case, trimming it, and splitting it into an array.
@function
@param {string} command - The command to be formatted.
@returns {string[]} The formatted command as an array of strings.
*/

function formatCommand(command) {
  command = command.toLowerCase();
  command = command.trim();
  return command.split(" ");
}


/**

Handles the "Enter" key press event.
@function
@param {KeyboardEvent} event - The event object.
@returns {void}
*/

function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    processCommand(event.target.value);
    clearInput(textAreaInput);
  }
}

/**
Handles the "ArrowUp" key press event.
@function
@param {KeyboardEvent} event - The event object.
@returns {void}
*/

function handleArrowUpKeyPress(event) {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (commandIndex > 0) {
      commandIndex = commandIndex - 1;
      textAreaInput.value = comandHistory[commandIndex]
      typerElement.innerHTML = comandHistory[commandIndex];
    }
  }
}


/**

Handles the "ArrowDown" key press event.
@function
@param {KeyboardEvent} event - The event object.
@returns {void}
*/

function handleArrowDownKeyPress(event) {
  if (event.key === "ArrowDown" && commandIndex < comandHistory.length) {
    commandIndex = commandIndex + 1;
    if (comandHistory[commandIndex] === undefined) {
      textAreaInput.value = "";
      typerElement.innerHTML = "";
    }
    else {
      textAreaInput.value = comandHistory[commandIndex];
      typerElement.innerHTML = comandHistory[commandIndex];
    }
  }
}

async function fetchRandomShibaPic() {
  const container=document.createElement("div");
  const contentHook=document.getElementById("contentHook");
  const prompt = document.getElementById("liner");
  prompt.classList.add("hidden");
  renderLine("Fetching a shiba...hopefully (I swear I saw a cat here once)",0,"white");
  const url="https://shibe.online/api/shibes";
  const response = await fetch(url);
  const body =  await response.json();
  const dogPicUrl=body[0];
  const image = document.createElement("img");
  image.src=dogPicUrl;
  image.onload= () => {
    contentHook.parentNode.insertBefore(container,contentHook);
    container.replaceChildren(image);
    image.classList.add("dogpic");
    renderLine("Yes my terminal prints dog images. Dogs deserve some rule-breaking.",0,"white");
    prompt.classList.remove("hidden");
    scrollToBottom();
  };
} 
