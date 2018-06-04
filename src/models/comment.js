// create Comment class here

// comment model

class Comment {

    // should initialize with an id, image object (findImage) and commentContent 
    // (the actual text of the comment)

    constructor(comment, imageId)
    {
        
        this.id = this.constructor.comments.length;
        this.commentContent = comment; // actual text of comment
        this.imageId = imageId; // image id of image
        this.image = this.findImage(imageId);   
        // should save new comment to Comment.all property
        this.constructor.comments.push(this);
    }
 
    // given an`int` for an image id, returns the image object with that id
   
    findImage(ImageId)
    {
  
        for (var i = 0; i < Image.all.length;i++) {

           var img = Image.all[i];

           if (ImageId == img.id) {
         
                // before return - adds current comment to image's comments property
               img.comments.push(this);

                return img;
            }
            
        }
        return null;
        }
 
    // returns a string of html
    // html has an`li` tag with an`id` field and shows the comment
    commentEl()
        {
        return "<li id = '" + this.id + "' > " + this.commentContent + "</li>";
        }
 
    // should return all of the comment objects in an array
    // a property of the Comment class

 
    all()
        {
            return this.constructor.comments;
        }

 
    }


Comment.comments = [];


   
