 // width to resize large images to
      var maxWidth=152;
      // height to resize large images to
      var maxHeight=229;
      // valid file types
      var fileTypes=["bmp","gif","png","jpg","jpeg"];
      // the id of the preview image tag
      var outImage="previewField";
	  
      // what to display when the image is not valid
      var defaultPic="../images/fixing-exe-errors.jpg";
	   //alert(fil.value);
      /***** DO NOT EDIT BELOW *****/
	  
      function preview(what){
      var source=what.value;
	  filename = source;
	  //alert(filename);
	 // alert(source);
      var ext=source.substring(source.lastIndexOf(".")+1,source.length).toLowerCase();
      for (var i=0; i<fileTypes.length; i++){
	  if (fileTypes[i]==ext){
	  break;
	  }
	  }
      globalPic=new Image();
      if (i<fileTypes.length){
	  

	  try{
	  globalPic.src=what.files[0].getAsDataURL();
	  alert(what.files[0].getAsDataURL());
	  filename=what.files[0].getAsDataURL();
	  }catch(err){
	  globalPic.src=source;
	  filename=source;
	  }
	  }else {
      globalPic.src=defaultPic;
      alert("In Valid File was Selected Kindly Select only Image File");
      }
      setTimeout("applyChanges()",200);
      }
	  
      var globalPic;
	  var filename;
      function applyChanges(){
      var field=document.getElementById(outImage);
	  var field1=document.getElementById("imageName");
      var x=parseInt(globalPic.width);
      var y=parseInt(globalPic.height);
      if (x>maxWidth) {
      y*=maxWidth/x;
      x=maxWidth;
      }
      if (y>maxHeight) {
      x*=maxHeight/y;
      y=maxHeight;
      }
      field.style.display=(x<1 || y<1)?"none":"";
      field.src=globalPic.src;
      field.width=x;
      field.height=y;
	  field1.value=filename;
      }