//farm animals and their noises

function commandCopy(options) {
    const char = {
      animal: options.animal,
      noise: options.noise,
    }
  
    const actions = []
    const words = []
  
    return {
      getOption(key) {
        return char[key]
      },
      getNoiseMade() {
        return actions
      },
      getAnimalType() {
        return words
      },
      do(actions) {
        console.log(`This animal is a "${actions.animal}" and it says ${actions.noise} (${actions.type})`)
        actionsDone.push(actions)
      },
      speak(noise) {
        console.log(noise)
        noiseMade.push(...noise)
      },
    }
  }