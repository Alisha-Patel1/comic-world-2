AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["captain-aero", "outer-space", "spiderman", "superman"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      this.el.addEventListener("mouseleave", () => {
        const {selectedItemId} = this.data
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`)
          const id = el.getAttribute("id")
          if (id == selectedItemId) {
              el.setAttribute("material", {
              color: "#0077cc",
              opacity: 1,
            })
          }
        }
      })
    },
  });
  