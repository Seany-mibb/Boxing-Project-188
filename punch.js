AFRAME.registerComponent("punch", {
    init: function () {
      this.handLeft = document.querySelector("#handL");
      this.camera = document.querySelector("#camera");
  
      window.addEventListener("keydown", this.handleKeyPress.bind(this));
    },
  
    handleKeyPress: function (e) {
      if (e.key === "z") {
        // Calculate the updated position and rotation of the hand
        const cameraPosition = this.camera.getAttribute("position");
        const cameraRotation = this.camera.getAttribute("rotation");
  
        const handPosition = new THREE.Vector3(
          cameraPosition.x,
          cameraPosition.y - 0.005,
          cameraPosition.z
        );
  
        const handRotation = new THREE.Euler(
          THREE.Math.degToRad(cameraRotation.x),
          THREE.Math.degToRad(cameraRotation.y + 90),
          THREE.Math.degToRad(cameraRotation.z)
        );
  
        // Update the position and rotation of the hand using object3D
        this.handLeft.object3D.position.copy(handPosition);
        this.handLeft.object3D.rotation.copy(handRotation);
      }
    }
  });
  