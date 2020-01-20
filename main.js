//The code below executes when the document is ready
$(document).ready(
  //The function below grabs the id of the button and its bind with an onclick event
    function(){
        $('#saveButton').click(
            function(){
              
                var toAdd = $('input[name=TextInput]').val();
                if (toAdd != ''){
                  $('ol').append('<li>' + toAdd + '</li>');
                }
                else{
                  alert("To Do Field cannot be empty")
                }
                 
            });
       
       $("input[name=TextInput]").keyup(function(event){
          if(event.keyCode == 13){
            $("#saveButton").click();
          }    
      });
      
      //The section below execute when the to-do's item saved is double click which makes saved item deletes immediately
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      //This section below clear the input box immediately the to-do is added
      $('input').focus(function() {
        $(this).val('');
      });
      
      //This section below sorts all the to-do's added
      $('ol').sort();  
      
    }
);