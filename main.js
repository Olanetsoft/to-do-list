$(document).ready(
    function(){
        $('#saveButton').click(
            function(){
                var toAdd = $('input[name=TextInput]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
            });
       
       $("input[name=TextInput]").keyup(function(event){
          if(event.keyCode == 13){
            $("#saveButton").click();
          }         
      });
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
      $('ol').sortable();  
      
    }
);