#!/usr/bin/node
/* 
A class Rectangle that defines rectangle
*/
class Rectangle {

    // initialize an instance with these values
    constructor(w, h) {
      if (w && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        return 'Rectangle {}'
      }
    }
  
    print() {
      for (let i = 1; i <= this.height; i++) {
        const rect_X = 'X'.repeat(this.width);
        console.log(rect_X);
      }
    }
    rotate() {
        const newWidth = this.width
        this.width = this.height
        this.height = newWidth
    }
    double() {
        this.width *= 2
        this.height *= 2
    }
  }
  
  module.exports = Rectangle;