function createClone(options) {
    const char = {
      name: options.name,
      age: options.age,
    }
  
    const actions = []
    const words = []
  
    return {
      getOption(key) {
        return char[key]
      },
      getActionsDone() {
        return actions
      },
      getWordsSpoken() {
        return words
      },
      do(actions) {
        console.log(`Clone "${actions.name}" is working on improving: ${actions.name} (${actions.type})`)
        actionsDone.push(actions)
      },
      talk(words) {
        console.log(words)
        wordsSpoken.push(...words)
      },
    }
  }