import createBox from 'blackbox.js'

export const counterBox = createBox({
  counter: 0,
})

export const counterMutations = {
  increment() {
    counterBox.set((state) => {
      state.counter++
      return state
    })
  },
  decrement() {
    counterBox.set((state) => {
      state.counter--
      return state
    })
  },
}
