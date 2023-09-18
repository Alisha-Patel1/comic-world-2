AFRAME.registerComponent("poster", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "captain-aero",
          title: "Captain Aero",
          url: "./assets/posters/captain-aero-poster.jpg",
        },
        {
          id: "outer-space",
          title: "Outer Space",
          url: "./assets/posters/outer-space-poster.jpg",
        },
  
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./assets/posters/spiderman-poster.jpg",
        },
        {
          id: "superman",
          title: "Superman",
          url: "./assets/posters/superman-poster.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item)
        borderEl.appendChild(thumbNail)
       
        // Title Text Element
        const titleEl = this.createTitleEl(position, item)
        borderEl.appendChild(titleEl)
        
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function(position, id){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id", id)
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {primitive: "ring", radiusInner: 9, radiusOuter: 10})
      entityEl.setAttribute("position", position)
      entityEl.setAttribute("material", {color: "#0077cc", opacity: 1})
      entityEl.setAttribute("cursor-listener", {})
      return entityEl
    },
  
    createThumbNail: function(item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {primitive: "circle", radius: 9})
      entityEl.setAttribute("material", {src: item.url})
      return entityEl
    },
  
    createTitleEl: function(position, item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("text", {font: "exo2bold", align: "center", width: 70, color: "#e65100", value: item.title})
      entityEl.setAttribute("visible", true)
      const elPosition = position
      elPosition.y = -20
      entityEl.setAttribute("position", elPosition)
      return entityEl
    },
  });
  
  