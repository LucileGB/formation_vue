let Prompt = class Prompt {
  constructor(author, body, genre) {
    this.author = author;
    this.body = body;
    this.genre = genre;
  }

  pretty_format() {
    return `${this.body}, par ${this.author}`;
  }
};

let bleh = new Prompt("Loucil", "ceci est un corps", "un genre");
bleh.pretty_format();
