class CrewMember {
  constructor(position, currentShip = 'Looking for a Rig'){
    this.position = position
    this.currentShip = currentShip
  }
  engageWarpDrive(){
    if (this.currentShip != 'Looking for a Rig' && this.position === 'Pilot') {
      return 'engaged'
    }
    else {
      return 'had no effect'
    }
  }
  setsInvisibility(){
    if (this.currentShip != 'Looking for a Rig' && this.position === 'Defender') {
      return this.currentShip.cloaked = true
    }
    else {
      return 'had no effect'
    }
  }
  chargePhasers(){
    if (this.currentShip != 'Looking for a Rig' && this.position === 'Gunner') {
      return this.currentShip.phasersCharged = true
    }
    else {
      return 'had no effect'
    }
  }
}
