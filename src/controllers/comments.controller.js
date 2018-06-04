class CommentsController {
    constructor() {
      this.$addCommentForm = $('.add-comment');
 
  }

  init() {
      // kick off controller from here
      this.addCommentFormListener();
  }

    addCommentFormListener() {


      // create comment form listener code 
      // iterates through each comment form and adds an eventlistener to trigger
      // a function on form submit
     this.$addCommentForm.each(function()
     {

            // adds an eventlistener to trigger a function on form submit
         $(this).bind("submit",
            function (event) {
                event.preventDefault();
                // this.id will show "form"
                var source = event.target || event.srcElement;
            
                // should grab the imageId + comment 
                // and create a new Comment with those arguments
                var commentContent = source.elements[0].value;
				source.elements[0].value=""
                var imageId = source.getAttribute("data-id");
                var commentObject = new Comment(commentContent, imageId);
        
                // execute the render function on that found image object
                // to append the new comment
                commentsController.render(commentObject)
            });
      });

      }

    // selects the appropriate `ul` for this comment to be added to
    // appends the new comment element to this `ul`
      render(commentObject)
      {
          $("#comments-" + commentObject.imageId).append(commentObject.commentEl());

      }
  }

