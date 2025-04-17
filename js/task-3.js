class StringBuilder {
  #value;
  constructor (value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value = this.#value.padEnd(this.#value.length + str.length, str);
    // console.log(this.#value.length);
    // console.log(str.length);
  }
  padStart(str) {
    this.#value = this.#value.padStart(this.#value.length + str.length, str);
    // console.log(this.#value.length);
    // console.log(str.length);
  }
  padBoth(str) {
    this.#value = str.concat(this.#value, str);
    // this.#value = this.#value.padBoth(this.#value.length + 2 * str.length, str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="