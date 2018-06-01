
function createPopUp(text) {
  var child = document.createElement("div");
  child.innerText = text
  child.style.color = "red";
  child.style.position = "fixed";
  child.style.zIndex = "9999999";
  child.style.right = '0px'
  child.style.marginRight = '10px'
  child.style.marginTop = '10px'
  child.style.background = 'yellow'
  child.style.padding = '20px'
  child.style.border = '1px solid red'

  document.body.prepend(child)
}

function sendNotification () {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'https://o34mbx5j2g.execute-api.eu-central-1.amazonaws.com/prod/workshopHelloFunction', true);
  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {//Call a function when the state changes.
      if(xhr.readyState == XMLHttpRequest.DONE) {
          console.log(xhr.status, xhr.responseText);
      }
  }
  xhr.send(JSON.stringify({key1: 'value1', key2: 'value2', key3: 'value3'}));
}

$(document).ready(function () {


    setTimeout(function () {
        var btn = document.body.querySelector('div.T-I.J-J5-Ji.T-I-KE.L3')
        console.log(btn)
        btn.addEventListener("click", function () {
          console.log("hai cliccato \"scrivi un messaggio\"")

          var MESSAGE = ''
          const intervalId = setInterval(function () {
            const bodyInput = document.querySelector('input[name=body]')
            // se Chiudo la finestra del messaggio questo non esiste.
            if (!bodyInput) {
              clearInterval(intervalId)
            }
            var msg = document.querySelector('input[name=body]').value.replace(/<[^>]*>?/g, '').replace(/&\w+;/g, '')

            if(msg !== MESSAGE) {
              MESSAGE = msg

              const userEmail = document.body.innerHTML.match(/(\S+)@(\w+).(\w+)/)[0]
              var bodySize = msg.length
              console.log({ userEmail, bodySize})

              createPopUp('Hai considerato l\'utilizzo di slack? Provalo!!')
              sendNotification()

            }

          },1)

        })

    }, 2000)
})
