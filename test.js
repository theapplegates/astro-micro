// Import the Cloudinary class.
import { Cloudinary } from "@cloudinary/url-gen";

// Import any actions and qualifiers required for transformations.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
	cloudName: 'paulapplegate-com'
  }
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'fhkmx728oyf5o4brdfgr'.
const myImage = cld.image('fhkmx728oyf5o4brdfgr');

// Apply the transformation.
myImage
  .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
  .roundCorners(byRadius(20));    // Round the corners.

// Render the image in an 'img' element.
const imgElement = document.createElement('img');
document.body.appendChild(imgElement);
imgElement.src = myImage.toURL();