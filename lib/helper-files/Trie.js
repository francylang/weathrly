import Node from './Node';

export default class Trie {
  constructor() {
    this.root = null;
    this.wordCount = 0;
  }

  populate(cities) {
    const citiesArray = cities.data;
    citiesArray.forEach(city => {
      this.insert(city);
    });
  }

  insert(string) {
    if (!this.root) {
      this.root = new Node();
    }

    let currentNode = this.root;

    [...string.toLowerCase()].forEach((letter, index, array) => {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];
      if (index === array.length - 1) {
        currentNode.isWord = true;
      }
    });

    this.wordCount++;
  }

  count() {
    return this.wordCount;
  }

  suggest(inputString) {
    let suggestionsArray = [];

    if (!inputString) {
      return 'letters please';
    }

    let currentNode = this.findNode(inputString);

    if (!currentNode) {
      return '';
    }

    if (currentNode.isWord) {
      suggestionsArray.push([inputString.toLowerCase(), currentNode.frequency])
    }
    let output = this.findChildrenWords(inputString, currentNode, suggestionsArray);

    return this.prepareOutput(output);
  }

  findNode(string) {
    let currentNode = this.root;

    [...string.toLowerCase()].forEach((letter) => {
      if (currentNode !== undefined) {
        currentNode = currentNode.children[letter]
      }
    });

    return currentNode;
  }

  findChildrenWords(string, currentNode, suggestionsArray) {
    let keys = Object.keys(currentNode.children);

    keys.forEach((letter) => {
      let completeWord = string.toLowerCase() + letter;

      if (currentNode.children[letter].isWord) {
        suggestionsArray.push( {word: completeWord, frequency: currentNode.children[letter].frequency, mostRecent: currentNode.children[letter].mostRecent} );
      }
      completeWord = this.findChildrenWords(completeWord, currentNode.children[letter], suggestionsArray);
    });
    return suggestionsArray;
  }

  prepareOutput(array) {
    return array.sort((a, b) => {
      return b.frequency - a.frequency || b.mostRecent - a.mostRecent
    })
    .map(object => object.word)
    .slice(0, 10);
  }

  select(selection) {
    let currentNode = this.findNode(selection);

    currentNode.mostRecent = Date.now()
    currentNode.isWord ? currentNode.frequency++ : 0;
  }
}
