function homeCtrl () {
  this.message = 'Hello this'
  this.address = '3608 Sperry Ave.'
  this.addresses = []

  this.clickIt = function () {
    this.message = this.message === 'New Message'
      ? 'Hello this'
      : 'New Message'
  }

  this.addAddress = function () {
    if (this.address) {
      this.addresses.push(this.address);
    } else {
      alert('No address');
    }

    this.address = ''
  }
}

export { homeCtrl }
