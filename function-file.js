Office.initialize = reason => {

};

function showError(error) {
  Office.context.mailbox.item.notificationMessages.replaceAsync('addin-error', {
    type: 'errorMessage',
    message: error
  }, function(result) {
  });
}

function runDialogue(event) {
  try {
    Office.context.mailbox.item.body.getAsync("text", function(result) {
      var lines = result.value.split('\n');
      for (var i = 0; i < lines.length; i++) {
        if (lines[i].startsWith(">"))
          lines[i] = ">" + lines[i];
        else
          lines[i] = "> " + lines[i];
      }
      var new_reply = lines.join('\n');
      console.log("OutlookDialogue log: " + new_reply);
      Office.context.mailbox.item.body.setAsync(new_reply,
        {coercionType: Office.CoercionType.Text}, function(result) {
          event.completed();
      });
    });
  } catch (err) {
    showError(err);
    event.completed();
  }
}
