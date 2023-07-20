let images = [
    {
      owner: 'Njoki',
      imageurl: "https://images.pexels.com/photos/17651360/pexels-photo-17651360.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      price: 700
    },
    {
      owner: 'mark',
      imageurl: "https://images.pexels.com/photos/15767257/pexels-photo-15767257/free-photo-of-a-woman-standing-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      price: 1000
    },
    {
      owner: 'Jane',
      imageurl: "https://images.pexels.com/photos/13728002/pexels-photo-13728002.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      price: 1180
    },
    {
        owner: 'Joy',
        imageurl: "https://images.pexels.com/photos/17429845/pexels-photo-17429845/free-photo-of-look.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        price: 2000
      }
  ];
  
  for (image of images) {
    console.log(image);
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <img src='${image.imageurl}' alt="art of my gallery">
      <h4>${image.owner}</h4>
      <p>kshs ${image.price}</p>
    `;
    let parentContainer = document.getElementById("imageContainer");
    parentContainer.appendChild(newDiv);
  }
  